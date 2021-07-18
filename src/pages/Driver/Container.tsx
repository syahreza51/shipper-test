import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import dayjs from 'dayjs'

import { TOTAL_DATA } from '@/helpers/constants/data'
import { UserItemState } from '@/redux/ducks/user'
import { filterData } from '@/utils/filterData'

import Driver, { Props } from './Driver'
import { PropsFromRedux } from './Action'

const PER_PAGE = 5

function DriverContainer({ dispatchUserFetch, user }: PropsFromRedux) {
  const history = useHistory()
  let { search } = useLocation()
  const query = new URLSearchParams(search)
  const page = query.get('page')
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    dispatchUserFetch(TOTAL_DATA)
  }, [dispatchUserFetch])

  const processData = useMemo(() => {
    let dataUsers = []
    const convertData = user.data.map((el: UserItemState) => ({
      ...el,
      dob: dayjs(new Date(el.dob)).format('DD-MM-YYYY')
    }))
    if(!keyword) {
      dataUsers = convertData
    } else {
      dataUsers = filterData({ data: convertData, filter: keyword, ignoreKey: 'image' })
    }
    return {
      total: dataUsers.length,
      dataUsers
    }
  }, [user.data, keyword])

  const maxPage = useMemo(() => {
    return Math.ceil(processData.total / PER_PAGE)
  }, [processData.total])

  const currentPage = useMemo(() => {
    return page && !isNaN(+page) ? +page : 1
  }, [page])

  const data = useMemo(() => {
    const getIndexFrom = (currentPage - 1) * PER_PAGE
    const getIndexTo = getIndexFrom + 5

    return processData.dataUsers.slice(getIndexFrom, getIndexTo)
  }, [currentPage, processData])

  const paginationDisabled = useMemo(() => {
    let previous = false
    let next = false

    if(currentPage >= maxPage) {
      next = true
    }
    if(currentPage <= 1) {
      previous = true
    }

    return {
      previous,
      next
    }
  }, [currentPage, maxPage])

  const handleNextPage = () => {
    if(!paginationDisabled.next) {
      const newPage = currentPage + 1
      history.push(`?page=${newPage}`)
    }
  }

  const handlePreviousPage = () => {
    if(!paginationDisabled.previous) {
      const newPage = currentPage - 1
      history.push(`?page=${newPage}`)
    }
  }

  const handleChangeKeyword = (e: FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value)
    history.push('/')
  }

  const props: Props = {
    data,
    handleChangeKeyword,
    handleNextPage,
    handlePreviousPage,
    isError: user.isError,
    isLoading: user.isLoading,
    keyword,
    maxPage,
    page: currentPage,
    paginationDisabled
  }

  return <Driver {...props} />
}

export default DriverContainer

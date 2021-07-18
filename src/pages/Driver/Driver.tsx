import { FormEvent ,memo } from 'react'
import styled from '@emotion/styled/macro'
import { Search, Plus, ChevronRight, ChevronLeft } from 'react-feather'
import ScrollContainer from 'react-indiana-drag-scroll'


import { colors, media, spacing } from '@/helpers/shared'
import { UserItemState } from '@/redux/ducks/user'
import PageHeader from '@/components/PageHeader'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import Notif from '@/components/Notif'

import DriverItem from './DriverItem'

const ContainerDriver = styled(ScrollContainer)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: ${spacing.spacing5};
  padding-right: 30px;
  margin-left: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${media.small}) {
    flex-direction: column
  }
`
const Container = styled.div`
  padding: 30px;
`
const ContainerPagination = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 30px;
`

interface PaginationProps {
  isDisabled: boolean
}
const Pagination = styled.span<PaginationProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ isDisabled }) => isDisabled ? colors.grey : colors.black};
  & svg {
    margin: 0 6px
  }
`
const PaginationDesc = styled.p`
  color: ${colors.grey};
  text-align: center;
  margin: 15px 0;
  font-size: 12px;
`
const LabelButton = styled.span`
  @media (max-width: ${media.tablet}) {
    display: none;
    & ~ svg {
      margin-left: 0;
    }
  }
  @media (max-width: ${media.small}) {
    display: inline-block;
    & ~ svg {
      margin-left: ${spacing.spacing3};
    }
  }
`

interface PaginationDisabledProps {
  previous: boolean
  next: boolean
}

export interface Props {
  data: UserItemState[]
  handleChangeKeyword: (e: FormEvent<HTMLInputElement>) => void
  handleNextPage: () => void
  handlePreviousPage: () => void
  isError: boolean
  isLoading: boolean
  keyword: string
  maxPage: number
  page: number
  paginationDisabled: PaginationDisabledProps
}

function Driver({
  data,
  handleChangeKeyword,
  handleNextPage,
  handlePreviousPage,
  isError,
  isLoading,
  keyword,
  maxPage,
  page,
  paginationDisabled
}: Props) {
  return (
    <>
      <Container>
        <PageHeader title="Driver Management" description="Daftar Driver yang bekerja dengan Anda">
          <TextField
            placeholder="Cari Driver"
            icon={<Search />}
            onChange={handleChangeKeyword}
            value={keyword}
          />
          <Button type="button">
            <LabelButton>Tambah Driver</LabelButton>
            <Plus size="14" />
          </Button>
        </PageHeader>
      </Container>
      {isError ?
        (
          <Container>
            <Notif type="error" message="Ada kesalahan dalam proses data" />
          </Container>
        ) :
        <>
          {isLoading && <Loading /> }
          {!isLoading && data.length > 0 && (
            <>
              <ContainerDriver>
                {data.map((el: UserItemState) => <DriverItem key={el.username} {...el} />)}
              </ContainerDriver>
              <ContainerPagination>
                <Pagination onClick={handlePreviousPage} isDisabled={paginationDisabled.previous}>
                  <ChevronLeft size="16" /> Previous Page
                </Pagination>
                <Pagination onClick={handleNextPage} isDisabled={paginationDisabled.next}>
                  Next Page <ChevronRight size="16" />
                </Pagination>
              </ContainerPagination>
              <PaginationDesc>{page} of {maxPage}</PaginationDesc>
            </>
          )}
          {!isLoading && data.length === 0 && keyword.length > 0 && (
            <Container>
              <Notif type="warning" message={`Pencarian "${keyword}" tidak ditemukan`} />
            </Container>
          )}
        </>
      }
    </>
  )
}

export default memo(Driver)

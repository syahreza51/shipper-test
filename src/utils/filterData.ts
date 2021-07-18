interface FilterDataProps {
  data: any
  filter: string
  ignoreKey: string
}

export const filterData = ({ data, filter, ignoreKey = '' }: FilterDataProps) => {
  const filterData = data.filter((obj : any) => {
    let flag = false
    let tempValueIgnored = ''
    if(ignoreKey) {
      tempValueIgnored = obj[ignoreKey]
      delete obj[ignoreKey]
    }
    Object.values(obj).forEach((value : any) => {
      if(String(value.toString().toLowerCase()).indexOf(filter.toLowerCase()) > -1) {
        flag = true
        return
      }
    })
    if(ignoreKey) {
      obj[ignoreKey] = tempValueIgnored
    }
    return flag ? obj : 0
  })
  return filterData
}

import { useEffect, useState } from 'react'

const useFilter = ({ data, value }) => {
  const [dataRequest, setdataRequest] = useState(data)
  const [valueFilter, setvalueFilter] = useState(value)
  const [dataFilter, setdataFilter] = useState()

  useEffect(() => {
    if (valueFilter && valueFilter !== '' && dataRequest) {
      const filterData = dataRequest.filter((item) => {
        return item['tags'].includes(valueFilter.toLowerCase())
      })
      setdataFilter(filterData)
    } else {
      setdataFilter(dataRequest)
    }
  }, [data, valueFilter, setdataRequest, dataRequest])

  return { setvalueFilter, dataFilter, setdataRequest }
}

export { useFilter }

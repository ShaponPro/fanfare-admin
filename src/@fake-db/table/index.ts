// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types Imports
import { DataGridRowType } from 'src/@fake-db/types'

const data: DataGridRowType[] = [
  {
    id: 1,
    videoId: 123456,
    thumbnail: 'thambnail',
    videoTitle: 'this is title this is video title this is video title',
    fileSize: 123456,
    videoLength: 1254,
    userName: 'Nazmul Islam',
    userId: 12345,
    fanfareId: 123456,
    userCreatedDate: '6/25/2022',
    uploadDate: '6/25/2022',
    uploadTime: '1:05:11',
    uploadDays: 410,
    uploadedCountry: 'Bangladesh',
    uploadedIp: '103.103.34.34',
  },        
  {
    id: 2,
    videoId: 123456,
    thumbnail: 'thambnail',
    videoTitle: 'this is title',
    fileSize: 123456,
    videoLength: 1254,
    userName: 'Nazmul Islam',
    userId: 12345,
    fanfareId: 123456,
    userCreatedDate: '6/25/2022',
    uploadDate: '6/25/2022',
    uploadTime: '1:05:11',
    uploadDays: 410,
    uploadedCountry: 'Bangladesh',
    uploadedIp: '103.103.34.34',
  },        
]

mock.onGet('/api/table/data').reply(config => {
  const { q = '', column = '', sort = '' } = config.params
  const queryLowered = q.toLowerCase()

  // @ts-ignore
  const dataAsc = data.sort((a, b) => (a[column] < b[column] ? -1 : 1))

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    (item: DataGridRowType) =>
      item.id.toString().toLowerCase().includes(queryLowered) ||
      item.thumbnail.toLowerCase().includes(queryLowered) ||
      item.videoTitle.toLowerCase().includes(queryLowered)

      //item.start_date.toLowerCase().includes(queryLowered)
  )

  return [
    200,
    {
      allData: data,
      total: filteredData.length,
      data: filteredData
    }
  ]
})

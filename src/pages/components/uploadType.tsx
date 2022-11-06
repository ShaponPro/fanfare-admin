
import React, { useState } from 'react'

import UploadTypeComponent from 'src/components/UploadTypeComponent'

const options = [
  {
    key: 'user',
    title: 'On behalf of User'
  },
  {
    key: 'brand',
    title: 'On behalf of Brand'
  },
  {
    key: 'tutorial',
    title: 'Tutorial'
  },
  {
    key: 'youtube_crawler',
    title: 'Youtube Crawler'
  }
]

const UploadType = () => {

  const [value, setValue] = useState<string>("user")

  const handleChange = (value: string) => {
    console.log('value', value)
    setValue(value);
  }

  return (
      <div style={{width: '40%'}}>
        <UploadTypeComponent
          selected={value}
          onChange={handleChange}
          options={options}
          style={{}}
        />
      </div>
  )
}

export default UploadType
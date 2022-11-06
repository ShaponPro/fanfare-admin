// ** MUI Imports

import SearchComponent from 'src/components/SearchComponent'
import TabbarComponent from 'src/components/TabbarComponent'
import React from 'react';
import FilterComponent from '../filterComponent/filterComponent'

const home = () => {
  return (
    <div>
      <TabbarComponent />
      <SearchComponent placeholder='search and filter' value='video' />
      <FilterComponent/>
    </div>
  )
}

export default home
// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import usePagination from '@mui/material/usePagination'

import { GridToolbarContainer } from '@mui/x-data-grid'

// ** Icons Imports

// ** Data

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
}

const StyledGridToolbarContainer = styled(GridToolbarContainer)({
  p: 2,
  pb: 0,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex'
})

function UsePagination() {
  const { items } = usePagination({
    count: 10
  })

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            children = (
              <button
                type='button'
                style={{
                  border: 'none',
                  outline: 'none',
                  background: '#F3F3F4',
                  color: '#009EFA',
                  fontWeight: selected ? 'bold' : undefined
                }}
                {...item}
              >
                {page}
              </button>
            )
          } else {
            children = (
              <button type='button' {...item} style={{ border: 'none', outline: 'none', color: '#009EFA', background: '#F3F3F4',}}>
                {type}
              </button>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </List>
    </nav>
  )
}

const MainGridFooter = (props: Props) => {
  //   const [value, setValue] = useState<string>('')
  //   console.log(value)

  return (
    <StyledGridToolbarContainer>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Typography variant={'subtitle2'}>Showing 1 to 20 of 167,328 entries</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <FormControl sx={{ m: 2 }} size='small'>
          <UsePagination />
        </FormControl>

        jump to
      </Box>
    </StyledGridToolbarContainer>
  )
}

export default MainGridFooter

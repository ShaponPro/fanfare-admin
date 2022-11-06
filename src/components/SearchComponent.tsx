// ** React Imports
import React, { ChangeEvent, useState } from 'react'

import styled from '@emotion/styled'

// ** Icons Imports
import SearchIcon from '@mui/icons-material/Search'

// ** MUI Imports
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'

const SearchContainer = styled.div({})

type Props = {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  style?: React.CSSProperties
}

const SearchComponent = (props: Props) => {
  // ** State
  const [value, setValue] = useState<string>(props.value || '')

  /**
   * Handle OnChange event for search input
   *
   * @parms event ChangeEvent<HTMLInputElement>
   *
   * @returns void
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (props.onChange) props.onChange(event.target.value || '')
  }

  return (
    <SearchContainer>
      <OutlinedInput
        value={value}
        defaultValue={props.value}
        placeholder={props.placeholder}
        style={{
          color: 'rgba(22, 31, 41, 0.25)',
          width: '100%',
          fontWeight: 400,
          fontSize: '12px !impportant',
          padding: '10px 20px',
          outline: 'none',
          height: '36px',
          background: '#FFFFFF',
          border: '1px solid rgba(22, 31, 41, 0.5)',
          borderRadius: '20px',

          ...props.style
        }}
        onChange={handleChange}
        aria-describedby='icons-search-helper-text'
        endAdornment={
          <InputAdornment style={{ width: '16px' }} position='end'>
            <SearchIcon />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'Search'
        }}
      />
    </SearchContainer>
  )
}

export default SearchComponent

SearchComponent.defaultProps = {
  placeholder: 'Search',
  value: '',
  onChange: () => null,
  style: {}
}

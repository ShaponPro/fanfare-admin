import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SearchComponent from 'src/components/SearchComponent'
import TextInputField from 'src/components/Textfield'

const typographyStyle = {
  fontSize: '16px',
  padding: '10px 20px',
  fontWeight: '600',
  align: 'left',
  color: '#161F29'
}

export default function YoutubeCrawler() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ padding: '20px 20px', display: 'grid', width: '100%' }}>
        <Grid container xs={12} sm={12}>
          <Grid item xs={3.5} sm={3.5} md={1.75}>
            <Typography style={typographyStyle}>Upload Type</Typography>
          </Grid>
          <Grid item xs={8.5} sm={8.5} md={10.25}>
            <TextInputField title='small' defaultValue='Youtube Crawler' disabled={true}  />
          </Grid>
        </Grid>
      </Box>
      <div style={{display: 'flex',
                  justifyContent: 'center',
                  padding: '20px'}}>
        <SearchComponent
          style={{
            width: '500px',
            height: '52px',
            boxShadow: '0.5px 1px 5px rgba(22, 31, 41, 0.2)',
            borderRadius: '25px',
            padding: '15px 20px'
          }}
        />
      </div>
    </>
  )
}

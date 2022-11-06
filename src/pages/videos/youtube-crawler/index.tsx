// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import { useQuery } from '@apollo/client'

import { GET_VIDEO_LIST } from '../../../graphql/Queries'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
import ListComponent from 'src/components/ListComponent'

import {FilterComponent}  from 'src/components/FilterComponent'
import data from 'src/@fake-db/components/data'

const YoutubeCrawler = () => {   
  
  const { error, loading, data } = useQuery(GET_VIDEO_LIST, {
    variables:{ 
      "endIndex": 10,
      "startIndex": 1
  }
  });

  console.log(data);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  console.log('data', data)

  const columns =[
    {
      field:"_id", header:"Video ID"
    }, 
    {
      field:"title", header:"Video Title"
    }, 
    {
      field:"activity_updated", header:"Last Activity Time"
    }, 
    {
      field:"short_id", header:"Short ID"
    }, 

  ]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: 'bold' }}>
              Youtube Crawler
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='subtitle1'>
                <Box
                  sx={{
                    fontWeight: 'bold',
                    background: '#ECF8FF',
                    padding: '22px 10px',
                    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  List
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FilterComponent />
            </Grid>
            <Grid item xs={12} sm={12}>
              <ListComponent />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  )
}

export default YoutubeCrawler

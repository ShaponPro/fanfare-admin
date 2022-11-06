/* eslint-disable @typescript-eslint/no-unused-vars */

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components

import ListComponent from 'src/components/ListComponent'
import {FilterComponent} from 'src/components/FilterComponent';

import { useQuery } from '@apollo/client'

import { GET_VIDEO_LIST } from '../../../../graphql/Queries' 


const AnalyticsCongratulations = () => {

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

   /**
   * Handle on tab change
   */
  const filterChangeHandler = (key: string) =>{
    console.log('key', key)
  }


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
    {
      field:"likes_count", header:"Total Likes"
    }, 
    {
      field:"comments_count", header:"Total Comments"
    },  
    {
      field:"views_count", header:"Total Views"
    } ,

  ]

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
              <Box component='span' sx={{ fontWeight: '700', fontSize:'36px' }}>
                Youtube Crawler
              </Box>
          </Typography>
        </Grid>
      </Grid>
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <Box style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '13px 20px',
            width: '100%',
            height: '66px',
            position: 'relative',
            background: '#ECF8FF',
            boxShadow: '1px 2px 3px rgba(22, 31, 41, 0.2)'
          }}>
            <Typography style={{textTransform:'none', fontSize:'16px', fontWeight:'600' }}>List Videos</Typography>
          </Box>
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

export default AnalyticsCongratulations

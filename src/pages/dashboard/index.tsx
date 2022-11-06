// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
// import TabbarComponent from 'src/components/TabbarComponent'
// import ListComponent from 'src/components/ListComponent'
// import {FilterComponent} from 'src/components/FilterComponent';

// const tabs = [
//   {
//     key: "regular",
//     title: "Regular",
//   },
//   {
//     key: "monetization",
//     title: "Active Monetization",
//   },
//   {
//     key: "trending",
//     title: "Trending",
//   },
//   {
//     key: "customized",
//     title: "Customized",
//   },
// ];

const DashboardPage = () => {

   /**
   * Handle on tab change
   */
  // const tabChangeHandler = (key: string) =>{
  //   console.log('key', key)
  // }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                Dashboard
              </Box>
          </Typography>
        </Grid>
      </Grid>
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <Typography variant='h5' sx={{ mb: 4.5 }}>
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                  FanFare Bangladesh
                </Box>
            </Typography>
            <Typography>FanFare's Dashboard</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </ApexChartWrapper>
  )
}

export default DashboardPage

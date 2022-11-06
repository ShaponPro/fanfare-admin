// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** MUI IconImports
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
import SearchComponent from 'src/components/SearchComponent'

const tabs = [
  {
    key: 'upload',
    title: 'Upload Now'
  },
  {
    key: 'drafts',
    title: 'Drafts'
  }
]

const AnalyticsCongratulations = () => {
  /**
   * Handle on tab change
   */
  const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mb: 4.5 }}>
            <Box component='span' sx={{ fontWeight: 'bold' }}>
              Video Analytics
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
          <Grid sx={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
            <Grid item xs={8} sm={12} sx={{ width: '400px' }}>
              <SearchComponent />
            </Grid>
            <Grid item xs={4} sm={12}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(22, 31, 41, 0.5)',
                  borderRadius: '20px',
                  width: '200px',
                  height: '36px',
                  padding:'10px',
                }}
              >
                <Box className='actions-left'>
                  <CalendarMonthIcon />
                </Box>
                <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowDropDownIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} sm={12}>
              <Typography variant='subtitle1' sx={{ mt: 4.5 }}>
                <Box
                  sx={{
                    fontWeight: 'bold',
                    background: '#ECF8FF',
                    padding: '22px 10px',
                    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Video Analytics
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations

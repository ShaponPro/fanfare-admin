// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import Button, { ButtonProps } from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'

import { useQuery } from '@apollo/client'

import { GET_VIDEO_LIST } from '../../../graphql/Queries'

// ** Icons Imports
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'

// ** Styled Component Import
import { styled, useTheme } from '@mui/material/styles'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Components
import TabbarComponent from 'src/components/TabbarComponent'
import ListComponent from 'src/components/ListComponent'
import ButtonComponent from 'src/components/ButtonComponent'

//** Style Components */
const BrowseBox = styled(Grid)<GridProps>(({ theme }) => ({
  borderRadius: '0',
  width: '100%',
  height: '36px',
  padding: '5px',
  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
}))

const AddButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: '100%',
  height: '36px',
  background: '#009EFA',
  borderRadius: '3px',
  border: 'none',
  padding: '12px, 30px, 12px, 30px',
  color: 'white'
}))

const radioBtnContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: '.15s ease-in-out',
  margin: '0px 0px 0px 10px',
  fontSize: '12px'
}

const StyledSelect = styled(Select)({
  borderRadius: '0px',
  background: 'white',
  height: '36px',
  boxShadow: 'inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)',
  width: '160px'
})

const tabs = [
  {
    key: 'video clips',
    title: 'Video Clips'
  },
  {
    key: 'image',
    title: 'Image'
  },
  {
    key: 'text',
    title: 'Text'
  }
]

const button =[
  {
    key: 'active',
    title: 'Active'
  }
]

const AnalyticsCongratulations = () => {
  /**
   * Handle on tab change
   */
  const tabChangeHandler = (key: string) => {
    console.log('key', key)
  }

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
              Content Restrictions
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ position: 'relative' }}>
        <CardContent sx={{ p: theme => `${theme.spacing(6.75, 7.5)} !important` }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12}>
              <TabbarComponent options={tabs} activekey={'trending'} onChange={tabChangeHandler} />
            </Grid>
            <Grid item xs={12} sm={12}></Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Grid>
                {' '}
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  Browser
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid item xs={12}>
                <BrowseBox>
                  <InputBase placeholder=' Browse' style={{ fontSize: '14px' }} />
                </BrowseBox>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid>
                <AddButton>
                  <AddCircleIcon />
                  Add
                </AddButton>
              </Grid>
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
                  List
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <br />

          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Grid>
                {' '}
                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                  Period
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} md={2}>
              <Grid>
                <FormControl sx={{ minWidth: 120 }} size='small'>
                  <StyledSelect>
                    <label style={radioBtnContainerStyle}>Today</label>
                    <label style={radioBtnContainerStyle}>Last 7 Days</label>
                    <label style={radioBtnContainerStyle}>Last 15 Days</label>
                    <label style={radioBtnContainerStyle}>Last 30 Days</label>
                    <label style={radioBtnContainerStyle}>Last 60 Days</label>
                    <label style={radioBtnContainerStyle}>Last 90 Days</label>

                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <label style={radioBtnContainerStyle}>Custom Range</label>
                      <Radio />
                    </Grid>
                  </StyledSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={4} md={1}>
              <Grid>
                <Typography variant='subtitle1' sx={{ fontWeight: '400' }}>
                  Created By
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={8} md={7}>
              <OutlinedInput
                placeholder=' Search and Filter'
                style={{
                  borderRadius: '0',
                  width: '100%',
                  height: '36px',
                  padding: '10px',
                  boxShadow: ' inset 1px 1.5px 5px rgba(22, 31, 41, 0.2)'
                }}
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
            </Grid>
          </Grid>
          <br/>
          <Grid>
            <ListComponent />
          </Grid>
        </CardContent>
      </Card>
    </ApexChartWrapper>
  )
}

export default AnalyticsCongratulations

import React from 'react'
import TextInputField from 'src/components/Textfield'
import Box from '@mui/material/Box'
import { Grid, InputAdornment, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ButtonComponent from 'src/components/ButtonComponent'

const typographyStyle = {
  fontSize: '16px',
  padding: '10px 20px',
  fontWeight: '600',
  align: 'left',
  color: '#161F29'
}

function OnBehalfUser() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }} style={{ background: '#F3F3F4', padding: '20px', display: 'grid' }}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1}>
          <Grid container xs={12} sm={12}>
            <Grid item xs={3.5} sm={3.5} md={1.75}>
              <Typography style={typographyStyle}>Upload Type</Typography>
            </Grid>
            <Grid item xs={8.5} sm={8.5} md={10.25}>
              <TextInputField title='small' defaultValue='On Behalf of User' disabled={true} style={{ width: '230px !important' }} />
            </Grid>
          </Grid>

          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Select User Name</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField
                placeholder='Search and Filter'
                endAdornment={
                  <InputAdornment style={{ width: '16px' }} position='end'>
                    <SearchIcon />
                  </InputAdornment>
                }
              />{' '}
            </Grid>
          </Grid>

          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Request Reference</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField placeholder='Type' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Upload Video</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField
                
                type='file'
                helperText='Recommended video format mp4, avi & length max 7 minutes'
              />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Upload Thumbnail</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField type='file' helperText='Recommended image format JPG,GIF or PNG' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={12}>
            <Grid item xs={3.5} sm={3.5} md={1.75}>
              <Typography style={typographyStyle}>Title</Typography>
            </Grid>
            <Grid item xs={8.5} sm={8.5} md={10.25}>
              <TextInputField placeholder='Type' helperText='Max 30 Characters' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={12}>
            <Grid item xs={3.5} sm={3.5} md={1.75}>
              <Typography style={typographyStyle}>Description</Typography>
            </Grid>
            <Grid item xs={8.5} sm={8.5} md={10.25}>
              <TextInputField placeholder='Type' helperText='Max 150 Characters' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Brand Tag</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField placeholder='Type' helperText='Only one brand tag' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              {' '}
              <Typography style={typographyStyle}>Hash Tag</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField placeholder='Type' helperText='Maximum 2 hash tags' />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Select Contest</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField
                placeholder='Select Item'
                helperText='Only one contest can be selected'
                select={true}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Tag People</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField  placeholder='Select Item' select={true} />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Tag Location</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField  placeholder='Select Item' select={true} />
            </Grid>
          </Grid>
          <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={3.5}>
              <Typography style={typographyStyle}>Who can watch this video?</Typography>
            </Grid>
            <Grid item xs={8.5}>
              <TextInputField placeholder='Select Item' select={true} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box sx={{ flexGrow: 1 }} style={{ padding: '20px 0px', display: 'flex', gap: 10, justifyContent:'flex-end'}}>
      <ButtonComponent title='Drafts' type='drafts' style={{background:'#F3F3F4 !important'}}/>
      <ButtonComponent title='Publish' type='publish' />
    </Box>
    </>
  )
}

export default OnBehalfUser

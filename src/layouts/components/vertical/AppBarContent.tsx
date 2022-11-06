// ** Icons Imports

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

// ** MUI Imports
import Box from '@mui/material/Box'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { settings } = props

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
        height: '52px',
        paddingTop: '8px',
        paddingBottom: '10px',
        paddingRight: '15px',
        paddingLeft: '15px'
      }}
    >
      <Box className='actions-left'>
        <img style={{ width: '100px', height: '29.41px' }} src='https://i.ibb.co/31K6v89/ff-logo.png' alt='' />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent

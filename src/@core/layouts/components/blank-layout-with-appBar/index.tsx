// ** Next Import

// ** Configs

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import {
  styled,
  useTheme
} from '@mui/material/styles'

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const BlankLayoutAppBar = () => {
  // ** Hooks
  const theme = useTheme()

  return <AppBar elevation={3} color='default' position='sticky'></AppBar>
}

export default BlankLayoutAppBar

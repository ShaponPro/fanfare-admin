import ListComponent from 'src/components/ListComponent'
import { Grid } from '@mui/material'

const index = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ListComponent />
        </Grid>
      </Grid>
    </div>
  )
}
export default index

import * as React from 'react'
import Grid from '@mui/material/Grid'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

interface MenuHeaderInterface {
  name: string
}

export const MenuHeader: React.FC<MenuHeaderInterface> = ({ name }) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      sx={{ boxShadow: '0px 2px 2px grey' }}
    >
      <Grid item xs={10} sx={{ padding: '24px' }}>
        <strong>{name}</strong>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          borderLeft: '2px solid rgb(240, 240, 240)',
          textAlign: 'center',
          padding: '16px'
        }}
      >
        <InfoOutlinedIcon fontSize='large'/>
      </Grid>
    </Grid>
  )
}

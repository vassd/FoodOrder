import * as React from 'react'
import Grid from '@mui/material/Grid'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import styles from './MenuHeader.module.scss'

interface MenuHeaderInterface {
  name: string
}

export const MenuHeader: React.FC<MenuHeaderInterface> = ({ name }) => {
  return (
    <Grid className={styles['menu-header']} container alignItems="center">
      <Grid item xs={9} md={10} className={styles['menu-header__title']}>
        <strong>{name}</strong>
      </Grid>
      <Grid item xs={3} md={2} className={styles['menu-header__info']}>
        <InfoOutlinedIcon fontSize="large" />
      </Grid>
    </Grid>
  )
}

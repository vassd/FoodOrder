import React from 'react'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'

export interface MenuItemInterface {
  name: string
  price: number

  currency: string
  ingredients: string[]
  category: number
}

export const MenuItem: React.FC<MenuItemInterface> = ({
  name,
  price,
  currency,
  ingredients
}) => {
  const renderNameAndIngredients = (
    name: string,
    ingredients: string[]
  ): JSX.Element => (
    <>
      <Grid container direction="column" alignItems="left">
        <Grid item sx={{ fontWeight: 'bold' }}>
          {name}
        </Grid>
        <Grid item>
          {ingredients.length > 0 ? `(${ingredients.join(', ')})` : ''}
        </Grid>
      </Grid>
    </>
  )

  return (
    <ListItem disablePadding>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{ borderBottom: '1px solid rgb(200, 200, 200)' }}
      >
        <Grid item xs={9} sx={{ padding: '24px' }}>
          {renderNameAndIngredients(name, ingredients)}
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            fontWeight: 'bold',
            textAlign: 'right',
            padding: '24px'
          }}
        >
          {`${price} ${currency}`}
        </Grid>
      </Grid>
    </ListItem>
  )
}

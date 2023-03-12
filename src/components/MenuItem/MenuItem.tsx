import React from 'react'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'

export interface MenuItemInterface {
  name: string
  price: number

  currency: string
  ingredients: string[]
  category: number
  onClick?: (name: string) => void
}

export const MenuItem: React.FC<MenuItemInterface> = ({
  name,
  price,
  currency,
  ingredients,
  onClick
}) => {
  const renderNameAndIngredients = (): JSX.Element => (
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

  const handleClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    e.stopPropagation()
    e.preventDefault()

    onClick?.(name)
  }

  return (
    <ListItem disablePadding onClick={handleClick}>
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={{
          borderBottom: '1px solid rgb(200, 200, 200)',
          cursor: 'pointer',
          '&:hover': { opacity: '0.5', backgroundColor: 'rgb(230,230,230)' }
        }}
      >
        <Grid item xs={9} sx={{ padding: '24px' }}>
          {renderNameAndIngredients()}
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

import React from 'react'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import styles from './MenuItem.module.scss'

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
        <Grid item>
          <strong>{name}</strong>
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
        className={styles['menu-item']}
      >
        <Grid
          item
          xs={9}
          className={styles['menu-item__name-ingredients-list']}
        >
          {renderNameAndIngredients()}
        </Grid>
        <Grid item xs={3} className={styles['menu-item__price']}>
          {`${price} ${currency}`}
        </Grid>
      </Grid>
    </ListItem>
  )
}

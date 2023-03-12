import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Box from '@mui/material/Box'
import { type MenuItemInterface } from 'components'
import { RestaurantContext } from 'context'
import styles from './MenuItemDetails.module.scss'

interface MenuItemDetailsInterface {
  isOpen: boolean
  item: MenuItemInterface | undefined
  onClose: () => void
}

export interface Topping {
  id: number
  name: string
  price: number
  currency: string
}

export interface Crust {
  id: number
  name: string
}

export const MenuItemDetails: React.FC<MenuItemDetailsInterface> = ({
  isOpen,
  item,
  onClose
}) => {
  const { categories, toppings, crusts } = useContext(RestaurantContext)
  const hasCrust: boolean =
    categories.find((c) => c.id === item?.category)?.hasCrust ?? false
  const hasTopping: boolean =
    categories.find((c) => c.id === item?.category)?.hasToppings ?? false

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
    e.preventDefault()

    onClose()
  }

  const renderHeader = (): JSX.Element => (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={styles['menu-item-details-header']}
    >
      <Grid
        item
        xs={2}
        className={styles['menu-item-details-header__close']}
        onClick={handleClick}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </Grid>
      <Grid item xs={10} className={styles['menu-item-details-header__title']}>
        <strong>{item?.name}</strong>
      </Grid>
    </Grid>
  )

  const renderCrust = (): JSX.Element | null =>
    hasCrust
      ? (
      <section>
        <Box className={styles['menu-item-details__content-title']}>
          <div>Crust (Required)</div>
        </Box>
        {crusts.map((crust: Crust) => (
          <Box
            className={styles['menu-item-details__content-item']}
            key={`${crust.name}_${crust.id}`}
          >
            {crust.name}
          </Box>
        ))}
      </section>
        )
      : null

  const renderTopping = (): JSX.Element | null =>
    hasTopping
      ? (
      <section>
        <Box className={styles['menu-item-details__content-title']}>
          <div>Extra Toppings</div>
        </Box>
        {toppings.map((topping: Topping) => (
          <Box
            className={styles['menu-item-details__content-item']}
            key={`${topping.name}_${topping.id}`}
          >
            <Grid container direction="row" alignItems="center">
              <Grid item xs={9}>
                {topping.name}
              </Grid>
              <Grid item xs={3} textAlign={'right'}>
                {`+${topping.price}`}
              </Grid>
            </Grid>
          </Box>
        ))}
      </section>
        )
      : null

  if (item != null) {
    return (
      <Dialog fullScreen open={isOpen}>
        {renderHeader()}
        <Box className={styles['menu-item-details__content']}>
          {item.ingredients.length > 0
            ? `(${item.ingredients.join(', ')})`
            : ''}
          {renderCrust()}
          {renderTopping()}
        </Box>
      </Dialog>
    )
  } else return null
}

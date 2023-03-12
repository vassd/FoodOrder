import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
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
      alignItems="center"
      className={styles['menu-item-details-header']}
    >
      <Grid
        item
        xs={2}
        className={styles['menu-item-details-header__close']}
        aria-label={'close dialog'}
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
        <div className={styles['menu-item-details__content-title']}>
          Crust (Required)
        </div>
        <ul className={styles['menu-item-details__content-list']}>
          {crusts.map((crust: Crust) => (
            <li
              className={styles['menu-item-details__content-item']}
              key={`${crust.name}_${crust.id}`}
            >
              {crust.name}
            </li>
          ))}
        </ul>
      </section>
        )
      : null

  const renderTopping = (): JSX.Element | null =>
    hasTopping
      ? (
      <section>
        <div className={styles['menu-item-details__content-title']}>
          Extra Toppings
        </div>
        <ul className={styles['menu-item-details__content-list']}>
          {toppings.map((topping: Topping) => (
            <li
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
            </li>
          ))}
        </ul>
      </section>
        )
      : null

  if (item != null) {
    return (
      <Dialog fullScreen open={isOpen} aria-label={'item-details-dialog'}>
        {renderHeader()}
        <section className={styles['menu-item-details__content']}>
          {item.ingredients.length > 0
            ? `(${item.ingredients.join(', ')})`
            : ''}
          {renderCrust()}
          {renderTopping()}
        </section>
      </Dialog>
    )
  } else return null
}

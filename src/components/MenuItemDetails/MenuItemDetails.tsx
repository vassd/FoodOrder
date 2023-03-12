import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Box from '@mui/material/Box'
import { type MenuItemInterface } from 'components'
import { RestaurantContext } from 'context'

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
      sx={{ boxShadow: '0px 2px 2px grey', backgroundColor: 'white' }}
    >
      <Grid
        item
        xs={2}
        sx={{
          textAlign: 'center',
          padding: '16px',
          cursor: 'pointer',
          borderRight: '2px solid rgb(200, 200, 200)'
        }}
        onClick={handleClick}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </Grid>
      <Grid item xs={10} sx={{ padding: '24px' }}>
        <strong>{item?.name}</strong>
      </Grid>
    </Grid>
  )

  const renderCrust = (): JSX.Element | null =>
    hasCrust
      ? (
      <section>
        <Box
          sx={{
            padding: '16px 0px'
          }}
        >
          <div>Crust (Required)</div>
        </Box>
        {crusts.map((crust: Crust) => (
          <Box
            sx={{
              border: '1px solid rgb(180, 180, 180)',
              backgroundColor: 'white',
              padding: '16px'
            }}
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
        <Box
          sx={{
            padding: '16px 0px'
          }}
        >
          <div>Crust (Required)</div>
        </Box>
        {toppings.map((topping: Topping) => (
          <Box
            sx={{
              border: '1px solid rgb(180, 180, 180)',
              backgroundColor: 'white',
              padding: '16px'
            }}
            key={`${topping.name}_${topping.id}`}
          >
            <Grid container direction="row" alignItems="center">
              <Grid item xs={9}>
                {topping.name}
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  textAlign: 'right'
                }}
              >
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
        <Box sx={{ padding: '16px' }}>
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

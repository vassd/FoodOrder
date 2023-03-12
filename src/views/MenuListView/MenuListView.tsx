import React from 'react'
import Box from '@mui/material/Box'
import data from 'assets/data.json'
import {
  MenuHeader,
  MenuItems,
  type Category,
  type MenuItemInterface
} from 'components'
import { RestaurantContextProvider } from 'context'

export const MenuListView: React.FC = () => {
  const restaurantName: string = data.restaurant.name
  const categories: Category[] = data.menu.categories
  const items: MenuItemInterface[] = data.menu.items

  return (
    <RestaurantContextProvider>
      <Box
        component="section"
        sx={{
          borderTop: '5px solid rgb(240, 240, 240)',
          borderBottom: '5px solid rgb(240, 240, 240)'
        }}
      >
        <MenuHeader name={restaurantName} />
        <MenuItems items={items} categories={categories} />
      </Box>
    </RestaurantContextProvider>
  )
}

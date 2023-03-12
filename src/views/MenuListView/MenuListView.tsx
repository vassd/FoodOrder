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
import styles from './MenuListView.module.scss'

export const MenuListView: React.FC = () => {
  const restaurantName: string = data.restaurant.name
  const categories: Category[] = data.menu.categories
  const items: MenuItemInterface[] = data.menu.items

  return (
    <RestaurantContextProvider>
      <Box className={styles['menu-list-view']} component="section">
        <MenuHeader name={restaurantName} />
        <MenuItems items={items} categories={categories} />
      </Box>
    </RestaurantContextProvider>
  )
}

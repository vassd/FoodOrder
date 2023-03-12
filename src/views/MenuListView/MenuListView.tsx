import React from 'react'
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
      <section className={styles['menu-list-view']}>
        <MenuHeader name={restaurantName} />
        <MenuItems items={items} categories={categories} />
      </section>
    </RestaurantContextProvider>
  )
}

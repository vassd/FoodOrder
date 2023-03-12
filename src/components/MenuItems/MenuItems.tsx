import React from 'react'
import {
  type Category,
  CategoryHeader,
  type MenuItemInterface,
  MenuItem
} from 'components'
import List from '@mui/material/List'

interface MenuItemsInterface {
  items: MenuItemInterface[]
  categories: Category[]
}
export const MenuItems: React.FC<MenuItemsInterface> = ({
  items,
  categories
}) => {
  const renderItems = (
    items: MenuItemInterface[],
    categories: Category[]
  ): JSX.Element => {
    return (
      <>
        {categories.map((category: Category) => {
          return (
            <List disablePadding key={category.id}>
              <CategoryHeader id={category.id} name={category.name} />
              {items
                .filter((item) => item.category === category.id)
                .map((item: MenuItemInterface) => {
                  return (
                    <MenuItem
                      key={`${item.name}_${category.id}`}
                      name={item.name}
                      price={item.price}
                      currency={item.currency}
                      ingredients={item.ingredients}
                      category={item.category}
                    />
                  )
                })}
            </List>
          )
        })}
      </>
    )
  }

  return <>{renderItems(items, categories)}</>
}

import React, { useState } from 'react'
import {
  type Category,
  CategoryHeader,
  type MenuItemInterface,
  MenuItem,
  MenuItemDetails
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
  const [isOpen, setIsOpen] = useState(false)
  const [openedItem, setOpenedItem] = useState<MenuItemInterface>()

  const handleOpen = (name: string): void => {
    setOpenedItem(items.find((item) => item.name === name))
    setIsOpen(true)
  }

  const handleClose = (): void => {
    setIsOpen(false)
  }

  const renderItems = (): JSX.Element => (
    <>
      {categories.map((category: Category) => (
        <React.Fragment key={category.id}>
          <CategoryHeader
            id={category.id}
            name={category.name}
            hasToppings={category.hasToppings}
            hasCrust={category.hasCrust}
          />
          <List disablePadding>
            {items
              .filter((item) => item.category === category.id)
              .map((item: MenuItemInterface) => (
                <MenuItem
                  key={`${item.name}_${category.id}`}
                  name={item.name}
                  price={item.price}
                  currency={item.currency}
                  ingredients={item.ingredients}
                  category={item.category}
                  onClick={handleOpen}
                />
              ))}
          </List>
        </React.Fragment>
      ))}
    </>
  )

  return (
    <>
      {renderItems()}
      <MenuItemDetails
        isOpen={isOpen}
        item={openedItem}
        onClose={handleClose}
      />
    </>
  )
}

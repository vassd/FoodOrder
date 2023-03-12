import React from 'react'
import data from 'assets/data.json'
import { type Topping, type Crust, type Category } from 'components'

interface RestaurantContextType {
  toppings: Topping[]
  crusts: Crust[]
  categories: Category[]
}

const defaultState = {
  toppings: [],
  crusts: [],
  categories: []
}

export const RestaurantContext =
  React.createContext<RestaurantContextType>(defaultState)

interface Props {
  children?: React.ReactNode
}

export const RestaurantContextProvider: React.FC<Props> = ({ children }) => {
  const toppings: Topping[] = data.menu.toppings
  const crusts: Crust[] = data.menu.crusts
  const categories: Category[] = data.menu.categories

  return (
    <RestaurantContext.Provider
      value={{
        toppings,
        crusts,
        categories
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}

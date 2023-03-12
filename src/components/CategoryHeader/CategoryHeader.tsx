import React from 'react'
import styles from './CategoryHeader.module.scss'

export interface Category {
  id: number
  name: string
  hasToppings: boolean
  hasCrust: boolean
}

export const CategoryHeader: React.FC<Category> = ({ name }) => {
  return <div className={styles['category-header']}>{name}</div>
}

import React from 'react'
import Box from '@mui/material/Box'
import styles from './CategoryHeader.module.scss'

export interface Category {
  id: number
  name: string
  hasToppings: boolean
  hasCrust: boolean
}

export const CategoryHeader: React.FC<Category> = ({ name }) => {
  return <Box className={styles['category-header']}>{name}</Box>
}

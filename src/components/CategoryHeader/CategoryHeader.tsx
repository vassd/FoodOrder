import React from 'react'
import Box from '@mui/material/Box'

export interface Category {
  id: number
  name: string
  hasToppings: boolean
  hasCrust: boolean
}

export const CategoryHeader: React.FC<Category> = ({ name }) => {
  return (
    <Box
      sx={{
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgb(240, 240, 240)',
        padding: '20px'
      }}
    >
      {name}
    </Box>
  )
}

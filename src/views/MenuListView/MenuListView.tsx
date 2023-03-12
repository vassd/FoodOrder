import React, { useState } from 'react'
import Box from '@mui/material/Box'
import data from 'assets/data.json'
import { MenuHeader } from 'components'

export const MenuListView: React.FC = () => {
  const [menu, setMenu] = useState(data)
  const restaurantName: string = data.restaurant.name;


  return (
    <Box component="section" sx={{ border: '5px solid rgb(240, 240, 240)' }}>
      <MenuHeader name={restaurantName} />
    </Box>
  )
}

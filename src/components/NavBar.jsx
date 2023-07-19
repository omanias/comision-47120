import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/Picture6-1.svg'


const NavBar = () => {
  return (
    <Flex>
      <Box p='4'>
        <img src={brand} alt="" width='100px' height='100px' />
      </Box>
      <Spacer />
      <Box p='4'>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Category A</MenuItem>
            <MenuItem>Category B</MenuItem>
            <MenuItem>Category C</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />

      <Box>
        <CartWidget />
      </Box>
    </Flex>
  )
}

export default NavBar
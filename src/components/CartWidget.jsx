import { Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import cart from '../assets/shopping-cart.png'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <Flex>
      <Box p='4'>
        <img src={cart} alt="imagen carrito" width='25px' height='25px' />
      </Box>
      <Spacer />
      <Box p='4'>
        <Badge colorScheme='purple'>5</Badge>
      </Box>
    </Flex>
  )
}

export default CartWidget
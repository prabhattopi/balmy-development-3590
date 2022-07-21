import React from 'react'
import {Box,Heading,Text} from '@chakra-ui/react'
import "./navbar.css"
import {Link} from "react-router-dom"

export const CardComponents = ({item}) => {
  return (
   
        <Box _hover={{backgroundColor:"gray.200"}} boxSize="border-box" zIndex="50000000000000">
        <Link to={item.to}>{item.title}</Link>
        </Box>
    
  )
}


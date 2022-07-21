import React from 'react'
import {Box,Text,Link} from "@chakra-ui/react"
import {IoIosArrowForward} from "react-icons/io"
export const Body111 = ({item}) => {
  return (
    <Box display="flex" gap="20px" alignItems="center">
    <IoIosArrowForward/>
   <Text><Link to={item.to}>{item.title}</Link></Text>
   </Box>
  )
}

import React from 'react'
import {Box,Text} from "@chakra-ui/react"
export const Bodylive12 = ({title,Icons}) => {
  return (
   <Box display="flex" height="100%" width="100%" gap="20px" alignItems="center" bg="white" boxShadow='2xl' justifyContent="space-around">
    <Box></Box>
    
   <Text>
     {title}
   </Text>
   {Icons}
   </Box>
  )
}

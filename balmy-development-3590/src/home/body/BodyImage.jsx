import React from 'react'
import {Box,Text,Image, AspectRatio} from "@chakra-ui/react"
export const BodyImage = ({item}) => {
  return (
    <Box display="flex" borderRadius="5px" p="10px" flexDirection="column" width="100%" justifyContent="center" alignItems="center" boxShadow="2xl" borderBottomRadius="0px">
    <AspectRatio ratio={5/3} borderRadius="10px" mt="10px" overflow="hidden" transition="all 1s ease" width="90%">
        <Image src={item.title} alt="" width="100%" borderRadius="10px" transition="all 1s ease" _hover={{transform:"scale(1.1)",transition:"all 1s ease"}}  objectFit="cover"/>
        </AspectRatio>
        <Text fontSize="15px" textAlign='center'>{item.text}</Text>

   
    </Box>
  )
}

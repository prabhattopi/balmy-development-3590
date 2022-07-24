import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
export const Body11news = ({item,title}) => {
  return (
   <Box display="flex" gap="20px" p="10px" boxShadow="xl">
     <Box flex="1.5" borderRadius="5px" overflow="hidden" transition="all 1s ease">
        <Image src={item.urlToImage} borderRadius="5px" objectFit="cover" transition="all 1s ease" _hover={{transform:"scale(1.1)",transition:"all 1s ease"}}/>
     </Box>
     <Box flex="2.5">
        <Box display="flex" flexDirection="column" gap="10px">
        {title?<Text fontSize="25px" fontWeight="700">{item.title}</Text>:""}
        <Text fontWeight="500">{item.description}</Text>
        <Text>{item.publishedAt}</Text>
        </Box>

     </Box>
   </Box>
  )
}

import { Box,Text} from '@chakra-ui/react'
import React from 'react'
import "./footer.css"
export const Footer = () => {
  const d= new Date()
  return (
    <>
   <Box display="flex" bg="red.100" p="10px 10px 10px 10px" justifyContent="space-between">
 
    <Box display="flex" gap="10px" alignItems="center">
    <Text>
      Term |
    </Text>
    <Text>
      Term |
    </Text>
    <Text>
      Term |
    </Text>
    <Text>
      Term |
    </Text>
    <Text>
      Term |
    </Text>
    <Text>
      Term |
    </Text>
    </Box>
   <Box>
    <Text>
    © {d.getFullYear()} ESPN@copyright
    </Text>
   </Box>
    
<Box></Box>
   </Box>
   </>
  )
}

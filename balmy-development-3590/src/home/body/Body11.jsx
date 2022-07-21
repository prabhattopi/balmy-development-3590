import React from 'react'

import {Box,Text,Link} from "@chakra-ui/react"
import { Body111 } from './Body111'
export const Body11 = ({title,data}) => {
  return (
    <Box bg="white" borderWidth='1px' borderRadius='lg'  height="fit-content" p="15px 10px" boxSizing='border-box' mt="20px">            
        <Text margin="auto" transform="translateY(-30%)">{title}</Text>
            <hr />
            <Box display="flex" flexDirection="column" p="0 10px" gap="10px" mt="10px">
               {
                data.map(e=>(
                    <Body111 key={e.id} item={e}/>
                ))
               }
            </Box>

        </Box>
  )
}

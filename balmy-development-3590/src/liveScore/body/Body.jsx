import { Box } from '@chakra-ui/react'
import React from 'react'
import "./Body.css"
import { Body2Live } from './Body2Live'
import { BodyLive1 } from './BodyLive1'
export const Body = () => {
  return (
    <Box display="flex" gap="30px" width="90%" margin="auto" mt="20rem"  >

    <Box flex="3">
       <BodyLive1/>
    </Box>
    <Box flex="1">
    <Body2Live/>
    </Box>


  </Box>
  )
}

import { Box } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../Header/Header'
import "./Body.css"
import { Body2Live } from './Body2Live'
import { BodyLive1 } from './BodyLive1'
import { BodyLive14 } from './BodyLive14'
export const Body = ({data}) => {
  return (
    <>
    <Header/>
    <Box display="flex" gap="30px" width="90%" margin="auto" mt="20rem"  >

    <Box flex="3">
       <BodyLive1 data={data}/>
    </Box>
    <Box flex="1">
    <Body2Live/>
    </Box>
  

  </Box>
  </>
  )
}

import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../footer/Footer'
import "./body.css"
import { Body1 } from './Body1'
import { Body2 } from './Body2'
import { Body3 } from './Body3'
export const Body = () => {
  return (
    <>
    <Box position="absolute" dispaly="flex" justifyContent="center" alignItems="center" marginTop="2rem" zIndex="-1">
      <Image transform="translateX(25%)" src="https://tpc.googlesyndication.com/simgad/10994949654465411539?"/>

    </Box>

    <Box justifyContent="space-between" display="flex"  width="95%" gap="20px" margin="auto" marginTop="20rem" >
      <Box flex="1">
        <Body1/>

      </Box>


      <Box flex="2">
     <Body2/>
      </Box>

      <Box flex="1">
        <Body3/>

      </Box>

    </Box>
    <Footer/>
    </>
  )
}

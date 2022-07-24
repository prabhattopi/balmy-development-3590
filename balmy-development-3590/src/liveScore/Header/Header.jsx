import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../../Common/Navbar/Navbar'
import { Body } from '../body/Body'
import "./Header.css"
export const Header = () => {
  return (
    <>
    <Navbar/>
    <Box position="absolute" dispaly="flex" justifyContent="center" alignItems="center" marginTop="2rem" zIndex="-1">
      <Image transform="translateX(25%)" src="https://tpc.googlesyndication.com/simgad/10994949654465411539?"/>

    </Box>
 
    
    </>
  )
}

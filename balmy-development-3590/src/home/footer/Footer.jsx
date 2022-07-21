import React from 'react'
import { Body11 } from '../body/Body11'
import {Box,} from "@chakra-ui/react"
import { data1 } from '../body/Data/data1'
import { data2 } from '../body/Data/data2'
import { data3 } from '../body/Data/data3'
import { data4 } from '../body/Data/data4'
export const Footer = () => {
  return (
   <Box display="flex" justifyContent="space-around" border="1px solid"borderColor="gray.200" mt="20px"alignItems="center" >
        <Body11 title="key List" data={data1}/>
        <Body11 title="Quick Links" data={data2}/>
        <Body11 title="Follow ESPN.cricinfo" data={data3}/>

        <Body11 title="ESPN Sites" data={data4}/>
   </Box>
  )
}

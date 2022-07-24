import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { Body11 } from './Body11'
import { BodyImage } from './BodyImage'
import { data3 } from './Data/data3'
import { Data5 } from './Data/Data5'

export const Body3 = () => {
  return (
    <Box>
          <Body11 title="key List" data={data3}/>
          <Image mt="20px" width="100%" src="https://tpc.googlesyndication.com/simgad/13683194396473605559?"/>
          
            <Box mt="20px">
              {
          Data5.map(e=>(
            <BodyImage key={e.id} item={e}/>
          ))
              }
              </Box>
          
        
    </Box>
  )
}

import { Box } from '@chakra-ui/react'
import React from 'react'
import { Body11 } from './Body11'
import { data3 } from './Data/data3'

export const Body3 = () => {
  return (
    <Box>
          <Body11 title="key List" data={data3}/>
    </Box>
  )
}

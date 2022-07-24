import React from 'react'
import {Box} from "@chakra-ui/react"
import { Loading } from './Loading'
import { Error } from './Error'
import { Body11news } from './Body11news'
export const Body2 = ({loading,error,data}) => {
  return (
    <Box display="flex" flexDirection="column" gap="20px" p="10px">
    {loading&&<Loading/>}
    {error&&<Error/>}
    {
        data.map(e=>(
            <Body11news key={e.urlToImage} description={e.description} item={e}/>
        ))
    }
    


</Box>
  )
}

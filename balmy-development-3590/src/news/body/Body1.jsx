import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Box} from "@chakra-ui/react"
import { data2 } from '../../home/body/Data/data2'
import { Body11news } from './Body11news'
import { Loading } from './Loading'
import { Error } from './Error'

export const Body1 = ({data,loading,error}) => {
 
    // console.log(data)
  return (
    <>
    <Box display="flex" flexDirection="column" gap="20px" p="10px">
        {loading&&<Loading/>}
        {error&&<Error/>}
        {
            data.map(e=>(
                <Body11news key={e.urlToImage} title={e.title} description={e.description} loading={loading} item={e}/>
            ))
        }
        

   
   </Box>
    </>
  )
}

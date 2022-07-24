import React,{useState,useEffect} from 'react'
import {Box,Text} from "@chakra-ui/react"
import "./header.css"
import { HeaderHome } from '../../home/header/HeaderHome'
import { Body1 } from '../body/Body1'
import { Body2 } from '../body/Body2'
import { Body2Live } from '../../liveScore/body/Body2Live'

import axios from "axios"
export const Headernews = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  const getData=async()=>{
      setLoading(true)
      setError(false)
      try{
          let r=await axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=${process.env.REACT_APP_CRI_KEY}`)
      
          setData(r.data.articles)
          setLoading(false)
          setError(false)
       
      }
      catch(err){
          setLoading(false)
       setError(true)

      }
 

  }
  useEffect(() => {
      getData()
      
   
  }, [])


  return (
    <>
  <HeaderHome/>

  <Box display="flex" gap="30px" width="90%" margin="auto" mt="20rem"  >

<Box flex="3"  borderWidth='3px' p="20px" borderRadius="10px">
  <Box borderBottom="1px solid"  transform="translateY(-40%)"  >
  <Text fontSize="40px" fontWeight="600" letterSpacing={2}>Recent News</Text>
  </Box>
 
 
   <Body1 data={data} loading={loading} error={error}/>
</Box>
<Box flex="1" borderWidth='3px' p="20px" borderRadius="10px">
<Box borderBottom="1px solid"  transform="translateY(-40%)"  >
  <Text fontSize="20" fontWeight="600" letterSpacing={2}>Most Read</Text>
  </Box>
 
 
   <Body2 data={data} loading={loading} error={error}/>
</Box>


</Box>
  </>
  )
}

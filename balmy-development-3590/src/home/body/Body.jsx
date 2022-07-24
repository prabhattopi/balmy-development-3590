import { Box,Image } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
// import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import "./body.css"
import { Body1 } from './Body1'
import { Body2 } from './Body2'
import { Body3 } from './Body3'
import { HeaderHome } from '../header/HeaderHome'
import axios from 'axios'
export const Body = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  const getData=async()=>{
      setLoading(true)
      setError(false)
      try{
          let r=await axios.get(`https://newsapi.org/v2/everything?q=cricket&apiKey=${process.env.REACT_APP_CRI_KEY}`)
          setLoading(false)
          setError(false)
          setData(r.data.articles)
       
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
    

    <Box justifyContent="space-between" display="flex"  width="95%" gap="20px" margin="auto" marginTop="20rem" >
      <Box flex="1">
        <Body1/>

      </Box>


      <Box flex="2" display="flex" flexDirection="column" gap="20px">
     <Body2 data={data} loading={loading} error={error}/>
      </Box>

      <Box flex="1">
        <Body3/>

      </Box>

    </Box>
    <Footer/>
    </>
  )
}

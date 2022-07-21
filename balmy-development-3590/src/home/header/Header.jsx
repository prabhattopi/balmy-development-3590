import { Box, Spacer,Text,Image,Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./header.css"
import axios from 'axios'
import Slider from 'react-slick'
import { Settings } from '../../Common/SettingSlider/setting'

import { BoxCard } from './BoxCard/BoxCard'
import { Navbar } from '../../Common/Navbar/Navbar'
import { Body } from '../body/Body'
import { Data } from './Data/Data'
export const Header = () => {
  

  // useEffect(()=>{
  //   const getTodo=()=>{
  //     const options = {
  //       method: 'GET',
  //       url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  //       headers: {
  //         'X-RapidAPI-Key': process.env.REACT_APP_CRI_KEY,
  //         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  //       }
  //     };
      
  //     axios.request(options).then(function (response) {
  //       console.log(response.data.typeMatches);
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  //   }
  //   getTodo()

  // },[])
  return (
    <>
   <Box bg="blue.500" height="250px" zIndex="-1">
  <Box>
    <Box display="flex" justifyContent="space-around">
      <Box display="flex" ml="3rem" gap="20px" color="white" fontSize="16px" fontWeight="600">
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      <Box>All Match(14)</Box>
      </Box>
      <Spacer/>
      <Box></Box>
   
   
    </Box>
    
    
    </Box>
    <Box width="95%" margin="auto"  >
  <Slider {...Settings}>
     {
      Data.map(e=>(
        <Box key={e.id} bg="white" p="10px"  mt="20px" borderRadius="10px">
      <Box>
      <Text fontSize="14px" fontWeight="600">{e.matchType} {e.desc}</Text>
      </Box>
      <Box display="flex" flexDirection="column" gap="10px" marginTop="10px">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex"alignItems="center" gap="5px">
          <Image width="20px" src={e.player1url}/>
          <Text>{e.player1}</Text>
          </Box>
          <Box>
            <Text>{e.player1run}</Text>
          </Box>
           
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex"alignItems="center" gap="5px">
          <Image width="20px" src={e.player2url}/>
          <Text>{e.player2}</Text>
          </Box>
          <Box>
            <Text>{e.player2run}</Text>
          </Box>
           
        </Box>

         
       
    
        <Box marginTop="10px">
          <Text fontSize="12px" fontWeight="500">{e.matchend}</Text>
          
        

        </Box>
      
      </Box>
      <hr />
      
      <Box>
        <Box display="flex" gap="20px" fontSize="14px" fontWeight="500">
        <Text><Link to={e.schedulelink}>{e.schedule}</Link></Text>
        <Text><Link to={e.tablelink}>{e.table}</Link></Text>
        </Box>
      

      </Box>
      

  
    </Box>
      ))
     }
 
      
    
     </Slider>

     </Box>
   
   </Box>
   <Navbar/>
  <Body/>

 
   </>
  )
}

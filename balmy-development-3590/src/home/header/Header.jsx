import { Box, Spacer,Text,Image,Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./header.css"
import axios from 'axios'
import Slider from 'react-slick'
import { Settings } from '../../Common/SettingSlider/setting'
export const Header = () => {
  

  useEffect(()=>{
    const getTodo=()=>{
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_CRI_KEY,
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
    getTodo()

  },[])
  return (
   <Box height="300px"bg="blue.500">
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
    <Box bg="white" width="350px" p="10px" marginLeft="3rem" mt="20px" borderRadius="10px">
      <Box>
      <Text fontSize="14px" fontWeight="600">Result 2nd|T20-Beftafast</Text>
      </Box>
      <Box display="flex" flexDirection="column" gap="10px" marginTop="10px">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex"alignItems="center" gap="5px">
          <Image width="20px" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340500/340505.png"/>
          <Text>SriLanka</Text>
          </Box>
          <Box>
            <Text>179/4</Text>
          </Box>
           
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex"alignItems="center" gap="5px">
          <Image width="20px" src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/340500/340505.png"/>
          <Text>SriLanka</Text>
          </Box>
          <Box>
            <Text>179/4</Text>
          </Box>
           
        </Box>

         
       
    
        <Box marginTop="10px">
          <Text fontSize="12px" fontWeight="500">SriLanka Won By 10 Wickets</Text>
          
        

        </Box>
      
      </Box>
      <hr />
      
      <Box>
        <Box display="flex" gap="20px" fontSize="14px" fontWeight="500">
        <Text><Link to="/">Schedule</Link></Text>
        <Text><Link to="/">Report</Link></Text>
        </Box>
      

      </Box>
      

  
    </Box>
    </Box>
   
   </Box>
  )
}

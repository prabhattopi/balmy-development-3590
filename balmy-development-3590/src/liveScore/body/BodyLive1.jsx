import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BodyLive11 } from './BodyLive11'
import { Bodylive12 } from './Bodylive12'
import {BiFilterAlt} from "react-icons/bi"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BodyLive121} from "./BodyLive121"
import { data1body } from './Data/databody1'
import { data2body } from './Data/data2body'
import { data3bodylive } from './Data/data3body'
import { BodyLive14 } from './BodyLive14'
import {Data} from "../../home/header/Data/Data"
export const BodyLive1 = ({data}) => {
  return (
    <>
    <Box display="flex" justifyContent="space-around" height="40px" alignItems='center' borderRadius="5px" bg="white" mt="20p" boxShadow='2xl' fontSize="20px">
    <Text>
     <Link to="/livescore">
     Live
     </Link>
     
    </Text>
    <Text>
      <Link to="/livescore/upcoming">
      Upcoming
      </Link>
     
    </Text>
    <Text>
      <Link to="/livescore/results">
      Result
      </Link>
    
    </Text>

    </Box>
    <Box display="flex" gap="5px" height="40px" alignItems='center' justifyContent="space-around" mt="20px" fontSize="18px">
      <BodyLive11 title={<BiFilterAlt fontSize="20px"/>} rest={{display:"flex",alignItems:"center",boxShadow:"2xl",background:"white",width:"50%",height:"100%",justifyContent:"center",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}/>
      
      <Bodylive12 title="Formats" Icons={<RiArrowDropDownLine fontSize="30px"/>} data={data1body} rest={{width:"50%",height:"400px"}}/>




      <Bodylive12 title="Teams" Icons={<RiArrowDropDownLine fontSize="30px"/>} data={data2body} rest={{width:"100%",height:"400px"}}/>



      <Bodylive12 title="Compentitions" Icons={<RiArrowDropDownLine fontSize="30px"/>} data={data3bodylive} rest={{width:"750px",height:"200px"}}/>





      <BodyLive11 title={<Text>Reset</Text>} rest={{display:"flex",alignItems:"center",boxShadow:"2xl",background:"white",width:"50%",height:"100%",justifyContent:"center",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}/>

    </Box>
    <BodyLive14 data={data}/>
    
    </>
  )
}

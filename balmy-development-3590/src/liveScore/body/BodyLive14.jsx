import { Box,Text,Image,Grid } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

export const BodyLive14 = ({data}) => {
  return (
    <>
    <Grid templateColumns="repeat(2,1fr)">
    {
      data.map(e=>(
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
     </Grid>
     </>
 
  )
}

import React from 'react'
import { AspectRatio,Image,Text,Box } from '@chakra-ui/react'
import { Loading } from '../../news/body/Loading'
import { Error } from '../../news/body/Error'
export const Body2 = ({data,loading,error}) => {
  return (
    <>
    {loading&&<Loading/>}
    {error&&<Error/>}
    {
      data.map(e=>(  
        <Box width="100%">
           <AspectRatio width="100%" ratio={4 / 3} borderRadius="10px" overflow="hidden"
    borderBottomRadius="0px" transition="all 1s ease">
    <Image src={e.urlToImage} alt='naruto' borderRadius="10px" transition="all 1s ease" _hover={{transform:"scale(1.1)",transition:"all 1s ease"}} objectFit='contain' />
  </AspectRatio>
  <Box>
    
  </Box>
  <Box  width="45%" backgroundColor="rgba(0,0,0,0.9)" position="absolute" marginTop="-10rem" p="10px 20px" overflow="hidden">
  <Text width="100%" color="white" fontWeight="700" fontSize="20px">{e.title} </Text>

  <Text width="100%" color="white" fontWeight="600" mt="10px" fontSize="17px">{e.description}</Text>

  </Box>
        </Box>
      ))
    }
   
  
  </>

  )
}

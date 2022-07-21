import { Box,Image,Badge, InputGroup, InputLeftElement, Input,Text,Link } from '@chakra-ui/react'
import React from 'react'
import {FcSearch} from "react-icons/fc"
import {IoIosArrowForward} from "react-icons/io"
import { Body11 } from './Body11'
import { data1 } from './Data/data1'
import { data2 } from './Data/data2'
import { data3 } from './Data/data3'
import { data4 } from './Data/data4'
export const Body1 = () => {
    const property = {
        imageUrl: 'https://wassets.hscicdn.com/static/images/nlp-logo.svg',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: `Which Batter is the higest average in men's odi (min 30 innings)`,
       
      }
    
      return (
        <>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg'  height="fit-content">
          <Image margin="auto" marginTop="10px" width="150px" src={property.imageUrl} alt={property.imageAlt} />
    
          <Box p='6'>
            <Box
            textAlign="center"
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={3}
            >
              {property.title}
            </Box>
            <InputGroup  mt="20px" transform="translate(14%)">
    <InputLeftElement
      pointerEvents='none'
      children={<FcSearch color='gray.300' />}
    />
    <Input type='text' width="200px" borderColor="blue.600" borderRadius="10px" placeholder='Ask You Question' />
  </InputGroup>
    
    </Box>
        </Box>
        <Body11 title="key List" data={data1}/>
        <Body11 title="Quick Links" data={data2}/>
        <Body11 title="Follow ESPN.cricinfo" data={data3}/>
        <Body11 title="ESPN Sites" data={data4}/>
        </>
      )
}

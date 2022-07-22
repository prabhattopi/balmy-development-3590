import React from 'react'
import {RiArrowDropDownLine} from "react-icons/ri"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Checkbox,
  Box
} from '@chakra-ui/react'
import { data1body } from './Data/databody1'
export const BodyLive121 = ({title,Icons,data,rest}) => {
  return (
    <Menu closeOnSelect={false}>
  <MenuButton  display="flex" height="100%" width="100%" gap="20px" alignItems="center" bg="white" boxShadow='2xl' justifyContent="space-around" as={Button} rightIcon={Icons}>
    {title}
  </MenuButton>

  <MenuList {...rest} display="flex" flexDirection="row" gap="10px" flexWrap="wrap">
    <MenuOptionGroup type='checkbox' display="flex" flexDirection="row" gap="10px" flexWrap="wrap">
   
      {
        data.map(e=>(
      <MenuItemOption checked={e.status}>{e.title}</MenuItemOption>
        ))
      }

   
      
      
      
    </MenuOptionGroup>
   
   
  </MenuList>
  
</Menu>
  )
}

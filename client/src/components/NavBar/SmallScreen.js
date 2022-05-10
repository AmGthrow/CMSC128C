import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton} from '@chakra-ui/react'
import {ImMenu} from 'react-icons/im'

  
  export default function SmallScreen() {
    return (
      <Box pos='sticky'>
       <Menu>
        <MenuButton as={IconButton} icon={<ImMenu/>} color='orange' />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Courses</MenuItem>
                <MenuItem>Enroll</MenuItem>
              </MenuList>
        </Menu>
      </Box>
    )
  }
  
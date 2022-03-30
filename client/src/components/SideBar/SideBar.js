import { Flex, Box, IconButton, VStack, Icon, Text, Divider, Avatar, Heading } from '@chakra-ui/react'
import {FiMenu} from 'react-icons/fi'
import { NavLink  } from 'react-router-dom'
import SidebarLogic from './SideBarLogic'

export default function SideBar({links}) {

    const {toggle, boxShadow, hideDisplay, sideBarWidth, sideBarRadius, sideBarAlign} = SidebarLogic()

    return (
        <Flex 
            h='100vh' p='1em' pos='sticky' flexDir='column' 
            w={sideBarWidth} borderRightRadius={sideBarRadius} 
            boxShadow={boxShadow} align={sideBarAlign} 
            justifyContent='space-between'>
            <SideBarItems links={links} toggle={toggle} hideDisplay={hideDisplay}/>
            <UserProfile hideDisplay={hideDisplay}/>
        </Flex>
    )
}

function SideBarItems ({links, toggle, hideDisplay}) {

    const link = links.map(link => <SideBarLink key={link.val} link={link} hideDisplay={hideDisplay}/>)

    return(
        <Box>
            <IconButton bg='none' mb='1em' icon={<FiMenu/>} onClick={toggle}/>
            <VStack spacing={4} align='stretch'>
                {link}
            </VStack>
        </Box>
    )
}

function SideBarLink ({link, hideDisplay}) {

    const {to, val, icon} = link 

    return(
        <NavLink to={to}>
            <Flex align='center' p={2.5} h='40px' 
                _hover={{  borderRadius: '8px', bg: '#81E6D9' }}>
                <Icon as={icon} fontSize='xl'/>
                <Text ml={5} fontSize='medium' display={hideDisplay}>{val}</Text>
            </Flex>
        </NavLink>
    )
}

function UserProfile ({hideDisplay}) { // must not be static, need to get the user details and their avatar 
    return(
        <Box>
            <Divider display={hideDisplay} />
            <Flex mt='1em'>
                <Avatar size='sm'/>
                <Box ml={4} display={hideDisplay}>
                    <Heading as='h3' fontSize='large'>Carryl Louise</Heading>
                    <Text fontSize='sm'> Accounting </Text>
                </Box>
            </Flex>
        </Box>
    )
}
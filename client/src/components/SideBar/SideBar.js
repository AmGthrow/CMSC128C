import { Flex, Box, IconButton, VStack, Icon, Text, Divider, Avatar, Heading } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { createContext, useContext } from 'react'
import SidebarLogic from './SideBarLogic'


const SideBarContext = createContext()


export default function SideBar({links}) {

    const value = SidebarLogic()

    return (
        <SideBarContext.Provider value={value} >
            <SideBarContent links={links}/> 
        </SideBarContext.Provider>
    )
}

function SideBarContent({links}) {

    const {boxShadow, sideBarWidth, sideBarRadius, sideBarAlign} = useContext(SideBarContext)

    return(
        <Flex h='100vh' p='1em' pos='sticky' flexDir='column' justifyContent='space-between' 
        w={sideBarWidth} borderRightRadius={sideBarRadius} boxShadow={boxShadow} align={sideBarAlign} >
            <SideBarItems links={links}/>
            <UserProfile />
        </Flex>
    )
}

function SideBarItems ({links}) {

    const {toggle} = useContext(SideBarContext)

    return(
        <Box>
            <IconButton bg='none' mb='1em' icon={<FiMenu/>} onClick={toggle}/>
            <VStack spacing={4} align='stretch'>
                {links.map(link => <SideBarLink key={link.val} link={link}/>)}
            </VStack>
        </Box>
    )
}

function SideBarLink ({link}) {

    const {to, val, icon} = link
    
    const {hideDisplay} = useContext(SideBarContext)

    return(
        <NavLink to={to}>
            <Flex align='center' p={2.5} h='40px' _hover={{  borderRadius: '8px', bg: '#81E6D9' }}>
                <Icon as={icon} fontSize='xl'/>
                <Text ml={5} fontSize='medium' display={hideDisplay}>{val}</Text>
            </Flex>
        </NavLink>
    )
}

function UserProfile () { // must not be static, need to get the user details and their avatar 

    const {hideDisplay} = useContext(SideBarContext)

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
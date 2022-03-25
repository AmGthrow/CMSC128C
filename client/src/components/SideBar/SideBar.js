import React, {useState} from 'react'
import {FaMoneyBillAlt, FaHome} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {Box, VStack, IconButton, Flex, Icon, Text, Divider, Avatar, Heading} from '@chakra-ui/react'

const navItems = [
    {
        icon : FaHome,
        title: 'Dashboard'
    },
    {
        icon : FaMoneyBillAlt,
        title: 'Transaction'
    }
]


function NavItem ({item, navSize}) {

    const {icon, title} = item 

    return(
        <Flex  align='center' p={2.5} h='40px' _hover={{  borderRadius: '8px', bg: '#81E6D9' }}>
            <Icon as={icon} fontSize='xl'/>
            <Text ml={5} fontSize='medium'  display={navSize === 'small' ? 'none' : 'flex'}>{title}</Text>
        </Flex>
    )
}


export default function SideBar() {
    const [navSize, setNavSize] = useState('large')

    const toggle = () => navSize === 'large' ? setNavSize('small') : setNavSize('large')
    
    const navItem = navItems.map(item => <NavItem key={item.title} item={item} navSize={navSize}/>)

    return (
        <Flex
            flexDir='column'
            pos='sticky'
            h='98vh'
            mt='1vh'
            p='1em'
            w={navSize === 'small' ? '5em' : '15em'}
            borderRadius={navSize  === 'small' ? '15px' : '30px'}
            boxShadow='0 4px 12px 0 rgba(255, 255, 255, 0.03)'
            align={navSize === 'small' && 'center'}
            justifyContent='space-between'>
            <Box>
                <IconButton bg='none' mb='1em' icon={<FiMenu/>} onClick={toggle}/>
                <VStack spacing={4} align='stretch' >
                    {navItem}
                </VStack>
            </Box>

            <Box>
                <Divider display={navSize === 'small' && 'none'}/>
                <Flex mt='1em'>
                    <Avatar size='sm'/>
                    <Box ml={4} display={navSize === 'small' && 'none'}>
                        <Heading as='h3' fontSize='large'>Carryl Louise</Heading>
                        <Text fontSize='sm'> Accounting </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
  )
}

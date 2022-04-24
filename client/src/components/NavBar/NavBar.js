import React from 'react'
import NCSS from './NavBar.module.css'
import nav_bar_logo from '../../assets/nav-bar-logo.png'
import { NavLink } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

function Logo() {

    return <img className={NCSS.logo} src={nav_bar_logo} alt='hero logo' />
}

function NavItems() {

    const path = [{ to: 'page-a', value: 'Page A' }, { to: 'page-b', value: 'Page B' }, { to: 'page-c', value: 'Page C' }]

    const items = path.map(({ to, value }) => <li key={value}> <Item to={to} value={value} /> </li>)

    return <ul className={NCSS.items}>{items}</ul>
}

function Item({ to, value }) {

    const page = <span>{value}</span>

    return <NavLink className={NCSS.item} to={to}> {page} </NavLink>
}

function LogIn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>

        <button className={NCSS.button} onClick={onOpen}>Log in</button>

        {/* Login modal */}
        <Modal isOpen={isOpen} onClose={onClose} initialColorMode='light'>

            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody mt={6}>
                    <FormControl >
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={onClose} bg='orange.400' variant='with-shadow'>
                        Log In
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default function NavBar() {
    return (
        <div className={NCSS.content}>
            <Logo />
            <NavItems />
            <LogIn />
        </div>
    )
}
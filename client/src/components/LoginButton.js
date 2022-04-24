import React from 'react'
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

export function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>

        <Button bg='orange.400' onClick={onOpen}>Log in</Button>

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
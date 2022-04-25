import { React, useState } from 'react'
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
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'

export function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showPassword, setShowPassword] = useState(false)
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
                        <InputGroup>

                            <Input id='password' type={showPassword ? 'text' : 'password'} />
                            <InputRightElement w='20%'><Button onClick={() => setShowPassword(!showPassword)} bg='none'>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button></InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    {/* TODO: This 'orange.400' is a default color from Chakra. The "correct" color for our palette is #FF7A00 but we haven't gotten around to setting up styling yet so this'll do for now */}
                    <Button mr={3} onClick={onClose} bg='orange.400' variant='with-shadow'>
                        Log In
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}
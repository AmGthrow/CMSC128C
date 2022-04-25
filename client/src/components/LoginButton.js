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
import { validateLogin } from '../api/FetchLogic/validateLogin'
import PropTypes from 'prop-types'

export function Login({ setToken }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await validateLogin(email, password)
        if (response.status == 200)
            setToken(response.data.token)
    }

    return <>
        <Button colorScheme='orange' onClick={onOpen}>Log in</Button>

        {/* Login modal */}
        <Modal isOpen={isOpen} onClose={onClose}>

            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody mt={6}>
                    <FormControl >
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' onChange={e => setEmail(e.target.value)} />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <InputGroup>

                            <Input id='password' type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)} />
                            <InputRightElement w='20%'><Button onClick={() => setShowPassword(!showPassword)} bg='none'>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button></InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    {/* TODO: This 'orange' is a default color from Chakra. The "correct" color for our palette is #FF7A00 but we haven't gotten around to setting up styling yet so this'll do for now */}
                    <Button onClick={handleSubmit} colorScheme='orange'>
                        Log In
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
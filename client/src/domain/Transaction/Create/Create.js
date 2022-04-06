import {
    Button,
    Modal,
    Grid,
    GridItem,
    Flex,
    FormControl,
    FormLabel,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { useRef } from 'react'
import { Select } from '@chakra-ui/react'



export default function Create() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <ButtonContext onOpen={onOpen} />
        <ModalElements isOpen={isOpen} onClose={onClose} />
 
      </>
    )
}

function ButtonContext({onOpen}) {
  return (
    <Flex justifyContent='flex-end'>
      <Button m='1em' onClick={onOpen}>Add Transaction</Button>
    </Flex>
  )
}


function ModalElements ({isOpen, onClose}) {

  const initialRef = useRef()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
      
        <ModalHeader>New Transaction</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Grid 
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={3}>
            <Type/>
            <Amount />
            <Name />
            <IssueDate />
            <Status />
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}> Done </Button>
        </ModalFooter>
      </ModalContent>

  </Modal>
  )
}


function Type () {
  return (
    <GridItem rowStart={1} colStart={1} colEnd={2} > 
      <FormLabel>Type</FormLabel>
      <Select placeholder='Salary' />
    </GridItem>
  )
}

function Amount () {
  return (
    <GridItem rowStart={1} colStart={2} colEnd={5}> 
      <FormLabel>Amount</FormLabel>
      <Input placeholder='Php'/>
    </GridItem>
  )
}

function Name () {
  return (
    <GridItem rowStart={2} colStart={1} colEnd={5}> 
      <FormLabel>Name</FormLabel>
      <Input placeholder='Sponji Boovle' />
    </GridItem>
  )
}


function IssueDate () {
  return (
    <GridItem rowStart={3} colStart={1} colEnd={2}> 
      <FormLabel>Issue Date</FormLabel>
      <Input placeholder='Sponji Boovle' type='date'/>
    </GridItem>
  )
}


function Status () {
  return (
    <GridItem rowStart={4} colStart={1} colEnd={2}> 
      <FormLabel>Status</FormLabel>
      <Select placeholder='Pending' />
    </GridItem>
  )
}
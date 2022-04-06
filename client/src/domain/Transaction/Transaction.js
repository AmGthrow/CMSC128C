import Create from './Create/Create'
import List from './List/List'
import {Flex} from '@chakra-ui/react'

export default function Transaction() {
  return (
    <Flex w='80%' p='6em' flexDir='column'>
        <Create />
        <List />
    </Flex>
  )
}

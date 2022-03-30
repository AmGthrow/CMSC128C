import TransactionLogic from './TransactionLogic'
import {Table,Thead,Tbody,Tr,Th, Td, Flex, Button} from '@chakra-ui/react'
import { createContext, useContext } from 'react'

const TransactionContext = createContext()

export default function Transaction() {

    const value  = TransactionLogic()

    return (
        <TransactionContext.Provider value={value}>
            <Flex w='80%' alignItems='center' justifyContent='center' p='6em' flexDir='column' > 
                <TransactionTable />
            </Flex>
        </TransactionContext.Provider>
    )
}

function TransactionTable () {

    const { transactions } = useContext(TransactionContext)

    return(
        <Table size='sm' colorScheme='teal'>
            <TableHead/>
            {transactions.map(data => <TableBody key={data.id} data={data}/>)}
        </Table>
    )
}


function TableHead () {

    const { header } = useContext(TransactionContext)

    return(
        <Thead>
            <Tr>
              { header.map((key, index) => { return <Th key={index}>{key.toUpperCase()}</Th> })}
            </Tr>
        </Thead>
    )
}

function TableBody ({data}) {

    return (
        <Tbody>
            <Tr >
                {Object.values(data).map((key, index) => { return <Td key={index}> {key} </Td>})}
            </Tr>
        </Tbody>
    )
}

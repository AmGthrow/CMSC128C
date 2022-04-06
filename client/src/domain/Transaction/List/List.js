import ListLogic from './ListLogic'
import {Table,Thead,Tbody,Tr,Th, Td, Flex, Button} from '@chakra-ui/react'
import { createContext, useContext } from 'react'

const TransactionContext = createContext()

export default function List () {

    const value  = ListLogic()

    return (
        <TransactionContext.Provider value={value}>
            <Flex alignItems='center' justifyContent='center' flexDir='column'> 
                <TransactionTable />
                <Pagination/>
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

function Pagination () {

    const { pagination } = useContext(TransactionContext)

    return( 
        pagination.length  > 1 && (
            <Flex>
                {pagination.map((_, index) => <PaginationButton key={index} index={index} />)}
            </Flex>
        )
    )
}


function PaginationButton ({index}){

    const { fetchMoreTransactions } = useContext(TransactionContext)

    return(
        <Button
            onClick={() => fetchMoreTransactions(index)}>
            {index + 1}
        </Button>
    )
}
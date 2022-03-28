import TransactionLogic from './TransactionLogic'
import {Table,Thead,Tbody,Tr,Th, Td, Box} from '@chakra-ui/react'


export default function Transaction() {

    const { transactions, header } = TransactionLogic()

    return (
        <Box w='70%' m='6em'>
            <TransactionTable transactions={transactions} header={header} />
        </Box>
  )
}

function TransactionTable ({transactions, header}) {

    return(
        <Table colorScheme='teal'>
            <TableHead header={header}/>
            {transactions.map(data => <TableBody key={data.id} data={data}/>)}
        </Table>
    )
}


function TableHead ({header}) {

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
            <Tr>
                {Object.values(data).map((key, index) => { return <Td key={index}> {key} </Td>})}
            </Tr>
        </Tbody>
    )
}





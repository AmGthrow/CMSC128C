import React from 'react'
import {Table,Thead,Tbody,Tr,Th, Td, Flex, Center, Box} from '@chakra-ui/react'



const transactionData = [ // this data comes from the database
    {
        ref_no: '42069',
        type: 'Expense',
        amount: '4,800',
        name: 'Hwang Yeji',
        isssue_date: '01012002',
        date_settled: '',
        status: 'Pending',
        accountant: ''
    },
    {
        ref_no: '42070',
        type: 'Expense',
        amount: '4,800',
        name: 'Shin Ryujin',
        isssue_date: '01022002',
        date_settled: '',
        status: 'Pending',
        accountant: ''
    },
    {
        ref_no: '42068',
        type: 'Expense',
        amount: '4,800',
        name: 'Choi Jisu',
        isssue_date: '12312021',
        date_settled: '12312021',
        status: 'Completed',
        accountant: 'UserName1'
    }
]

function TableHead() {
    return(
        <Thead>
            <Tr>
            <Th>Ref. No.</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Name</Th>
            <Th>Issue Date</Th>
            <Th>Date Settled</Th>
            <Th>Status</Th>
            <Th>Accountant</Th>
            </Tr>
        </Thead>
    )
}

function TableBody ({data}) {

    const {ref_no, type, amount, name, isssue_date, date_settled, status, accountant} = data 
    
    
    return (
        <Tbody>
            <Tr>
                <Td>{ref_no}</Td>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{name}</Td>
                <Td>{isssue_date}</Td>
                <Td>{date_settled}</Td>
                <Td>{status}</Td>
                <Td>{accountant}</Td>
            </Tr>
        </Tbody>
    )
}



function TransactionTable () {

    const transaction = transactionData.map(data => <TableBody key={data.ref_no} data={data}/>)

    return(
        <Table colorScheme='teal'>
            <TableHead/>
            {transaction}
        </Table>
    )
}

export default function Transaction() {
  
    return (
        <Box w='70%' m='6em' bg='tomato'>
            
                <TransactionTable />
           
        </Box>
  )
}

import {useEffect, useState} from 'react'
import { getTransactions } from '../../api/FetchLogic/getTransactions'


let pageNo = 0 

const limit = 10


 function getPagination(totalTransactionCount) { 

    const result = totalTransactionCount / limit 

    return (result % 1) !== 0 ? Math.floor(result) + 1 : result 
}


export default function TransactionLogic() {

    const [transactions, setTransactions] = useState([])

    const [header, setHeader] = useState([])

    const [totalTransactionCount, setTotalTransactionCount] = useState(0)


    const pagination  =  new Array(getPagination(totalTransactionCount)).fill(' ')

    const fetchMoreTransactions = (index) => {

        pageNo = index

        fetchTransactions()
    }

    const fetchTransactions = async () => { // fetching data

        const {transactions, error, transactionCount} = await getTransactions(limit, pageNo) // call the api for getting all the transaction data
        
        if(error) return console.log(error) // if error, do this

        setTransactions(transactions) 

        setTotalTransactionCount(transactionCount)

        if(transactions) setHeader(Object.keys(transactions[0])) 
    }

    useEffect(() => { // run every mount

        fetchTransactions() // fetch data

    }, [])

    return { transactions, header, pagination, fetchMoreTransactions} // return 
}

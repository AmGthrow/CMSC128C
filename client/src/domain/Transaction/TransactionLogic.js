import {useEffect, useState} from 'react'
import { getTransactions } from '../../api/FetchLogic/getTransactions'


let pageNo = 0 

const limit = 10


export default function TransactionLogic() {

    const [transactions, setTransactions] = useState([])

    const [header, setHeader] = useState([])


    const fetchTransactions = async () => { // fetching data

        const {transactions, error} = await getTransactions(limit, pageNo) // call the api for getting all the transaction data
        
        if(error) return console.log(error) // if error, do this

        setTransactions(transactions) 

        if(transactions) setHeader(Object.keys(transactions[0])) 
    }

    useEffect(() => { // run every mount

        fetchTransactions() // fetch data

    }, [])

    return { transactions, header} // return 
}
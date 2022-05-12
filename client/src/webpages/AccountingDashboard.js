import {FaMoneyBillAlt, FaHome} from 'react-icons/fa'
import SideBar from '../components/SideBar/SideBar'
import {Flex} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Transaction from '../domain/Transaction/Transaction'


export default function AccountingDashboard() {

  const links = [{ to:'/accounting', icon:FaHome, val:'Dashboard' }, { to:'transaction', icon:FaMoneyBillAlt, val:'Transaction' }]

  return (
    <Flex>
      <SideBar links={links}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="transaction" element={<Transaction/>} />
      </Routes>
    </Flex>
  )
}


function Home() {
  return(
    <Flex> ok </Flex>
  )
}
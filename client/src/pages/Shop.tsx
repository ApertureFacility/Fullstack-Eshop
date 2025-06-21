import React from 'react'
import Header from '../components/Navbar/NavBar'
import { getallItemsReq } from '../api/ItemsApi'
import ItemsList from '../components/ItemsComonent/ItemsBlock'

export default function MainPage() {
  getallItemsReq()
  return (
    <div><Header/>
    <ItemsList/></div>
  )
}

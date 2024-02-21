import React, { useState } from 'react'
import StoreItem from "./StoreItem"
import './css/Store.css'
import Footer from './Footer'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'




export default function Store({ items }) {

  const cookies = new Cookies()
  const name = cookies.get('username');
  console.log(name);
  const navigate = useNavigate();
  // const namearr = name.split(' ');
  return (
    <section className="text-gray-1000 body-font"  data-testid="storePage">
      <nav className="navbar">
      <h1 className="comp_name">BNY</h1>
        <ul>

          <li><a href="#" onClick={e => navigate('/orderdetails')}>My Orders</a></li>
          <li><a href="#" onClick={e => navigate('/')}>Log Out</a></li>
          <h1 className="welcome_msg">Welcome, {name} </h1>
        </ul>


      </nav>

      <div className="container px-5 py-24 mx-auto">
      <h2 className="header" style={{fontSize: "20px",marginBottom: "100px"}}>Ask Naresh for 'Help'</h2>
        <div className="items flex flex-wrap -m-4">
          {items.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Reseller_dashboard() {

    const nav = useNavigate();
    
    useEffect(() => {

      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'false'){
          nav("/login")
      }
    })

  return (
    <>
<div className='dashboard_container'>
      <h2>Reseller Dashboard</h2>
      <div className='dashboard_card_container'>
        <div className='dashboard_card_active'>
          <h1>1000</h1>
          <h3>active user</h3>
        </div>
        <div className='dashboard_card_inactive'>
          <h1>1900</h1>
          <h3>inactive user</h3>
        </div>
        <div className='dashboard_card_active'>
          <h1>1120</h1>
          <h3>inactive user</h3>
        </div>
        <div className='dashboard_card_active'>
          <h1>1120</h1>
          <h3>inactive user</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default Reseller_dashboard
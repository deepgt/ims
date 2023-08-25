import React,{useEffect, useState} from 'react'
import './Customer_dashboard.css'
import { useNavigate } from "react-router-dom";
import UserPieChart from '../Pi_chart/Pi_chart';
import {Chart, ArcElement} from 'chart.js'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

Chart.register(ArcElement);

function Customer_dashboard() {
  
  const nav = useNavigate();
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'false'){
        nav("/login")
    }
  })

  // Simulate fetching data from an API
  useEffect(() => {
    // Fetch your data here and update numberOfUsers state
    // For now, let's simulate the number of users as 75
    setNumberOfUsers(75);
  }, []);


  return (
    <>
    <div className='dashboard_container'>
      <h2>Customer Dashboard</h2>
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

      <div className='user_stat'>
        <div className='user_dashboard'>
          <h2>User Distribution</h2>
          <div className='pie_container'>
            <UserPieChart numberOfUsers={numberOfUsers} />
          </div>
        </div>

        <div className='side_options_user'>
          <h1>user info</h1>
          <div className='userinfo_button'>
            <KeyboardArrowRightIcon/>
            for user detail button
          </div>
          <div className='userinfo_button'>
            <KeyboardArrowRightIcon/>
            for user detail button
          </div>
          <div className='userinfo_button'>
            <KeyboardArrowRightIcon/>
            for user detail button
          </div>
          <div className='userinfo_button'>
            <KeyboardArrowRightIcon/>
            for user detail button
          </div>
        </div>

      </div>
    </div>

    </>
  )
}

export default Customer_dashboard
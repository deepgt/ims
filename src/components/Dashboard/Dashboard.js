import React,{useEffect, useState} from 'react'
import './Dashboard.css'
import { useNavigate } from "react-router-dom";
import UserPieChart from '../Pi_chart/Pi_chart';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function Dashboard() {
  
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
    {/* <nav>
      <h1>ims</h1>

      <h1>Dashboard</h1>
    
      <Button label="logout" onClick={handlelogout}/>

    </nav> */}
    <div className='dashboard_container'>
      <h2> Dashboard</h2>
      <div className='dashboard_card_container'>
        <div className='dashboard_card'>
          <h1>1120</h1>
          <h3>active user</h3>
        </div>
        <div className='dashboard_card'>
          <h1>1120</h1>
          <h3>inactive user</h3>
        </div>
        <div className='dashboard_card'>
          <h1>1120</h1>
          <h3>inactive user</h3>
        </div>
        <div className='dashboard_card'>
          <h1>1120</h1>
          <h3>inactive user</h3>
        </div>
      </div>
      <div className='user_dashboard'>
        <h2>User Distribution</h2>
        <UserPieChart numberOfUsers={numberOfUsers} />
      </div>
    </div>

    </>
  )
}

export default Dashboard
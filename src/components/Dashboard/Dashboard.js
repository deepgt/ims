import React,{useEffect} from 'react'
// import Button from '../Button/Button'
import './Dashboard.css'
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

function Dashboard() {
  
  const nav = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'false'){
        nav("/login")
    }
  })


  return (
    <>
    {/* <nav>
      <h1>ims</h1>

      <h1>Dashboard</h1>
    
      <Button label="logout" onClick={handlelogout}/>

    </nav> */}
    <div className='dashboard_container'>
      <h1> Dashboard</h1>
    </div>
    </>
  )
}

export default Dashboard
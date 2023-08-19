import React from 'react'
import './Navbar.css'
import Profile from '../Profile/Profile'
import SearchBar from '../Serachbar/SearchBar';

function Navbar() {

  return (
    <nav>
       <SearchBar />
       <Profile />
    </nav>
  )
}

export default Navbar
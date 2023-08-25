import React,{ useState, useEffect } from 'react'
import './User_detail.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function User_detail() {

    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      window.location.reload();
    };


    useEffect(() => {
        // Fetch table data from API and set it in state
        fetch('http://116.90.227.238:3000/Users')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log(error));
    }, []);

    const handleoltadd = () => {
        // Handle button click logic here
        navigate('/userform');
    };

    const removehandle =(id)=>{
        setIsOpen(!isOpen);
        // delete
        axios.delete(`http://116.90.227.238:3000/users/${id}`, {
        }) 
    }

    const updatehandle =(id)=>{
        navigate(`/userupdateform/${id}`)
    }


   
  return (
    <>
    <div className='nas_container'>
      <h1>Users details</h1>
    </div>

    {isOpen && (
        <div className="popup">
          <div className="popup-content">
          <h2>Deleted</h2>
            <p>you sucessfully deleted this record.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}

    <div className='olt_container'>
        <div className='olt_table'>
            <Button  label="Add" onClick={handleoltadd} />
            <table>
            <thead>
                <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Mobile</th>
                <th>Organization</th>
                <th>email</th>
                <th>access</th>
                <th>Dashboard</th>
                <th>staute</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                <tr key={row.id}>
                    <td>{row.username}</td>
                    <td>{row.full_name}</td>
                    <td>{row.branch}</td>
                    <td>{row.mobile}</td>
                    <td>{row.organization}</td>
                    <td>{row.email}</td>
                    <td>{row.access}</td>
                    <td>{row.dashboard}</td>
                    <td>
                        <div className='status_td'> 
                            <div className='statusvalue'><img src='../assets/images/remove.png' onClick={()=>removehandle(row.id)} alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/edit.png' onClick={()=>updatehandle(row.id)} alt='img'/></div>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

    </div>
    </>
  )
}

export default User_detail
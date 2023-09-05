import React,{ useState, useEffect } from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Hotspot_page() {

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
      <h1>hotspot manager</h1>
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
                <th>id</th>
                <th>Messages</th>
                <th>Title</th>
                <th>Created at</th>
                <th>updated at</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                <tr key={row.id}>
                    <td>{row.username}</td>
                    <td>{row.full_name}</td>
                    <td>{row.full_name}</td>
                    <td>{row.full_name}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

    </div>
    </>
  )
}

export default Hotspot_page
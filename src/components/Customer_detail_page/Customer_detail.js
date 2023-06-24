import React,{ useState, useEffect } from 'react'
import './Customer_detail.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Customer_detail() {

    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      window.location.reload();
    };


    useEffect(() => {
        // Fetch table data from API and set it in state
        fetch('http://116.90.227.238:3000/Customers')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log(error));
    }, []);

    const handleoltadd = () => {
        // Handle button click logic here
        navigate('/customerform');
    };

    const removehandle =(id)=>{
        setIsOpen(!isOpen);
        // delete
        axios.delete(`http://116.90.227.238:3000/customers/${id}`, {
        }) 
    }

    const updatehandle =(id)=>{
        navigate(`/customerupdateform/${id}`)
    }

  return (
    <>
    <div className='nas_container'>
      <h1>Customers</h1>
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


    <div className='customer_container'>
        <div className='customer_table'>
            <Button  label="Add" onClick={handleoltadd} />
            <table>
            <thead>
                <tr>
                <th>Username</th>
                <th>address_1</th>
                <th>branch</th>
                <th>Organization</th>
                <th>company</th>
                <th>customer_code</th>
                <th>package</th>
                <th>service</th>
                <th>landline</th>
                <th>package_period</th>
                <th>primary_mobile</th>
                <th>registered_date</th>
                <th>action</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                <tr key={row.id}>
                    <td>{row.username}</td>
                    <td>{row.address_1}</td>
                    <td>{row.branch}</td>
                    <td>{row.organization}</td>
                    <td>{row.company}</td>
                    <td>{row.customer_code}</td>
                    <td>{row.package}</td>
                    <td>{row.service}</td>
                    <td>{row.landline}</td>
                    <td>{row.package_period}</td>
                    <td>{row.primary_mobile}</td>
                    <td>{row.registered_date}</td>
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

export default Customer_detail



import React,{ useState, useEffect } from 'react'
import './Service.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Service() {

    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch table data from API and set it in state
        fetch('http://116.90.227.238:3000/olt')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log(error));
    }, []);

    const handleoltsubmit = () => {
        // Handle button click logic here
        navigate('/serviceform');
    };
  return (
    <>

    <div className='nas_container'>
      <h1>Service</h1>
    </div>

    <div className='Service_container'>

        <div className='Service_table'>
            <Button  label="Add" onClick={handleoltsubmit} />
            <table>
            <thead>
                <tr>
                <th>S.no.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                <tr key={row.id}>
                    <td>{row.Type}</td>
                    <td>{row.Organization}</td>
                    <td>{row.Description}</td>
                    <td>
                        <div className='status_td_service'> 
                           Active
                        </div>
                    </td>
                    <td>
                        <div className='status_td'> 
                            <div className='statusvalue'><img src='../assets/images/remove.png' alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/sync.png'alt='img' /></div>
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

export default Service
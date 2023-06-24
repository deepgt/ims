import React,{ useState, useEffect } from 'react'
import './Package.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Package() {

    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch table data from API and set it in state
        fetch('http://116.90.227.238:3000/olt')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log(error));
    }, []);

    const handleoltadd = () => {
        // Handle button click logic here
        navigate('/packageform');
    };
  return (
    <>
    <div className='nas_container'>
      <h1>Package</h1>
    </div>

    <div className='olt_container'>
        <div className='olt_table'>
            <Button  label="Add" onClick={handleoltadd} />
            <table>
            <thead>
                <tr>
                <th>Package Type</th>
                <th>Package Name</th>
                <th>Intl Up(Mbps)</th>
                <th>Local Up(Mbps)</th>
                <th>Local down(Mbps)</th>
                <th>Organization</th>
                <th>Ports</th>
                <th>Status</th>
                <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                <tr key={row.id}>
                    <td>{row.Type}</td>
                    <td>{row.Organization}</td>
                    <td>{row.Branch}</td>
                    <td>{row.OLTName}</td>
                    <td>{row.IPAddress}</td>
                    <td>{row.Ports}</td>
                    <td>{row.Description}</td>
                    <td>
                        <div className='status_td_service'> 
                           Active
                        </div>
                    </td>
                    <td>
                        <div className='status_td'> 
                            <div className='statusvalue'><img src='../assets/images/remove.png' alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/edit.png' alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/sync.png' alt='img'/></div>
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

export default Package
import React,{ useState, useEffect } from 'react'
import './Olt.css'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function Olt() {

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
        navigate('/oltform');
    };
  return (

    <>
    <div className='nas_container'>
           <h1>Olt</h1>
        </div>

    <div className='olt_container'>
        {/* <div className='olt_head'>
            <h2>OLT</h2>
        </div> */}

        <div className='olt_table'>
            <Button  label="Add" onClick={handleoltadd} />
            <table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Organization</th>
                <th>Branch</th>
                <th>OLT Name</th>
                <th>IP Address</th>
                <th>Serial No.</th>
                <th>Ports</th>
                <th>Community String</th>
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
                    <td>{row.Branch}</td>
                    <td>{row.OLTName}</td>
                    <td>{row.IPAddress}</td>
                    <td>{row.Ports}</td>
                    <td>{row.CommunityString}</td>
                    <td>{row.Description}</td>
                    <td>
                        <div className='status_td'> 
                            <div className='statusvalue_td'>SNMP</div>
                            <div className='statusvalue_td'>SSH</div>
                            <div className='statusvalue_td'> Telnet</div>
                        </div>
                    </td>
                    <td>
                        <div className='status_td'> 
                            <div className='statusvalue'><img src='../assets/images/remove.png' alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/edit.png' alt='img'/></div>
                            <div className='statusvalue'><img src='../assets/images/sync.png' alt='img'/></div>
                        </div>
                    </td>
                    <td></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

    </div>
    </>
  )
}

export default Olt
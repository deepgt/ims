import React,{ useState, useEffect } from 'react'
import './Onus.css'

function Onus() {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch table data from API and set it in state
        fetch('http://116.90.227.238:3000/olt')
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log(error));
    }, []);

    console.log(tableData)
  return (
    <>

    <div className='nas_container'>
      <h1>High Power ONUs</h1>
    </div>

    <div className='olt_container'>
    <div className='olt_table'>
        <table>
        <thead>
            <tr>
            <th>S.No.</th>
            <th>UpdatedOn</th>
            <th>OLt</th>
            <th>F/S/p</th>
            <th>N</th>
            <th>DESC</th>
            <th>Model</th>
            <th>Serial</th>
            <th>Power</th>
            <th>Action</th>
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
                    <div className='onus_power'>-33.9dBm</div>
                </td>
                <td>none</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Onus
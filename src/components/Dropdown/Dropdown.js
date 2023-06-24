import React ,{useEffect, useState}from 'react'
import './Dropdown.css'

function Dropdown(props) {

    const [options, setOptions] = useState([]);

    useEffect(() => {
      // Fetch options from API and set them in state
      fetch(props.apiEndpoint)
        .then(response => response.json())
        .then(data => setOptions(data))
        .catch(error => console.log(error));
    }, [props.apiEndpoint]);
  
    const handleChange = (event) => {
      props.onChange(event.target.value);
    };

    return (
        <select value={props.selectedValue} onChange={handleChange}>
          <option value=""> Select an option</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      );
    }

export default Dropdown
import React, { useState }  from 'react'
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import './Nas_Page.css'

function Nas_Page() {

    const [organization, setOrganization] = useState("");
    const [nasIP, setNasIP] = useState("");
    const [nasName, setNasName] = useState("");
    const [nasType, setNasType] = useState("");
    const [secret, setSecret] = useState("");
    const [ports, setPorts] = useState("");
    const [server, setServer] = useState("");
    const [snmpV2Community, setSnmpV2Community] = useState("");
    const [snmpV3Enabled, setSnmpV3Enabled] = useState(false);
    const [Name, setName] = useState("");
    const [Sha1Auth, setSha1Auth] = useState("");
    const [Aes, setAes] = useState("");
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
      const errors = {};
  
      if (!organization) {
        errors.organization = "*Organization is required";
      }
  
      if (!nasIP) {
        errors.nasIP = "*NAS IP is required";
      }
  
      if (!nasName) {
        errors.nasName = "*NAS Name is required";
      }
  
      if (!nasType) {
        errors.nasType = "*NAS Type is required";
      }
  
      if (!secret) {
        errors.secret = "*Secret is required";
      }
  
      if (!ports) {
        errors.ports = "*Ports is required";
      }
  
      if (!server) {
        errors.server = "*Server is required";
      }

      if (!snmpV2Community) {
        errors.snmpV2Community = "*snmpV2Community is required";
      }

      if (!Name) {
        errors.Name = "*name is required";
      }

      if (!Sha1Auth) {
        errors.Sha1Auth = "*Sha1 is required";
      }
      if (!Aes) {
        errors.Aes = "*Aes is required";
      }
      if (!description) {
        errors.description = "*description is required";
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // do something with the form data, e.g. send it to a server
      if (validate()) {
      console.log({
        organization,
        nasIP,
        nasName,
        nasType,
        secret,
        ports,
        server,
        snmpV2Community,
        snmpV3Enabled,
        Name,
        Sha1Auth,
        Aes,
        description,
      });

      setOrganization("");
      setNasIP("");
      setNasName("");
      setNasType("");
      setSecret("");
      setPorts("");
      setServer("");
      setSnmpV2Community("");
      setSnmpV3Enabled(false);
      setName("");
      setSha1Auth("");
      setAes("");
      setDescription("");

    };
    };

    const handleorganization = (value) => {
      setOrganization(value);
    };

    const handlenastype = (value) =>{
      setNasType(value)
    }
  

  return (
    <>

    <div className='nas_container'>
      <h1>Nas</h1>
    </div>
    <div className='form_container'>
    <form  className='nasform'>
      <div className='nasforrm_input'>
        <label>Organization:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_Organization" selectedValue={organization} onChange={handleorganization} />
          {errors.organization && <div className="error">{errors.organization}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>NAS IP:</label>
        <div className='textnerror'>
          <input type="text" value={nasIP} onChange={(e) => setNasIP(e.target.value)} />
          {errors.nasIP && <div className="error">{errors.nasIP}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>NAS Name:</label>
        <div className='textnerror'>
          <input type="text" value={nasName} onChange={(e) => setNasName(e.target.value)} />
          {errors.nasName && <div className="error">{errors.nasName}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>NAS Type:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_nastype" selectedValue={nasType} onChange={handlenastype} />
          {errors.nasType && <div className="error">{errors.nasType}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Secret:</label>
        <div className='textnerror'>
          <input type="text" value={secret} onChange={(e) => setSecret(e.target.value)} />
          {errors.secret && <div className="error">{errors.secret}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Ports:</label>
        <div className='textnerror'>
          <input type="text" value={ports} onChange={(e) => setPorts(e.target.value)} />
          {errors.ports && <div className="error">{errors.ports}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Server:</label>
        <div className='textnerror'>
          <input type="text" value={server} onChange={(e) => setServer(e.target.value)} />
          {errors.server && <div className="error">{errors.server}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>SNMP v2 Community:</label>
        <div className='textnerror'>
          <input type="text" value={snmpV2Community} onChange={(e) => setSnmpV2Community(e.target.value)} />
          {errors.snmpV2Community && <div className="error">{errors.snmpV2Community}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>SNMP v3:</label>
        <input className='nas_checkbox' type="checkbox" checked={snmpV3Enabled} onChange={(e) => setSnmpV3Enabled(e.target.checked)} />
      </div>
      <div className='nasform_input_row'>
        <label>Name:</label>
        <div className='textnerror'>
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
          {errors.Name && <div className="error">{errors.Name}</div>}
        </div>

        <label>SHA1 Auth</label>
        <div className='textnerror'>
        <input type="text" value={Sha1Auth} onChange={(e) => setSha1Auth(e.target.value)} />
        {errors.Sha1Auth && <div className="error">{errors.Sha1Auth}</div>}
        </div>
      
        <label>AES</label>
        <div className='textnerror'>
          <input type="text" value={Aes} onChange={(e) => setAes(e.target.value)} />
          {errors.Aes && <div className="error">{errors.Aes}</div>}
        </div>
      </div>

      <div className='nasforrm_input'>
        <label>description</label>
        <div className='textnerror'>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          {errors.description && <div className="error">{errors.description}</div>}
        </div>
      </div>
      <div className='nasform_button'>
        <Button label="Submit"  onClick={handleSubmit} />
      </div>
    </form>
    </div>

    </>
  )
}

export default Nas_Page
import React, { useState }  from 'react'
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import './Olt_form.css'

function Olt_form() {

    const [organization, setOrganization] = useState("");
    const [type, setType] = useState("");
    const [oltname, setOltname] = useState("");
    const [branch, setBranch] = useState("");
    const [ipaddress, setIpaddress] = useState("");
    const [ports, setPorts] = useState("");
    const [serialno, setSerialno] = useState("");
    const [communitystring, setCommunityString] = useState("");
    const [description, setDescription] = useState('');
     const [errors, setErrors] = useState({});

      const validate = () => {
      const errors = {};
  
      if (!organization) {
        errors.organization = "*Organization is required";
      }
  
      if (!type) {
        errors.type = "*type is required";
      }
  
      if (!oltname) {
        errors.oltname = "*oltname is required";
      }
  
      if (!branch) {
        errors.branch = "*Branch is required";
      }
  
      if (!ipaddress) {
        errors.ipaddress = "*ipaddress is required";
      }
  
      if (!ports) {
        errors.ports = "*Ports is required";
      }
  
      if (!serialno) {
        errors.serialno = "*serialno is required";
      }

      if (!communitystring) {
        errors.communitystring = "*communitystring is required";
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
        type,
        oltname,
        branch,
        ports,
        serialno,
        ipaddress,
        communitystring,
        description,
      });

      setOrganization("");
      setType("");
      setOltname("");
      setBranch("");
      setIpaddress("");
      setPorts("");
      setSerialno("");
      setCommunityString("");
      setDescription("");

    }
    };

    const handleorganization = (value) => {
      setOrganization(value);
    };

    const handlebranch = (value) =>{
      setBranch(value)
    }
  

  return (
    <>

    <div className='nas_container'>
      <h1>Olt form</h1>
    </div>


    <div className='form_container'>
    <form onSubmit={handleSubmit} className='nasform'>
      <div className='nasforrm_input'>
        <label>Type:</label>
        <div className='textnerror'>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          {errors.type && <div className="error">{errors.type}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Organization:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_Organization" selectedValue={organization} onChange={handleorganization} />
          {errors.organization && <div className="error">{errors.organization}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Branch:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_branch" selectedValue={branch} onChange={handlebranch} />
          {errors.branch && <div className="error">{errors.branch}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>OLT Name:</label>
        <div className='textnerror'>
          <input type="text" value={oltname} onChange={(e) => setOltname(e.target.value)} />
          {errors.oltname && <div className="error">{errors.oltname}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>IP Address:</label>
        <div className='textnerror'>
          <input type="text" value={ipaddress} onChange={(e) => setIpaddress(e.target.value)} />
          {errors.ipaddress && <div className="error">{errors.ipaddress}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Serial No.:</label>
        <div className='textnerror'>
          <input type="text" value={serialno} onChange={(e) => setSerialno(e.target.value)} />
          {errors.serialno && <div className="error">{errors.serialno}</div>}
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
        <label>Community String</label>
        <div className='textnerror'>
          <input type="text" value={communitystring} onChange={(e) => setCommunityString(e.target.value)} />
          {errors.communitystring && <div className="error">{errors.communitystring}</div>}
        </div>
      </div>

      <div className='nasforrm_input'>
        <label>Description</label>
        <div className='textnerror'>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          {errors.organization && <div className="error">{errors.organization}</div>}
        </div>
      </div>
      <div className='nasform_button'>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </form>
    </div>
    </>
  )
}

export default Olt_form
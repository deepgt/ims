import React, { useState }  from 'react'
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import './Userform.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Userform() {

    const navigate = useNavigate();
    const [organization, setOrganization] = useState("");
    const [full_name, setFull_name] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [branch, setBranch] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(""); 
    const [ip, setIp] = useState(""); 
    const [dashboardbool, setDashboardbool] = useState(false);
    const [accessbool, setAccessbool] = useState(false);
    const [userbool, setUserbool] = useState(false);
    const [master_databool, setMaster_databool] = useState(false);
    const [reportbool, setReportbool] = useState(false);
    const [financebool, setFinancebool] = useState(false);
    const [ticketsbool, setTicketsbool] = useState(false);
    const [crmbool, setCrmbool] = useState(false);
    const [inventorybool, setInventorybool] = useState(false);
    const [fieldstaffbool, setFieldstaffbool] = useState(false);
    const [smsbool, setSmsbool] = useState(false);
    const [errors, setErrors] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      navigate('/userdetail');
    };


    const validate = () => {
      const errors = {};
  
      if (!organization) {
        errors.organization = "*Organization is required";
      }
  
      if (!full_name) {
        errors.full_name = "*NAS IP is required";
      }

      if (!mobile) {
        errors.mobile = "*NAS IP is required";
      }
  
      if (!username) {
        errors.username = "*NAS Name is required";
      }
  
      if (!branch) {
        errors.branch = "*NAS Type is required";
      }
  
      if (!password) {
        errors.password = "*Secret is required";
      }
  
      if (!email) {
        errors.email = "*Ports is required";
      }
  
      if (!role) {
        errors.role = "*Server is required";
      }

      if (!ip) {
        errors.ip = "*snmpV2Community is required";
      }

      if (!dashboardbool) {
        errors.dashboardbool = "*name is required";
      }

      if (!accessbool) {
        errors.accessbool = "*Sha1 is required";
      }
      if (!userbool) {
        errors.userbool = "*Aes is required";
      }
      if (!master_databool) {
        errors.master_databool = "*description is required";
      }
      if (!reportbool) {
        errors.reportbool = "*description is required";
      }
      if (!financebool) {
        errors.financebool = "*description is required";
      }
      if (!ticketsbool) {
        errors.ticketsbool = "*description is required";
      }
      if (!crmbool) {
        errors.crmbool = "*description is required";
      }
      if (!inventorybool) {
        errors.inventorybool = "*description is required";
      }
      if (!fieldstaffbool) {
        errors.fieldstaffbool = "*description is required";
      }
      if (!smsbool) {
        errors.smsbool = "*description is required";
      }

  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const dashboard = (dashboardbool.toString())
      const access = (accessbool.toString())
      const user = (userbool.toString())
      const master_data = (master_databool.toString())
      const reports = (reportbool.toString())
      const finance = (financebool.toString())
      const tickets = (ticketsbool.toString())
      const crm = (crmbool.toString())
      const inventory = (inventorybool.toString())
      const field_staffs = (fieldstaffbool.toString())
      const sms = (smsbool.toString())
      // do something with the form data, e.g. send it to a server
      if (validate()) {

      axios.post('http://116.90.227.238:3000/users', {
        organization,
        full_name,
        username,
        mobile,
        branch,
        password,
        email,
        role,
        access,
        dashboard,
        user,
        master_data,
        reports,
        finance,
        tickets,
        crm,
        inventory,
        ip,
        field_staffs,
        sms
      }).then(
        setIsOpen(!isOpen)
      ).catch(e => {
        console.log(e);
      });

      setOrganization("");
      setFull_name("");
      setUsername("");
      setBranch("");
      setPassword("");
      setMobile("");
      setEmail("");
      setRole("");
      setIp("");
      setDashboardbool(false);
      setAccessbool(false);
      setUserbool(false);
      setMaster_databool(false);
      setReportbool(false);
      setFinancebool(false);
      setTicketsbool(false);
      setCrmbool(false);
      setInventorybool(false);
      setFieldstaffbool(false);
      setSmsbool(false);
    };
    };

    const handleorganization = (value) => {
      setOrganization(value);
    };

    const handlenastype = (value) =>{
      setBranch(value)
    }

  return (
    <>

    <div className='nas_container'>
      <h1>User form</h1>
    </div>

    {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Sucess</h2>
            <p>user is sucessfully added.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}


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
        <label>Full Name</label>
        <div className='textnerror'>
          <input type="text" value={full_name} onChange={(e) => setFull_name(e.target.value)} />
          {errors.full_name && <div classfull_name="error">{errors.full_name}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Username:</label>
        <div className='textnerror'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>mobile:</label>
        <div className='textnerror'>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          {errors.mobile && <div className="error">{errors.mobile}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Branch:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_branch" selectedValue={branch} onChange={handlenastype} />
          {errors.branch && <div className="error">{errors.branch}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Password:</label>
        <div className='textnerror'>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Email:</label>
        <div className='textnerror'>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Role:</label>
        <div className='textnerror'>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          {errors.role && <div className="error">{errors.role}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>IP:</label>
        <div className='textnerror'>
          <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
          {errors.ip && <div className="error">{errors.ip}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Dashboard:</label>
        <input className='nas_checkbox' type="checkbox" checked={dashboardbool} onChange={(e) => setDashboardbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>Access:</label>
        <input className='nas_checkbox' type="checkbox" checked={accessbool} onChange={(e) => setAccessbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>User:</label>
        <input className='nas_checkbox' type="checkbox" checked={userbool} onChange={(e) => setUserbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>master data:</label>
        <input className='nas_checkbox' type="checkbox" checked={master_databool} onChange={(e) => setMaster_databool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>Reports:</label>
        <input className='nas_checkbox' type="checkbox" checked={reportbool} onChange={(e) => setReportbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>Finance:</label>
        <input className='nas_checkbox' type="checkbox" checked={financebool} onChange={(e) => setFinancebool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>Tickets:</label>
        <input className='nas_checkbox' type="checkbox" checked={ticketsbool} onChange={(e) => setTicketsbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>CRM:</label>
        <input className='nas_checkbox' type="checkbox" checked={crmbool} onChange={(e) => setCrmbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>Inventory:</label>
        <input className='nas_checkbox' type="checkbox" checked={inventorybool} onChange={(e) => setInventorybool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>field staff:</label>
        <input className='nas_checkbox' type="checkbox" checked={fieldstaffbool} onChange={(e) => setFieldstaffbool(e.target.checked)} />
      </div>
      <div className='nasforrm_input'>
        <label>SMS:</label>
        <input className='nas_checkbox' type="checkbox" checked={smsbool} onChange={(e) => setSmsbool(e.target.checked)} />
      </div>
      <div className='nasform_button'>
        <Button label="Submit"  onClick={handleSubmit} />
      </div>
    </form>
    </div>

    </>
  )
}

export default Userform







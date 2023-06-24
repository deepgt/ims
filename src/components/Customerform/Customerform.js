import React, { useState }  from 'react'
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import './Customerform.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Customerform() {

  
    const navigate = useNavigate();
    const [organization, setOrganization] = useState("");
    const [customer_code, setCustomer_code] = useState("");
    const [service, setService] = useState("");
    const [packages, setPackages] = useState("");
    const [registered_date, setRegistered_date] = useState("");
    const [customer_name, setCustomer_name] = useState("");
    const [username, setUsername] = useState("");
    const [address_1, setAddress_1] = useState("");
    const [name, setName] = useState("");
    const [primary_mobile, setPrimary_mobile] = useState("");
    const [secondary_con, setSecondary_con] = useState("");
    const [change_user, setChange_user] = useState('');
    const [customer_notes, setCustomer_notes] = useState('');
    const [branch, setBranch] = useState('');
    const [customer_type, setCustomer_type] = useState('');
    const [package_period, setPackage_period] = useState('');
    const [company, setCompany] = useState('');
    const [last_name, setLast_name] = useState('');
    const [password, setPassword] = useState('');
    const [address_2, setAddress_2] = useState('');
    const [landline, setLandline] = useState('');
    const [secondary_mob, setSecondary_mob] = useState('');
    const [enable_portal_log, setEnable_portal_log] = useState('');
    const [send_sms, setSend_sms] = useState('');

    const [errors, setErrors] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      navigate('/customerdetail');
    };


    const validate = () => {
      const errors = {};
  
      if (!organization) {
        errors.organization = "*Organization is required";
      }
  
      if (!customer_code) {
        errors.customer_code = "*NAS IP is required";
      }
  
      if (!service) {
        errors.service = "*NAS Name is required";
      }
  
      if (!packages) {
        errors.packages = "*NAS Type is required";
      }
  
      if (!registered_date) {
        errors.registered_date = "*registered_date is required";
      }
  
      if (!customer_name) {
        errors.customer_name = "*customer_name is required";
      }
  
      if (!username) {
        errors.username = "*username is required";
      }

      if (!address_1) {
        errors.address_1 = "*address_1 is required";
      }

      if (!name) {
        errors.Name = "*name is required";
      }

      if (!primary_mobile) {
        errors.primary_mobile = "*Sha1 is required";
      }

      if (!secondary_con) {
        errors.secondary_con = "*secondary_con is required";
      }

      if (!change_user) {
        errors.change_user = "*change_user is required";
      }

      if (!customer_notes) {
        errors.customer_notes = "*customer_notes is required";
      }

      if (!branch) {
        errors.branch = "*branch is required";
      }

      if (!customer_type) {
        errors.customer_type = "*customer_type is required";
      }

      if (!package_period) {
        errors.package_period = "*package_period is required";
      }

      if (!company) {
        errors.company = "*company is required";
      }

      if (!last_name) {
        errors.last_name = "*last_name is required";
      }

      if (!password) {
        errors.password = "*password is required";
      }

      if (!address_2) {
        errors.address_2 = "*address_2 is required";
      }

      if (!landline) {
        errors.landline = "*landline is required";
      }

      if (!secondary_mob) {
        errors.secondary_mob = "*secondary_mob is required";
      }

      if (!enable_portal_log) {
        errors.enable_portal_log = "*enable_portal_log is required";
      }

      if (!send_sms) {
        errors.send_sms = "*send_sms is required";
      }

      setErrors(errors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {


      e.preventDefault();
      // do something with the form data, e.g. send it to a username
      if (validate()) {
        axios.post('http://116.90.227.238:3000/Customers', {
          organization: organization,
          customer_code: customer_code,
          service: service,
          package: packages,
        registered_date,
        customer_name,
        username,
        address_1,
        name,
        primary_mobile,
        secondary_con,
        change_user,
        customer_notes,
        branch,
        customer_type,
        package_period,
        company,
        last_name,
        password,
        address_2,
        landline,
        secondary_mob,
        enable_portal_log,
        send_sms
      }).then(
        setIsOpen(!isOpen)
      ).catch(e => {
        console.log(e);
      });

      setOrganization("");
      setCustomer_code("");
      setService("");
      setPackages("");
      setRegistered_date("");
      setCustomer_name("");
      setUsername("");
      setAddress_1("");
      setName("");
      setPrimary_mobile("");
      setSecondary_con("");
      setChange_user("");
      setCustomer_notes("");
      setBranch("");
      setCustomer_type("");
      setPackage_period("");
      setCompany("");
      setLast_name("");
      setPassword("");
      setAddress_2("");
      setLandline("");
      setSecondary_mob("");
      setEnable_portal_log("");
      setSend_sms("");
    };
    };

    const handleorganization = (value) => {
      setOrganization(value);
    };

    const handlepackages = (value) =>{
      setPackages(value)
    }

    const handlenastype = (value) =>{
      setBranch(value)
    }

    const handleconvertsms = (e) =>{
      const sms = parseInt(e.target.value)
      setSend_sms(sms)
    }
    const handleconvertlog = (e) =>{
      const log = parseInt(e.target.value)
      setEnable_portal_log(log)
    }


  return (
    <>
    <div className='nas_container'>
      <h1>Customer form</h1>
    </div>

    {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Sucess</h2>
            <p>customer is sucessfully added.</p>
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
        <label>Customer code:</label>
        <div className='textnerror'>
          <input type="text" value={customer_code} onChange={(e) => setCustomer_code(e.target.value)} />
          {errors.customer_code && <div className="error">{errors.customer_code}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Service:</label>
        <div className='textnerror'>
          <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
          {errors.service && <div className="error">{errors.service}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Packages:</label>
        <div className='textnerror'>
          <Dropdown apiEndpoint="http://116.90.227.238:3000/dropdown_Package" selectedValue={packages} onChange={handlepackages} />
          {errors.packages && <div className="error">{errors.packages}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Register date:</label>
        <div className='textnerror'>
          <input type="text" value={registered_date} onChange={(e) => setRegistered_date(e.target.value)} />
          {errors.registered_date && <div className="error">{errors.registered_date}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Customer name:</label>
        <div className='textnerror'>
          <input type="text" value={customer_name} onChange={(e) => setCustomer_name(e.target.value)} />
          {errors.customer_name && <div className="error">{errors.customer_name}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>username:</label>
        <div className='textnerror'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>address_1:</label>
        <div className='textnerror'>
          <input type="text" value={address_1} onChange={(e) => setAddress_1(e.target.value)} />
          {errors.address_1 && <div className="error">{errors.address_1}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>Name:</label>
        <div className='textnerror'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>primary mobile:</label>
        <div className='textnerror'>
          <input type="text" value={primary_mobile} onChange={(e) => setPrimary_mobile(e.target.value)} />
          {errors.primary_mobile && <div className="error">{errors.primary_mobile}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>secondary contact:</label>
        <div className='textnerror'>
          <input type="text" value={secondary_con} onChange={(e) => setSecondary_con(e.target.value)} />
          {errors.secondary_con && <div className="error">{errors.secondary_con}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>change user:</label>
        <div className='textnerror'>
          <input type="text" value={change_user} onChange={(e) => setChange_user(e.target.value)} />
          {errors.change_user && <div className="error">{errors.change_user}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>customer notes:</label>
        <div className='textnerror'>
          <input type="text" value={customer_notes} onChange={(e) => setCustomer_notes(e.target.value)} />
          {errors.customer_notes && <div className="error">{errors.customer_notes}</div>}
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
        <label>customer type:</label>
        <div className='textnerror'>
          <input type="text" value={customer_type} onChange={(e) => setCustomer_type(e.target.value)} />
          {errors.customer_type && <div className="error">{errors.customer_type}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>package period:</label>
        <div className='textnerror'>
          <input type="text" value={package_period} onChange={(e) => setPackage_period(e.target.value)} />
          {errors.package_period && <div className="error">{errors.package_period}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>company:</label>
        <div className='textnerror'>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          {errors.company && <div className="error">{errors.company}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>last name:</label>
        <div className='textnerror'>
          <input type="text" value={last_name} onChange={(e) => setLast_name(e.target.value)} />
          {errors.last_name && <div className="error">{errors.last_name}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>password:</label>
        <div className='textnerror'>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>address_2:</label>
        <div className='textnerror'>
          <input type="text" value={address_2} onChange={(e) => setAddress_2(e.target.value)} />
          {errors.address_2 && <div className="error">{errors.address_2}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>landline:</label>
        <div className='textnerror'>
          <input type="text" value={landline} onChange={(e) => setLandline(e.target.value)} />
          {errors.landline && <div className="error">{errors.landline}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>secondary mobile:</label>
        <div className='textnerror'>
          <input type="text" value={secondary_mob} onChange={(e) => setSecondary_mob(e.target.value)} />
          {errors.secondary_mob && <div className="error">{errors.secondary_mob}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>enable portal log:</label>
        <div className='textnerror'>
          <input type="text" value={enable_portal_log} onChange={handleconvertlog} />
          {errors.enable_portal_log && <div className="error">{errors.enable_portal_log}</div>}
        </div>
      </div>
      <div className='nasforrm_input'>
        <label>send_sms:</label>
        <div className='textnerror'>
          <input type="text" value={send_sms} onChange={handleconvertsms} />
          {errors.send_sms && <div className="error">{errors.send_sms}</div>}
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

export default Customerform
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import NasPage from './components/Nas_Page/Nas_Page'
import SidebarLayout from './components/Sidebar/SidebarLayout';
import Olt from './components/OLT_Page/Olt'
import Oltform from './components/Olt_form/Olt_form'
import Onus from './components/Onus_page/Onus'
import Package from './components/Package_Page/Package'
import Service from './components/Service_page/Service'
import Serviceform from './components/Service_form/Service_form';
import Userdetail from './components/User_detail_page/User_detail';
import Userform from './components/Userform/Userform';
import Customerform from './components/Customerform/Customerform';
import Customerdetail from './components/Customer_detail_page/Customer_detail';
import Userupdateform from './components/Userupdateform/Userupdateform';
import Packageform from './components/Package_form/Package_form';
import Customerupdateform from './components/Customerupdateform/Customerupdateform';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<SidebarLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/nas" element={<NasPage />} />
            <Route path="/olt" element={<Olt />} />
            <Route path="/oltform" element={<Oltform />} />
            <Route path="/onus" element={<Onus />} />
            <Route path="/package" element={<Package />} />
            <Route path="/packageform" element={<Packageform />} />
            <Route path="/service" element={<Service />} />
            <Route path="/serviceform" element={<Serviceform />} />
            <Route path="/userform" element={<Userform />} />
            <Route path="/userupdateform/:id" element={<Userupdateform />} />
            <Route path="/userdetail" element={<Userdetail />} />
            <Route path="/customerform" element={<Customerform />} />
            <Route path="/customerdetail" element={<Customerdetail />} />
            <Route path="/customerupdateform/:id" element={<Customerupdateform />} />
        </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

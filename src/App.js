import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Customer_dashboard';
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
import Financedashboard from './components/Dashboard/Finance_dashboard';
import Customerdashboard from './components/Dashboard/Customer_dashboard';
import Resellerdashboard from './components/Dashboard/Reseller_dashboard';
import Ispdashboard from './components/Dashboard/Isp_dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<SidebarLayout/>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard/customer" element={<Customerdashboard />} />
            <Route path="/dashboard/finance" element={<Financedashboard />} />
            <Route path="/dashboard/reseller" element={<Resellerdashboard />} />
            <Route path="/dashboard/isp" element={<Ispdashboard />} />
            <Route path="networking/nas" element={<NasPage />} />
            <Route path="networking/olt" element={<Olt />} />
            <Route path="/oltform" element={<Oltform />} />
            <Route path="networking/onus" element={<Onus />} />
            <Route path="/package/allpackage" element={<Package />} />
            <Route path="/packageform" element={<Packageform />} />
            <Route path="/service" element={<Service />} />
            <Route path="/serviceform" element={<Serviceform />} />
            <Route path="/userform" element={<Userform />} />
            <Route path="/userupdateform/:id" element={<Userupdateform />} />
            <Route path="/system/userdetail" element={<Userdetail />} />
            <Route path="customer/customerform" element={<Customerform />} />
            <Route path="customer/customerdetail" element={<Customerdetail />} />
            <Route path="customer/customerupdateform/:id" element={<Customerupdateform />} />
        </Route>
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

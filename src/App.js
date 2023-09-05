import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Customer_dashboard';
import Login from './components/Login/Login';
import NasPage from './components/Networking/Nas_Page/Nas_Page'
import SidebarLayout from './components/Sidebar/SidebarLayout';
import Olt from './components/Networking/OLT_Page/Olt'
import Oltform from './components/Networking/Olt_form/Olt_form'
import Onus from './components/Networking/Onus_page/Onus'
import Package from './components/Package/Package_Page/Package'
import Service from './components/Service_page/Service'
import Serviceform from './components/Service_form/Service_form';
import Userdetail from './components/System/User_detail_page/User_detail';
import Userform from './components/Userform/Userform';
import Customerform from './components/Customerform/Customerform';
import Customerdetail from './components/Customer_detail_page/Customer_detail';
import Userupdateform from './components/Userupdateform/Userupdateform';
import Packageform from './components/Package/Package_form/Package_form';
import Customerupdateform from './components/Customerupdateform/Customerupdateform';
import Financedashboard from './components/Dashboard/Finance_dashboard';
import Customerdashboard from './components/Dashboard/Customer_dashboard';
import Resellerdashboard from './components/Dashboard/Reseller_dashboard';
import Ispdashboard from './components/Dashboard/Isp_dashboard';
import Rolespage from './components/System/Roles_page/Roles_page';
import Permissionpage from './components/System/Permission_page/Permission_page';
import Cronlogpage from './components/System/Cronlog_page/Cronlog_page';
import Issuespage from './components/System/Issues_page/Issues_page';
import Smspage from './components/System/SMS_page/Sms_page';
import ImportCustomerpage from './components/System/Import_Customer_page/Import_Customer_page';
import Calllogspage from './components/System/Call_logs_page/Call_logs_page';
import Approvalspage from './components/System/Approvals_page/Approvals_page';
import Noticepage from './components/System/Notice_page/Notice_page';
import Resellerpage from './components/Organization/Reseller_page';
import Isppage from './components/Organization/Isp_page';
import Branchespage from './components/Organization/Branches_page';
import Locationpage from './components/Location/Location_page';
import Allprofile from './components/Profile/Allprofile';
import Allinvoice from './components/Finance/Allinvoice';
import Allpayment from './components/Finance/Allpayment';
import Collectionentry from './components/Finance/Collectionentry';
import Paidinvoice from './components/Finance/Paidinvoice';
import Pointofsale from './components/Finance/Pointofsale';
import Recharges from './components/Finance/Recharges';
import Resellertranscations from './components/Finance/Resellertranscations';
import Rigoapi from './components/Finance/Rigoapi';
import Schedules from './components/Finance/Schedules';
import Unpaidinvoice from './components/Finance/Unpaidinvoice';
import Tickets from './components/Support_system/Tickets';
import Teams from './components/Support_system/Teams';
import Monitoringsytem from './components/Monitoring_system/Monitoring_system';
import Mappingpage from './components/Mapping_page/Mapping_page';
import ACSpage from './components/ACS_page/ACS';
import Hotspotpage from './components/Hotspot_page/Hotspot_page';
import Tvmanagerpage from './components/Tv_manager_page/Tv_manager_page';
import Allleads from './components/Leads/AllLeads';
import Createleads from './components/Leads/Createleads';


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
            <Route path="/profile/allprofile" element={<Allprofile />} />
            <Route path="/packageform" element={<Packageform />} />
            <Route path="/service" element={<Service />} />
            <Route path="/serviceform" element={<Serviceform />} />
            <Route path="/userform" element={<Userform />} />
            <Route path="/userupdateform/:id" element={<Userupdateform />} />
            <Route path="/system/userdetail" element={<Userdetail />} />
            <Route path="/system/roles" element={<Rolespage />} />
            <Route path="/system/Permission" element={<Permissionpage />} />
            <Route path="/system/Cronlog" element={<Cronlogpage />} />
            <Route path="/system/issues" element={<Issuespage />} />
            <Route path="/system/sms" element={<Smspage />} />
            <Route path="/system/importcustomer" element={<ImportCustomerpage />} />
            <Route path="/system/calllogs" element={<Calllogspage />} />
            <Route path="/system/approvals" element={<Approvalspage />} />
            <Route path="/system/notice" element={<Noticepage />} />
            <Route path="/organization/isp" element={<Isppage />} />
            <Route path="/organization/reseller" element={<Resellerpage />} />
            <Route path="/organization/branches" element={<Branchespage />} />
            <Route path="/finance/allinvoice" element={<Allinvoice />} />
            <Route path="/finance/allpayment" element={<Allpayment />} />
            <Route path="/finance/collectionentry" element={<Collectionentry />} />
            <Route path="/finance/paidinvoice" element={<Paidinvoice />} />
            <Route path="/finance/pointofsale" element={<Pointofsale />} />
            <Route path="/finance/recharges" element={<Recharges />} />
            <Route path="/finance/resellertranscations" element={<Resellertranscations />} />
            <Route path="/finance/rigoapi" element={<Rigoapi />} />
            <Route path="/finance/schedules" element={<Schedules />} />
            <Route path="/finance/unpaidinvoice" element={<Unpaidinvoice />} />
            <Route path="/supportsystem/tickets" element={<Tickets />} />
            <Route path="/supportsystem/teams" element={<Teams />} />
            <Route path="/location" element={<Locationpage />} />
            <Route path="/monitoring" element={<Monitoringsytem />} />
            <Route path="/acs" element={<ACSpage />} />
            <Route path="/hotspot" element={<Hotspotpage />} />
            <Route path="/tv" element={<Tvmanagerpage />} />
            <Route path="/mapping" element={<Mappingpage />} />
            <Route path="/leads/allleads" element={<Allleads />} />
            <Route path="/leads/createlead" element={<Createleads />} />
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

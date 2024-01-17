 import React, {useEffect, useState} from 'react';
import './App.css';
import Header from  "./components/Header";
import SideNav  from  "./components/SideNav";
import Home from  "./components/Home";
import Footer from  "./components/Footer";
import Login from './components/Login';
import Addlead from './components/Pages/Addlead';
import Leads from './components/Pages/Leads';
import Followupleads from './components/Pages/Followupleads';
import Forwardleads from './components/Pages/Forwardleads';
import Clients from './components/Pages/Clients';
import Setting from './components/Pages/Setting';
import Sms from './components/Pages/Sms';
import Report from './components/Pages/Report';
import Createinvoice from './components/Pages/Createinvoice';
import Addclient from './components/Pages/Addclient';
import Listinvoice from './components/Pages/Listinvoice';
import Productservices from './components/Pages/Productservices';  
import ManageEmployee from './components/Pages/ManageEmployee';
import Manageexcludenos from './components/Pages/Manageexcludenos';
import ManageUser from './components/Pages/ManageUser';
import { BrowserRouter, Routes, Route, useLocation, useParams, Router  } from "react-router-dom";
import Main from './components/Main';
import Followupage from './components/Pages/Followupage';
import Home1 from './components/Home1';
import EmployeeReport from './components/Pages/EmployeeReport';
import CallLogDetails from './components/Pages/CallLogDetails';
import MultipleForm from './components/Licence/MultipleForm';
import NotFound from './components/Pages/NotFound';
import ForgotPassword from './components/ForgotPassword';
import MonthlyCalendar from './components/Pages/MonthlyCalendar';
import Incomereport from './components/Pages/Incomereport';
import ImportLead from './components/Pages/ImportLead';
import Breadcrumb from './components/Pages/Breadcrumb';
// import './ffffffff.js';
import { BreadcrumbProvider } from './components/Pages/BreadcrumbContext';
import Employeereporttt from './components/Pages/Employeereporttt';
import Productservicereport from './components/Pages/Productservicereport';
import LeadSouceReport from './components/Pages/LeadSouceReport';
import Callreport from './components/Pages/Callreport';
  function App() { 
  
    const [isLoading, setIsLoading] = useState(true);
    const [isLogined, setIsLogined]= useState(false); 
    const [user_id, setuser_id]= useState(); 


    const ddddd={
      "user_id":"656b04cc37c356cf73e8dde1",
    "datetime":"2023-12-18T16:44:00.000+00:00"
    }

    useEffect(() => {
      const fetchData = async (ddddd) => {
        try {
          const response = await fetch('https://crm-backend-1qcz.onrender.com/api/v1/getLetestnotificat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ddddd), 
          });
          const data = await response.json();
          console.log('API Response:', data);
        } catch (error) {
          console.error('API Error:', error);
        }
      };
    }, []); 
   

    useEffect(() => {
      const checkToken = async () => {
        try {
          const token = await localStorage.getItem('token');
          const user_id = await localStorage.getItem('user_id');
          setuser_id(user_id);
          setIsLogined(Boolean(token));  
        } catch (error) {
          console.error('Error reading token from localStorage:', error);
        } finally {  
           setIsLoading(false);  
        }
      };
   
      checkToken();
    }, []);
        if (!isLogined) {   
      return (           
        <BrowserRouter>   
     
             <Routes>  
          <Route path="/login" element={<Main  lo={isLogined}/>}></Route>
          {/* Catch-all route for unknown URLs */}
        <Route path="*" element={<NotFound />} />
          <Route path="/home"  element={<Main  lo={isLogined}/>}></Route>  
          <Route path="/" element={<Main  lo={isLogined}/>}></Route>  
         <Route path="/employeesreport" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/forgotpassword" element={<ForgotPassword  lo={isLogined}/>}></Route>
         
          <Route path="/call_log_details/:id" element={<Main  lo={isLogined}/>}></Route>  
          <Route path="/Addlead" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Leads" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Followupleads" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Forwardleads" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Clients" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Productservices" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/ManageEmployee" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Manageexcludenos" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/ManageUser" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Setting" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Sms" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Report" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Listinvoice" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Createinvoice" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Addclient" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/MultipleForm" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/Incomereport" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/import-lead" element={<Main  lo={isLogined}/>}></Route>
         <Route path="/followupleads/:id"  element={<Main  lo={isLogined}/>} ></Route>

                  </Routes>
        </BrowserRouter>
          );
    }  
        
  return (           
<BrowserRouter>   
<BreadcrumbProvider>
     <div className="wrapper">
     {isLogined && <Header  />}
    
     <Routes>  
       {isLogined ?(<>
        {/* <Route
            path="*"
            element={<Breadcrumb pathSegments={pathSegments} />}
          /> */}
       
          <Route path="/login" element={<Home1 />}></Route>  
          <Route path="/home" element={<Home />}></Route>  
          <Route path="/" element={<Home />}></Route>  
          <Route path="/employeesreport" element={<EmployeeReport />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/call_log_details/:id" element={<CallLogDetails/>}></Route>  
          <Route path="/Addlead" element={<Addlead />}></Route>
         <Route path="/Leads" element={<Leads />}></Route>
         <Route path="/import-lead" element={<ImportLead />}></Route>
         <Route path="/Followupleads" element={<Followupleads />}></Route>
         <Route path="/Forwardleads" element={<Forwardleads />}></Route>
         <Route path="/Clients" element={<Clients />}></Route>
         <Route path="/Productservices" element={<Productservices />}></Route>
         <Route path="/ManageEmployee" element={<ManageEmployee />}></Route>
         <Route path="/Manageexcludenos" element={<Manageexcludenos />}></Route>
         <Route path="/ManageUser" element={<ManageUser />}></Route>
         <Route path="/Setting" element={<Setting />}></Route>
         <Route path="/Sms" element={<Sms />}></Route>
         <Route path="/Report" element={<Report />}></Route>

         <Route path="/Incomereport" element={<Incomereport/>}></Route>
         <Route path="/Employeereport" element={<Employeereporttt/>}></Route>
         <Route path="/Productservicereport" element={<Productservicereport/>}></Route>
         <Route path="/Callreport" element={<Callreport/>}></Route>
         <Route path="/leadsourcereport" element={<LeadSouceReport/>}></Route>


         <Route path="/Listinvoice" element={<Listinvoice />}></Route>
         <Route path="/Createinvoice" element={<Createinvoice />}></Route>
         <Route path="/Addclient" element={<Addclient />}></Route>
         <Route path="/MultipleForm" element={<MultipleForm />}></Route>
         <Route path="/followupleads/:id"  element={<Followupage/>} ></Route></>)
         :<>
         <Route path="/login" element={<Main  lo={isLogined}/>}></Route>
         </>
         }
            </Routes>
          
        {isLogined && <SideNav />}
        {isLogined && <Footer />}
      </div>
      </BreadcrumbProvider>
</BrowserRouter>
  );
}

export default App;

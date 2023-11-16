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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Domain from './components/Licence/Domain';
import Licenceform from './components/Licence/Licenceform';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import {getHostingbydomain} from './features/licenceSlice';
import Loader from './components/Loader';
import Main from './components/Main';
import Followupage from './components/Pages/Followupage';
import Home1 from './components/Home1';
  function App() { 
    //  change 
    const {hostings,loading} = useSelector((state)=>state.app);
     //  change  
    const [isLogined, setIsLogined]= useState(false); 
    const [isDomain, setIsDomain] = useState(false);
    const [isLicenceStatus, setLicenceStatus] = useState(false);
   const dispatch=useDispatch();
    const isTokenPresent=()=>{   
      if(localStorage.getItem('token')){ return true;    }
      else return false;
    }
    // const isTokenExpired=()=>{

    // }  
    
    useEffect(() => {       
     const tokenPresent= isTokenPresent()
   //  const tokenExprired= isTokenExpired()

    // if(tokenPresent&&!tokenExprired)     
     if(tokenPresent)
     {  
      setIsLogined(true);
     }else{
      setIsLogined(false);
     }
 
    }, [])

  

    //  console.log(isLogined);
          
  return (           
<BrowserRouter>   
     <div className="wrapper">
       {isLogined?(<Header />):(<></>)}
     <Routes>  
        {!isLogined?(
        <Route path="/" element={<Main  lo={isLogined}/>}></Route>):(<>
          <Route path="/" element={<Home1 />}></Route>  
          <Route path="/home" element={<Home />}></Route>  
          <Route path="/Addlead" element={<Addlead />}></Route>
         <Route path="/Leads" element={<Leads />}></Route>
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
         <Route path="/Listinvoice" element={<Listinvoice />}></Route>
         <Route path="/Createinvoice" element={<Createinvoice />}></Route>
         <Route path="/Addclient" element={<Addclient />}></Route>
         <Route path="/followupleads/:id"  element={<Followupage/>} ></Route>
        </>)}
          
           {/* <Route path="/" element={<Home />}></Route>
         <Route path="/Addlead" element={<Addlead />}></Route>
         <Route path="/Leads" element={<Leads />}></Route>
         <Route path="/Followupleads" element={<Followupleads />}></Route>
         <Route path="/Forwardleads" element={<Forwardleads />}></Route>
         <Route path="/Clients" element={<Clients />}></Route>
         <Route path="/Productservices" element={<Productservices />}></Route>
         <Route path="/ManageEmployee" element={<ManageEmployee />}></Route>
         <Route path="/Manageexcludenos" element={<Manageexcludenos />}></Route>
         <Route path="/ManageUser" element={<ManageUser />}></Route>
         <Route path="/Setting" element={<Setting />}></Route> */}   
         </Routes>
        {isLogined?(<SideNav />):(<></>)}
          
        {isLogined?(<Footer />):(<></>)}
         
      </div>
</BrowserRouter>
  );
}

export default App;

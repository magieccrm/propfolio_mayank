 import React, {} from 'react';
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
import Productservices from './components/Pages/Productservices';
import ManageEmployee from './components/Pages/ManageEmployee';
import Manageexcludenos from './components/Pages/Manageexcludenos';
import ManageUser from './components/Pages/ManageUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

  function App() {      
  return (      
<BrowserRouter>    
     <div className="wrapper">
     <Header />
     <Routes>
        
        
         <Route path="/" element={<Home />}></Route>
         <Route path="/Home" element={<Home />}></Route>
         <Route path="/login" element={<Login />}></Route>
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
        </Routes>
        <SideNav />
         <Footer />
      </div>
</BrowserRouter>
  );
}

export default App;

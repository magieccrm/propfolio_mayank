import React ,{ useState } from "react";
import {  Link } from "react-router-dom";
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

function SideNav() {


  ////// Hide And Show/////
  const [line, setline] = useState("none");
  const [lead1, setlead] = useState("none");
  const [callManageshow, setcallManageshow] = useState("none");
      const openclose=()=>{
        if(line==='none'){
          setline("block")
        }else{
          setline("none")
        }

      }
      const lead=()=>{
        if(lead1==='none'){
          setlead("block")
        }else{
          setlead("none")
        }

      }
      const callManage=()=>{
        if(callManageshow==='none'){
          setcallManageshow("block")
        }else{
          setcallManageshow("none")
        }

      }
////// Hide And Show///////

  return (
    <div>
      <side className="main-sidebar sidebar-dark-primary elevationes-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel ">
            <div className="info">  
              <h2> Your Company </h2>
            </div>   
            <div className="image">
             
            </div>  
            <div className="info text-center">
              <h4>Welcome</h4>
              <p>Admin</p>
            </div>  
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul  className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li className="nav-item">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      Dashboard
                    </Link>   
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      <i className="fa fa-circle nav-icon" />
                      Top Navigation + Sidebar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=" " className="nav-link">
                      <i className="fa fa-circle nav-icon" />
                      Boxed
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Sidebar
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Sidebar <small>+ Custom Area</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Navbar
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Footer
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to=" "
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Collapsed Sidebar
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  <i className="nav-icon fas fa fa-home" />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
              <Link to="#" className="nav-link" onClick={lead}>
                  <i className="nav-icon fas fa fa-user-md" />
                  Lead
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:lead1}}>
                  <li className="nav-item">
                  <Link to="/Addlead" className="nav-link">
                      <p>Add Lead</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/leads" className="nav-link">
                      <p>All Leads</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/followupleads" className="nav-link">
                      <p> Followup Leads</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/forwardleads" className="nav-link">
                      <p>Forward Leads</p>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
              <Link to="#" className="nav-link" onClick={callManage}>
                  <i className="nav-icon fas fa fa fa-cog" />
                  Call  Manage  
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:callManageshow}}>
                  <li className="nav-item">
                  <Link to="/ManageEmployee" className="nav-link">
                      <p>Employees</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Manageexcludenos" className="nav-link">
                      <p>Exclude Phone Number</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/ManageUser" className="nav-link">
                      <p> User</p>
                    </Link>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item">
                <Link to=" " className="nav-link">
                  <i className="nav-icon far fa fa-sitemap" />
                  ToDo List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Clients" className="nav-link">
                  <i className="nav-icon far fa-list-alt" />
                  Clients
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productservices" className="nav-link">
                  <i className="nav-icon far fa-credit-card" />
                  Product & Services
                </Link>
              </li>

             
              <li className="nav-item">
                <Link to="#" className="nav-link" onClick={openclose}>
                  <i className="nav-icon far fa-credit-card"  />
                  Invoice <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview " style={{display:line}}>
                  <li className="nav-item">
                    <Link to="/Listinvoice" className="nav-link">
                      <p> List Invoice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Createinvoice" className="nav-link">
                      <p>Create Open invoice</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Report" className="nav-link">
                  <i className="nav-icon far fa-file" />
                  Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Sms" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  Sms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Setting" className="nav-link">
                  <i className="nav-icon far fa fa-cog" />
                  Setting
                </Link>
              </li>  
            </ul>
          </nav>
        </div>
      </side>
    </div>
  );
}

export default SideNav;

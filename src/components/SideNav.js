import React ,{ useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import companyLogo from "./avatar5.png";
function SideNav() {
  ////// Hide And Show/////
  const [line, setline] = useState("none");
  const [lead1, setlead] = useState("none");
  const [callManageshow, setcallManageshow] = useState("none");
  const [sms, setsms] = useState("none");
  const [wtsp, setwtsp] = useState("none");
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
       const smsManage=()=>{
        if(sms==='none'){  
          setsms("block") 
        }else{
          setsms("none")
        }
       }
       const wtspManage=()=>{
        if(wtsp==='none'){  
          setwtsp("block") 
        }else{
          setwtsp("none")
        }
       }
////// Hide And Show///////

const [activeItem, setActiveItem] = useState('home');
const nevigate=useNavigate();
// Function to handle menu item clicks
const handleItemClick = (itemName) => {
  nevigate(`/${itemName}`); 
  setActiveItem(itemName);
};
 

  return (
    <div>
      <side className="main-sidebar sidebar-dark-primary bg-menu-theme elevationes-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel ">
            <div className="info">  
              <h2> Your Company </h2>
            </div>   
            <div className="image">
            <div class="image pull-center">
                        <img src={companyLogo} alt="BigCo Inc. logo"/>
         </div>
            </div>  
            <div className="info text-center">
              <h4>Welcome</h4>
              <p>Admin</p>
            </div>  
          </div>

        
          <nav className="mt-2">
            <ul  className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
             

              <li className="nav-item">
                <ul className="nav nav-treeview">
                  <li className="nav-item"  >
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
    {  localStorage.getItem("role")==='admin'?(<>    
          
               <li className="nav-item">
                <a href="javascript:void(0);"  className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('home')}
               >
                  <i className="nav-icon fas fa fa-home" />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
              <Link to="#" className="nav-link" onClick={lead}>
                  <i className="nav-icon fas fa fa-user-md" />
                  Lead
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:lead1}}>
                  <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'Addlead' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('Addlead')}>
                      <p>Add Lead</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a  href="javascript:void(0);" className={activeItem === 'leads' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('leads')}>
                      <p>All Leads</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'followupleads' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('followupleads')}>
                      <p> Followup Leads</p>
                    </a>
                  </li>

                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'newlead' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('newlead')}>
                      <p> New Leads</p>
                    </a>
                  </li>

                
                
                </ul>
              </li>
              
              <li className="nav-item">
              <Link to="#" className="nav-link" onClick={callManage}>
                  <i className="nav-icon fas fa fa fa-cog" />
                  Call Manage  
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:callManageshow}}>
                <li className="nav-item">
                  <a    href="javascript:void(0);"  className={activeItem === 'ManageEmployee' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('ManageEmployee')}>
                      <p>Employees</p>
                    </a>
                  </li>
                 
                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'employeesreport' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('employeesreport')}>
                      <p> Employees Report</p>   
                    </a>
                  </li>
                  
                </ul>
              </li>

                {/* manage sms start */}

                <li className="nav-item">
              <Link to="#" className="nav-link" onClick={smsManage}>
                  <i className="nav-icon fas fa fa fa-cog" />
                   SMS Panel
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:sms}}>
                <li className="nav-item">
                  <a    href="javascript:void(0);"  className={activeItem === 'GroupSms' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('GroupSms')}>
                      <p>Compose SMS</p>
                    </a>
                  </li>
                 
                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'History' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('History')}>
                      <p> SMS Report</p>   
                    </a>
                  </li>

                 

                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('buysms')}>
                      <p> SMS Pack</p>   
                    </a>
                  </li>

                
                  
                </ul>
                </li>
         


                {/* manage sms end */}

                 {/* manage Wtsp start */}

                 <li className="nav-item">
              <Link to="#" className="nav-link" onClick={wtspManage}>
                  <i className="nav-icon fas fa fa fa-cog" />
                   What's App 
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:wtsp}}>
                <li className="nav-item">
                  <a    href="javascript:void(0);"  className={activeItem === 'GroupSmsWtsp' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('GroupSmsWtsp')}>
                      <p>Compose SMS</p>
                    </a>
                  </li>
                 
                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'HistoryWtsp' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('HistoryWtsp')}>
                      <p> SMS Report</p>   
                    </a>
                  </li>

                  

                  <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'BuysmsWtsp' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('BuysmsWtsp')}>
                      <p> SMS Pack</p>   
                    </a>
                  </li>

                  {/* <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('buysms')}>
                      <p> Setting</p>   
                    </a>
                  </li> */}
                  
                </ul>
                </li>
             

                {/* manage Wtsp end */}


                <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'UploadContent' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('UploadContent')}>
                     <i className="nav-icon far fa-credit-card" />
                     Contact's  
                    </a>
                  </li>
            

             


              <li className="nav-item">
                <a  href="javascript:void(0);"  className={activeItem === 'productservices' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('productservices')}>
                  <i className="nav-icon far fa-credit-card" />
                  Product & Services
                </a>
              </li>

             
              
              <li className="nav-item">
                <a  href="javascript:void(0);" className={activeItem === 'Report' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('Report')}>
                  <i className="nav-icon far fa-file" />
                  Report
                </a>
              </li>
              
              <li className="nav-item">
                <a  href="javascript:void(0);"
                className={activeItem === 'Setting' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleItemClick('Setting')}
                >
                  <i className="nav-icon far fa fa-cog" />
                  Setting
                </a>
              </li>  

    </>):(<>
      <li className="nav-item">
                <a   href="javascript:void(0);" className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('home')}
                  
                 >
                  <i className="nav-icon fas fa fa-home" />
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
              <Link to="#" className="nav-link" onClick={lead}>
                  <i className="nav-icon fas fa fa-user-md" />
                  Lead
                  <i className="fas fa-angle-left right" />
                </Link>
                <ul className="nav nav-treeview" style={{display:lead1}}>
                  <li className="nav-item">
                  <a  
                   href="javascript:void(0);" className={activeItem === 'Addlead' ? 'nav-link active' : 'nav-link'}
                   onClick={() => handleItemClick('Addlead')}
                 >
                      <p>Add Lead</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a 
                    href="javascript:void(0);" className={activeItem === 'leads' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('leads')}
                 >
                      <p>All Leads</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a  
                    href="javascript:void(0);" className={activeItem === 'followupleads' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('followupleads')}
                   >
                      <p> Followup Leads</p>
                    </a>
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
                  <a  href="javascript:void(0);" className={activeItem === 'ManageEmployee' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('ManageEmployee')}>
                      <p>Employees</p>
                    </a>
                  </li> 
                  {/* <li className="nav-item">
                  <Link to="/Manageexcludenos" className="nav-link">
                      <p>Exclude Phone Number</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/ManageUser" className="nav-link">
                      <p> User</p>
                    </Link>
                  </li> */}

                  <li className="nav-item">
                  <a  
                   href="javascript:void(0);" className={activeItem === 'employeesreport' ? 'nav-link active' : 'nav-link'}
                   onClick={() => handleItemClick('employeesreport')}
                  >
                      <p> Employees Report</p>   
                    </a>
                  </li>
                  
                </ul>
              </li>
    </>)  }


            </ul>
          </nav>
        </div>
      </side>
      
    </div>
  );
}

export default SideNav;

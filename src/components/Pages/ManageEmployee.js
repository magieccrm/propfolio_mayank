import React , { Fragment,useState ,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllAgent } from "../../features/agentSlice";
import { Link } from "react-router-dom";
function ManageEmployee() {
  var {message, agent,loading}=useSelector((state)=>state.agent);
  const dispatch=useDispatch();
  useEffect(()=>{
    
    dispatch(getAllAgent())
 },[])  ;

  return (
    <div>
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content py-2">
          <div className="container">
          
       
          <div className="panel panel-bd lobidrag lobipanel">
            <div className="panel-heading">
              <div className="btn-group">
                <p>Manage Employees </p>
              </div>
                 </div>
<div classname="panel-body">
  <div className="panel-bodyes">
     <div className="cards">
         <div className="table-responsive mob-bord">
            <table className="table table-bordered table-hover" id="example">
              <thead>
                <tr>
                 
                  <th>Sr. No.</th>
                  <th>Operated By</th>
                  <th>Employee Code</th>
                  <th>Registered Mobile</th>
                  
                  <th>Model Name</th>
                  <th>App Version</th>
                  <th>Registered Date</th>
                  <th>Last Call Time</th>
                 
                  <th>Status</th>
                  <th>Call Recording </th>
                  
                </tr>
              </thead>
              <tbody>
               

                {
                  agent?.agent?.map((agents,key)=>{
                
                    if(agents.agent_status=='0'){
                      var  lllll="Disable";
                  }else{
                     lllll="Enable";
                  }

                    return(
                      <tr>
                      
                      <td> {key+1}</td> 
                      
                      <td><Link to={`/call_log_details/${agents?._id}`}>{agents?.agent_name}</Link></td>
                      <td><Link to={`/call_log_details/${agents?._id}`}>{agents?._id}</Link></td>
                      <td><Link to={`/call_log_details/${agents?._id}`}>{agents.agent_mobile}</Link></td>
                     
                      <td>Xiaomi 2201117TI</td>
                      <td>1.17.7</td>
                      <td>{agents.createdAt}</td>
                      <td></td>
                     
                      <td>{lllll}</td>
                      <td>Disable</td>
                      
                      
                    </tr>
                    )

                  })
                }
                 
              </tbody>
            </table>
             
       
        </div>
      </div>
   </div>
</div>

</div>
           
    </div>
           
      </section>  
      </div>
     
    </div>
  );
}
export default ManageEmployee;

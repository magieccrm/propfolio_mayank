import React from "react";

function ManageEmployee() {
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
              <button type="button" style={{float: 'right'}} className="btn btn-sm btn-primary" data-toggle="modal" data-target="#custome"> Add New</button>
    </div>
<div classname="panel-body">
  <div className="panel-bodyes">
     <div className="cards">
         <div className="table-responsive mob-bord">
            <table className="table table-bordered table-hover" id="example">
              <thead>
                <tr>
                  <th className="list-check">  Select  </th>
                  <th>Sr. No.</th>
                  <th>Operated By</th>
                  <th>Employee Code</th>
                  <th>Registered Mobile</th>
                  <th>Tags</th>
                  <th>Model Name</th>
                  <th>App Version</th>
                  <th>Registered Date</th>
                  <th>Last Call Time</th>
                  <th>Last Sync Time</th>
                  <th>Lead Enabled</th>
                  <th>Call Recording Enabled</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="NTg=" /></td>
                  <td>1</td>
                  <td>Umesh Yadav</td>
                  <td>sde34sd</td>
                  <td>+91-XXX-XXX-XXXX</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  <td>sde34sd</td>
                  
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o" /></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-file-code-o" /></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                 
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

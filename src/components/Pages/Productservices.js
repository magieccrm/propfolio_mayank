import React from "react";

function productservices() {
  return (
    <div>
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content py-5">
          <div className="container">
          
       
          <div className="panel panel-bd lobidrag lobipanel">
            <div className="panel-heading">
              <div className="btn-group">
                <p>Lead Information </p>
              </div>
              <button type="button" style={{float: 'right'}} className="btn btn-sm btn-primary" data-toggle="modal" data-target="#custome"> Add New</button>
    </div>
<div classname="panel-body">
  <div className="panel-body">
    <div className="col-sm-12 col-md-12 col-xs-12">
      <div className="cards">
        <div className="card-headers">
          <div className="table-responsive mob-bord">
            <table className="table table-bordered table-hover" id="example">
              <thead>
                <tr>
                  <th className="list-check">
                    <input type="checkbox" className="check" />
                  </th>
                  <th>Product Name</th>
                  <th>Billing Cycle</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="NTg=" /></td>
                  <td>Python Course</td>
                  <td>Onetime</td>
                  <td>Rs. 5000</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"> <i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="NTc=" /></td>
                  <td>Business Loan</td>
                  <td>Onetime</td>
                  <td>Rs. 0</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="NTY=" /></td>
                  <td>Personal Loan</td>
                  <td>Onetime</td>
                  <td>Rs. 0</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="NTU=" /></td>
                  <td>Website Maintenance Qtly</td>
                  <td>Quarterly</td>
                  <td>Rs. 0</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
               <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="MjU=" /></td>
                  <td>Web Designing  Development</td>
                  <td>Onetime</td>
                  <td>Rs. 10000</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="MjQ=" /></td>
                  <td>Domain registration</td>
                  <td>Yearly</td>
                  <td>Rs. 850</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
                <tr>
                  <td className="list-check">
                    <input type="checkbox" className="checkme" defaultValue="MjM=" /></td>
                  <td>Web Hosting</td>
                  <td>Yearly</td>
                  <td>Rs. 2000</td>
                  <td>
                    <a href=" " className="btn btn-info btn-xs"><i className="fa fa-pencil-square-o"></i></a>
                    <a   href=" " className="btn btn-danger btn-xs"><i className="fa fa-trash" /></a>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button"   className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
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
export default productservices;

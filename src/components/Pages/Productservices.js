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
              <button type="button" style={{float: 'right'}} className="btn btn-sm btn-primary"   id="add-new"> Add New</button>
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
<div className="panel-body" id="add-new-service" style={{ display: "none" }}>
  <div className="col-sm-12 col-md-8 col-xs-12">
    <div>
      <form method="post" id="addService" name="addService">
        <div className="cardses">
           <div className="card-headers">
            <div className="row">
              <div className="col-md-4 pd-top">
                <lable>Add New Services</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input type="hidden" name="pid" id="pid" defaultValue="" />
                  <input
                    type="text"
                    className="form-control"
                    name="product_name"
                    placeholder="Product & Service Name"
                    defaultValue=""
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Setup fee</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="setupfee"
                    placeholder="Setup fee"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Payment</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Payment"
                    name="payment"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Recurring Payment</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recurring Payment"
                    name="recurring"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-md-4 pd-top">
                <lable>Billing Cycle</lable>
              </div>
              <div className="col-md-8">
                <div className="form-group">
                  <select className="form-control" name="billing-cycle">
                    <option value="">Billing cycle</option>
                    <option value="onetime">One Time</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="semesterly">Semesterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 text-right">
                <div className="resets-button">
                  <button
                    type="button"
                      className="btn btn-danger mr-3 close-div" 
                >
                    Cancel
                  </button>
                  <button
                    type="button"  
                     className="btn btn-primary"
                  >
                    Submit
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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

import React from "react";
import { Link } from "react-router-dom";
import AllFollowupstable from "./AllFollowupstable";
function Followupleads() {
  return (
    <div>
    <div className="content-wrapper">
      {/* Main content */}
      <section className="content">
        <div className="container">
        
     
  <div className="panel-body">
 <div className="row export-data">
<div className="col-md-5 col-xs-12 ">
  <div className="row">
    <div className="col-md-4 col-sm-4 col-xs-6">
      <div className="btn-group">
        <Link className="btn btnes exports" to="/Addlead"> <i className="fa fa-plus" />&nbsp;  Add Lead </Link>
      </div>
    </div>
    <div className="col-md-4 col-sm-4 mobil-nns col-xs-4">
      {/* <div className="btn-group">
        <a className="btn btnes exports" href=" "> <i className="fa fa-download" aria-hidden="true" />&nbsp;  Import </a>
      </div> */}
    </div>
    <div className="col-md-4 col-sm-4 col-xs-6">
      {/* <div className="btn-group">
        <a type="button" id="advS" className="btn btnes exports"><i className="fa fa-search" aria-hidden="true" />&nbsp;  Advance</a>
      </div> */}
    </div>
  </div>
</div>
<div className="col-md-7 col-xs-12 d-none">
  <div className="ipades " >
    <form id="bulkForm" method="POST">
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-12">
          <div className="btne-group">
            <p>Bulk Action</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-3 col-xs-12">
          <select className="form-control" name="bstatus" id="bstatus">
            <option value>Change Status</option>
            <option value={11}>Pending</option>
            <option value={7}>Call Back</option>
            <option value={3}>Meeting</option>
            <option value={6}>Invoice Send</option>
            <option value={10}>Won</option>
            <option value={5}>Lost</option>
            <option value={12}>Not Attempt</option>
            <option value={13}>Transferred</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <select className="form-control" name="agent" id="agent">
            <option value>Transfer to</option>
            <option value="MjQ=">Anurag</option>
            <option value="Mjk=">Rahul</option>
            <option value="MzE=">Jassy</option>
            <option value="MzI=">Neha</option>
            <option value="MzQ=">Devrishi</option>
            <option value="MzU=">nisar</option>
          </select>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-12">
          <input type="submit" className="btn btnes btn-primary form-control " defaultValue="Submit" autoComplete="off" />
        </div>
      </div>
    </form>
  </div>
</div>
</div>


 <div className="card-body">
  <div className="">
  <AllFollowupstable/>
  </div>

</div>



         
  </div>
        </div>
    </section>  
    </div>
   
  </div>
  );
}


export default Followupleads;

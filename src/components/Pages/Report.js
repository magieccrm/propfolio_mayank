import React from 'react'
import { Link } from "react-router-dom";

function Report() {
  return (
   <div className="content-wrapper content content-header pd-lft"> 
      <div className="contaoner py-2 pt-3">
      <div className="row">
  <div className="col-md-3 col-sm-6"> 
    <Link to="/Incomereport">
      <div className="mt-icon-box-wraper  p-a30 center m-b30 box-shadow bg-colors">
        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius   scale-in-center bg-moving">
          <span className="icon-cell text-secondry">
          
            <i className="fa fa-money fa-2x" />
          </span>
        </div>
        <div className="icon-content">
          <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
            Custom Income Report
          </h4>
        </div>
      </div>
    </Link>
  </div>
 
</div>


      </div>

    </div>
  )
}
export default Report;

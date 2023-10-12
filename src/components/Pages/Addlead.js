import React from "react";

function Addlead() {
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
              <button type="button" style={{float: 'right'}} className="btn btn-sm btn-primary" data-toggle="modal" data-target="#custome"> Add Custom Field</button>
               
            </div>
            
   <div className="panel-body">
           
            <form action name="addlead" id="addlead" method="post">
   <div className="row">   
    <input type="hidden" name="client_id"  autoComplete="off" />
    <div className="col-md-6  row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="full_name">Full Name <span className="text-danger">*</span> </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="full_name"   placeholder="Full Name" className="form-control" tabIndex={1} required="required" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="email_id">Email Id </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="email" name="email_id"    placeholder="Email Id" className="form-control"   />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="company_name">Company Name </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="company_name"  placeholder="Company Name" className="form-control ui-autocomplete-input" tabIndex={3} autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="website">Website </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="website"  placeholder="Website" className="form-control" tabIndex={4} autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="service">Service </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <select name="service"  className="form-control" value tabIndex={5}>
            <option value selected="selected">Select</option>
            <option value={37}>Addon</option>
          </select>
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="contact_no">Contact No <span className="text-danger">*</span> </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="contact_no"   placeholder="Contact No" className="form-control" tabIndex={6} required="required" autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="alternative_no">Alternative No </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="alternative_no"  placeholder="Alternative No" className="form-control" tabIndex={7} autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="position">Position </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="position"   placeholder="Position" className="form-control" tabIndex={8} autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="lead_source">Lead Source </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <select name="lead_source"  className="form-control" value tabIndex={9}>
            <option value selected="selected">Select</option>
            <option value={15}>Outbound call</option>
          </select>
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-md-6 row mob-left-right col-xs-12">
      <div className="col-md-4 pd-top mobile-hids">
        <label htmlFor="lead_cost">Lead Cost </label>
      </div>
      <div className="col-md-8 mob-left-right col-xs-12">
        <div className="form-group">
          <input type="text" name="lead_cost"  placeholder="Lead Cost" className="form-control" tabIndex={10} autoComplete="off" />
          <span className="text-danger ferror"> </span> </div>
      </div>
    </div>
    <div className="col-sm-6 row mob-left-right col-xs-12">
      <div className="row">
        <div className="col-12 address_information">
          <div className="address-sec"> Address </div>
        </div>
        
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="country">Country </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <select name="country"  className="form-control" value tabIndex={11}>
              <option value selected="selected">Select</option>
              <option value={1}>Afghanistan </option>
            </select>
            <span className="text-danger ferror"> </span> </div>
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="full_address">Full Address </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <textarea name="full_address" cols={40} rows={3}  className="form-control" tabIndex={12} defaultValue={""} />
            <span className="text-danger ferror"> </span> </div>
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="state">State </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <select name="state"  className="form-control" value tabIndex={13}>
              <option value selected="selected">Select</option>
              <option value={1}>Andhra Pradesh</option>
              <option value={2}>Arunachal Pradesh</option>
            </select>
            <span className="text-danger ferror"> </span> </div>
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="city">City </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <input type="text" name="city"   placeholder="City" className="form-control" tabIndex={14} autoComplete="off" />
            <span className="text-danger ferror"> </span> </div>
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="pincode">Pincode </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <input type="text" name="pincode"   placeholder="Pincode" className="form-control" tabIndex={15} autoComplete="off" />
            <span className="text-danger ferror"> </span> </div>
        
      </div>
    </div>
    <div className="col-sm-6 row mob-left-right col-xs-12">
      <div className="row">
        <div className="col-12 address_information">
          <div className="address-sec"> Additional Information </div>
        </div>
        <div className="row">
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="description">Description </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <textarea name="description" cols={40} rows={3}  className="form-control" tabIndex={16} defaultValue={""} />
            <span className="text-danger ferror"> </span> </div>
			
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="assign_to_agent">Assign to agent <span className="text-danger">*</span> </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <select name="assign_to_agent"  className="form-control" value tabIndex={17} required="required">
              <option value selected="selected">Select</option>
              <option value={24}>Anurag</option>
              <option value={34}>Devrishi</option>
              <option value={31}>Jassy</option>
              <option value={32}>Neha</option>
              <option value={35}>nisar</option>
              <option value={29}>Rahul</option>
            </select>
            <span className="text-danger ferror"> </span> </div>
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="status">Status <span className="text-danger">*</span> </label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12 form-group">
            <select name="status" className="form-control" value tabIndex={18} required="required">
              <option value selected="selected">Select</option>
              <option value={11}>Pending</option>
              <option value={7}>Call Back</option>
              <option value={3}>Meeting</option>
              <option value={6}>Invoice Send</option>
              <option value={10}>Won</option>
              <option value={5}>Lost</option>
              <option value={12}>Not Attempt</option>
              <option value={13}>Transferred</option>
            </select>
            <span className="text-danger ferror"> </span> </div>
        </div>
      </div>
    </div>
     </div>
	 
	
    <div className="col-sm-6 row mob-left-right col-xs-12">
      <div className="col-sm-12 row mob-left-right col-xs-12">
        <div className="address_information">
          <div className="address-sec"> Clinic Detail </div>
        </div>
        
      </div>
     
    <div className="col-sm-12 row mob-left-right col-xs-12">
      <div className="col-sm-12 row mob-left-right col-xs-12">
        <div className="address_information">
          <div className="address-sec"> Test 1 </div>
        </div>
        
      </div>
	   <div className="col-sm-12 row mob-left-right col-xs-12">
        <div className="address_information">
          <div className="address-sec">Followup</div>
        </div>
        
      </div>
    </div>
     
       
        <div className="row mob-left-right form-group">
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="followup">Description</label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <textarea name="followup_desc" tabIndex={20} className="form-control"  />
          </div>
        </div>
        <div className="row mob-left-right form-group">
          <div className="col-md-4 pd-top mobile-hids">
            <label htmlFor="followup">Followup Date</label>
          </div>
          <div className="col-md-8 mob-left-right col-xs-12  form-group">
            <input type="text" name="followup" tabIndex={20} className="form-control" autoComplete="off" />
          </div>
        </div>
      
    
    <div className="row" style={{float: 'right'}}>
      <div className="col-md-5">
        <label htmlFor="addtocal"> Add to calender
          <input type="checkbox" name="addtocal"   autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="isAddNew"    autoComplete="off" />
      <div className="col-md-4 col-xs-6">
        <button type="button"  className="btn btnes btn-sm btn-primary fontsize" tabIndex={20}>Save and Add another</button>
      </div>
      <div className="col-md-3 col-xs-6">
        <button type="button"  className="btn btnes btn-sm btn-primary pull-right fontsize" tabIndex={20}>Submit</button>
      </div>
     </div>
     </div> 
            </form>
                  
           

</div>
          </div>
        </div>
         
     </section>  
      </div>
     
    </div>
  );
}

export default Addlead;

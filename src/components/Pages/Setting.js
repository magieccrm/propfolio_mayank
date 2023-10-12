import React from "react";

function Setting() {
  return (
 
  <div className="content-wrapper"> {/* Main content */}
    <section className="content py-2 pt-3">
      <div className="container">
        <div className="panel panel-bd lobidrag lobipanel">
          <div className="panel-heading">
            <div className="btn-group">
              <p>Settings</p>
            </div>
          </div>
               <div className="container ind-module">
            <div className="row mt-50">
              <div className="col-12 col-sm-3 mt-20">
                <ul className="nav flex-column nav-tabs tabs-left border-lefttab destop-View">
                  <li>
                   <a classname="active" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="true"><i className="fa wiht fa-wrench" /> General Setting</a>
                   </li>
                  <li>
                  <a id="v-pills-crm-tab" data-toggle="pill" href="#v-pills-crm" role="tab" aria-controls="v-pills-crm" aria-selected="false"><i className="fa wiht fa-assistive-listening-systems" /> System Setting</a>
                  </li>
                  <li>
                   <a id="cronjob-tab" data-toggle="pill" href="#cronjob" role="tab" aria-controls="cronjob-inventory" aria-selected="false"><i className="fa wiht fa-wrench" /> Cron Jobs</a>
                   </li>
                  <li>
                   <a id="v-pills-purchase-tab" data-toggle="pill" href="#v-pills-purchase" role="tab" aria-controls="v-pills-purchase" aria-selected="false"> <i className="fa wiht fa-mixcloud " />Security Setting</a>
                   </li>
                  <li> 
                  <a id="v-pills-manufacturing-tab" data-toggle="pill" href="#v-pills-manufacturing" role="tab" aria-controls="v-pills-manufacturing" aria-selected="false"><i className="fa wiht fa-cog" /> Payment</a>
                  </li>
                  <li> 
                  <a id="v-pills-email-tab" data-toggle="pill" href="#v-pills-email" role="tab" aria-controls="v-pills-email" aria-selected="false"><i className="fa wiht fa-envelope" /> Email Setting</a>
                  </li>
                  <li>
                   <a  id="v-pills-smssetting-tab" data-toggle="pill" href="#v-pills-smssetting" role="tab" aria-controls="v-pills-smssetting" aria-selected="false"><i className="fa wiht fa-comments" /> SMS Setting</a>
                   </li>
                  <li> 
                  <a id="v-pills-invoicesetting-tab" data-toggle="pill" href="#v-pills-invoicesetting" role="tab" aria-controls="v-pills-invoicesetting" aria-selected="false"><i className="fa wiht fa-credit-card" /> Invoice Setting</a>
                  </li>
                  <li>
                   <a id="email-template-tab" data-toggle="pill" href="#email-template-exim" role="tab" aria-controls="email-template-exim" aria-selected="false"><i className="fa wiht fa-globe" /> Email Templates</a>
                   </li>
                  <li>
                   <a id="v-pills-department-tab" data-toggle="pill" href="#v-pills-department" role="tab" aria-controls="v-pills-department" aria-selected="false"><i className="fa wiht fa-users" /> Department</a>
                   </li>
                  <li> 
                  <a id="v-pills-crm-filed-tab" data-toggle="pill" href="#v-pills-crm-filed" role="tab" aria-controls="v-pills-crm-filed" aria-selected="false"><i className="fa wiht fa-code" /> CRM Field</a>
                  </li>
                  <li>
                   <a id="v-pills-loginhistory-tab" data-toggle="pill" href="#v-pills-loginhistory" role="tab" aria-controls="v-pills-loginHis" aria-selected="false"><i className="fa fa-sign" aria-hidden="true" />Login History</a>
                   </li>
                </ul>
              </div>
              <div className="col-12 col-sm-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
                      <form action=" " method="post" name="general_setting" id="general_setting">
                          <div className="row">               
                              <div className="col-sm-6 col-xs-12 pd-0t">
                            <div className="cardses">
                              
                                <div className="row pt-3">
                                  <div className="col-md-5 pd-top">
                                    <label>Company Name</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="company_name" className="form-control" defaultValue="MAGIEC ADVERTIZEMENT" placeholder="Company Name" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Contact Person</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="contact_person" className="form-control" defaultValue placeholder="Contact Person" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Email ID</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="company_email" className="form-control" defaultValue="billing@magiec.in" placeholder="Email ID" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Contact No. </label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="company_mobile" className="form-control" defaultValue={8178265705} placeholder="Contact No" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Website Name</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="website_name" className="form-control" defaultValue="magiec.in" placeholder="Website Name" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Company PAN No.</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="company_pan" className="form-control" defaultValue="ALZPK4008J" placeholder="PAN Number" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Company CIN</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="company_cin" className="form-control" defaultValue placeholder="CIN Number" required autoComplete="off" />
                                    </div>
                                  </div>
                                </div>
                              
                            </div>
                              </div>
                                <div className="col-sm-6 col-xs-12 pd-0t">
                              <div className="cardses">
                                
                                  <div className="row  pt-3">
                                    <div className="col-md-5 pd-top">
                                      <label>Company Address</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <textarea type="text" name="company_address" className="form-control" placeholder="Company Address" rows={2} required defaultValue={"14B9 4th Floor Dev Nagar Karol Bagh"} />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>Pincode</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="company_zip_code" className="form-control" defaultValue={110005} placeholder="Pincode" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>City</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="company_city" className="form-control" defaultValue="New Delhi" placeholder="City" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>State</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <select className="form-control" name="company_state">
                                          <option value>State</option>
                                          <option value={1}>Andhra Pradesh</option>
                                          <option value={2}>Arunachal Pradesh</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>Country</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <select className="form-control" name="company_country">
                                          <option value>Country</option>
                                          <option value={1}>Afghanistan </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>Company GST NO</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="company_gst" className="form-control" defaultValue="07ALZPK4008J1ZO" placeholder="Company GST NO" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top"> </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="submit" name="submit" defaultValue="Submit" className="btn btn-success form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                
                              </div>
                                </div>
                            </div>
                        </form>
                  </div>
                  <div className="tab-pane" id="v-pills-crm" role="tabpanel" aria-labelledby="v-pills-crm-tab">
                      <form action=" " method="post" name="system_setting" id="system_setting">
                      <div className="row"> 
                          <div className="col-sm-6 col-xs-12 pd-0t">
                            <div className="cardses">
                            <div className="row pt-3">
                              <div className="col-md-5 pd-top">
                                <label>Username</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="username" defaultValue="anurag" className="form-control" placeholder="Username" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>New Password</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="new_passwd" className="form-control" placeholder="New Password" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Locale</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="locale" defaultValue="Delhi India" className="form-control" placeholder="Locale" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Default Currency</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="default_currency" className="form-control" defaultValue="Rs." placeholder="Default Currency" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Currency Position</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <select name="currency_position" className="form-control">
                                    <option value>Select</option>
                                    <option value="before" selected>Before</option>
                                    <option value="after">After</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Currency Decimals </label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="currency_decimals" className="form-control" defaultValue={2} placeholder="Currency Decimals" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Task Notification</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <select name="task_what" className="form-control">
                                    <option value>Select</option>
                                    <option value="email">Email</option>
                                    <option value="sms">SMS</option>
                                    <option value="email-sms" selected>Email and SMS</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Followup Notification</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <select name="followup_what" className="form-control">
                                    <option value>Select</option>
                                    <option value="email">Email</option>
                                    <option value="sms" selected>SMS</option>
                                    <option value="email-sms">Email and SMS</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                           </div>
                          <div className="col-sm-6 col-xs-12">
                          <div className="cardses">
                            <div className="row pt-4">
                              <div className="col-md-5 pd-top">
                                <label>Last Password</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="password" name="last_passwd" className="form-control" placeholder="Last Password" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Purchase Code</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="purchase_code" className="form-control" defaultValue="HUUPBMBE4Q1B" placeholder="Purchase Code" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Tax</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="default_tax" className="form-control" defaultValue={18} placeholder="Tax" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Date Format</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <select className="form-control" name="date_format">
                                    <option value>Select</option>
                                    <option value="d-m-Y" selected>dd-mm-YYYY</option>
                                    <option value="m-d-Y">mm-dd-YYYY</option>
                                    <option value="Y-m-d">YYYY-mm-dd</option>
                                    <option value="Y-d-m">YYYY-dd-mm</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>File Maximum Size (kb)</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="file_max_size" defaultValue={800000} placeholder=" File max size" required className="form-control" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Task Notification Before</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="number" name="task_notified_minute" className="form-control" defaultValue={10} autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Followup Notification Before</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="number" name="followup_notified_minute" className="form-control" defaultValue={10} autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5" />
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="submit" name="submit" defaultValue="Submit" className="btn btn-success form-control" autoComplete="off" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                  </form>

                  </div>
                  <div className="tab-pane" id="cronjob" role="tabpanel" aria-labelledby="cronjob-tab">
                    <div className="row">
                        <div className="col-md-12" style={{padding: '20px 40px'}}>
                          <div className="form-group"> <b>Invoice Automate Cron Job</b>
                            <p>https://www.crm.bizavtar.com/cron/invoice_automate</p>
                            <p>Last Run : 02-10-2023 10:30:02 AM</p>
                            <button id="inv_cron_run" className="btn btn-primary btn-sm">Run Manually</button>
                          </div>
                          <div className="form-group"> <b>Task Notification Cron Job</b>
                            <p>https://www.crm.bizavtar.com/cron/notify_task</p>
                            <p>Last Run : 02-10-2023 11:27:01 PM</p>
                            <button id="task_cron_run" className="btn btn-primary btn-sm">Run Manually</button>
                          </div>
                          <div className="form-group"> <b>Followup Notification Cron Job</b>
                            <p>https://www.crm.bizavtar.com/cron/notify_followup</p>
                            <p>Last Run : 02-10-2023 11:10:07 PM</p>
                            <button id="followup_cron_run" className="btn btn-primary btn-sm">Run Manually</button>
                          </div>
                        </div>
                      </div>


                  </div>
                  <div className="tab-pane" id="v-pills-purchase" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
                      <div className="row">
                          <div className="col-sm-7 col-xs-12 pd-0t">
                          <div className="cardses">
                            <div className="row mt-tp">
                              <div className="col-md-4 pd-top">
                                <label>2 Step Verification</label>
                              </div>
                              <div className="col-md-1">
                                <div className="form-group">
                                  <input type="checkbox" name="two_step_verification" className="form-controlcheck" defaultValue="yes" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-7 pd-top">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <button type="button"   className="btn btn-sm btn-primary">Export Database</button>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <button type="button"   className="btn btn-sm btn-danger">Logout All Devices</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="col-sm-5 col-xs-12">
                          <div className="cardses">
                            <div className="row mt-tp">
                              <div className="col-md-6 pd-top">
                                <label>Login Notification</label>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <input type="checkbox" name="login_notification" className="form-controlcheck"  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <button type="submit" name="submit"    className="btn btn-success"  >Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      <table className="table dataTable no-footer" role="grid">
                        <thead>
                          <tr role="row">
                            <th className="sorting_asc">Filename</th>
                            <th className="sorting">Action</th>
                          </tr>
                        </thead>
                        <tbody id="DBbfiles">
                          <tr role="row" className="odd">
                            <td className="sorting_1">dbbackup_22_Feb_2021_16_32_04.sql</td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          <tr role="row" className="even">
                            <td className="sorting_1">dbbackup_27_Jan_2021_11_05_52.sql</td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                        </tbody>
                      </table>
                   </div>
                   <div className="tab-pane" id="v-pills-manufacturing" role="tabpanel" aria-labelledby="v-pills-manufacturing-tab">
                   <form action="" method="post" name="payment_setting" id="payment_setting">
                       <div className="address-sec">
                         <h4 style={{display: 'inline'}}>Razorpay - </h4>
                               <lable>Enable </lable><input type="checkbox" className="rozarpay" name="is_razorpay" defaultValue="yes" autoComplete="off" />
                    </div>
                        <div className="row">
                        <div className="col-sm-6 col-xs-12 ">
                          <div className="row">
                            <div className="col-md-5 pd-top">
                                <label>RAZOR_KEY_ID </label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="RAZOR_KEY_ID" defaultValue="rzptestz9f2em3bbJq6sE" className="form-control" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Success Page </label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="razorpay_surl" defaultValue="httpswww.crm.bizavtar.com" className="form-control" autoComplete="off" />
                                </div>
                              </div>
                            </div>
                         </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="row">
                            <div className="col-md-5 pd-top">
                                <label>RAZOR_KEY_SECRET</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="RAZOR_KEY_SECRET" defaultValue="qGyIIe9u2Aclo9uevNrFXU8c" className="form-control" autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>Failure Page </label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="razorpay_furl" defaultValue="httpswww.crm.bizavtar.com" className="form-control" autoComplete="off" />
                                </div>
                              </div>
                            </div>
                         </div>
                        </div>
                              <div className="col-12 address-sec">
                                <h4 style={{display: 'inline'}}>PayU Money - </h4>  &nbsp;&nbsp;
                                <lable> Enable </lable><input type="checkbox" className="rozarpay" name="is_payu" defaultValue="yes" autoComplete="off" />
                              </div>
                                <div className="row">
                              <div className="col-sm-6 col-xs-12">
                                <div className="row">
                                   <div className="col-md-5 pd-top">
                                      <label>KEY_ID </label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="PAYU_KEY_ID" defaultValue="cUQpmWIY" className="form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>Success Page </label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="payu_surl" defaultValue="httpswww.crm.bizavtar.com" className="form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                  
                                </div>
                              </div>
                              <div className="col-sm-6 col-xs-12">
                                <div className="row">
                                   <div className="col-md-5 pd-top">
                                      <label>SALT_KEY</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="PAYU_SALT_KEY" defaultValue="UjYwHYFgcd" className="form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>Failure Page </label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="payu_furl" defaultValue="httpswww.crm.bizavtar.com" className="form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                 </div>
                              </div>
                              </div>
                                <div className="row">
                                  <div className="col-md-3 pd-top">
                                    <label htmlFor="is_bank_details">Bank Details <input id="is_bank_details" type="checkbox" name="is_bank_details" defaultValue="yes" autoComplete="off" /></label>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="form-group">
                                      <textarea name="bank_details" className="form-control" defaultValue={""} />
                                    </div>
                                  </div>
                                  <div className="col-md-10" />
                                  <div className="col-md-2">
                                    <div className="form-group">
                                      <button type="submit" name="submit"   className="btn btn-success btn-block">Submit</button>
                                    </div>
                                  </div>
                                  </div>
                      </form>    
                      
                   </div>
                   <div className="tab-pane" id="v-pills-email" role="tabpanel" aria-labelledby="v-pills-email-tab">
                      <form action="" method="post" name="email_setting" id="email_setting">
                        <div className="row pt-3">
                      <div className="col-sm-6 col-xs-12 pd-0t">
                        <div className="cardsess-setting">
                          <div className="row">
                             <div className="col-md-5 pd-top">
                                <label>Company Email</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="support_email" className="form-control" defaultValue="info@bizavtar.com" placeholder="Company Email" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>SMTP Port</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="smtp_port" className="form-control" defaultValue={587} placeholder="SMTP Port" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>SMTP Host</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="smtp_host" className="form-control" defaultValue="mail.themenick.in" placeholder="SMTP Host" required autoComplete="off" />
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="cardses">
                          <div className="row">
                             <div className="col-md-5 pd-top">
                                <label>Mail Type</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <select name="mail_type" className="form-control">
                                    <option value="php" selected>PHP</option>
                                    <option value="smtp">SMTP</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>SMTP Username</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="smtp_user" className="form-control" defaultValue="info@bizavtar.com" placeholder="SMTP Username" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                                <label>SMTP Password</label>
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="text" name="smtp_pass" className="form-control" defaultValue="developer1111####" placeholder="SMTP Password" required autoComplete="off" />
                                </div>
                              </div>
                              <div className="col-md-5 pd-top">
                              </div>
                              <div className="col-md-7">
                                <div className="form-group">
                                  <input type="submit" name="submit" defaultValue="Submit" className="btn btn-success form-control" autoComplete="off" />
                                </div>
                              </div>
                            
                          </div>
                        </div>
                      </div>
                      </div>
                    </form>
                    <form name="test-smtp" id="test-smtp">
                      <div className="row">
                        <div className="col-md-8 col-xs-12">
                          <div className="cardses">
                            <div className="card-headers">    
                              <div className="row">      
                                <div className="col-md-3 pd-top">Test SMTP</div>
                                <div className="col-md-9">
                                  <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" name="email" id="text" autoComplete="off" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-xs-12">
                          <div className="cardses">
                            <div className="card-headers">    
                              <div className="form-group">
                                <button type="submit" className="btn btn-primary setting form-control">Send</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>

                   </div>
                   <div className="tab-pane" id="v-pills-smssetting" role="tabpanel" aria-labelledby="v-pills-smssetting-tab">
                       <form action method="post" name="sms_setting" id="sms_setting">
                           <div class="row">
                            <div className="col-sm-6 col-xs-12 pd-0t">
                              <div className="cardses">
                                <div className="row">
                                  
                                    <div className="col-md-5 pd-top">
                                      <label>SMS Host URL</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="sms_host" className="form-control" defaultValue="http://sms.itinfoclub.com/api/pushsms.php" placeholder="SMS Host URL" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>SMS User ID</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="sms_user_id" className="form-control" defaultValue="ITINFO" placeholder="SMS User ID" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>SMS API Key</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="sms_api_key" className="form-control" defaultValue="K-LthcyfB9goMg2fgv27pqIQ0LFlc14ICG7tfP4ZWLSV5so6Wa8tyb15bHhgqC27" placeholder="SMS API Key" required autoComplete="off" />
                                      </div>
                                    </div>
                                   
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="cardses">
                                <div className="row">
                                    <div className="col-md-5 pd-top">
                                      <label>SMS Balance</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group" style={{fontSize: '1.8rem'}}>
                                        4204                                           </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>SMS Username</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="sms_user" className="form-control" defaultValue="anuragk" placeholder="SMS Username" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top">
                                      <label>SMS Password</label>
                                    </div>
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <input type="text" name="sms_pass" className="form-control"   placeholder="SMS Password" required autoComplete="off" />
                                      </div>
                                    </div>
                                    <div className="col-md-5 pd-top" />
                                    <div className="col-md-7">
                                      <div className="form-group">
                                        <button type="submit" name="submit" defaultValue="Submit" className="btn btn-success form-control" >Submit</button>
                                      </div>
                                    </div>
                                  
                                </div>
                              </div>
                              </div>
                            </div>
                      </form>

                       
                   </div>
                   <div className="tab-pane" id="v-pills-invoicesetting" role="tabpanel" aria-labelledby="v-pills-invoicesetting-tab">
                       <form action=" " method="post" name="invoice_setting" encType="multipart/form-data">
                          <div className="row">               
                            <div className="col-sm-6 col-xs-12 pd-0t">
                              <div className="cardses">
                                <div className="row">
                                  <div className="col-md-5 pd-top">
                                    <label>Invoice Prefix</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="invoice_prefix" defaultValue className="form-control" placeholder="Invoice Prefix" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Invoice due before</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" className="form-control" name="invoices_due_before" placeholder="4 days" defaultValue={15} required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Invoices Due After</label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="invoices_due_after" defaultValue={2} className="form-control" placeholder="5 days" required autoComplete="off" />
                                    </div>
                                  </div>
                                  <div className="col-md-5 pd-top">
                                    <label>Invoice Starting Number </label>
                                  </div>
                                  <div className="col-md-7">
                                    <div className="form-group">
                                      <input type="text" name="invoice_start_no" defaultValue className="form-control" placeholder={1001} required autoComplete="off" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <div className="cardses">
                                <div className="row">
                                  <div className="card-headers">
                                    <div className="image-input image-input-outline">
                                      <div className="image-input-wrapper">
                                        <img src="https://www.crm.bizavtar.com/resource/system_uploads/inv_logo/magic-logo.png" alt="invlogo" style={{height: 120, width: 100, objectFit: 'contain'}} id="invlogo" />
                                      </div>
                                      <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title data-original-title="Change Logo">
                                        <i className="fa fa-edit icon-sm text-muted" />
                                        <input type="file" name="invoice_logo" id="invoice_logo" accept=".png, .jpg, .jpeg" autoComplete="off" />
                                        <input type="hidden" name="prev_logo" defaultValue="logo-main.png" autoComplete="off" />
                                        <input type="hidden" name="is_remove" id="is_remove" defaultValue="false" autoComplete="off" />
                                      </label>
                                      <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" id="remove_logo" data-action="remove" data-toggle="tooltip" title data-original-title="Remove Logo">
                                        <i className="fa fa-trash icon-xs text-muted" />
                                      </span>
                                    </div>
                                    <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span><br />
                                    <span className="text-danger" id="logoError" />
                                    <div className="col-md-8 pd-top"> </div>
                                    <div className="col-md-4">
                                      <div className="form-group">
                                        <input type="submit" name="submit" defaultValue="Submit" className="btn btn-success form-control" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </form>

                       
                   </div>
                   <div className="tab-pane" id="email-template-exim" role="tabpanel" aria-labelledby="v-pills-purchase-tab">
                         <div className="card">
  <div className="card-header text-center">
    <span>Use variables to call dynamic data. For user details - For date - For payment method  
    For invoice number  For amount payable  For due date 
     and For invoice items call </span>
  </div>
  <div className="card-body">
    <div className="flex flex-column mb-5 mt-4 faq-section">
      <div className="row">
        <div className="col-md-12">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="heading-1">
                <h5 className="mb-0">
                  <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                  Invoice Email
                  </a>
                </h5>
              </div>
              <div id="collapse-1" className="collapse" data-parent="#accordion" aria-labelledby="heading-1">
                <div className="card-body">
                  FXCOPIER is the worlds most reliable remote trade copier. Its allow you to copy trades almost instantly between hundreds of MT4 accounts through the use of technology. Many of the industries leading money managers use FXCopier to easily manage multiple
                  client accounts in tandem.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="heading-2">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                  Overdue Email
                  </a>
                </h5>
              </div>
              <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
                <div className="card-body">
                  After subscription you will get our special trade copier. If you want to use this copier for business purpose or other commercial pupose then directly contact with www.fxcopier.co.uk.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="heading-3">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                  Invoice conformation
                  </a>
                </h5>
              </div>
              <div id="collapse-3" className="collapse" data-parent="#accordion" aria-labelledby="heading-3">
                <div className="card-body">
                  After subscription you will get our special trade copier. If you want to use this copier for business purpose or other commercial pupose then directly contact with www.fxcopier.co.uk.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="heading-4">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                  Wrong Data Alert
                  </a>
                </h5>
              </div>
              <div id="collapse-4" className="collapse" data-parent="#accordion" aria-labelledby="heading-4">
                <div className="card-body">
                  After subscription you will get our special trade copier. If you want to use this copier for business purpose or other commercial pupose then directly contact with www.fxcopier.co.uk.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="heading-5">
                <h5 className="mb-0">
                  <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                  Testing Template 2
                  </a>
                </h5>
              </div>
              <div id="collapse-5" className="collapse" data-parent="#accordion" aria-labelledby="heading-5">
                <div className="card-body">
                  After subscription you will get our special trade copier. If you want to use this copier for business purpose or other commercial pupose then directly contact with www.fxcopier.co.uk.
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-9" />
              <div className="col-md-3">
                <div className="form-group">
                  <button type="button" className="btn btn-sm btn-primary form-control" id="addnewetemp" style={{float: 'right'}}>Add New</button>
                </div></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
                         </div>
                   </div>
                   <div className="tab-pane" id="v-pills-department" role="tabpanel" aria-labelledby="v-pills-department-tab">
                     <form name="agentForm" id="agentForm">
                              <div className="col-sm-12 col-xs-12 pt-3">
                                <div className="service-con">
                                  <div className="cardses">
                                    <div className="row">
                                       <div className="col-md-3">
                                          <div className="form-group">
                                            <input type="hidden" name="aid" id="aid" autoComplete="off" />
                                            <input type="text" className="form-control" name="aname" placeholder="User Name" required id="aname" autoComplete="off" />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <input type="email" className="form-control" name="aemail" placeholder="Email" required id="aemail" autoComplete="off" />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <input type="text" maxLength={10} className="form-control" name="amobile" placeholder="Mobile" required id="amobile" autoComplete="off" />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <input type="password" className="form-control" name="apassword" placeholder="Password" id="apassword" autoComplete="off" />
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <select className="form-control" name="aroll" id="aroll">
                                              <option value>Roll</option>
                                              <option value="sales">Sales</option>
                                              <option value="support">Support</option>
                                            </select>
                                          </div>
                                        </div>
                                         
                                        <div className="col-md-3">
                                          <div className="form-group">
                                            <select className="form-control" name="afeature" id="afeature">
                                              <option value>Feature Action</option>
                                              <option value="yes">Client Access</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="col-md-2">
                                          <div className="form-group"> 
                                            <button className="btn btn-primary form-control" type="post" id="aaction">Add</button>
                                            <button type="button" className="btn btn-danger" id="acancel" style={{display: 'none'}}>Cancel</button>
                                          </div>
                                        </div>
                                        <table className="table dataTable no-footer" role="grid">
                        <thead>
                          <tr role="row">
                            <th className="sorting_asc">User Name</th>
                            <th className="sorting">Email</th>
                            <th className="sorting">Mobile</th>
                            <th className="sorting">Roll</th>
                            <th className="sorting">Feature Action</th>
                            <th className="sorting">Status</th>
                            <th className="sorting">Action</th>
                          </tr>
                        </thead>
                        <tbody id="DBbfiles">
                          <tr role="row" className="odd">
                            <td className="sorting_1"> 	Anurag</td>
                            <td className="sorting_1"> 	sales@itinfotechnologies.com</td>
                            <td className="sorting_1"> 	5011978498</td>
                            <td className="sorting_1"> 	Sales</td>
                            <td className="sorting_1"> 	Client Access <input type="checkbox" id="" onclick="agentF(this)" data-id="MjQ=" ></input></td>
                            <td className="sorting_1"> 	Enabled </td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1"> 	Anurag</td>
                            <td className="sorting_1"> 	sales@itinfotechnologies.com</td>
                            <td className="sorting_1"> 	5011978498</td>
                            <td className="sorting_1"> 	Sales</td>
                            <td className="sorting_1"> 	Client Access <input type="checkbox" id="" onclick="agentF(this)" data-id="MjQ=" ></input></td>
                            <td className="sorting_1"> 	Enabled </td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1"> 	Anurag</td>
                            <td className="sorting_1"> 	sales@itinfotechnologies.com</td>
                            <td className="sorting_1"> 	5011978498</td>
                            <td className="sorting_1"> 	Sales</td>
                            <td className="sorting_1"> 	Client Access <input type="checkbox" id="" onclick="agentF(this)" data-id="MjQ=" ></input></td>
                            <td className="sorting_1"> 	Enabled </td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1"> 	Anurag</td>
                            <td className="sorting_1"> 	sales@itinfotechnologies.com</td>
                            <td className="sorting_1"> 	5011978498</td>
                            <td className="sorting_1"> 	Sales</td>
                            <td className="sorting_1"> 	Client Access <input type="checkbox" id="" onclick="agentF(this)" data-id="MjQ=" ></input></td>
                            <td className="sorting_1"> 	Enabled </td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          <tr role="row" className="odd">
                            <td className="sorting_1"> 	Anurag</td>
                            <td className="sorting_1"> 	sales@itinfotechnologies.com</td>
                            <td className="sorting_1"> 	5011978498</td>
                            <td className="sorting_1"> 	Sales</td>
                            <td className="sorting_1"> 	Client Access <input type="checkbox" id="" onclick="agentF(this)" data-id="MjQ=" ></input></td>
                            <td className="sorting_1"> 	Enabled </td>
                            <td><a target="_blank" href className="btn btn-xs btn-success"><i className="fa fa-download" /></a>
                              <button type="button" className="btn btn-xs btn-success"><i className="fa fa-upload" /></button>
                              <button type="button" className="btn btn-xs btn-danger"><i className="fa fa-trash" /></button></td>
                          </tr>
                          
                        </tbody>
                                          </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                     </form>
                  </div>
                  <div className="tab-pane" id="v-pills-crm-filed" role="tabpanel" aria-labelledby="v-pills-crm-filed">
                      <div className="row">
                            <ul className="nav nav-tabs">
                                <li className="active" data-active="#Option"><a data-toggle="tab" href="#home">Option</a></li>
                                <li data-active="#custome-field"><a data-toggle="tab" href="#custome-field">Custom Field</a></li>
                                <li className="custome_new">
                                 <a href="javascript:;" className data-toggle="modal" data-target="#custome">
                                 Add New Custom</a>
                                   </li>
                              </ul>
                              <div className="tab-content">
                                <div id="Option" className="tab-pane  in active">
                                  <h3>HOME</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                  
                                </div>
                                <div id="custome-field" className="tab-pane fade">
                                  <h3>Menu 1</h3>
                                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  
                                </div>
                                
                              </div>
                                


                  </div>
                  </div>
                  <div className="tab-pane" id="v-pills-loginhistory" role="tabpanel" aria-labelledby="v-pills-loginhistory-tab">
                      <div className="row">
                      <table className="table dataTable no-footer">
  <thead>
    <tr role="row">
      <th className="sorting_asc">#</th>
      <th className="sorting" >Time</th>
      <th className="sorting">System</th>
      <th className="sorting">Browser</th>
      <th className="sorting">IP</th>
      <a href>Clear History </a>

    </tr>
  </thead>
  <tbody id="loginHistory">
    <tr role="row" className="odd">
      <td className="sorting_1">1</td>
      <td>05-10-2023 11:10:09</td>
      <td>Windows 7</td>
      <td>Firefox</td>
      <td>49.206.121.127</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">2</td>
      <td>05-10-2023 10:27:27</td>
      <td>Windows 10</td>
      <td>Firefox</td>
      <td>49.206.121.127</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">3</td>
      <td>04-10-2023 12:13:49</td>
      <td>Windows 7</td>
      <td>Firefox</td>
      <td>49.206.120.231</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">4</td>
      <td>04-10-2023 10:49:35</td>
      <td>Windows 10</td>
      <td>Firefox</td>
      <td>49.206.120.231</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">5</td>
      <td>04-10-2023 10:42:58</td>
      <td>Windows 10</td>
      <td>Chrome</td>
      <td>49.206.120.231</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">6</td>
      <td>03-10-2023 17:42:01</td>
      <td>Windows 7</td>
      <td>Firefox</td>
      <td>49.206.120.142</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">7</td>
      <td>03-10-2023 13:48:22</td>
      <td>Windows 7</td>
      <td>Firefox</td>
      <td>49.206.120.142</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">8</td>
      <td>03-10-2023 10:18:08</td>
      <td>Windows 10</td>
      <td>Firefox</td>
      <td>49.206.120.201</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="odd">
      <td className="sorting_1">9</td>
      <td>02-10-2023 19:17:32</td>
      <td>Windows 10</td>
      <td>Chrome</td>
      <td>103.253.173.145</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
    <tr role="row" className="even">
      <td className="sorting_1">10</td>
      <td>02-10-2023 18:23:25</td>
      <td>Windows 10</td>
      <td>Firefox</td>
      <td>103.253.173.145</td>
      <td>National Capital Territory of Delhi, New Delhi, India</td>
    </tr>
  </tbody>
</table>

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
 
);
}

export default Setting; 
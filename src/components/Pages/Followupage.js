import { useParams } from 'react-router-dom';
import React , {Fragment, useState ,useEffect} from "react";

import { useDispatch, useSelector } from 'react-redux';

import { getAllLead } from '../../features/leadSlice';
import { getAllAgent } from "../../features/agentSlice";
import { getAllStatus } from "../../features/statusSlice";
export default function Followupage() {

  const { agent }=useSelector((state)=>state.agent);
  useEffect(()=>{
    dispatch(getAllStatus());
      dispatch(getAllLead()); 
      dispatch(getAllAgent());
  },[]); 
  const dispatch=useDispatch(); 

  const {lead,loading} = useSelector((state)=>state.lead);
  const {Statusdata} = useSelector((state)=>state.StatusData); 
  const   _id = useParams();
  
  const foundObject = lead?.lead?.find(obj => obj._id === _id.id);
  
  return (
    <div>
      <div className="content-wrapper">
    
        <section className="container">
          <div className="container">
            <div className="panel-body">
             
                <div className="col-sm-12">
                    <div className="panel panel-bd lobidrag lobipanel">
                       <div className="panel-heading">
                       <div className="row">
                       <div className="col-md-6 col-xs-6">
						<div className="btn-group"><p>Followup</p></div>
					</div>
                    <div className="col-md-6 col-xs-6">
                    <div className="reset-buttons">
							<button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#custome">
							Add Custom Field</button>
						</div>
					</div>
                       </div>
                    </div>
                    <div className="panel-body">
  
    <div className="cards">
      <div className="card-headers lead_fallow">
        <div className="table-responsive mob-bord">
          <form
            action=" "
            name="addfollowup"
            id="addfollowup"
            method="post"
          >
           
              <div className="mai-falows">
			   <div className="row">
                <div className="col-md-6 left-border">
                  <div className="row bottoms-border">
                    <div className="col-md-4 col-xs-4">
                      <lable>Full Name</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <input
                        type="hidden"
                        name="lead_id"
                        defaultValue={3868}
                        autoComplete="off"
                      />
                      <input
                        type="hidden"
                        id="lmobile"
                        defaultValue={9954321345}
                        autoComplete="off"
                      />
                     
                      <input
                        type="hidden"
                        id="lmobile"
                        name="forword_agent_id"
                        defaultValue={24}
                        autoComplete="off"
                      />
                   
                      {foundObject?.full_name} 
                    </div>
                  </div>
                 

                  <div className="row bottoms-border">
                    <div className="col-md-4 col-xs-4">
                      <lable>Email Id</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                    {foundObject?.email_id} 
                    </div>
                  </div>



                  <div className="row bottoms-border">
                    <div className="col-md-4 col-xs-4">
                      <lable>Contact No.</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                    {foundObject?.contact_no} 
                    </div>
                  </div>
                  <div className="row bottoms-border">
                    <div className="col-md-4 col-xs-4">
                      <lable>Service</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">{foundObject?.service_details[0]?.product_service_name} </div>
                  </div>
                  <div className="row bottoms-border">
                    <div className="col-md-4 col-xs-4">
                      <lable>Lead Source</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">{foundObject?.lead_source_details[0]?.lead_source_name}</div>
                  </div>
                  <div className="row bottoms-border none-border">
                    <div className="col-md-4 col-xs-4 pd-top">
                      <lable>Agent Name </lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <select className="form-control" required  name="followup_asign">
                        <option value="">Select Options </option>
                       
                          
                        {
                 agent?.agent?.map((agents,key)=>{
                return( <option  selected={foundObject?.assign_to_agent===agents._id? 'selected':''} value={agents._id}   >{agents.agent_name}</option>) 
                 })
              }

                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row status-bottom">
                    <div className="col-md-4 col-xs-4 pd-top">
                      <lable>Status</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <select
                        className="form-control"
                        name="followup_status"
                        onchange="fireFS()"
                        id="followup_status"
                        required
                      >
                        <option value="">Select Status</option>
                        { Statusdata.leadstatus?.map((status,key)=>{
                return(
                  <option   selected={foundObject?.status===status._id? 'selected':''}    value={status._id}>{status.status_name}</option>
                )
               })
            }

                      </select>
                      <select
                        className="form-control"
                        name="lost_reason_id"
                        style={{ display: "none" }}
                        id="lost_reason_id"
                      >
                        <option value="">Lost Reason</option>
                        <option value={12}>User is not responding.</option>
                        <option value={11}>User is not interested.</option>
                        <option value={13}>Customer is not available.</option>
                        <option value={4}>Details is not valid.</option>
                        <option value={2}>Customer is not responding.</option>
                        <option value={14}>Fake Lead</option>
                      </select>
                      <input
                        type="number"
                        className="form-control"
                        name="won_amount"
                        style={{ display: "none" }}
                        id="won_amount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="row status-bottom">
                    <div className="col-md-4 pd-top col-xs-4">Followup</div>
                    <div className="col-md-8 col-xs-8">
                      <input
                        type="text"
                        name="followup_date"
                        id="followup_date"
                        className="form-control"
                        placeholder="Followup date"
                        defaultValue=""
                        required=""
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="row status-bottom">
                    <div className="col-md-4 pd-top col-xs-4">
                      <lable>Description</lable>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <textarea
                        className="form-control text-areasss"
                        rows={3}
                        name="followup_desc"
                        id="followup_desc"
                        placeholder="Enter description..."
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                       <div className="add_calender text-center">
                           <div className="form-group">
                            <label htmlFor="is_cal">
                              Add to Calender &nbsp;&nbsp; 
                              <input
                                type="checkbox"
                                id="is_cal"
                                name="is_cal"
                                defaultValue="yes"
                                autoComplete="off"
                              />
                            </label>
                            </div>
                          </div>
                          </div>
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <input
                              type="submit"
                              name="submit"
                              Value="Submit"
                               className="btn btenss form-control btn-success"
                              autoComplete="off"
                              placeholder='Submit'
                            />
                         
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <input
                              type="button"
                              onclick="openSmsM();"
                              name="sms"
                              defaultValue="Send"
                              className="btn btn-warning paddingsss form-control"
                              autoComplete="off"
                            />
                          </div>
                          <div
                            id="smsModal"
                            className="modal fade"
                            role="dialog"
                          >
                            <div className="modal-dialog">
                              {/* Modal content*/}
                              <div className="modal-content">
                                <div className="modal-header">
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    ×
                                  </button>
                                  <h4 className="modal-title">SMS Content</h4>
                                </div>
                                <div className="modal-body">
                                  <label>Enter content</label>
                                  <textarea
                                    className="form-controls"
                                    id="smsC"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onclick="sendFsms();"
                                  >
                                    Send
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            
          </form>
        </div>
      </div>
      {/* Nav tabs */}
      <ul className="nav nav-tabs mobiltabs bottom-border">
        <li className="active">
          <a href="#tab6" data-toggle="tab" aria-expanded="true">
            <span className="tabnone">History</span>{" "}
            <i className="fa fa-history" aria-hidden="true" />
          </a>
        </li>
        <li className="">
          <a href="#tab3" data-toggle="tab" aria-expanded="false">
            <span className="tabnone">All Details </span>
            <i className="fa fa-info-circle" aria-hidden="true" />
          </a>
        </li>
        <li className="">
          <a href="#tab4" data-toggle="tab" aria-expanded="false">
            <span className="tabnone">Additional Information </span>
            <i className="fa fa-info" aria-hidden="true" />
          </a>
        </li>
        <li className="">
          <a href="#tab5" data-toggle="tab" aria-expanded="true">
            <span className="tabnone">Attachment </span>
            <i className="fa fa-paperclip" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <div className="cards-tab">
        <div className="tab-content">
          {/*-------------------------------------------tab2-----------------------------*/}
          <div className="tab-pane fade" id="tab3">
            <form
              action="https://www.crm.bizavtar.com/lead/update_lead"
              name="ldform"
              method="post"
              encType="multipart/form-data"
            >
              <div className="panel-body border-tbal">
                <div className="row">
                  <input
                    type="hidden"
                    name="lead_id"
                    defaultValue={3868}
                    autoComplete="off"
                  />
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="full_name">Full Name</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="full_name"
                        defaultValue="vinod"
                        id="full_name"
                        placeholder="Full Name"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="email_id">Email Id</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="email"
                        name="email_id"
                        defaultValue=""
                        id="email_id"
                        placeholder="Email Id"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="company_name">Company Name</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="company_name"
                        defaultValue=""
                        id="company_name"
                        placeholder="Company Name"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="website">Website</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="website"
                        defaultValue=""
                        id="website"
                        placeholder="Website"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="service">Service</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <select
                        name="service"
                        id="service"
                        className="form-control"
                        value={41}
                      >
                        <option value="">Select</option>
                        <option value={0}> </option>
                        <option value={37}>Addon</option>
                        <option value={54}>Book Printing Binding</option>
                        <option value={57}>Business Loan</option>
                        <option value={48}>Cloud Hosting</option>
                        <option value={42}>CRM</option>
                        <option value={30}>Digital Marketing</option>
                        <option value={50}>Digital Services Fee</option>
                        <option value={24}>Domain registration</option>
                        <option value={32}>E-Commerce</option>
                        <option value={47}>Email Hosting</option>
                        <option value={39}>Google Apps</option>
                        <option value={41} selected="selected">
                          HRMS
                        </option>
                        <option value={40}>Inventory Management</option>
                        <option value={56}>Personal Loan</option>
                        <option value={58}>Python Course</option>
                        <option value={52}>Real-Estate</option>
                        <option value={31}>SEO</option>
                        <option value={35}>SMS</option>
                        <option value={46}>Software Development</option>
                        <option value={43}>SSL</option>
                        <option value={49}>Staff Management Fee</option>
                        <option value={33}>Test Razor Pay</option>
                        <option value={25}>Web Designing Development</option>
                        <option value={23}>Web Hosting</option>
                        <option value={38}>Website Maintenance</option>
                        <option value={55}>Website Maintenance Qtly</option>
                        <option value={36}>WhatsApp</option>
                        <option value={53}>Whoisdomaintool</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="contact_no">Contact No</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="contact_no"
                        defaultValue={9954321345}
                        id="contact_no"
                        placeholder="Contact No"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="alternative_no">Alternative No</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="alternative_no"
                        defaultValue=""
                        id="alternative_no"
                        placeholder="Alternative No"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="position">Position</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="position"
                        defaultValue=""
                        id="position"
                        placeholder="Position"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="lead_source">Lead Source</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <select
                        name="lead_source"
                        id="lead_source"
                        className="form-control"
                        value={18}
                      >
                        <option value="">Select</option>
                        <option value={15}>Outbound call</option>
                        <option value={17}>Existing Client</option>
                        <option value={18} selected="selected">
                          FaceBook lead
                        </option>
                        <option value={24}>Website</option>
                        <option value={25}>google</option>
                        <option value={26}>99acre</option>
                        <option value={27}>housing</option>
                        <option value={28}>Sulekha</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12 card">
                    <div className="col-md-4 col-xs-12 pd-top">
                      <label htmlFor="lead_cost">Lead Cost</label>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <input
                        type="text"
                        name="lead_cost"
                        defaultValue=""
                        id="lead_cost"
                        placeholder="Lead Cost"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6" />
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="col-md-8 col-xs-8" />
                        <div className="col-md-4 col-xs-4">
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary form-control"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/*-------------------------------------------tab2-----------------------------*/}
          <div className="tab-pane fade" id="tab4">
            <form
              action="https://www.crm.bizavtar.com/lead/update_lead"
              name="ldform"
              method="post"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="lead_id"
                defaultValue={3868}
                autoComplete="off"
              />
              <div className="row">
                <div className="col-sm-6 col-xs-12 ">
                  <div className="card-headers">
                    <div className="col-md-12 pd-0">
                      <div className="address-sec">Address </div>
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="country">Country</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <select
                        name="country"
                        id="country"
                        className="form-control"
                        value={0}
                      >
                        <option value="">Select</option>
                        <option value={1}>Afghanistan </option>
                        <option value={2}>Albania </option>
                        <option value={3}>Algeria </option>
                        <option value={4}>American Samoa </option>
                        <option value={5}>Andorra </option>
                        <option value={6}>Angola </option>
                        <option value={7}>Anguilla </option>
                        <option value={8}>Antigua &amp; Barbuda </option>
                        <option value={9}>Argentina </option>
                        <option value={10}>Armenia </option>
                        <option value={11}>Aruba </option>
                        <option value={12}>Australia </option>
                        <option value={13}>Austria </option>
                        <option value={14}>Azerbaijan </option>
                        <option value={15}>Bahamas, The </option>
                        <option value={16}>Bahrain </option>
                        <option value={17}>Bangladesh </option>
                        <option value={18}>Barbados </option>
                        <option value={19}>Belarus </option>
                        <option value={20}>Belgium </option>
                        <option value={21}>Belize </option>
                        <option value={22}>Benin </option>
                        <option value={23}>Bermuda </option>
                        <option value={24}>Bhutan </option>
                        <option value={25}>Bolivia </option>
                        <option value={26}>Bosnia &amp; Herzegovina </option>
                        <option value={27}>Botswana </option>
                        <option value={28}>Brazil </option>
                        <option value={29}>British Virgin Is. </option>
                        <option value={30}>Brunei </option>
                        <option value={31}>Bulgaria </option>
                        <option value={32}>Burkina Faso </option>
                        <option value={33}>Burma </option>
                        <option value={34}>Burundi </option>
                        <option value={35}>Cambodia </option>
                        <option value={36}>Cameroon </option>
                        <option value={37}>Canada </option>
                        <option value={38}>Cape Verde </option>
                        <option value={39}>Cayman Islands </option>
                        <option value={40}>Central African Rep. </option>
                        <option value={41}>Chad </option>
                        <option value={42}>Chile </option>
                        <option value={43}>China </option>
                        <option value={44}>Colombia </option>
                        <option value={45}>Comoros </option>
                        <option value={46}>Congo, Dem. Rep. </option>
                        <option value={47}>Congo, Repub. of the </option>
                        <option value={48}>Cook Islands </option>
                        <option value={49}>Costa Rica </option>
                        <option value={50}>Cote d'Ivoire </option>
                        <option value={51}>Croatia </option>
                        <option value={52}>Cuba </option>
                        <option value={53}>Cyprus </option>
                        <option value={54}>Czech Republic </option>
                        <option value={55}>Denmark </option>
                        <option value={56}>Djibouti </option>
                        <option value={57}>Dominica </option>
                        <option value={58}>Dominican Republic </option>
                        <option value={59}>East Timor </option>
                        <option value={60}>Ecuador </option>
                        <option value={61}>Egypt </option>
                        <option value={62}>El Salvador </option>
                        <option value={63}>Equatorial Guinea </option>
                        <option value={64}>Eritrea </option>
                        <option value={65}>Estonia </option>
                        <option value={66}>Ethiopia </option>
                        <option value={67}>Faroe Islands </option>
                        <option value={68}>Fiji </option>
                        <option value={69}>Finland </option>
                        <option value={70}>France </option>
                        <option value={71}>French Guiana </option>
                        <option value={72}>French Polynesia </option>
                        <option value={73}>Gabon </option>
                        <option value={74}>Gambia, The </option>
                        <option value={75}>Gaza Strip </option>
                        <option value={76}>Georgia </option>
                        <option value={77}>Germany </option>
                        <option value={78}>Ghana </option>
                        <option value={79}>Gibraltar </option>
                        <option value={80}>Greece </option>
                        <option value={81}>Greenland </option>
                        <option value={82}>Grenada </option>
                        <option value={83}>Guadeloupe </option>
                        <option value={84}>Guam </option>
                        <option value={85}>Guatemala </option>
                        <option value={86}>Guernsey </option>
                        <option value={87}>Guinea </option>
                        <option value={88}>Guinea-Bissau </option>
                        <option value={89}>Guyana </option>
                        <option value={90}>Haiti </option>
                        <option value={91}>Honduras </option>
                        <option value={92}>Hong Kong </option>
                        <option value={93}>Hungary </option>
                        <option value={94}>Iceland </option>
                        <option value={95}>India </option>
                        <option value={96}>Indonesia </option>
                        <option value={97}>Iran </option>
                        <option value={98}>Iraq </option>
                        <option value={99}>Ireland </option>
                        <option value={100}>Isle of Man </option>
                        <option value={101}>Israel </option>
                        <option value={102}>Italy </option>
                        <option value={103}>Jamaica </option>
                        <option value={104}>Japan </option>
                        <option value={105}>Jersey </option>
                        <option value={106}>Jordan </option>
                        <option value={107}>Kazakhstan </option>
                        <option value={108}>Kenya </option>
                        <option value={109}>Kiribati </option>
                        <option value={110}>Korea, North </option>
                        <option value={111}>Korea, South </option>
                        <option value={112}>Kuwait </option>
                        <option value={113}>Kyrgyzstan </option>
                        <option value={114}>Laos </option>
                        <option value={115}>Latvia </option>
                        <option value={116}>Lebanon </option>
                        <option value={117}>Lesotho </option>
                        <option value={118}>Liberia </option>
                        <option value={119}>Libya </option>
                        <option value={120}>Liechtenstein </option>
                        <option value={121}>Lithuania </option>
                        <option value={122}>Luxembourg </option>
                        <option value={123}>Macau </option>
                        <option value={124}>Macedonia </option>
                        <option value={125}>Madagascar </option>
                        <option value={126}>Malawi </option>
                        <option value={127}>Malaysia </option>
                        <option value={128}>Maldives </option>
                        <option value={129}>Mali </option>
                        <option value={130}>Malta </option>
                        <option value={131}>Marshall Islands </option>
                        <option value={132}>Martinique </option>
                        <option value={133}>Mauritania </option>
                        <option value={134}>Mauritius </option>
                        <option value={135}>Mayotte </option>
                        <option value={136}>Mexico </option>
                        <option value={137}>Micronesia, Fed. St. </option>
                        <option value={138}>Moldova </option>
                        <option value={139}>Monaco </option>
                        <option value={140}>Mongolia </option>
                        <option value={141}>Montserrat </option>
                        <option value={142}>Morocco </option>
                        <option value={143}>Mozambique </option>
                        <option value={154}>N. Mariana Islands </option>
                        <option value={144}>Namibia </option>
                        <option value={145}>Nauru </option>
                        <option value={146}>Nepal </option>
                        <option value={147}>Netherlands </option>
                        <option value={148}>Netherlands Antilles </option>
                        <option value={149}>New Caledonia </option>
                        <option value={150}>New Zealand </option>
                        <option value={151}>Nicaragua </option>
                        <option value={152}>Niger </option>
                        <option value={153}>Nigeria </option>
                        <option value={155}>Norway </option>
                        <option value={156}>Oman </option>
                        <option value={157}>Pakistan </option>
                        <option value={158}>Palau </option>
                        <option value={159}>Panama </option>
                        <option value={160}>Papua New Guinea </option>
                        <option value={161}>Paraguay </option>
                        <option value={162}>Peru </option>
                        <option value={163}>Philippines </option>
                        <option value={164}>Poland </option>
                        <option value={165}>Portugal </option>
                        <option value={166}>Puerto Rico </option>
                        <option value={167}>Qatar </option>
                        <option value={168}>Reunion </option>
                        <option value={169}>Romania </option>
                        <option value={170}>Russia </option>
                        <option value={171}>Rwanda </option>
                        <option value={172}>Saint Helena </option>
                        <option value={173}>Saint Kitts &amp; Nevis </option>
                        <option value={174}>Saint Lucia </option>
                        <option value={176}>
                          Saint Vincent and the Grenadines{" "}
                        </option>
                        <option value={177}>Samoa </option>
                        <option value={178}>San Marino </option>
                        <option value={179}>Sao Tome &amp; Principe </option>
                        <option value={180}>Saudi Arabia </option>
                        <option value={181}>Senegal </option>
                        <option value={182}>Serbia </option>
                        <option value={183}>Seychelles </option>
                        <option value={184}>Sierra Leone </option>
                        <option value={185}>Singapore </option>
                        <option value={186}>Slovakia </option>
                        <option value={187}>Slovenia </option>
                        <option value={188}>Solomon Islands </option>
                        <option value={189}>Somalia </option>
                        <option value={190}>South Africa </option>
                        <option value={191}>Spain </option>
                        <option value={192}>Sri Lanka </option>
                        <option value={175}>St Pierre &amp; Miquelon </option>
                        <option value={193}>Sudan </option>
                        <option value={194}>Suriname </option>
                        <option value={195}>Swaziland </option>
                        <option value={196}>Sweden </option>
                        <option value={197}>Switzerland </option>
                        <option value={198}>Syria </option>
                        <option value={199}>Taiwan </option>
                        <option value={200}>Tajikistan </option>
                        <option value={201}>Tanzania </option>
                        <option value={202}>Thailand </option>
                        <option value={203}>Togo </option>
                        <option value={204}>Tonga </option>
                        <option value={205}>Trinidad &amp; Tobago </option>
                        <option value={206}>Tunisia </option>
                        <option value={207}>Turkey </option>
                        <option value={208}>Turkmenistan </option>
                        <option value={209}>Turks &amp; Caicos Is </option>
                        <option value={210}>Tuvalu </option>
                        <option value={211}>Uganda </option>
                        <option value={212}>Ukraine </option>
                        <option value={213}>United Arab Emirates </option>
                        <option value={214}>United Kingdom </option>
                        <option value={215}>United States </option>
                        <option value={216}>Uruguay </option>
                        <option value={217}>Uzbekistan </option>
                        <option value={218}>Vanuatu </option>
                        <option value={219}>Venezuela </option>
                        <option value={220}>Vietnam </option>
                        <option value={221}>Virgin Islands </option>
                        <option value={222}>Wallis and Futuna </option>
                        <option value={223}>West Bank </option>
                        <option value={224}>Western Sahara </option>
                        <option value={225}>Yemen </option>
                        <option value={226}>Zambia </option>
                        <option value={227}>Zimbabwe </option>
                      </select>
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="full_address">Full Address</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <textarea
                        name="full_address"
                        cols={40}
                        rows={3}
                        id="full_address"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="state">State</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <select
                        name="state"
                        id="state"
                        className="form-control"
                        value={0}
                      >
                        <option value="">Select</option>
                        <option value={1}>Andhra Pradesh</option>
                        <option value={2}>Arunachal Pradesh</option>
                        <option value={3}>Assam</option>
                        <option value={4}>Bihar </option>
                        <option value={5}>Chhattisgarh</option>
                        <option value={29}>Delhi</option>
                        <option value={6}>Goa</option>
                        <option value={7}>Gujarat</option>
                        <option value={8}>Haryana</option>
                        <option value={9}>Himachal Pradesh</option>
                        <option value={10}>Jharkhand</option>
                        <option value={11}>Karnataka</option>
                        <option value={12}>Kerala</option>
                        <option value={13}>Madhya Pradesh</option>
                        <option value={14}>Maharashtra</option>
                        <option value={15}>Manipur</option>
                        <option value={16}>Meghalaya</option>
                        <option value={17}>Mizoram</option>
                        <option value={18}>Nagaland</option>
                        <option value={19}>Odisha</option>
                        <option value={20}>Punjab</option>
                        <option value={21}>Rajasthan</option>
                        <option value={22}>Sikkim</option>
                        <option value={23}>Tamil Nadu</option>
                        <option value={24}>Telangana </option>
                        <option value={25}>Tripura</option>
                        <option value={27}>Uttar Pradesh </option>
                        <option value={26}>Uttarakhand</option>
                        <option value={28}>West Bengal</option>
                      </select>
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="city">City</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <input
                        type="text"
                        name="city"
                        defaultValue=""
                        id="city"
                        placeholder="City"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="pincode">Pincode</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <input
                        type="text"
                        name="pincode"
                        defaultValue=""
                        id="pincode"
                        placeholder="Pincode"
                        className="form-control"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 ">
                  <div className="card-headers">
                    <div className="col-md-12 pd-0">
                      <div className="address-sec">Additional Information </div>
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <textarea
                        name="description"
                        cols={40}
                        rows={3}
                        id="description"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="assign_to_agent">Assign to agent</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <select
                        name="assign_to_agent"
                        id="assign_to_agent"
                        className="form-control"
                        value={24}
                      >
                        <option value="">Select</option>
                        <option value={24} selected="selected">
                          Anurag
                        </option>
                        <option value={34}>Devrishi</option>
                        <option value={31}>Jassy</option>
                        <option value={32}>Neha</option>
                        <option value={35}>nisar</option>
                        <option value={29}>Rahul</option>
                        <option value={36}>Umesh</option>
                        <option value={37}>Umesh Yadav1</option>
                      </select>
                    </div>
                    <div className="col-md-4 pd-top">
                      <label htmlFor="status">Status</label>
                    </div>
                    <div className="col-md-8 card" style={{ padding: 0 }}>
                      <select
                        name="status"
                        id="status"
                        className="form-control"
                        value={11}
                      >
                        <option value="">Select</option>
                        <option value={11} selected="selected">
                          Pending
                        </option>
                        <option value={7}>Call Back</option>
                        <option value={3}>Meeting</option>
                        <option value={6}>Invoice Send</option>
                        <option value={10}>Won</option>
                        <option value={5}>Lost</option>
                        <option value={12}>Not Attempt</option>
                        <option value={13}>Transferred</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 ">
                  <div className="card-headers">
                    <div className="col-md-12 pd-0">
                      <div className="address-sec">Clinic Detail </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 ">
                  <div className="card-headers">
                    <div className="col-md-12 pd-0">
                      <div className="address-sec">Test 1 </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" />
                <div className="col-md-6">
                  <div className="col-md-12">
                    <div className="col-md-8 col-xs-8" />
                    <div className="col-md-4 col-xs-4">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary form-control"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="tab-pane fade" id="tab5">
            <form
              id="uploadfile"
              name="uploadfile"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="lead_id"
                defaultValue={3868}
                autoComplete="off"
              />
              <div className="panel-body border-tbal">
                <div className="col-md-2">
                  <div className="form-group">
                    <label className="file-upl-o"> Attach File</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="file"
                      name="upload_file"
                      id="upload_file"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="file_name"
                      id="file_name"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <button type="submit" className="btn btnss btn-success">
                      Upload
                    </button>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <span className="text-danger">Max Size : 800000 bytes</span>
                <span id="uerror" className="text-danger" />
                <span id="usuccess" className="text-success" />
              </div>
            </form>
            <div className="col-md-12">
              <div className="panel-body border-tbal">
                <div className="table-responsive mob-bord">
                  <table
                    className="table table-bordered table-hover"
                    id="uploadtable"
                  >
                    <thead>
                      <tr>
                        <th className="list-serila">Serial</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Date </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="lead_docs"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade active in" id="tab6">
            <div className="panel-body border-tbal">
              <div className="table-responsive mob-bord">
                <table className="table table-bordered" id="followup_table">
                  <thead>
                    <tr>
                      <th>COMMENTED BY</th>
                      <th>DATE</th>
                      <th>STATUS</th>
                      <th>FOLLOWUP DATE</th>
                      <th>COMMENT</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
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
  )
}

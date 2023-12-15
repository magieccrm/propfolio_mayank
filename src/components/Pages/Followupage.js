import { useNavigate, useParams } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllLead } from "../../features/leadSlice";
import { getAllAgent } from "../../features/agentSlice";
import { getAllStatus } from "../../features/statusSlice";
import { getAllCountry } from "../../features/country_stateSlice";
import { getStatebycountry } from "../../features/getStateByCountrySlice";
import { addfollowup, getAllFollowup } from "../../features/followupSlice";
import Loader from "../Loader";
import { toast } from "react-toastify";
import { getAllLostReason } from "../../features/lostreasonSlice";
export default function Followupage() {
  const navigate = useNavigate();
  const { agent } = useSelector((state) => state.agent);
  const { CountryState } = useSelector((state) => state.Country_State);
  const { StateByCountry } = useSelector((state) => state.getStateByCountry);
  const { followup } = useSelector((state) => state.followup);
  const { lostreason } = useSelector(
    (state) => state.lostreasonSlice.LostReasondata
  );

  const _id = useParams();
  // console.log(_id.id)
  useEffect(() => {
    dispatch(getAllStatus());
    dispatch(getAllLead());
    dispatch(getAllAgent());
    dispatch(getAllCountry());
    dispatch(getAllLostReason());

    if (_id.id) {
      dispatch(getAllFollowup(_id.id));
    }
  }, [_id.id]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    getStateByCountry(e.target.value);
  };

  const getStateByCountry = (data) => {
    dispatch(getStatebycountry(data));
  };

  const { lead, loading } = useSelector((state) => state.lead);

  const { Statusdata } = useSelector((state) => state.StatusData);

  const foundObject = lead?.lead?.find((obj) => obj._id === _id.id);

  const [data, setdata] = useState({});
  const [show, setshow] = useState("none");
  const [showforlostlead, setshowforlostlead] = useState("none");

  const setStatus = (e) => {
    if (e.target.value == "6539fa950b9756b61601287b") {
      setdata(e.target.value);

      setshow("block");
      setshowforlostlead("none");
    }else 
    if (e.target.value == "6561c44233093ed343745a3e") {
      setdata(e.target.value);
      setshow("none");
      setshowforlostlead("block");
    }else{
      setshow("none");
      setshowforlostlead("none");
    }

  };

  const submitFollowup = async (e) => {
    e.preventDefault();

    const updatedLeadData = await {
      ...data,
      lead_id: e.target.lead_id.value,
      commented_by: e.target.elements.commented_by?.value,
      assign_to_agent: e.target.elements.assign_to_agent?.value,
      followup_status_id: e.target.elements.followup_status_id?.value,
    };
    // console.log(data);

    if (updatedLeadData.lead_id) {
      const aaaa = await dispatch(addfollowup(updatedLeadData));
     
      if (aaaa.payload.success === true) {  
        navigate("/Followupleads");   
        toast.success(aaaa.payload?.message);  

      } else {
        toast.warn(aaaa.payload?.message);
      }
    } else {
      toast.warn("all field required");
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="container">
          {loading ? (
            <Loader />
          ) : (
            <div className="container">
              <div className="panel-body">
                <div className="col-sm-12">
                  <div className="panel panel-bd lobidrag lobipanel">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-md-6 col-xs-6">
                          <div className="btn-group">
                            <p>Followup</p>
                          </div>
                        </div>
                        <div className="col-md-6 col-xs-6">
                          <div className="reset-buttons"></div>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="cards">
                        <div className="card-headers lead_fallow">
                          <div className=" mob-bord">
                            <form onSubmit={submitFollowup}>
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
                                          value={foundObject?._id}
                                        />
                                        <input
                                          type="hidden"
                                          name="commented_by"
                                          value={localStorage.getItem(
                                            "user_id"
                                          )}
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
                                      <div className="col-md-8 col-xs-8">
                                        {
                                          foundObject?.service_details[0]
                                            ?.product_service_name
                                        }{" "}
                                      </div>
                                    </div>
                                    <div className="row bottoms-border">
                                      <div className="col-md-4 col-xs-4">
                                        <lable>Lead Source</lable>
                                      </div>
                                      <div className="col-md-8 col-xs-8">
                                        {
                                          foundObject?.lead_source_details[0]
                                            ?.lead_source_name
                                        }
                                      </div>
                                    </div>
                                    <div className="row bottoms-border none-border">
                                      <div className="col-md-4 col-xs-4 pd-top">
                                        <lable>Agent Name </lable>
                                      </div>
                                      <div className="col-md-8 col-xs-8">
                                        <select
                                          className="form-control"
                                          required
                                          onChange={(e) =>
                                            setdata({
                                              ...data,
                                              assign_to_agent: e.target.value,
                                            })
                                          }
                                          name="assign_to_agent"
                                        >
                                          <option value="">
                                            Select Options{" "}
                                          </option>

                                          {agent?.agent?.map((agents, key) => {
                                            return (
                                              <option
                                                selected={
                                                  foundObject?.assign_to_agent ===
                                                  agents._id
                                                    ? "selected"
                                                    : ""
                                                }
                                                value={agents._id}
                                              >  {agents.agent_name}
                                              </option>
                                            );
                                          })}
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
                                          // onChange={e=>setdata({...data,followup_status_id:e.target.value})}
                                          onChange={setStatus}
                                          className="form-control"
                                          name="followup_status_id"
                                          id="followup_status"
                                          required
                                        >
                                          <option value="">
                                            Select Status
                                          </option>
                                          {Statusdata.leadstatus?.map(
                                            (status, key) => {
                                              return (
                                                <option
                                                  selected={
                                                    foundObject?.status ===
                                                    status._id
                                                      ? "selected"
                                                      : ""
                                                  }
                                                  value={status._id}
                                                >
                                                  {status.status_name}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                        <input
                                          type="number"
                                          onChange={(e) =>
                                            setdata({
                                              ...data,
                                              followup_won_amount:
                                                e.target.value,
                                            })
                                          }
                                          style={{ display: show }}
                                          className="form-control"
                                          name="followup_won_amount"
                                        />

                                        <select
                                          style={{ display: showforlostlead }}
                                          onChange={(e) =>
                                            setdata({
                                              ...data,
                                              followup_lost_reason_id:
                                                e.target.value,
                                            })
                                          }
                                          className="form-control"
                                          name="followup_lost_reason_id"
                                          id="followup_lost_reason_id"
                                          
                                        >
                                          <option value="">
                                            Select Status 
                                          </option>
                                          {lostreason?.map(
                                            (lostreason1, key) => {
                                              return (
                                                <option
                                                  selected={
                                                    foundObject?.status ===
                                                    lostreason1._id
                                                      ? "selected"
                                                      : ""
                                                  }
                                                  value={lostreason1._id}
                                                >
                                                  {lostreason1.lost_reason_name}
                                                </option>
                                              );
                                            }
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row status-bottom">
                                      <div className="col-md-4 pd-top col-xs-4">
                                        Followup
                                      </div>
                                      <div className="col-md-8 col-xs-8">
                                        <input
                                          onChange={(e) =>
                                            setdata({
                                              ...data,
                                              followup_date: e.target.value,
                                            })
                                          }
                                          type="datetime-local"
                                          name="followup_date"
                                          id="followup_date"
                                          className="form-control"
                                          placeholder="Followup date"
                                          required
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
                                          onChange={(e) =>
                                            setdata({
                                              ...data,
                                              followup_desc: e.target.value,
                                            })
                                          }
                                          name="followup_desc"
                                          id="followup_desc"
                                          placeholder="Enter description..."
                                          required=""
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
                                               onChange={(e) =>
                                                setdata({
                                                  ...data,
                                                  add_to_calender: e.target.value,
                                                })
                                              }
                                                type="checkbox"
                                                id="is_cal"
                                                name="add_to_calender"
                                                defaultValue="yes"
                                                autoComplete="off"
                                              />
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                          <input
                                            type="submit"
                                            name="submit"
                                            Value="Submit"
                                            className="btn btenss form-control btn-success"
                                            autoComplete="off"
                                            placeholder="Submit"
                                          />
                                        </div>

                                        {/* <div className="col-md-6 col-xs-6 d-none">
                            <input
                              type="button"
                              onclick="openSmsM();"
                              name="sms"
                              defaultValue="Send"
                              className="btn btn-warning paddingsss form-control"
                              autoComplete="off"
                            />
                          </div>   */}

                                        <div
                                          id="smsModal"
                                          className="modal fade"
                                          role="dialog"
                                        >
                                          <div className="modal-dialog">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <button
                                                  type="button"
                                                  className="close"
                                                  data-dismiss="modal"
                                                >
                                                  ×
                                                </button>
                                                <h4 className="modal-title">
                                                  SMS Content
                                                </h4>
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
                          <li className="">
                            <a
                              href="#tab6"
                              className="active"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              <span className="tabnone">History</span>{" "}
                              <i className="fa fa-history" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#tab3"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <span className="tabnone">All Details </span>
                              <i
                                className="fa fa-info-circle"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#tab4"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <span className="tabnone">
                                Additional Information{" "}
                              </span>
                              <i className="fa fa-info" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#tab5"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              <span className="tabnone">Attachment </span>
                              <i
                                className="fa fa-paperclip"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                        </ul>
                        <div className="cards-tab">
                          <div className="tab-content">
                            {/*-------------------------------------------tab2-----------------------------*/}
                            <div className="tab-pane fade" id="tab3">
                              <form
                                action=" "
                                name="ldform"
                                method="post"
                                encType="multipart/form-data"
                              >
                                <div className="panel-body border-tbal">
                                  <div className="row">
                                    <input
                                      type="hidden"
                                      name="lead_id1"
                                      defaultValue={3868}
                                      autoComplete="off"
                                    />
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="full_name">
                                              Full Name
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            placeholder="Full Name"
                                            className="form-control"
                                            value={foundObject?.full_name}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="email_id">
                                              Email Id
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="email"
                                            name="email_id"
                                            value={foundObject?.email_id}
                                            id="email_id"
                                            placeholder="Email Id"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            <label htmlFor="company_name">
                                              Company Name
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="company_name"
                                            value={foundObject?.company_name}
                                            id="company_name"
                                            placeholder="Company Name"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="website">
                                              Website
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="website"
                                            value={foundObject?.website}
                                            id="website"
                                            placeholder="Website"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            <label htmlFor="service">
                                              Service
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <select
                                            name="service"
                                            id="service"
                                            className="form-control"
                                            required
                                          >
                                            <option value="">Select</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="contact_no">
                                              Contact No
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="contact_no"
                                            value={foundObject?.contact_no}
                                            id="contact_no"
                                            placeholder="Contact No"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            <label htmlFor="alternative_no">
                                              Alternative No
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="alternative_no"
                                            value={foundObject?.alternative_no}
                                            id="alternative_no"
                                            placeholder="Alternative No"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div className="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="position">
                                              Position
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <input
                                            type="text"
                                            name="position"
                                            value={foundObject?.position}
                                            id="position"
                                            placeholder="Position"
                                            className="form-control"
                                            autoComplete="off"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div class="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="lead_source">
                                              Lead Source
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                          <select
                                            name="lead_source"
                                            id="lead_source"
                                            className="form-control"
                                            value={18}
                                          >
                                            <option value="">Select</option>
                                            <option value={15}>
                                              Outbound call
                                            </option>
                                            <option value={17}>
                                              Existing Client
                                            </option>
                                            <option
                                              value={18}
                                              selected="selected"
                                            >
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
                                    </div>
                                    <div className="col-md-6 col-xs-12">
                                      <div class="row">
                                        <div className="col-md-4 col-xs-12 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="lead_cost">
                                              Lead Cost
                                            </label>
                                          </div>
                                        </div>  
                                        <div className="col-md-8 col-xs-12">
                                          <input  
                                            type="text"
                                            name="lead_cost"
                                            
                                            value={foundObject?.lead_cost}
                                            id="lead_cost"
                                            placeholder="Lead Cost"
                                            className="form-control"
                                            autoComplete="off"
                                            required
                                          />
                                        </div>
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
                                action=" "
                                name="ldform"
                                method="post"
                                encType="multipart/form-data"
                              >
                                <input
                                  type="hidden"
                                  name="lead_id2"
                                  defaultValue={3868}
                                  autoComplete="off"
                                />
                                <div className="row">
                                  <div className="col-sm-6 col-xs-12 ">
                                    <div className="card-headeres">
                                      <div className="form-group pt-3">
                                        <div className="address-sec">
                                          Address{" "}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="country">
                                              Country
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8">
                                          <select
                                            name="country"
                                            onChange={handleInputChange}
                                            //  onChange={e => getStateByCountry(e.target.value)}
                                            className="form-control"
                                            required
                                          >
                                            <option value="">Select</option>
                                            {CountryState?.country?.map(
                                              (country1, key) => {
                                                return (
                                                  <option
                                                    value={country1.short_name}
                                                  >
                                                    {country1.name}{" "}
                                                  </option>
                                                );
                                              }
                                            )}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="full_address">
                                              Full Address
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8 cardes">
                                          <textarea
                                            name="full_address"
                                            cols={40}
                                            rows={3}
                                            id="full_address"
                                            className="form-control"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="state">State</label>
                                          </div>
                                        </div>
                                        <div className="col-md-8">
                                          <div className="form-group">
                                            <select
                                              name="state"
                                              id="state"
                                              className="form-control"
                                            >
                                              <option value="">
                                                Select State
                                              </option>
                                              {StateByCountry?.state?.map(
                                                (state1, key) => {
                                                  return (
                                                    <option value={state1._id}>
                                                      {state1.name}
                                                    </option>
                                                  );
                                                }
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="city">City</label>
                                          </div>
                                        </div>
                                        <div className="col-md-8">
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
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="pincode">
                                              Pincode
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-md-8">
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
                                  </div>
                                  <div className="col-sm-6 col-xs-12 ">
                                    <div className="card-headeres pt-3">
                                      <div className="col-md-12 pd-0">
                                        <div className="address-sec">
                                          Additional Information{" "}
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="description">
                                              Description
                                            </label>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-8"
                                          style={{ padding: 0 }}
                                        >
                                          <textarea
                                            name="description"
                                            cols={40}
                                            rows={3}
                                            id="description"
                                            className="form-control"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            <label htmlFor="assign_to_agent">
                                              Assign to agent
                                            </label>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-8 cardese"
                                          style={{ padding: 0 }}
                                        >
                                          <select
                                            name="assign_to_agent"
                                            id="assign_to_agent"
                                            className="form-control"
                                            required
                                          >
                                            <option value="">Select</option>
                                            {agent?.agent?.map(
                                              (agents, key) => {
                                                return (
                                                  <option
                                                    selected={
                                                      foundObject?.assign_to_agent ===
                                                      agents._id
                                                        ? "selected"
                                                        : ""
                                                    }
                                                    value={agents._id}
                                                  >
                                                    {agents.agent_name}
                                                  </option>
                                                );
                                              }
                                            )}
                                          </select>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-4 pd-top">
                                          <div className="form-group">
                                            <label htmlFor="status">
                                              Status
                                            </label>
                                          </div>
                                        </div>
                                        <div
                                          className="col-md-8"
                                          style={{ padding: 0 }}
                                        >
                                          <div className="form-group">
                                            <select
                                              name="status"
                                              id="status"
                                              className="form-control"
                                              required
                                            >
                                              <option value="">Select</option>

                                              {Statusdata.leadstatus?.map(
                                                (status, key) => {
                                                  return (
                                                    <option
                                                      selected={
                                                        foundObject?.status ===
                                                        status._id
                                                          ? "selected"
                                                          : ""
                                                      }
                                                      value={status._id}
                                                    >
                                                      {status.status_name}
                                                    </option>
                                                  );
                                                }
                                              )}
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-xs-12 ">
                                    <div className="card-headeres">
                                      <div className="col-md-12 pd-0">
                                        <div className="address-sec">
                                          Clinic Detail{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6 col-xs-12 ">
                                    <div className="card-headeres">
                                      <div className="col-md-12 pd-0">
                                        <div className="address-sec">
                                          Test 1{" "}
                                        </div>
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
                                  name="lead_id3"
                                  defaultValue={3868}
                                  autoComplete="off"
                                />
                                <div className="panel-body border-tbal">
                                  <div className="row">
                                    <div className="col-md-2">
                                      <div className="form-group">
                                        <label className="file-upl-o">
                                          {" "}
                                          Attach File
                                        </label>
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
                                        <button
                                          type="submit"
                                          className="btn btnss btn-success"
                                        >
                                          Upload
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Progress bar */}
                                  <div className="row">
                                    <div className="col-12 col-6 col-xl-6 col-md-6">
                                      <div className="progress">
                                        <div className="progress-bar" />
                                      </div>
                                    </div>
                                    <div className="col-12 col-6 col-xl-6 col-md-6">
                                      <span className="text-danger">
                                        Max Size : 800000 bytes
                                      </span>
                                      <span
                                        id="uerror"
                                        className="text-danger"
                                      />
                                      <span
                                        id="usuccess"
                                        className="text-success"
                                      />
                                    </div>
                                  </div>
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
                                          <th className="list-serila">
                                            Serial
                                          </th>
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
                            <div
                              className="tab-pane fade in active show"
                              id="tab6"
                            >
                              <div className="panel-body border-tbal">
                                <div className="table-responsive mob-bord">
                                  <table
                                    className="table table-bordered"
                                    id="followup_table"
                                  >
                                    <thead>
                                      <tr>
                                        <th>COMMENTED BY</th>
                                        <th>DATE</th>
                                        <th>STATUS</th>
                                        <th>FOLLOWUP DATE</th>
                                        <th>COMMENT</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {followup?.followuplead?.map(
                                        (follow, key) => {
                                          return (
                                            <tr>
                                              <td>
                                                {" "}
                                                {
                                                  follow?.comment_by[0]
                                                    ?.agent_name
                                                }
                                              </td>
                                              <td>{follow?.created}</td>
                                              <td>
                                                {
                                                  follow?.status_details[0]
                                                    ?.status_name
                                                }
                                              </td>
                                              <td>{follow?.followup_date}</td>
                                              <td>{follow?.followup_desc}</td>
                                            </tr>
                                          );
                                        }
                                      )}
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
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

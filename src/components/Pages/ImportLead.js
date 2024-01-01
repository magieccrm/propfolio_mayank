import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductService } from "../../features/product_serviceSlice";
import { getAllLeadSource } from "../../features/leadSource";
import { getAllCountry } from "../../features/country_stateSlice";
import { getStatebycountry } from "../../features/getStateByCountrySlice";
import { toast } from "react-toastify";
import { getAllStatus } from "../../features/statusSlice";
import { addlead } from "../../features/leadSlice";
import { getAllAgent } from "../../features/agentSlice";
import axios from "axios";

export default function ImportLead() {
    const [leaddata, setleaddata] = useState({});
  const { ProductService } = useSelector((state) => state.ProductService);
  const { leadSourcedata } = useSelector((state) => state.leadSource);
  const { Statusdata } = useSelector((state) => state.StatusData);
  const { CountryState } = useSelector((state) => state.Country_State);
  const { StateByCountry } = useSelector((state) => state.getStateByCountry);

  const { agent } = useSelector((state) => state.agent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductService());
    dispatch(getAllLeadSource());
    dispatch(getAllStatus());
    dispatch(getAllCountry());
    dispatch(getAllAgent());
  }, []);

  const handleInputChange = (e) => {
    setleaddata({ ...leaddata, country: e.target.value });
    getStateByCountry(e.target.value); 
  };  

  const getStateByCountry = (data) => {
    dispatch(getStatebycountry(data));
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('http://localhost:3001/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });  
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        <section className="content content-header">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-bd">
                <div className="panel-heading bg-white">
                  <div className="btn-group">Import Lead</div>
                </div>
                <div className="panel-body">
                  <form
                   
                    encType="multipart/form-data"
                  >
                    <div className="col-sm-12 col-md-12 col-xs-12">
                      <div className="cards">
                        <div className="card-headers">
                          <div className="importa-leading">
                            <div className="col-md-4">
                              <div className="form-group">
                                <lable className="imprt-lable">
                                  {" "}
                                  Select File
                                </lable>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="form-group">
                                <input
                                  name="leadfile"
                                  type="file" onChange={handleFileChange}
                                  className="file-set"
                                  autoComplete="off"
                                  required />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  name="lead_source"
                                  required 
                                  >
                                  <option value="">Select Lead Source</option>
                                  {leadSourcedata?.leadSource?.map(
                                    (leadsource, key) => {
                                      return (
                                        <option value={leadsource._id}>
                                          {leadsource?.lead_source_name}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  name="service"
                                  required
                                >
                                  <option value="">Select Service</option>
                                  {ProductService?.product_service?.map(
                                    (service, key) => {
                                      return (
                                        <option value={service._id}>
                                          {service?.product_service_name}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select className="form-control" name="status" required >
                                  <option value="">Select Status</option>
                                  {Statusdata?.leadstatus?.map(
                                    (status, key) => {
                                      return (
                                        <option value={status._id}>
                                          {status.status_name}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select   onChange={handleInputChange} className="form-control" name="country" required >
                                  <option value="">Select Country</option>
                                  {CountryState?.country?.map((country1, key) => {
                              return (
                                <option value={country1.short_name}>
                                  {country1.name}{" "}
                                </option>
                              );
                            })}
                                </select>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  name="assign_to_agent"
                               required >
                                  <option value="">
                                    Select Assign to agent
                                  </option>
                                  {agent?.agent?.map((agents, key) => {
                                    return (
                                      <option value={agents._id}>
                                        {agents.agent_name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select className="form-control" name="state" required >
                                  <option value="">Select State</option>
                                  {StateByCountry?.state?.map((state1, key) => {
                              return (
                                <option value={state1._id}>
                                  {state1.name}
                                </option>
                              );
                            })}
                                </select>
                              </div>
                            </div>

                            <div
                              className="col-md-6"
                              style={{ float: "right" }}
                            >
                              <button className="btn btn-primary form-control"  onClick={handleUpload}>
                                Next
                              </button>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

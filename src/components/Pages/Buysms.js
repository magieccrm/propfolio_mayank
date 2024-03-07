import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Buysms() {
  const [toggle, setToggle] = useState(1)
  function updateToggle(id) {
    setToggle(id)
  }
  return (
    <div className="content-wrapper content content-header pd-lft">
      <div className="container py-2 pt-3">
        <div className="row">
          <div className="col-xl-3 col-md-6" onClick={() => updateToggle(1)}>
            <div className="sms_heading">
              <div className="card card-animate">
                <div className="card-body bd_bottom">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        No. SMS
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        10000
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex b0rder_bottom align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        Price
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        18/SMS
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="noSms1">
                        Total
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className=" noSms1">
                        1800
                      </h6>
                    </div>
                  </div>
                  <div className="pt-3 text-center"> <div className="button-butNow">Select Plan</div></div>
                </div>

              </div>

            </div>
          </div>
          <div className="col-xl-3 col-md-6" onClick={() => updateToggle(2)}>
            <div className="sms_heading">

              <div className="card card-animate">
                <div className="card-body bd_bottom1">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        No. SMS
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        50000
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex b0rder_bottom align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        Price
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        17/SMS
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="noSms1">
                        Total
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className=" noSms1">
                        8500
                      </h6>
                    </div>
                  </div>
                  <div className="pt-3 text-center"> <div className="button-butNow">Select Plan</div></div>
                </div>

              </div>

            </div>
          </div>
          <div className="col-xl-3 col-md-6" onClick={() => updateToggle(3)}>
            <div className="sms_heading">

              <div className="card card-animate">
                <div className="card-body bd_bottom2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        No. SMS
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        100000
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex b0rder_bottom align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        Price
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        16/SMS
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="noSms1">
                        Total
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className=" noSms1">
                        16000
                      </h6>
                    </div>
                  </div>
                  <div className="pt-3 text-center"> <div className="button-butNow">Select Plan</div></div>
                </div>

              </div>

            </div>
          </div>
          <div className="col-xl-3 col-md-6" onClick={() => updateToggle(4)}>
            <div className="sms_heading">

              <div className="card card-animate">
                <div className="card-body bd_bottom3">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        No. SMS
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        500000
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex b0rder_bottom align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-2 noSms">
                        Price
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className="mb-2 noSms">
                        15/SMS
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex pt-2 align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="noSms1">
                        Total
                      </h6>
                    </div>
                    <div className="flex-shrink-0">
                      <h6 className=" noSms1">
                        33,334
                      </h6>
                    </div>
                  </div>
                  <div className="pt-3 text-center"> <div className="button-butNow">Select Plan</div></div>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div className={toggle === 1 ? "show-content" : "content_tabs"}>
          <div className="pt-5">
            <div className="">
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <td>10000 @ 18/SMS</td>
                            <td className="right">Rs. 8500</td>
                          </tr>
                          <tr>
                            <td className="right">18% GST</td>
                            <td className="right">Rs. 1530</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th className="right">Subtotal</th>
                            <th className="right">Rs. 10030</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={toggle === 2 ? "show-content" : "content_tabs"}>
          <div className="pt-5">
            <div className="">
              <div className="container">
                <div className="card">

                  <div className="card-body">

                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <td>50000 @ 15/SMS</td>
                            <td className="right">Rs. 5000</td>
                          </tr>
                          <tr>
                            <td className="right">18% GST</td>
                            <td className="right">Rs. 7500</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th className="right">Subtotal</th>
                            <th className="right">Rs. 10030</th>
                          </tr>
                        </thead>
                      </table>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={toggle === 3 ? "show-content" : "content_tabs"}>
          <div className="pt-5">
            <div className="">
              <div className="container">
                <div className="card">

                  <div className="card-body">

                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <td>100000 @ 18/SMS</td>
                            <td className="right">Rs. 8500</td>
                          </tr>
                          <tr>
                            <td className="right">18% GST</td>
                            <td className="right">Rs. 1530</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th className="right">Subtotal</th>
                            <th className="right">Rs. 10030</th>
                          </tr>
                        </thead>
                      </table>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={toggle === 4 ? "show-content" : "content_tabs"}>
          <div className="pt-5">
            <div className="">
              <div className="container">
                <div className="card">

                  <div className="card-body">

                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <td>500000 @ 18/SMS</td>
                            <td className="right">Rs. 8500</td>
                          </tr>
                          <tr>
                            <td className="right">18% GST</td>
                            <td className="right">Rs. 1530</td>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th className="right">Subtotal</th>
                            <th className="right">Rs. 10030</th>
                          </tr>
                        </thead>
                      </table>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="col-md-12 col-xs-12 py-10 pt-10 ">
          <input type="submit" name="AddAnother" className="button-57 pull-right" value="Place Order" />
        </div>

      </div>
    </div>

  )
}
export default Buysms;

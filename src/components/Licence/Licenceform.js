import React from 'react'

export default function Licenceform() {
  return (
    <div>
     {/* MultiStep Form */}

<div className="container-fluid" id="grad1">
  <div className="row justify-content-center mt-0">
    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
      <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
        <h2><strong>Sign Up Your User Account</strong></h2>
        <p>Fill all form field to go to next step</p>
        <div className="row">
          <div className="col-md-12 mx-0">
            <form id="msform">
              {/* progressbar */}
              <ul id="progressbar">
                <li className="active" id="account"><strong>Account</strong></li>
                <li id="personal"><strong>Personal</strong></li>
                <li id="payment"><strong>Payment</strong></li>
                <li id="confirm"><strong>Finish</strong></li>
              </ul>
              {/* fieldsets */}
              <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Account Information</h2>
                  <input type="email" name="email" placeholder="Email Id" />
                  <input type="text" name="uname" placeholder="UserName" />
                  <input type="password" name="pwd" placeholder="Password" />
                  <input type="password" name="cpwd" placeholder="Confirm Password" />
                </div>
                <input type="button" name="next" className="next action-button" defaultValue="Next Step" />
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Personal Information</h2>
                  <input type="text" name="fname" placeholder="First Name" />
                  <input type="text" name="lname" placeholder="Last Name" />
                  <input type="text" name="phno" placeholder="Contact No." />
                  <input type="text" name="phno_2" placeholder="Alternate Contact No." />
                </div>
                <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                <input type="button" name="next" className="next action-button" defaultValue="Next Step" />
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <h2 className="fs-title">Payment Information</h2>
                  <div className="radio-group">
                    <div className="radio" data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" /></div>
                    <div className="radio" data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" /></div>
                    <br />
                  </div>
                  <label className="pay">Card Holder Name*</label>
                  <input type="text" name="holdername" placeholder />
                  <div className="row">
                    <div className="col-9">
                      <label className="pay">Card Number*</label>
                      <input type="text" name="cardno" placeholder />
                    </div>
                    <div className="col-3">
                      <label className="pay">CVC*</label>
                      <input type="password" name="cvcpwd" placeholder="***" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <label className="pay">Expiry Date*</label>
                    </div>
                    <div className="col-9">
                      <select className="list-dt" id="month" name="expmonth">
                        <option selected>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </select>
                      <select className="list-dt" id="year" name="expyear">
                        <option selected>Year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                <input type="button" name="make_payment" className="next action-button" defaultValue="Confirm" />
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <h2 className="fs-title text-center">Success !</h2>
                  <br /><br />
                  <div className="row justify-content-center">
                    <div className="col-3">
                      <img src="https://img.icons8.com/color/96/000000/ok--v2.png" className="fit-image" />
                    </div>
                  </div>
                  <br /><br />
                  <div className="row justify-content-center">
                    <div className="col-7 text-center">
                      <h5>You Have Successfully Signed Up</h5>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

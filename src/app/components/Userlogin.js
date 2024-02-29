import React from "react";
import '../components/Userlogin.css'
export default function Userlogin() {
  return (
    <>
      <div className="container">
        <div className="row m-t-5">
          <div className="col-8">
            <div className="container Loginmain">
              <form>
                <h2 className="Loginhead">User Login </h2>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1"  className="fw-bold">Email ID</label>
                  <input
                    type="email"
                    className="form-control Logininput"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                
                </div>
                <div className="form-group Loginsec2">
                  <label htmlFor="exampleInputPassword1" className="fw-bold">Password</label>
                  <input
                    type="LastPass"
                    className="form-control Logininput"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-check">
                 
                  <label className="form-label">
                 Forgot Password?
                  </label>
                </div>
                <button type="submit" className="btn btn-primary loginsubmit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-4 ">
            <img src="images/Login/login-img.6875cae.svg" className="login-img"/>
          </div>
        </div>
      </div>
    </>
  );
}

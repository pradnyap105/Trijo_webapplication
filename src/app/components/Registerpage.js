
"use client";
import React, { useState } from "react";
import '../components/Registerpage.css'
import axios from "axios";



const Registerpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeToTerms: false
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", { firstName, lastName, email, password });

    try {
      const response = await fetch(
        "https://trijoapi.bicsinfotech.com/users/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ firstName, lastName, email, password })
        }
      );

      setSuccessMessage("Registration successful!");
      setError(null);
    } catch (error) {
      setSuccessMessage(null);
      setError(
        "Registration failed. Please check your information and try again."
      );
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-8">
            <div className="container">
              <h2 className="newaccount">Create New Account</h2>

              <form className="form-inline" onSubmit={handleSubmit}>
                <div className="row Regform">
                  <div className=" col form-group">
                    <label htmlFor="Text" className="Textt">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      className="form-control Inputcss"
                      id="text"
                      placeholder="Enter FirstName"
                      name="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className=" col form-group">
                    <label htmlFor="pwd" className="Textt">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      className="form-control Inputcss"
                      id="text"
                      placeholder="Enter LastName"
                      name="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row Regform">
                  <div className=" col form-group">
                    <label htmlFor="email" className="Textt">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={email}
                      className="form-control Inputcss"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className=" col form-group">
                    <label htmlFor="pwd" className="Textt">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      className="form-control Inputcss"
                      id="pwd"
                      placeholder="Enter password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkbox">
                  <label className="Textt">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                    />
                    By Signing up I agree to the terms and conditions and
                    private policies by trijo.
                  </label>
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
                <button type="submit" className="btn btn-primary loginsubmit">
                 Sign up
                </button>
                <p className="Textt bottomtext">
                  Already have an account? Sign in
                </p>
              </form>
            </div>{" "}
          </div>
          <div className="col-sm-4">
            <img
              src="images/Register/sign-up-img.31.svg"
              className="sing-img"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpage;

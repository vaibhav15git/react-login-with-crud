import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("india");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    }
    else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerObject = {
      id,
      name,
      password,
      email,
      phone,
      country,
      address,
      gender,
    };

    // console.log(registerObject);
    if (isValidate()) {
      //axios method
      axios
        .post("http://localhost:8080/user", registerObject, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  //fetch method

  //     fetch("http://localhost:8080/user", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(registerObject),
  //     })
  //       .then((res) => {
  //         toast.success("Registered Successfully");
  //       })
  //       .catch((err) => {
  //         toast.error("Failed :" + err.message);
  //       });
  //   };
  return (
    <div>
      <div className="col-lg-6 offset-lg-3 mt-5">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h2>User Registeration</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      User Name <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Password <span className="errmsg">*</span>
                    </label>

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      autoComplete="new-password"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Email <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Country <span className="errmsg">*</span>{" "}
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="">Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="">
                      Gender <span className="errmsg">*</span>{" "}
                    </label>
                    <br />
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="app-check"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="app-check"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
              <Link className="btn btn-warning ms-2" to={"/"}>
                Back
              </Link>
              <br />
              <br />
              <Link className="text-info" to={"/login"}>
                Already Registered User? Click here to login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

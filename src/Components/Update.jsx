
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    gender: "",
  });
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((res) =>
        // console.log(res.data)
        {
          setValues({
            ...values,
            username: res.data.id,
            password: res.data.password,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            country: res.data.country,
            address: res.data.address,
            gender: res.data.gender,
          });
        }
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        axios
          .put(`http://localhost:8080/user/${id}`, values)
          .then((res) => {
            toast.success("User updated successfully");
            navigate("/allusers");
          })
          .catch((err) => {
            toast.error("Failed to update user");
            console.log(err);
          });
  };

  return (
    <div>
      <div className="col-lg-6 offset-lg-3 mt-5">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h2>User Update</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={values.username}
                      onChange={(e) =>
                        setValues({ ...values, username: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="password">
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      value={values.password}
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={values.email}
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={(e) =>
                        setValues({ ...values, phone: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={(e) =>
                        setValues({ ...values, country: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      type="text"
                      name="address"
                      value={values.address}
                      onChange={(e) =>
                        setValues({ ...values, address: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      name="gender"
                      value={values.gender}
                      onChange={(e) =>
                        setValues({ ...values, gender: e.target.value })
                      }
                      className="form-control"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Update
              </button>

              <Link className="btn btn-warning ms-2" to={"/allusers"}>
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

//------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Update = () => {
//   // const { id } = useParams();
//   const navigate = useNavigate();
//   const [username,setUsername] =useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("");

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const fetchUserDetails = (id) => {
//     axios
//       .get(`http://localhost:8080/user/${id}`)
//       .then((res) => {
//         const userDetails = res.data;

//         console.log(res.data, "get data");
//         setUsername(userDetails)
//         setName(userDetails.name);
//         setPassword(userDetails.password);
//         setEmail(userDetails.email);
//         setPhone(userDetails.phone);
//         setCountry(userDetails.country);
//         setAddress(userDetails.address);
//         setGender(userDetails.gender);
//       })
//       .catch((error) => {
//         console.log("Error retrieving user details:", error);
//       });
//   };

//   const handleUpdate = (id) => {
//     // e.preventDefault();

//     const updateUserObject = {
//       username: username,
//       name: name,
//       password: password,
//       email: email,
//       phone: phone,
//       country: country,
//       address: address,
//       gender: gender,
//     };

//     axios
//       .put(`http://localhost:8080/user/${id}`, updateUserObject, {
//         headers: { "Content-Type": "application/json" },
//       })
//       .then((res) => {
//         toast.success("User details updated successfully");
//         navigate("/allusers");
//       })
//       .catch((error) => {
//         toast.error("Failed to update user details");
//         console.log("Error updating user details:", error);
//       });
//   };

//   return (
//     <div className="container mt-5 w-50">
//       <h2>Update User</h2>
//       <form onSubmit={handleUpdate}>

//         <div className="form-group">
//           <label htmlFor="name">Username:</label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             value={username}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="text"
//             id="phone"
//             className="form-control"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="country">Country:</label>
//           <input
//             type="text"
//             id="country"
//             className="form-control"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <textarea
//             id="address"
//             className="form-control"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//             id="gender"
//             className="form-control"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Update;



//chatGPT code

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Update = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     id: id,
//     username: "",
//     password: "",
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     address: "",
//     gender: "",
//   });

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const fetchUserDetails = () => {
//     axios
//       .get(`http://localhost:8080/user/${id}`)
//       .then((res) => {
//         setValues({
//           ...values,
//           username: res.data.id,
//           password: res.data.password,
//           name: res.data.name,
//           email: res.data.email,
//           phone: res.data.phone,
//           country: res.data.country,
//           address: res.data.address,
//           gender: res.data.gender,
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post(`http://localhost:8080/user/update/${id}`, values)
//       .then((res) => {
//         toast.success("User updated successfully");
//         navigate("/allusers");
//       })
//       .catch((err) => {
//         toast.error("Failed to update user");
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <div className="col-lg-6 offset-lg-3 mt-5">
//         <form className="container" onSubmit={handleSubmit}>
//           <div className="card">
//             <div className="card-header">
//               <h2>User Update</h2>
//             </div>
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="name">
//                       User Name <span className="errmsg">*</span>
//                     </label>
//                     <input
//                       value={values.username}
//                       onChange={(e) =>
//                         setValues({ ...values, username: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="password">
//                       Password <span className="errmsg">*</span>
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={values.password}
//                       onChange={(e) =>
//                         setValues({ ...values, password: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={values.name}
//                       onChange={(e) =>
//                         setValues({ ...values, name: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="email">
//                       Email <span className="errmsg">*</span>
//                     </label>
//                     <input
//                       value={values.email}
//                       onChange={(e) =>
//                         setValues({ ...values, email: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="phone">Phone</label>
//                     <input
//                       type="text"
//                       name="phone"
//                       value={values.phone}
//                       onChange={(e) =>
//                         setValues({ ...values, phone: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="country">Country</label>
//                     <input
//                       type="text"
//                       name="country"
//                       value={values.country}
//                       onChange={(e) =>
//                         setValues({ ...values, country: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-12">
//                   <div className="form-group">
//                     <label htmlFor="address">Address</label>
//                     <textarea
//                       type="text"
//                       name="address"
//                       value={values.address}
//                       onChange={(e) =>
//                         setValues({ ...values, address: e.target.value })
//                       }
//                       className="form-control"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label htmlFor="gender">Gender</label>
//                     <select
//                       name="gender"
//                       value={values.gender}
//                       onChange={(e) =>
//                         setValues({ ...values, gender: e.target.value })
//                       }
//                       className="form-control"
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card-footer">
//               <button className="btn btn-primary" type="submit">
//                 Update
//               </button>
//               <Link className="btn btn-warning ms-2" to={"/allusers"}>
//                 Back
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Update;

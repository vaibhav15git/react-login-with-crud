import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();

  const alertFunction =() => {
   toast.warning('Please login first') 
  };

  const proceedLoginSubmit = (e) => {
    e.preventDefault();
    if(validate()){
        // console.log('proceed')

        fetch("http://localhost:8080/user/"+ username).then((res)=>{
             return res.json();
        }).then((resp) => {
            console.log(resp);
            if(Object.keys(resp).length===0){
                toast.error('Please enter a valid username');
            }
            else{
                if(resp.password === password){
                  toast.success("Login successful");
                  sessionStorage.setItem("username", username);
                

                  usenavigate("/");
                }else {
                     toast.error("Please enter a valid credentials");
                }
            }
        }).catch((err) => {
             toast.error('Login failed due to :'+ err.message )
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter a username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter a password");
    }
    return result;
  };

  return (
    <div>
      <div>
        <div className="offset-lg-3 col-lg-6 mt-5">
          <form onSubmit={proceedLoginSubmit} className="container">
            <div className="card">
              <div className="card-header bg-warning-subtle">
                <h1>User Login</h1>
              </div>
              <div className="card-body">
                <div className="form-group mt-3">
                  <label htmlFor="">
                    User Name <span className="errmsg">*</span>{" "}
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">
                    Password <span className="errmsg">*</span>{" "}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-success mt-2">
                  Login
                </button>
                <Link
                  to={"/"}
                  className="ms-3 mt-2 btn btn-warning"
                  onClick={alertFunction}
                >
                  Home
                </Link>
                <br />
                <br />
                <Link to={"/register"} className="text-decoration-underline">
                  Don't have an account please registered first.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
//-----------------------------------------------------------

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const proceedLoginSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("proceed");
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (username === "" || username === null) {
//       result = false;
//       toast.warn("Please enter a username");
//     }
//     if (password === "" || password === null) {
//       result = false;
//       toast.warn("Please enter a password");
//     }
//     return result;
//   };

//   return (
//     <div>
//       <div>
//         <div className="offset-lg-3 col-lg-6 mt-5">
//           <form onSubmit={proceedLoginSubmit} className="container">
//             <div className="card">
//               <div className="card-header bg-warning-subtle">
//                 <h1>User Login</h1>
//               </div>
//               <div className="card-body">
//                 <div className="form-group mt-3">
//                   <label htmlFor="">
//                     User Name <span className="errmsg">*</span>{" "}
//                   </label>
//                   <input
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="form-control"
//                     required
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <label htmlFor="">
//                     Password <span className="errmsg">*</span>{" "}
//                   </label>
//                   <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="card-footer">
//                 <button type="submit" className="btn btn-success mt-2">
//                   Login
//                 </button>
//                 <Link to={"/"} className="ms-3 mt-2 btn btn-warning">
//                   Home
//                 </Link>
//                 <br />
//                 <br />
//                 <Link to={"/register"}>
//                   Don't have an account? Please register first.
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <ToastContainer position="top-right" />
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(() => getStoredToken());

  const usenavigate = useNavigate();

  useEffect(() => {
    let storedUsername = sessionStorage.getItem("username");

    if (storedUsername === "" || storedUsername === null) {
      usenavigate("/login");
    } else {
      setUsername(storedUsername);
    }
  }, []);

  // create different token on home page and session storage for check also changes in useState
  //    const [token, setToken] = useState(generateToken());

  // function generateToken() {
  //   const newToken = Math.random().toString(36).substring(2);
  //   sessionStorage.setItem("token", newToken);
  //   return newToken;
  // }

  function getStoredToken() {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      return storedToken;
    } else {
      const newToken = generateToken();
      sessionStorage.setItem("token", newToken.token);
      return newToken;
    }
  }

  function generateToken() {
    return Math.random().toString(36).substring(2);
  }

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    usenavigate("/login");
  };

  return (
    <div>
      <div className="header">
        <Link to={"/"} className="ms-5">
          Home
        </Link>

        <div>
          <span className="username-span">
            Welcome {username}
          </span>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="ms-3 me-5 btn btn-outline-danger logout-btn"
          >
            Logout
          </button>
          <Link to={'/register'} className="btn btn-success">Add New User</Link>
          <Link to={'/allusers'} className="ms-3 btn btn-warning">All Users</Link>
        </div>
      </div>
      <div className="text-center mt-5">
        <h1 className="home-title">Welcome to Login Authentication</h1>
        {token && (
          <p className="font-weight-bold token-code">
            Token: <span>{token}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;

//---------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Home = () => {
//   const [username, setUsername] = useState("");
//   const usenavigate = useNavigate();

//    const token = "bibdiubw9h29h92h9hfiwnfi";

//   useEffect(() => {
//     let token = sessionStorage.getItem('token')
//     console.log(token);
//     let username = sessionStorage.getItem("username");
//     if (username === "" || username === null) {
//       usenavigate("/login");
//     } else {
//       setUsername(username);
//     }
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("username");
//     usenavigate("/login");
//   };

//   return (
//     <div>
//       <div className="header">
//         <Link to={"/"} className="ms-5">
//           Home
//         </Link>

//         <div>
//           <span className="ms-3 text-decoration-none username-span">
//             Welcome {username}
//           </span>
//         </div>
//         <button
//           onClick={handleLogout}
//           className="ms-3 me-5 btn btn-outline-danger logout-btn"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="text-center mt-5">
//         <h1 className="home-title">Welcome to Login Authentication</h1>
//         {token && (
//           <p className="font-weight-bold mt-3">
//             Token: <span>{token}</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

//----------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Home = () => {
//   const [username, setUsername] = useState("");
//   const [token, setToken] = useState(() => getStoredToken());

//   const usenavigate = useNavigate();

//   useEffect(() => {
//     let storedUsername = sessionStorage.getItem("username");

//     if (storedUsername === "" || storedUsername === null) {
//       usenavigate("/login");
//     } else {
//       setUsername(storedUsername);
//     }
//   }, []);

// create different token on home page and session storage
// function generateToken() {
//   const newToken = Math.random().toString(36).substring(2);
//   sessionStorage.setItem("token", newToken);
//   return newToken;
// }

//   const getStoredToken = () => {
//     const storedToken = sessionStorage.getItem("token");
//     if (storedToken) {
//       return storedToken;
//     } else {
//       const newToken = generateToken();
//       sessionStorage.setItem("token", newToken);
//       return newToken;
//     }
//   };

//   const generateToken = () => {
//     return Math.random().toString(36).substring(2);
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem("username");
//     sessionStorage.removeItem("token");

//     usenavigate("/login");
//   };

//   return (
//     <div>
//       <div className="header">
//         <Link to={"/"} className="ms-5">
//           Home
//         </Link>

//         <div>
//           <span className="ms-3 text-decoration-none username-span">
//             Welcome {username}
//           </span>
//         </div>
//         <button
//           onClick={handleLogout}
//           className="ms-3 me-5 btn btn-outline-danger logout-btn"
//         >
//           Logout
//         </button>
//       </div>
//       <div className="text-center mt-5">
//         <h1 className="home-title">Welcome to Login Authentication</h1>
//         {token && (
//           <p className="font-weight-bold mt-3">
//             Token: <span>{token}</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

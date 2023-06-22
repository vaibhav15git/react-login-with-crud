//-----------------------------------------------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`http://localhost:8080/user`)
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log("Error retrieving users:", error);
      });
  };

  const handleRemoveUser = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this user?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:8080/user/${id}`)
        .then((res) => {
          console.log("User removed successfully.");
          fetchUsers(); // Refresh the user list
        })
        .catch((error) => {
          console.log("Error removing user:", error);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">All Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.address}</td>
             
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveUser(user.id)}
                >
                  Remove
                </button>
                <Link
                  className="btn btn-primary ms-2"
                  to={`/update/${user.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5">
        <Link to={"/"} className="btn btn-outline-primary all-users-btn">
          Home
        </Link>
        <Link
          to={"/register"}
          className="ms-3 btn btn-outline-success all-users-btn"
        >
          Add User
        </Link>
        <Link
          to={"/login"}
          className="ms-3 btn btn-outline-warning all-users-btn"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default AllUsers;

//----------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const AllUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     axios
//       .get("http://localhost:8080/user")
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((error) => {
//         console.log("Error retrieving users:", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-5 mb-4">All Users</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>User Name</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Country</th>
//             <th>Token</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.country}</td>
//               <td>{sessionStorage.getItem(user.id)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="mt-5">
//         <Link to={'/'} className="btn btn-outline-primary all-users-btn">Home</Link>
//         <Link to={'/register'} className="ms-3 btn btn-outline-success all-users-btn">
//           Add User
//         </Link>
//         <Link to={'/login'} className="ms-3 btn btn-outline-warning all-users-btn">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;

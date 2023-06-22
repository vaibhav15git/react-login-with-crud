import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import AllUsers from "./Components/AllUsers";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" className='text-dark'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/allusers" element={<AllUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

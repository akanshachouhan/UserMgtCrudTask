import { EmployeeList } from "./components";
import { Navbar } from "./components";
import { EmployeeForm } from "./components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "../src/login/login";
import Register from "../src/register/register";

export const App = () => {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <EmployeeList setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
};

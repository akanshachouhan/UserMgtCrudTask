import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import img from "../images/gg.jpg";

//login functions
const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //for input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //calling api using axios
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <>
      <div>
        <img
          src={img}
          alt="Bellurbis"
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            top: "0",
            left: "0",
            opacity: "0.8",
          }}
        />
        {/* <button className='loginPage'>hello</button> */}
      </div>

      <div
        style={{
          width: "400px",
          padding: "1rem",
          opacity: "0.8",
          alignItems: "center",
          textAlign: "center",
          position: "absolute",
          top: "15%",
          left: "34%",
        }}
        className="login"
      >
        <h2 style={{ color: "#421917" }}>User Management System</h2>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className="button" onClick={login}>
          Sign up
        </div>
        <Link
          style={{ textDecoration: "none", marginTop: "20%", fontSize: "120%" }}
          to="/register"
          variant="body2"
        >
          Already have an account ? Sign Ip{" "}
        </Link>
      </div>
    </>
  );
};

export default Login;

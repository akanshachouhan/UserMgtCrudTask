import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../images/gg.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  //for logout and back to login page
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  //for input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //api calling
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invlid input");
    }
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
        className="register"
      >
        {console.log("User", user)}
        <h2 style={{ color: "#421917" }}>User Management System</h2>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Sign In
        </div>
        <Link
          style={{ textDecoration: "none", marginTop: "20%", fontSize: "120%" }}
          to="/login"
          variant="body2"
        >
          Already Signed In ? Sign In{" "}
        </Link>
      </div>
    </>
  );
};

export default Register;

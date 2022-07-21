import { useNavigate, useParams } from "react-router-dom";
import { addEmployee, getEmployeeById } from "../service/localstorage";
import { useForm } from "../hooks/useForm";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import { editEmployee } from "../service/localstorage";
import { Navbar } from "./Navbar";

export const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setshowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id
      ? editEmployee(id, inputValues)
      : addEmployee({ id: uuid(), ...inputValues });
    resetForm();
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex my-5 justify-content-between">
        <button
          style={{
            marginLeft: "88%",
            cursor: "pointer",
            borderRadius: "5%",
            width: "6%",
            background: "#421917",
            color: "White",
            fontSize: "110%",
            marginTop: "1%",
          }}
          type="button"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h4 style={{ marginLeft: "40%", fontSize: "150%", color: "#421917" }}>
          {id ? "Edit" : "Add new"} Employee
        </h4>
        <div />
      </div>

      <div
        style={{
          marginLeft: "16%",
          background: "#B2AA9E",
          width: "900px",
          padding: "1%",
        }}
      >
        <form
          style={{
            minWidth: "100%",
            height: "49vh",
            margin: "0vw",
            padding: "1vw",
            position: "relative",
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <label
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "#421917",
                margin: "0 0 .5vh 0",
              }}
              htmlFor="inputValid"
            >
              Name
            </label>
            <input
              style={{
                display: "block",
                width: "96%",
                padding: ".5rem .8rem .5rem .8rem;",
                margin: ".9vw 0",
                border: "0",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              required
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
            />
          </div>

          <div className="form-group">
            <label
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "#421917",
                margin: "0 0 .5vh 0",
              }}
              htmlFor="inputValid"
            >
              Email
            </label>
            <input
              style={{
                display: "block",
                width: "96%",
                padding: ".5rem .8rem .5rem .8rem;",
                margin: ".9vw 0",
                border: "0",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              name="email"
              type="email"
              value={inputValues.email}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              required
            />
          </div>

          <div className="form-group">
            <label
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "#421917",
                margin: "0 0 .5vh 0",
              }}
              htmlFor="inputValid"
            >
              Address
            </label>
            <input
              style={{
                display: "block",
                width: "96%",
                padding: ".5rem .8rem .5rem .8rem;",
                margin: ".9vw 0",
                border: "0",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              required
            />
          </div>

          <div className="form-group">
            <label
              style={{
                fontSize: "18px",
                textAlign: "center",
                color: "#421917",
                margin: "0 0 .5vh 0",
              }}
              htmlFor="inputValid"
            >
              Phone
            </label>
            <input
              style={{
                display: "block",
                width: "96%",
                padding: ".5rem .8rem .5rem .8rem;",
                margin: ".9vw 0",
                border: "0",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              name="phone"
              type="text"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              id="inputValid"
              required
            />
          </div>

          <div style={{ marginBottom: "1px" }} className="d-grid gap-2 mt-3">
            <button
              style={{
                cursor: "pointer",
                background: "#421917",
                color: "white",
                padding: "4px",
              }}
              type="submit"
            >
              {id ? "Edit" : "Add"} Employee
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div>
          <div
            style={{
              marginTop: "5px",
              color: "white",
              background: "#43CC29",
              width: "68.2%",
              marginLeft: "16%",
              padding: "5px",
            }}
          >
            <strong>Well done!</strong> {id ? "edit" : "added a new"} Employee.
          </div>
        </div>
      )}
    </>
  );
};

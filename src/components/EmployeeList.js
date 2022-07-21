import { EmployeeItem } from "./EmployeeItem";
import { useEffect, useState } from "react";
import { getListEmployees } from "../service/localstorage";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEmployees(getListEmployees());
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h4 style={{ marginLeft: "40%", fontSize: "150%", color: "#421917" }}>
          Manage Employees
        </h4>

        {employees.length > 0 ? (
          <div>
            <table
              style={{
                minWidth: "80%",
                background: "#B2AA9E",
                marginLeft: "10%",
              }}
            >
              <thead
                style={{
                  background: "#421917",
                  color: "white",
                  paddingTop: "30%",
                  fontSize: "120%",
                }}
              >
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <EmployeeItem
                    employee={employee}
                    key={employee.id}
                    setEmployees={setEmployees}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center">No employees</h3>
        )}
      </div>
      <Link
        style={{
          cursor: "progress",
          textDecoration: "none",
          fontSize: "110%",
          background: "#E52527",
          color: "white",
          borderRadius: "5px",
          padding: "9px",
          position: "absolute",
          top: "15%",
          left: "83%",
          width: "4%",
        }}
        to="/login"
      >
        Logout
      </Link>
      <button
        style={{
          cursor: "pointer",
          fontSize: "92%",
          background: "#421917",
          color: "white",
          borderRadius: "5px",
          padding: "9px",
          position: "absolute",
          marginTop: "2%",
          left: "10.5%",
        }}
        onClick={() => navigate("/create-employee")}
      >
        Create Employee
      </button>
    </>
  );
};

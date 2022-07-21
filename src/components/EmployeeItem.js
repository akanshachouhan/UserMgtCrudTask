import React from "react";
import { removeEmployee } from "../service/localstorage";
import { getListEmployees } from "../service/localstorage";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ employee, setEmployees }) => {
  const { id, name, email, address, phone } = employee;
  const navigate = useNavigate();

  const deleteEmployee = () => {
    removeEmployee(id);
    setEmployees(getListEmployees());
  };

  return (
    <tr className="table-primasry">
      <th>{name}</th>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <span
            type="button"
            style={{
              cursor: "pointer",
              fontSize: "90%",
              width: "25%",
              color: "white",
              background: "#43CC29",
              padding: "2px",
              borderRadius: "15%",
            }}
            onClick={() => navigate(`/edit-employee/${id}`)}
          >
            Edit
          </span>

          <span
            type="button"
            style={{
              cursor: "progress",
              borderRadius: "15%",
              fontSize: "90%",
              width: "40%",
              color: "white",
              background: "red",
              padding: "1px",
            }}
            onClick={() => deleteEmployee()}
          >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

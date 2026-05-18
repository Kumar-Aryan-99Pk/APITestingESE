import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import EmployeeForm from "../components/EmployeeForm";

import EmployeeList from "../components/EmployeeList";

import SearchFilter from "../components/SearchFilter";

import AIRecommendations from "../components/AIRecommendations";



function Dashboard() {

  const navigate = useNavigate();

  const [employees, setEmployees] =
    useState([]);




  // FETCH EMPLOYEES
  const fetchEmployees = async () => {

    try {

      const res = await API.get(
        "/employees"
      );

      setEmployees(res.data);

    } catch (error) {

      console.log(error);

    }

  };



  // LOAD DATA
  useEffect(() => {

    fetchEmployees();

  }, []);




  // LOGOUT
  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };




  return (

    <div className="container">

      <div className="card">

        <h1>
          Employee Dashboard
        </h1>

        <button
  className="logout-btn"
  onClick={logout}
> Logout
        </button>

      </div>


      <EmployeeForm
        fetchEmployees={fetchEmployees}
      />

      <SearchFilter
        setEmployees={setEmployees}
      />

      <EmployeeList
        employees={employees}
        fetchEmployees={fetchEmployees}
      />

      <AIRecommendations />

    </div>

  );

}

export default Dashboard;
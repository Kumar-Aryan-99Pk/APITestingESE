import { useState } from "react";

import API from "../services/api";


function EmployeeForm({ fetchEmployees }) {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [department, setDepartment] =
    useState("");

  const [skills, setSkills] = useState("");

  const [performanceScore, setPerformanceScore] =
    useState("");

  const [experience, setExperience] =
    useState("");



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/employees", {

        name,
        email,
        department,

        skills: skills.split(","),

        performanceScore,

        experience,

      });

      alert("Employee Added");

      fetchEmployees();

      // CLEAR FORM
      setName("");
      setEmail("");
      setDepartment("");
      setSkills("");
      setPerformanceScore("");
      setExperience("");

    } catch (error) {

      alert(
        error.response.data.message
      );

    }

  };



  return (

    <div className="card">

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Performance Score"
          value={performanceScore}
          onChange={(e) =>
            setPerformanceScore(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Experience"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>

  );

}

export default EmployeeForm;
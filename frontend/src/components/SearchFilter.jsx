import { useState } from "react";

import API from "../services/api";


function SearchFilter({
  setEmployees,
}) {

  const [department, setDepartment] =
    useState("");



  const handleSearch = async () => {

    try {

      const res = await API.get(
        `/employees/search?department=${department}`
      );

      setEmployees(res.data);

    } catch (error) {

      alert(error.response.data.message);

    }

  };



  return (

    <div className="card">

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <button
  className="search-btn"
  onClick={handleSearch}
>
        Search
      </button>

    </div>

  );

}

export default SearchFilter;
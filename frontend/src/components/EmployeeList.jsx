import API from "../services/api";


function EmployeeList({
  employees,
  fetchEmployees,
}) {


  // DELETE EMPLOYEE
  const deleteEmployee = async (id) => {

    try {

      await API.delete(`/employees/${id}`);

      fetchEmployees();

    } catch (error) {

      alert(error.response.data.message);

    }

  };



  return (

    <div className="card">

      <h2>Employee List</h2>

      {

        employees.map((employee) => (

          <div
            className="employee-card"
            key={employee._id}
          >

            <h3>
              {employee.name}
            </h3>

            <p>
              Email:
              {employee.email}
            </p>

            <p>
              Department:
              {employee.department}
            </p>

            <p>
              Skills:
              {employee.skills.join(", ")}
            </p>

            <p>
              Performance:
              {employee.performanceScore}
            </p>

            <p>
              Experience:
              {employee.experience} years
            </p>

            <button
              onClick={() =>
                deleteEmployee(employee._id)
              }
            >
              Delete
            </button>

          </div>

        ))

      }

    </div>

  );

}

export default EmployeeList;
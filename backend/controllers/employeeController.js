const Employee = require("../models/Employee");


// ADD EMPLOYEE
const addEmployee = async (req, res) => {

  try {

    const {
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    } = req.body;


    // VALIDATION
    if (
      !name ||
      !email ||
      !department ||
      !skills ||
      performanceScore === undefined ||
      experience === undefined
    ) {

      return res.status(400).json({
        message: "All fields are required",
      });

    }


    // CHECK DUPLICATE EMAIL
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {

      return res.status(400).json({
        message: "Employee email already exists",
      });

    }


    // CREATE EMPLOYEE
    const employee = await Employee.create({
      name,
      email,
      department,
      skills,
      performanceScore,
      experience,
    });


    res.status(201).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// GET ALL EMPLOYEES
const getEmployees = async (req, res) => {

  try {

    const employees = await Employee.find();

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// SEARCH EMPLOYEES
const searchEmployees = async (req, res) => {

  try {

    const department = req.query.department;

    const employees = await Employee.find({
      department: department,
    });

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {

  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {

      return res.status(404).json({
        message: "Employee not found",
      });

    }

    employee.performanceScore =
      req.body.performanceScore ||
      employee.performanceScore;

    employee.skills =
      req.body.skills ||
      employee.skills;

    employee.department =
      req.body.department ||
      employee.department;

    employee.experience =
      req.body.experience ||
      employee.experience;

    const updatedEmployee = await employee.save();

    res.json(updatedEmployee);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




// DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {

  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {

      return res.status(404).json({
        message: "Employee not found",
      });

    }

    await employee.deleteOne();

    res.json({
      message: "Employee deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};




module.exports = {
  addEmployee,
  getEmployees,
  searchEmployees,
  updateEmployee,
  deleteEmployee,
};
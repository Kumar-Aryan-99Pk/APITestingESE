const express = require("express");

const router = express.Router();

const {
  protect,
} = require("../middleware/authMiddleware");


const {
  addEmployee,
  getEmployees,
  searchEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");



// ADD EMPLOYEE
router.post("/", protect, addEmployee);


// GET ALL EMPLOYEES
router.get("/", protect, getEmployees);


// SEARCH EMPLOYEE
router.get("/search", protect, searchEmployees);


// UPDATE EMPLOYEE
router.put("/:id", protect, updateEmployee);


// DELETE EMPLOYEE
router.delete("/:id", protect, deleteEmployee);


module.exports = router;
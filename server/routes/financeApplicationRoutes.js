// server/routes/financeApplicationRoutes.js
const express = require("express");
const FinanceApplication = require("../models/FinanceApplication");
const router = express.Router();

// Create a new finance application
router.post("/", async (req, res) => {
  try {
    const newApplication = new FinanceApplication(req.body);
    await newApplication.save(); // Save to the database
    res.status(201).json(newApplication); // Return the created application
  } catch (error) {
    res.status(400).json({ message: "Error creating application" });
  }
});

// Get all finance applications
router.get("/", async (req, res) => {
  try {
    const applications = await FinanceApplication.find(); // Fetch all finance applications
    res.json(applications); // Send applications to the client
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
});

// Update an existing finance application by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedApplication = await FinanceApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedApplication); // Return updated application
  } catch (error) {
    res.status(400).json({ message: "Error updating application" });
  }
});

// Delete a finance application by ID
router.delete("/:id", async (req, res) => {
  try {
    await FinanceApplication.findByIdAndDelete(req.params.id); // Delete the application
    res.status(200).json({ message: "Application deleted" }); // Success message
  } catch (error) {
    res.status(500).json({ message: "Error deleting application" });
  }
});

module.exports = router;

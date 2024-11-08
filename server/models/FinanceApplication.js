// server/models/FinanceApplication.js
const mongoose = require("mongoose");

// Define the schema for a finance application
const financeApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name
    income: { type: String, required: true }, // User's income
    expenses: { type: String, required: true }, // User's expenses
    assets: { type: String, required: true }, // User's assets
    liabilities: { type: String, required: true }, // User's liabilities
    status: { type: String, default: "Pending" }, // Default application status
  },
  { timestamps: true }
); // Store creation and update times

// Create a model using the schema
const FinanceApplication = mongoose.model(
  "FinanceApplication",
  financeApplicationSchema
);

module.exports = FinanceApplication;

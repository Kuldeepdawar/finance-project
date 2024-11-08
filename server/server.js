// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const financeApplicationRoutes = require("./routes/financeApplicationRoutes");
require("dotenv").config();

const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Use finance application routes
app.use("/api/finance-applications", financeApplicationRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

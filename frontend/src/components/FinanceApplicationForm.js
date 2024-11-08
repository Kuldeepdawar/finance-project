// client/src/components/FinanceApplicationForm.js
import React, { useState } from "react";
import axios from "axios";

const FinanceApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    income: "",
    expenses: "",
    assets: "",
    liabilities: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit the form data to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/finance-applications", formData)
      .then((response) => alert("Application Created"))
      .catch((error) => alert("Error creating application"));
  };

  return (
    <div>
      <h1>Create Finance Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="income"
          placeholder="Income"
          value={formData.income}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expenses"
          placeholder="Expenses"
          value={formData.expenses}
          onChange={handleChange}
        />
        <input
          type="text"
          name="assets"
          placeholder="Assets"
          value={formData.assets}
          onChange={handleChange}
        />
        <input
          type="text"
          name="liabilities"
          placeholder="Liabilities"
          value={formData.liabilities}
          onChange={handleChange}
        />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default FinanceApplicationForm;

// client/src/components/FinanceApplicationList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const FinanceApplicationList = () => {
  const [applications, setApplications] = useState([]);

  // Fetch finance applications when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/finance-applications")
      .then((response) => setApplications(response.data)) // Set state with the response data
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  return (
    <div>
      <h1>Finance Applications</h1>
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            <strong>{application.name}</strong>
            <p>Status: {application.status}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceApplicationList;

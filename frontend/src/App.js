// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FinanceApplicationList from "./components/FinanceApplicationList";
import FinanceApplicationForm from "./components/FinanceApplicationForm";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Asset Finance Management</h1>
        <Routes>
          <Route path="/" element={<FinanceApplicationList />} />
          <Route path="/create" element={<FinanceApplicationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

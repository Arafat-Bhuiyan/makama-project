import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

export const Home = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-bold">Makama Project</h1>
        <Link to="/login">
          <button className="border border-gray-300 hover:bg-gray-100 font-medium rounded-md text-base px-4 py-1 shadow-md">
            Login
          </button>
        </Link>
      </div>
      <div className="border border-gray-300"></div>

      <Dashboard />
    </div>
  );
};

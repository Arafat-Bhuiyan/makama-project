import { useState } from "react";
import cross from "../../assets/images/ic_round-cancel.png";

const LabPrescription = ({ handleComponentChange }) => {
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [testName, setTestName] = useState("");

  const handleFind = () => {
    // Logic for fetching user data by ID can go here
    console.log("UserID:", userID);
  };

  const handleSubmit = () => {
    // Logic to submit prescription
    console.log("Prescription Submitted");
  };

  return (
    <div className=" mx-auto bg-white shadow-xl border rounded-xl p-6">
      <div className="flex justify-end pb-3">
        <button onClick={() => handleComponentChange("Dashboard")}>
          <img src={cross} alt="" />
        </button>
      </div>
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold mb-6">Prescription</h2>
        <div className="text-right">
          <h1 className="text-2xl font-semibold mb-2">Dr. Pappu</h1>
          <p className="text-xl font-medium mb-6">Medicine Specialist</p>
        </div>
      </div>
      <div className="space-y-4">
        {/* USER ID */}
        <div className="flex w-2/3 items-center gap-3">
          <label className="block font-medium text-gray-700 text-xl">
            User ID:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              required
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-xl"
              onClick={handleFind}
            >
              Find
            </button>
          </div>
        </div>
        {/* Name, Age */}
        <div className="flex space-x-4">
          <div className="flex items-center gap-3">
            <label className="block font-medium text-gray-700 text-xl">
              Name:
            </label>
            <input
              type="text"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="block font-medium text-gray-700 text-xl">
              Last Name:
            </label>
            <input
              type="text"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="block font-medium text-gray-700 text-xl">
              Age:
            </label>
            <input
              type="number"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Problem */}
        <div className="flex w-2/3 items-center gap-3">
          <label className="block font-medium text-gray-700 text-xl">
            Problem:
          </label>
          <div className="flex items-center space-x-2 my-5">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Test Name */}
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-2">
            Test Name:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-xl my-5"
            rows="7"
            placeholder="Type test name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            className="px-12 py-3 font-semibold text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabPrescription;

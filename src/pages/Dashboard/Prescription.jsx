import { useState } from "react";
import cross from "../../assets/images/ic_round-cancel.png";

const Prescription = ({ handleComponentChange }) => {
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [detailsSymptoms, setDetailsSymptoms] = useState("");
  const [problem, setProblem] = useState("");
  const [medicine, setMedicine] = useState("");
  const [testName, setTestName] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [note, setNote] = useState("");

  const handleFind = () => {
    // Logic for fetching user data by ID can go here
    console.log("Find button clicked for UserID:", userID);
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
            <span className="text-red-500">* </span>User ID:
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
              <span className="text-red-500">* </span>Name:
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
              <span className="text-red-500">* </span>Last Name:
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
              <span className="text-red-500">* </span>Age:
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
        {/* Details */}
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-3">
            <span className="text-red-500">* </span>Details Symptoms:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            rows="7"
            placeholder="Type Here"
            value={detailsSymptoms}
            onChange={(e) => setDetailsSymptoms(e.target.value)}
          />
        </div>
        {/* Problem */}
        <div className="flex w-2/3 items-center gap-3">
          <label className="block font-medium text-gray-700 text-xl">
            <span className="text-red-500">* </span>Problem:
          </label>
          <div className="flex items-center space-x-2 my-5">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userID}
              onChange={(e) => setProblem(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Medicine */}
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-3">
            <span className="text-red-500">* </span>Medicine:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            rows="7"
            placeholder="Type Here"
            value={detailsSymptoms}
            onChange={(e) => setMedicine(e.target.value)}
          />
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
            value={detailsSymptoms}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>
        {/* Follow Up */}
        <div>
          <label className="block font-medium text-gray-700 pb-2 text-xl">
            Follow Up:
          </label>
          <input
            type="date"
            className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
          />
        </div>
        {/* Note */}
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-2">
            Note:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            rows="5"
            placeholder="Type Here"
            value={note}
            onChange={(e) => setNote(e.target.value)}
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

export default Prescription;

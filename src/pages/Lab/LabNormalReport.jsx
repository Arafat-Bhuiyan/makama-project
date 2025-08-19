import { useState } from "react";
import { toast } from "react-toastify";
import FileUpload from "../Dashboard/FileUpload";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const LabNormalReport = () => {
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/labHome")
  }

  // Send button
  const handleSend = (e) => {
    e.preventDefault();

    console.log({
      userID,
      problem,
      name,
      lastName,
      age,
    });
    toast.success("Report submitted successfully!");
  };

  return (
    <div className="mx-auto bg-white shadow-xl border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Normal report</h2>
        <button
          onClick={goBack}
          className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
        >
          <X className="w-4 h-4" />
        </button>
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
            Main Problem:
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
      </div>

      {/* Attach files */}
      <FileUpload />

      <div className="flex justify-end space-x-2 my-7">
        <button
          type="button"
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 px-7 py-1 rounded-lg shadow-md text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LabNormalReport;

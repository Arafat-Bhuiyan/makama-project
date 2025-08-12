import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const NormalReport = ({ handleReportShow2 }) => {
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [medicine, setMedicine] = useState("");
  const [bp, setBp] = useState("");
  const [sp, setSp] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="mx-auto bg-white shadow-xl border rounded-xl p-6">
      <div className="flex justify-start items-center pb-3">
        <ChevronLeft color="#3371EB" />
        <button
          onClick={handleReportShow2}
          className="text-[#3371EB] font-semibold text-xl"
        >
          Back
        </button>
      </div>
      <h2 className="text-3xl font-semibold mb-6">Normal report</h2>
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
        {/* Prescription & Patient Status */}
        <div className="flex w-1/2 items-center justify-between">
          <div className="py-3 px-16 bg-blue-300 text-blue-800 text-lg font-medium rounded-xl">
            Prescription
          </div>
          <div className="text-xl font-medium flex gap-6 items-center">
            <p>Patient Status:</p>
            <p className="py-3 px-16 bg-[#95FF9F] text-[#60AD5F] rounded-xl">
              Healthy
            </p>
          </div>
        </div>
        {/* Symptoms */}
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-3">
            Symptoms:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-xl"
            rows="7"
            placeholder="Type Here"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
        </div>
        {/* BP & SpO2 */}
        <div className="flex space-x-8">
          <div className="flex items-center gap-3  font-medium text-gray-700 text-xl">
            <label className="block">BP:</label>
            <input
              type="text"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
              value={bp}
              onChange={(e) => setBp(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-3 font-medium text-gray-700 text-xl">
            <label className="block">SpO2:</label>
            <input
              type="text"
              className="w-40 px-4 py-2 border border-gray-300 rounded-xl"
              value={sp}
              onChange={(e) => setSp(e.target.value)}
              required
            />
          </div>
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
      </div>
    </div>
  );
};

export default NormalReport;

import React, { useState } from "react";
import downArrow from "../../assets/images/arrow-down2.png";
import SeatSelecting from "./SeatSelecting";

const SeatBookingForm = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [seatCategory, setSeatCategory] = useState("Cabin");
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-xl border rounded-xl">
      {/* USER ID */}
      <div className="flex w-2/3 items-center gap-3">
        <label className="block font-medium text-gray-700 text-xl">
          User ID:
        </label>
        <div className="flex items-center space-x-2 my-5">
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
            className="w-60 h-8 px-4 py-2 border border-gray-300 rounded-xl"
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
            className="w-60 h-8 px-4 py-2 border border-gray-300 rounded-xl"
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
            className="w-60 h-8 px-4 py-2 border border-gray-300 rounded-xl"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="block font-medium text-gray-700 text-xl">
          Consulting Doctor:
        </label>
        <input
          type="text"
          className="w-60 h-8 px-4 py-2 border border-gray-300 rounded-xl my-5"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="seat-category"
          className="block font-medium text-gray-700 text-xl"
        >
          Seat Category:
        </label>
        <div className="relative">
          <select
            id="seat-category"
            value={seatCategory}
            onChange={(e) => setSeatCategory(e.target.value)}
            className="border px-4 py-2 rounded-xl mt-3 w-60 h-10 text-base font-medium bg-[#ABC6F9] appearance-none pr-10"
          >
            <option className="text-base font-medium">Cabin</option>
            <option className="text-base font-medium">VIP</option>
            <option className="text-base font-medium">General</option>
          </select>
          <img
            src={downArrow}
            className="absolute left-52 top-8 transform -translate-y-1/2 w-3 h-2"
            alt=""
          />
        </div>
      </div>

      <SeatSelecting />

      <div className="mb-4">
        <label htmlFor="file" className="block">
          File (Report, Prescription, etc.):
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="border p-2 rounded mt-1"
        />
        {file && <p className="text-sm mt-2">File: {file.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block">Select Report Type:</label>
        <div className="flex space-x-4">
          <button className="bg-blue-200 px-4 py-2 rounded">Xray</button>
          <button className="bg-blue-200 px-4 py-2 rounded">
            Prescription
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block">
          Notes:
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={handleNotesChange}
          className="border p-2 rounded w-full"
        ></textarea>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-gray-400 px-4 py-2 rounded text-white">
          Cancel
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default SeatBookingForm;

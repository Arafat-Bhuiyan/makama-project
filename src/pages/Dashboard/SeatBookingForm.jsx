import { useState } from "react";
import { toast } from "react-toastify";
import downArrow from "../../assets/images/arrow-down2.png";
import SeatSelecting from "./SeatSelecting";
import FileUpload from "./FileUpload";

const SeatBookingForm = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [notes, setNotes] = useState("");
  const [seatCategory, setSeatCategory] = useState("Cabin");
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [consultDr, setConsultDr] = useState("");
  const [files, setFiles] = useState([]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  // Send button
  const handleSend = (e) => {
    e.preventDefault();

    console.log({
      selectedSeat,
      notes,
      seatCategory,
      userID,
      name,
      lastName,
      age,
      consultDr,
      files,
    });

    resetForm();
    toast.success("Seat booking submitted successfully!");
  };

  // Reset form function
  const resetForm = () => {
    setSelectedSeat(null);
    setNotes("");
    setSeatCategory("Cabin");
    setUserID("");
    setName("");
    setLastName("");
    setAge("");
    setFiles([]);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-xl border rounded-xl">
      {/* USER ID */}
      <div className="flex w-2/3 items-center gap-3">
        <label className="block font-medium text-gray-700 text-base">
          User ID:
        </label>
        <div className="flex items-center space-x-2 my-5">
          <input
            type="number"
            className="h-8 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Name, Age */}
      <div className="flex space-x-4 justify-between">
        <div className="flex items-center gap-3">
          <label className="block font-medium text-gray-700 text-base">
            Name:
          </label>
          <input
            type="text"
            className="h-8 px-4 py-2 border border-gray-300 rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="block font-medium text-gray-700 text-base">
            Last Name:
          </label>
          <input
            type="text"
            className="h-8 px-4 py-2 border border-gray-300 rounded-xl"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-3">
          <label className="block font-medium text-gray-700 text-base">
            Age:
          </label>
          <input
            type="number"
            className="h-8 px-4 py-2 border border-gray-300 rounded-xl"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Consulting Doctor */}
      <div className="flex items-center gap-3">
        <label className="block font-medium text-gray-700 text-xl">
          Consulting Doctor:
        </label>
        <input
          type="text"
          className="h-8 px-4 py-2 border border-gray-300 rounded-xl my-5"
          value={consultDr}
          onChange={(e) => setConsultDr(e.target.value)}
          required
        />
      </div>

      {/* Seat Category */}
      <div className="mb-4 flex justify-between items-end">
        <div>
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

        <div className="flex justify-between gap-3 font-medium text-base">
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 rounded-sm bg-[#ADADAD]"></div>
            <p>Booked out</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 rounded-sm bg-[#C2D5F9]"></div>
            <p>Available</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-4 rounded-sm bg-[#3371EB]"></div>
            <p>Selected</p>
          </div>
        </div>
      </div>

      <SeatSelecting />

      {/* Files */}
      <FileUpload files={files} setFiles={setFiles} />

      <div>
        <label className="block font-medium text-gray-700 text-xl pb-2">
          Note:
        </label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-xl"
          rows="5"
          placeholder="Type Here"
          value={notes}
          onChange={handleNotesChange}
        />
      </div>

      <div className="flex justify-end space-x-2 my-2">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-white border border-blue-500 hover:border-blue-600 px-7 py-1 rounded-lg shadow-md text-blue-500"
        >
          Cancel
        </button>
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

export default SeatBookingForm;

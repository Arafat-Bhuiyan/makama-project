import { Camera } from "lucide-react";
import profileImg from "../../../assets/images/profile-img.png";
import { useState } from "react";
import { toast } from "react-toastify"; // toastify import করতে হবে
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [name, setName] = useState("Dr. Farhana Rahman");
  const [designation, setDesignation] = useState("Senior Consultant Physician");
  const [experience, setExperience] = useState("20");
  const [about, setAbout] = useState(
    "I am Dr. Farhana Rahman, a senior consultant physician with over 20 years of experience in internal medicine and patient care. My expertise lies in diagnosing complex conditions, leading multidisciplinary teams, and mentoring young doctors. I am passionate about advancing healthcare standards in Bangladesh and building trust-based relationships with patients."
  );
  const [showDone, setShowDone] = useState(false);

  const handleEdit = () => {
    setShowDone(true);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  const handleSend = () => {
    if (
      !name.trim() ||
      !designation.trim() ||
      experience === "" ||
      !about.trim()
    ) {
      toast.warn("Please fill all the fields before submitting!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    console.log({
      name,
      designation,
      experience,
      about,
    });

    setName("");
    setDesignation("");
    setExperience("");
    setAbout("");

    setShowDone(false);

    toast.success("Profile updated successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <div className="flex items-center gap-8">
        <div className="relative">
          <img src={profileImg} alt="" className="w-20 h-20" />
          <Camera className="absolute bottom-0 left-16" />
        </div>
        <div className="flex flex-col gap-2 items-start">
          {/* Name */}
          <div className="flex items-center gap-3 justify-start w-full">
            <label className="block font-medium text-gray-700 text-base w-32">
              Name:
            </label>
            <input
              disabled={!showDone}
              type="text"
              className="h-8 px-3 py-2 border border-blue-300 hover:border-blue-500 rounded-xl text-sm font-medium"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Designation */}
          <div className="flex items-center gap-3 justify-start w-full">
            <label className="block font-medium text-gray-700 text-base w-32">
              Designation:
            </label>
            <input
              disabled={!showDone}
              type="text"
              className="h-8 px-3 py-2 border border-blue-300 hover:border-blue-500 rounded-xl text-sm font-medium"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          {/* Experience */}
          <div className="flex items-center gap-3 justify-start w-full">
            <label className="block font-medium text-gray-700 text-base w-32">
              Experience:
            </label>
            <input
              disabled={!showDone}
              type="number"
              min="0"
              value={experience}
              onChange={(e) => setExperience(Number(e.target.value))}
              className="w-16 text-center border border-blue-300 hover:border-blue-500 rounded-md text-sm font-medium"
            />
          </div>
        </div>
      </div>

      <div>
        {/* About me */}
        <div>
          <label className="block font-medium text-gray-700 text-xl py-4">
            About me:
          </label>
          <textarea
            disabled={!showDone}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg text-base font-medium"
            rows="4"
            placeholder="Type Here"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="mt-8">
          {!showDone ? (
            <div className="flex justify-end my-2">
              <button
                type="button"
                onClick={handleEdit}
                className=" bg-blue-500 hover:bg-blue-600 px-7 py-1 rounded-lg shadow-md text-white font-semibold text-xl"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex justify-end space-x-2 my-2">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-white border border-blue-500 hover:border-blue-600 px-7 py-1 rounded-lg shadow-md text-blue-500 font-semibold text-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600 px-7 py-1 rounded-lg shadow-md text-white font-semibold text-xl"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";

export const ComplaintsForm = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [problem, setProblem] = useState("");

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel?")) {
      window.history.back();
    }
  };

  // Submit button logic
  const handleSubmit = () => {
    // Validation
    if (!name.trim()) {
      toast.warn("Please enter your name");
      return;
    }

    if (!designation.trim()) {
      toast.warn("Please enter your designation");
      return;
    }

    if (!problem.trim()) {
      toast.warn("Please describe the problem");
      return;
    }

    // Create form data object
    const formData = {
      name: name.trim(),
      designation: designation.trim(),
      problem: problem.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Here you can handle the form submission
    console.log("Form submitted:", formData);

    // Example: Show success message and clear form
    toast.success("Form submitted successfully!");

    // Clear form after successful submission
    setName("");
    setDesignation("");
    setProblem("");
  };

  return (
    <div className="max-w-7xl mx-auto my-6">
      <h1 className="text-center font-semibold text-4xl">Complaints</h1>
      <div className="font-medium text-lg max-w-5xl mx-auto my-28 flex flex-col gap-6">
        <p>
          Token ID: <span>#354Gjk</span>
        </p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <label className="block font-medium text-gray-700 text-base">
              Name:
            </label>
            <input
              type="text"
              className="h-8 px-3 py-2 border border-blue-300 hover:border-blue-500 rounded-xl text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <label className="block font-medium text-gray-700 text-base">
              Designation:
            </label>
            <input
              type="text"
              className="h-8 px-3 py-2 border border-blue-300 hover:border-blue-500 rounded-xl text-sm"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-xl pb-2 my-4">
            Problem:
          </label>
          <textarea
            className="w-full px-3 py-2 border border-blue-300 hover:border-blue-500 rounded-xl text-sm"
            rows="5"
            placeholder="Type Here"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
        </div>

        <div className="flex gap-3 items-center justify-end">
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white font-normal text-lg py-1 px-7 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="border border-blue-400 hover:border-blue-500 bg-white text-blue-400 py-1 px-7 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

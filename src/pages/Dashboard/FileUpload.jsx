import React from "react";
import { Paperclip, CircleX } from "lucide-react";

export default function FileUpload({ files, setFiles }) {
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4 font-medium text-xl">
      {/* Custom File Upload Button */}
      <label
        htmlFor="file"
        className="w-64 h-10 flex gap-4 items-center p-4 border border-[#3371EB] rounded-md cursor-pointer"
      >
        <Paperclip color="#B2B2B2" />
        <p className="text-[#b2b2b2] font-medium text-xl">Attach File</p>
      </label>

      {/* Hidden input */}
      <input
        type="file"
        id="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Selected Files List */}
      {files.length > 0 && (
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
          {files.map((f, index) => (
            <div
              key={index}
              className="flex justify-between items-center rounded-xl bg-[#ABC6F9] text-[#3371EB] px-4 py-2 h-12"
            >
              <p className="truncate max-w-[80%]">{f.name}</p>
              <CircleX
                color="#3371EB"
                className="cursor-pointer w-6 h-6 flex-shrink-0"
                onClick={() => handleRemoveFile(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

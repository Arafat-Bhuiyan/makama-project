import React, { useState } from "react";
import { X, Upload } from "lucide-react";

export default function AddProductModal() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    unitPrice: "",
    stock: "",
  });

  const [isOpen, setIsOpen] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSend = () => {
    console.log("Form data:", formData);
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Open Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">ADD</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 transform -translate-y-6 scale-75 origin-left">
              Name
            </label>
          </div>

          {/* Company Name Field */}
          <div className="relative">
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" "
            />
            <label className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 transform -translate-y-6 scale-75 origin-left">
              Company Name
            </label>
          </div>

          {/* Unit Price and Stock Row */}
          <div className="flex space-x-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={formData.unitPrice}
                onChange={(e) => handleInputChange("unitPrice", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 transform -translate-y-6 scale-75 origin-left">
                Unit Price
              </label>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                value={formData.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 transform -translate-y-6 scale-75 origin-left">
                Stock
              </label>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Upload one image
          </h3>
          <div className="border border-gray-300 rounded-lg p-8 relative">
            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {/* Upload UI */}
            <div className="text-center pointer-events-none">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              <p className="text-gray-600">Upload an image</p>

              {/* Show preview if image uploaded */}
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="Preview"
                  className="mx-auto mt-4 max-h-40 object-contain"
                />
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

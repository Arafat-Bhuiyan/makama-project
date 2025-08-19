import { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";
import medicine from "../../assets/images/medicine.png"

export default function PharmacyOrderInterface() {
  const [userDetails, setUserDetails] = useState({
    userId: "",
    name: "",
    lastName: "",
    age: "",
    medicine: "",
  });

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Acetaminophen", price: 200, quantity: 1, type: "simple" },
    { id: 2, name: "Acetaminophen", price: 200, quantity: 1, type: "simple" },
    { id: 3, name: "Acetaminophen", price: 200, quantity: 1, type: "detailed" },
    { id: 4, name: "Acetaminophen", price: 200, quantity: 1, type: "detailed" },
    { id: 5, name: "Acetaminophen", price: 200, quantity: 1, type: "detailed" },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = Math.round(total * 0.15);
  const charge = 15;
  const payableAmount = total + vat + charge;

  const handleInputChange = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Panel - User Details */}
      <div className="w-1/2 p-6 bg-white">
        <div className="space-y-4 rounded-md shadow-xl p-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User ID:
            </label>
            <input
              type="text"
              value={userDetails.userId}
              onChange={(e) => handleInputChange("userId", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name:
              </label>
              <input
                type="text"
                value={userDetails.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last name:
              </label>
              <input
                type="text"
                value={userDetails.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age:
            </label>
            <input
              type="text"
              value={userDetails.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medicine:
            </label>
            <textarea
              value={userDetails.medicine}
              onChange={(e) => handleInputChange("medicine", e.target.value)}
              placeholder="Type Here"
              rows={11}
              className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Cart */}
      <div className="w-1/2 p-6 bg-white">
        <div className="bg-blue-50 rounded-lg shadow-xl p-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by medicine name"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Cart Items */}
          <div className="space-y-3 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg ${
                  item.type === "simple" ? "bg-blue-100" : "bg-blue-200"
                }`}
              >
                {item.type === "simple" ? (
                  // Simple layout - compact with justify-between
                  <div className="flex items-center justify-between p-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-14 h-10 rounded-md flex items-center justify-center">
                        <img src={medicine} alt="" />
                      </div>
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      1 box (${item.price})
                    </span>
                  </div>
                ) : (
                  // Detailed layout - original design with quantity controls
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-20 h-16 rounded-md flex items-center justify-center">
                        <img src={medicine} alt="" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          1 box (${item.price})
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity.toString().padStart(2, "0")}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 bg-white rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-2 mb-4 font-medium">
            <div className="flex justify-between text-gray-700 text-xl">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-xl">
              <span>Vat</span>
              <span>${vat}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-xl">
              <span>Charge</span>
              <span>${charge}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t text-2xl">
              <span>
                Total{" "}
                <span className="font-normal text-gray-600">
                  (Payable Amount)
                </span>
              </span>
              <span>${payableAmount}</span>
            </div>
          </div>

          {/* Complete Button */}
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

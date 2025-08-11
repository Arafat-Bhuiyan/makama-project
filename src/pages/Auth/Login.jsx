import { useState } from "react";
import { Eye, EyeOff, X, Search, Calendar } from "lucide-react";
import drImg from "../../assets/images/drImg.png";
import scopeLogo from "../../assets/images/scope-logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [hospitalId, setHospitalId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center">
      {/* Left Side - Hero Section */}
      <div className="relative">
        {/* image */}
        <div className="">
          <img src={drImg} className="h-[700px]" alt="" />
        </div>
        {/* Top Feature Card */}
        <div className="absolute top-52 left-3">
          <div className="inline-flex items-center bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 text-white">
            <Search className="w-5 h-5 mr-3" />
            <div>
              <div className="font-medium">Well qualified doctors</div>
              <div className="text-sm text-white/60">
                Treat with atmost care
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Feature Card */}
        <div className="absolute bottom-8 right-[-65px]">
          <div className="inline-flex items-center bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 text-white">
            <Calendar className="w-5 h-5 mr-3" />
            <div>
              <div className="font-medium">Book an appointment</div>
              <div className="text-sm text-white/60">
                Call/text/video/inperson
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="bg-white w-1/3">
        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-0 right-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Login Form */}
        <div className="p-8">
          {/* Logo and Header */}
          <div className="text-center w-full mb-8 ml-8 flex items-center justify-center gap-4">
            <img src={scopeLogo} className="w-20" alt="" />
            <h1 className="text-3xl font-semibold text-gray-900 mb-1">
              Open Health care
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-6 w-[490px] h-[519px]">
            <h2 className="text-4xl text-center font-bold text-gray-900">
              Welcome back
            </h2>
            {/* Hospital ID */}
            <div>
              <label
                htmlFor="hospitalId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Hospital Id
              </label>
              <input
                type="text"
                id="hospitalId"
                value={hospitalId}
                onChange={(e) => setHospitalId(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter Hospital ID"
              />
            </div>

            {/* User ID */}
            <div>
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                User ID
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter User ID"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

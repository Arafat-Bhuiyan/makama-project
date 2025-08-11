import newPatient from "../../assets/images/new.png";
import opdPatient from "../../assets/images/opd.png";
import operations from "../../assets/images/operations.png";
import visitors from "../../assets/images/visitors.png";

export const StartCards = () => {
  return (
    <div className="col-span-8">
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* New Patients */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">New Patients</h3>
            <img src={newPatient} className="w-8 h-8" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-4">125</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        {/* OPD Patients */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">OPD Patients</h3>
            <img src={opdPatient} className="w-8 h-8" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-4">125</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        {/* Today's Operations */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Today's Operations</h3>
            <img src={operations} className="w-8 h-8" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-4">125</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        {/* Visitors */}
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">Visitors</h3>
            <img src={visitors} className="w-8 h-8" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-4">125</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6">
        {/* Patient Visit Chart */}
        <div className="bg-white p-6 rounded-md border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Patient Visit</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>Years</option>
              </select>
            </div>
          </div>
          <div className="h-48 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
              <span>200</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            {/* Chart area */}
            <div className="ml-8 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                </div>
              </div>
              {/* Line chart */}
              <svg className="w-full h-full" viewBox="0 0 400 150">
                <path
                  d="M 20 120 Q 50 80 80 90 T 140 70 T 200 80 T 260 60 T 320 50 T 380 70"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 20 120 Q 50 80 80 90 T 140 70 T 200 80 T 260 60 T 320 50 T 380 70 L 380 150 L 20 150 Z"
                  fill="url(#gradient1)"
                  opacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 mt-2">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Income Chart */}
        <div className="bg-white p-6 rounded-md border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Income</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>years</option>
              </select>
            </div>
          </div>
          <div className="h-48 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
              <span>200</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            {/* Chart area */}
            <div className="ml-8 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                  <div className="border-t border-gray-100"></div>
                </div>
              </div>
              {/* Line chart */}
              <svg className="w-full h-full" viewBox="0 0 400 150">
                <path
                  d="M 20 100 Q 50 60 80 70 T 140 50 T 200 60 T 260 40 T 320 30 T 380 50"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 20 100 Q 50 60 80 70 T 140 50 T 200 60 T 260 40 T 320 30 T 380 50 L 380 150 L 20 150 Z"
                  fill="url(#gradient2)"
                  opacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 mt-2">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

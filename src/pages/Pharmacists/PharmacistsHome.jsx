import prescription_doc from "../../assets/images/prescription_doc.png";
import revenue from "../../assets/images/revenue.png";
import order_value from "../../assets/images/order_value.png";
import OrderTable from "./OrderTable";

export const PharmacistsHome = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl border rounded-xl p-6">
      {/* 1st section */}
      <div className="flex items-center justify-between">
        <div className="flex w-80 justify-between items-center p-4 shadow-xl rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-base">Total prescription</h1>
            <p className="font-semibold text-xl text-green-500">125</p>
          </div>
          <img src={prescription_doc} alt="" />
        </div>
        <div className="flex  w-80 justify-between items-center p-4 shadow-xl gap-6 rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-base">Total Revenue</h1>
            <p className="font-semibold text-xl text-green-500">125</p>
          </div>
          <img src={revenue} alt="" />
        </div>
        <div className="flex w-80 justify-between items-center p-4 shadow-xl gap-6 rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-base">Average Order value</h1>
            <p className="font-semibold text-xl text-green-500">125</p>
          </div>
          <img src={order_value} alt="" />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 my-6">
        {/* Patient Visit Chart */}
        <div className="bg-white p-6 rounded-md border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Order</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>Yearly</option>
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
      </div>

      {/* Table */}
      <OrderTable />
    </div>
  );
};

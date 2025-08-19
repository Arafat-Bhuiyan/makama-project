import { useEffect, useState } from "react";
import { BookText } from "lucide-react";

const statusColors = {
  Completed: "bg-green-300 text-green-700",
  Pending: "bg-yellow-200 text-yellow-700",
  Paid: "bg-green-300 text-green-700",
  Unpaid: "bg-red-300 text-red-700",
};

export default function PharmacistsOrder() {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [statsFilter, setStatsFilter] = useState("Status");
  const [billStatusFilter, setBillStatusFilter] = useState("Bill Status");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("/public/pharmacist.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setAppointmentsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading appointments...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  // Filtering and searching logic (can be expanded as needed)
  const filteredData = appointmentsData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.includes(search);
    const matchesStats =
      statsFilter === "Status" || item.status === statsFilter;

    const matchesBillStatus =
      billStatusFilter === "Bill Status" || item.bill === billStatusFilter;

    return matchesSearch && matchesStats && matchesBillStatus;
  });

  // Pagination logic
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pageCount) setCurrentPage(page);
  };

  return (
    <div className="bg-white p-6 border rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h1 className="text-xl font-semibold mb-4">Recent Order</h1>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search type of keywords"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>
          <select
            value={billStatusFilter}
            re
            onChange={(e) => setBillStatusFilter(e.target.value)}
            className="bg-blue-300 text-white px-4 py-2 gap-2 rounded-xl cursor-pointer"
          >
            <option className="rounded-xl bg-blue-300 text-white mb-2">
              Bill Status
            </option>
            <option className="bg-green-300 text-green-700 rounded-xl">
              Paid
            </option>
            <option className="bg-red-300 text-red-700 rounded-xl">
              Unpaid
            </option>
          </select>
          <select
            value={statsFilter}
            onChange={(e) => setStatsFilter(e.target.value)}
            className="bg-blue-300 text-white px-4 py-2 gap-2 rounded-xl cursor-pointer"
          >
            <option className="rounded-xl bg-blue-300 text-white mb-2">
              Status
            </option>
            <option className="bg-green-300 text-green-700 rounded-xl">
              Completed
            </option>
            <option className="bg-yellow-200 text-yellow-600 rounded-xl">
              Pending
            </option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow">
        <thead>
          <tr className="bg-blue-100 text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Prescription</th>
            <th className="px-4 py-3">Bill Status</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
              >
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">
                  <div className="w-32 flex px-2 py-1 rounded-md text-xs font-semibold bg-blue-300">
                    <BookText className="w-5 h-5" />
                    <p>Prescription</p>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      statusColors[item.bill]
                    }`}
                  >
                    {item.bill}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${
                      statusColors[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md border ${
            currentPage === 1
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "border-gray-400 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Previous
        </button>

        {[...Array(pageCount).keys()].map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num + 1)}
            className={`px-3 py-1 rounded-md border ${
              currentPage === num + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-400 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
          className={`px-3 py-1 rounded-md border ${
            currentPage === pageCount
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "border-gray-400 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

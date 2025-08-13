import { useEffect, useState } from "react";
import { FileText, Download } from "lucide-react";

export const Report = () => {
  const [reportsData, setReportsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("/public/report.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setReportsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading patients data...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  // Filtering and searching logic
  const filteredData = reportsData.filter((item) => {
    const searchLower = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchLower) ||
      item.id.includes(search) ||
      item.mobile.includes(search) || 
      item.problem.toLowerCase().includes(searchLower) || 
      item.testName.toLowerCase().includes(searchLower) || 
      item.file.toLowerCase().includes(searchLower); 

    return matchesSearch;
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
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h1 className="text-xl font-semibold mb-4">Report</h1>
        {/* Search */}
        <div className="relative w-full sm:w-1/2">
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
      </div>

      {/* Table */}
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow">
        <thead>
          <tr className="bg-blue-100 text-left text-sm font-semibold text-gray-700">
            <th className="px-4 py-3">SL</th>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Problem</th>
            <th className="px-4 py-3">Mobile Number</th>
            <th className="px-4 py-3">Test name</th>
            <th className="px-4 py-3">File</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">
                No records found
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-blue-50 transition-colors font-medium text-base"
              >
                <td className="px-4 py-2">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.problem}</td>
                <td className="px-4 py-2">{item.mobile}</td>
                <td className="px-4 py-2">{item.testName}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col text-xs">
                    {item.file.split(",").map((fileItem, idx) => (
                      <span
                        key={idx}
                        className="flex gap-1 space-y-1 items-center whitespace-nowrap"
                      >
                        <FileText className="w-4 h-4" />
                        {fileItem.trim()}
                        <Download className="w-4 h-4" />
                      </span>
                    ))}
                  </div>
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
};

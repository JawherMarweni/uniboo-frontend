import React, { useState } from "react";

const HistorySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const tableRowHeight = 40; // Height of each table row (adjust as needed)

  const historyData = [
    { date: "2023-06-01", action: "Added liquidity", amount: 100 },
    { date: "2023-05-28", action: "Withdrawn funds", amount: 50 },
    { date: "2023-05-26", action: "Swap", amount: 75 },
    { date: "2023-05-22", action: "Added liquidity", amount: 200 },
    { date: "2023-05-20", action: "Withdrawn funds", amount: 30 },
    { date: "2023-05-18", action: "Swap", amount: 60 },
    // Add more history data as needed
  ];

  // Calculate total number of pages
  const totalPages = Math.ceil(historyData.length / itemsPerPage);

  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historyData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate fixed height of history-table-container
  const containerHeight = Math.min(
    (itemsPerPage + 1) * tableRowHeight,
    historyData.length * tableRowHeight
  );

  return (
    <div className="card bg-dark text-light mb-4 history-section">
      <div className="card-body">
        <h2 className="card-title">History</h2>
        <div
          className="history-table-container"
          style={{ height: `${containerHeight}px` }}
        >
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Action</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.action}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
              {/* Add empty rows if needed */}
              {currentItems.length < itemsPerPage && (
                <tr style={{ height: `${tableRowHeight}px` }}></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="card-footer">
          <nav className="d-flex justify-content-end">
            <ul className="pagination pagination-sm mb-0">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className={`page-link ${
                      currentPage === index + 1 ? "btn-dark" : ""
                    } text-light`} // Set selected page button color to dark
                    onClick={() => paginate(index + 1)}
                    style={{ background: "transparent", border: "none" }} // Remove background and border styles
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HistorySection;

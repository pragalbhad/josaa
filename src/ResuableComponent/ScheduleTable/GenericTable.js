import React, { useState, useEffect } from "react";
import "./ScheduledTable.scss";

const GenericTable = ({ headers, data, rowsPerPage = 10, defaultActions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setCurrentData(data?.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(data?.length / rowsPerPage));
  }, [data, currentPage, rowsPerPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-container">
      <table className="generic-table">
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th key={index}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData?.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers?.map((header, index) => {
                if (header.label === "Actions") {
                  return (
                    <td key={index} style={{ display: 'flex', gap: '1rem' }}>
                      {Object.keys(defaultActions)?.map((actionKey) => (
                        <span key={actionKey} className="action-btn">
                          {defaultActions[actionKey]}
                        </span>
                      ))}
                    </td>
                  );
                }
                else if (header.label === "Choice") {
                  return (
                    <td key={index}>
                      {rowIndex}
                    </td>
                  );
                }
                return (
                  <td key={index}>
                    {item[header.dataMapping] || "--"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button
          className={`${currentPage === 1 ? "disbale-pagination-btn" : ""} prev-btn`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-number">{currentPage}</span>
        <button
          className={`${currentPage === totalPages ? "disbale-pagination-btn" : ""} next-btn`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GenericTable;

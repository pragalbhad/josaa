import React, { useState, useEffect } from "react";
import "./ScheduledTable.scss";
import SignUpIllustration from '../../assests/images/SignUpIllustration.svg';

const GenericTable = ({ headers, data, rowsPerPage = 10, defaultActions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const pageRange = 4; // Number of page buttons to show at once


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

  const renderPageNumbers = () => {
    let startPage = Math.max(currentPage - Math.floor(pageRange / 2), 1);
    let endPage = startPage + pageRange - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - pageRange + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <sapn
          key={i}
          className={`page-btn ${i === currentPage ? "active-page" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </sapn>
      );
    }
    return pages;
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
          {currentData && currentData.length > 0 ?
            currentData?.map((item, rowIndex) => (
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
            ))
            :
            <tr>
          <td colSpan={5} style={{ textAlign: "center", padding: "10px" }}>
            <img
              src={"https://josaahelp.in/_next/static/media/login_required.ff253d26.svg" || SignUpIllustration}
              alt="SignUpIllustration"
              style={{ maxWidth: "500px", height: "auto" }}
            />
            <div>Please Login to See Data</div>
          </td>
        </tr>
          }
        </tbody>
      </table>

      <div className="pagination-controls">
        <button
          className={`${currentPage === 1 ? "disable-pagination-btn" : ""} prev-btn`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        |
        {renderPageNumbers()}
        |
        <button
          className={`${currentPage === totalPages ? "disable-pagination-btn" : ""} next-btn`}
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

import React, { useState, useMemo } from "react";
import "./NestedColTable.scss";

const NestedColTable = ({ header, data, isFilter, defaultActions }) => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const handleFilterChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const groupColors = useMemo(() => {
    return data.reduce((colors, item, index) => {
      colors[item.groupRow] = generateRandomColor();
      return colors;
    }, {});
  }, [data]);

  const filteredData =
    selectedGroup === "All"
      ? data
      : data.filter((item) => item.groupRow === selectedGroup);

  return (
    <div className="table-container">
      {isFilter && (
        <div className="filter-container">
          <select
            className="text-truncate"
            id="filter"
            value={selectedGroup}
            onChange={handleFilterChange}
          >
            <option className="text-truncate" value="All">
              All
            </option>
            {data.map((item, index) => (
              <option key={index} value={item.groupRow}>
                {item.groupRow}
              </option>
            ))}
          </select>
        </div>
      )}

      <table className="schedule-table">
        <thead>
          {header ? (
            <tr>
              {header.map((i) => (
                <th>{i}</th>
              ))}
            </tr>
          ) : (
            <tr>
              <th></th>
              <th>Date</th>
              <th>Time (IST)</th>
              <th>Event</th>
            </tr>
          )}
        </thead>
        <tbody>
          {filteredData.map((item, groupIndex) => (
            <React.Fragment key={groupIndex}>
              <tr style={{ backgroundColor: groupColors[item.groupRow] }}>
                <td rowSpan={item.events.length} className="group-cell">
                  {item.groupRow}
                </td>
                <td>{item.events[0].date}</td>
                <td>{item.events[0].time}</td>
                <td>{item.events[0].event}</td>
                {defaultActions && <td className="action-cell">
                    {Object.values(defaultActions).map((action, index) => (
                      <span key={index} className="action-btn">
                        {action}
                      </span>
                    ))}
                  </td>}
              </tr>
              {item.events.slice(1).map((event, eventIndex) => (
                <tr
                  key={eventIndex}
                  style={{ 
                    backgroundColor: groupColors[item.groupRow], 
                    color: groupColors[item.groupRow], 
                  }}
                >
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.event}</td>
                  {defaultActions && <td className="action-cell">
                    {Object.values(defaultActions).map((action, index) => (
                      <span key={index} className="action-btn">
                        {action}
                      </span>
                    ))}
                  </td>}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
};

export default NestedColTable;

import React from 'react';
import { Table } from 'react-bootstrap';
import './ScheduledTable.scss';

const RankingTable = ({ data }) => {
  return (
    <table striped bordered hover className="table-container text-center">
      <thead>
        <tr >
          <th >Institute</th>
          <th >Program</th>
          <th >NIRF Rank</th>
          <th >Closing Rank (2023)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{textAlign: 'left',}}>
            <td>{item.institute}</td>
            <td>{item.program}</td>
            <td>{item.nirfRank}</td>
            <td >{item.closingRank}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankingTable;

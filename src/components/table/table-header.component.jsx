import React from "react";

const TableHeader = () => {
  return (
    <thead className='thead-dark'>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Delete button</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

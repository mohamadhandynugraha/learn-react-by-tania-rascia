import React from "react";

const TableBody = (props) => {
  const rows = props.users.map((user, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <tbody>
      {rows}
    </tbody>
  );
};

export default TableBody;

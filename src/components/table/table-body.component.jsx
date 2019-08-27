import React from "react";

const TableBody = props => {
  const rows = props.users.map((user, index) => {
    return (
      <tr key={index + 1}>
        <th scope="row">{index + 1}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>
          <button className='btn btn-outline-danger' onClick={() => props.removeUser(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
  
};

export default TableBody;

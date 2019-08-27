import React from "react";

import TableHeader from './table-header.component';
import TableBody from './table-body.component';

const Table = (props) => {
    const { users, removeUser } = props;
    return (
        <table className='table'>
            <TableHeader />
            <TableBody users={users} removeUser={removeUser}/>
        </table>
    );
}

export default Table;
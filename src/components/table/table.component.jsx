import React from "react";

import TableHeader from './table-header.component';
import TableBody from './table-body.component';

const Table = (props) => {
    const { users } = props.users;
    return (
        <table className='table table-dark'>
            <TableHeader />
            <TableBody users={users}/>
        </table>
    );
}

export default Table;
import React from "react";

import TableHeader from './table-header.component';
import TableBody from './table-body.component';

const Table = () => {
    return (
        <table className='table table-dark'>
            <TableHeader />
            <TableBody />
        </table>
    );
}

export default Table;
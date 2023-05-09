import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({user}) => {
    const {_id, name, email, gender, status} = user;

    const handleUSerDelete = id => {
        console.log(id);

        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'user deleted successfully',
                  })
            }
        })
    }

    // const handleUpdate = () => {
    //     console.log('hello world');
    // }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className='flex gap-2'>
                <Link to={`/users/${_id}`}><button className='btn btn-square'>u</button></Link>
                <button onClick={() => handleUSerDelete(_id)} className='btn btn-square'>X</button>
            </td>
        </tr>
    );
};

export default TableRow;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-5'>User Collection</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(us => <TableRow key={us._id} user={us}></TableRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
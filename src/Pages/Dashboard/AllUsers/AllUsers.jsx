import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaUserSecret } from "react-icons/fa";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });

    const handleMakeAdmin = (id) => {
        
    }
    const handleDelete = (id) => {}

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'All Users'} />
            <SectionTitle subHeading={'users'} Heading={'Manage Users'} />
            <div>
                <h1 className='font-bold text-3xl mb-5'>Total Users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='uppercase'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td><button className='text-orange-500' onClick={ () => handleMakeAdmin(user._id)}><FaUserSecret/></button> </td>
                                        <td><button onClick={ () => handleDelete(user._id)} className='text-red-700'> Delete </button> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
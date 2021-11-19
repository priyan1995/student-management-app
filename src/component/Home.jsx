import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
    
    return(
        <>

        <h2>Home</h2>

        <div className="w-100"><Link to="/create-student">Create New Student</Link></div>
        <div className="w-100"> <Link to="/students-list">Students List</Link></div>

        </>
    )

}
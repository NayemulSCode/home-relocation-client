import React from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCog, faSignOutAlt, faThLarge, faGripHorizontal, faUsers, faHome,faComment } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white" >
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageService" className="text-white" >
                        <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white" >
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faUsers} /> <span>Create Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white" >
                        <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                    </Link>
                </li>
            </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;
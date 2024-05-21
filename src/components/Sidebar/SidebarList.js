import React from "react";
import { Link } from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';

const SidebarList = () => {

    return (
        <ul>
            <li className="mb-2">
                <Link to="/dashboard" className="block hover:bg-gray-900 py-2 px-2 rounded">
                    <i className="fas fa-tachometer-alt mr-2"></i>
                    Dashboard
                </Link>
            </li>
            <li className="mb-2">
                <a className="block hover:bg-gray-900 py-2 px-2 rounded">
                    Item
                </a>
            </li>
            <li className="mb-2">
                <a className="block hover:bg-gray-900 py-2 px-2 rounded">
                    Menu
                </a>
            </li>
        </ul>
    )
}


export default SidebarList;
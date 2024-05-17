import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SidebarList = () => {

    return (
        <ul>
            <li className="mb-2">
                <a href="#" className="block hover:bg-gray-900 py-2 px-2 rounded">
                    <i className="fas fa-tachometer-alt mr-2"></i>
                    Dashboard
                </a>
            </li>
            <li className="mb-2">
                <a href="#" className="block hover:bg-gray-900 py-2 px-2 rounded">
                    Item
                </a>
            </li>
            <li className="mb-2">
                <a href="#" className="block hover:bg-gray-900 py-2 px-2 rounded">
                    Menu Item 3
                </a>
            </li>
        </ul>
    )
}


export default SidebarList;
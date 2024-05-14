import React from "react";

import SidebarList from "./Sidebar/SidebarList";
import SidebarLogo from "./Sidebar/SidebarLogo";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white h-full py-6 px-4">
            <SidebarLogo />
            <SidebarList />
        </div>
    );
}

export default Sidebar;

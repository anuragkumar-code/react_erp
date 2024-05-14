import React from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";


const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
            </div>
            
        </div>
    );
}



export default Layout;
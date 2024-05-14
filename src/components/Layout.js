import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const Layout = () => {
    return (
        <div className="container grid grid-cols-12 gap-4">
            <div className="col-span-3 min-h-screen">
                <Sidebar />
            </div>

            <div className="col-span-9">
                <div className="grid-rows-1">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}



export default Layout;
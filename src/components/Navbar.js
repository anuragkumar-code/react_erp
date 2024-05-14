import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    return(
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center w-auto">
            <div className="relative">
                <img
                    src="https://plus.unsplash.com/premium_photo-1708633003240-569a6135deaa?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full cursor-pointer" 
                    onClick={toggleDropdown}
                />
                {isOpen && (
                    <div className="absolute right-0 w-48 mt-2 py-2 bg-white text-gray-900 rounded shadow-xl">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
                    </div>
                )}
            </div>
        </header>
    )
};

export default Navbar;

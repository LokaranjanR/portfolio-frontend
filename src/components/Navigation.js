import React from "react";
import { Link } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css'

const Navigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-md">
            <ul className="flex justify-center space-x-4 py-2">
                <li className="relative">
                    <Link to="/home" className="hover:bg-gray-600 px-4 py-2 block text-white">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-red-600 rounded-full animate-ping"></span>
                        <span className="material-icons text-2xl">home</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/add" className="hover:bg-gray-600 px-4 py-2 block text-white">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2"></span>
                        <span className="material-icons text-2xl">add</span>

                    </Link>
                </li>
                <li className="relative">
                    <Link to="/view" className="hover:bg-gray-600 px-4 py-2 block text-white">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2"></span>
                        <span className="material-icons text-2xl">view_module</span>
                    </Link>
                </li>
            </ul>
        </nav>

    );
};

export default Navigation;
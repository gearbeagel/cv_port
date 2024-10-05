import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Sidebar = ({ showSection }) => {
    const [isExpanded, setIsExpanded] = useState(false); 

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            className={`fixed left-0 top-1/2 transform ml-2 -translate-y-1/2 transition-transform duration-300 bg-gray-200 text-gray-800 flex flex-col justify-center items-center rounded-lg ${isExpanded ? 'w-md-16 w-8' : 'w-8'} ${isExpanded ? 'translate-x-0' : '-translate-x-3'}`}
        >
            <button 
                className="flex items-center p-3 hover:bg-gray-300 transition duration-200"
                onClick={toggleSidebar}
            >
                <FaArrowRight className={`${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {isExpanded && (
                <nav className="flex flex-col mt-5">
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('home')}>
                        <FaHome />
                    </a>
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('info')}>
                        <FaInfoCircle />
                    </a>
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('education')}>
                        <FaGraduationCap />
                    </a>
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('employment')}>
                        <FaBriefcase />
                    </a>
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('projects')}>
                        <FaProjectDiagram />
                    </a>
                    <a className="flex items-center p-2 hover:bg-gray-300 transition duration-200 cursor-pointer" onClick={() => showSection('contact')}>
                        <FaEnvelope />
                    </a>
                </nav>
            )}
        </div>
    );
};

export default Sidebar;

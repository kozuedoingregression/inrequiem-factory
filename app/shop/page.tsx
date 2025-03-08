import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function Shop() {
    return (
        <>
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">InRequiem Collections</h1>
            <p className="text-gray-600 mt-2">Fast life</p>

            {/* Visit Store Button */}
            <Link
                href="https://nightriderz.creator-spring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 hover:text-sky-400 transition duration-300 ease-in-out"
            >
                Visit Store
                <FaExternalLinkAlt className="w-4 h-4" />
            </Link>
        
            </div>
        </>
    )
}

export default Shop

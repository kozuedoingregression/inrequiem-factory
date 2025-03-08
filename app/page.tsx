"use client"
import Link from "next/link";
import React, { use } from "react";

const LandingPage = () => {

    return (
        <>

            <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
                {/* Logo */}
                <div className="mb-6">
                     <img className="w-2xl h-2xl object-cover" src="https://i.pinimg.com/736x/66/88/a0/6688a0262dac72074cba6b315a76e489.jpg" alt="Monetron Logo" /> 
                </div>

                {/* Branding */}
                <h1 className="text-3xl font-bold tracking-widest">InRequiem</h1>
                <p className="text-gray-400 text-sm mt-2 uppercase">Performance Telemetry without expensive sensors</p>
                <p className="text-gray-400 text-sm mt-2 uppercase">just your smartphone</p>

                {/* CTA Button */}
                <Link href="/home" className="mt-10 px-6 py-3 border border-white text-black bg-white hover:bg-gray-300 transition rounded">
                    Enter
                </Link>
            </div>
        </>
    );
};

export default LandingPage;

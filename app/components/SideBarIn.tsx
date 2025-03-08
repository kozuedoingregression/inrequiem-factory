import React from 'react';
import Link from 'next/link';

import { SiSpeedtest } from "react-icons/si";
import { GoHome } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { TbHelmet } from "react-icons/tb";
import { GrShop } from "react-icons/gr";
import { FaFlagCheckered } from "react-icons/fa";

function SideBarIn() {
    return (
        <>
            <aside className="w-20 h-screen bg-black text-white p-4 flex flex-col items-center">
                
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <img src="https://i.pinimg.com/736x/66/88/a0/6688a0262dac72074cba6b315a76e489.jpg" alt="ET" />
                        </li>
                        <li>
                            <Link href="/home" className="block p-3 rounded hover:bg-gray-900">
                                <GoHome size={29} className="text-white mx-auto" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/telemetry/telemetryhome" className="block p-3 rounded hover:bg-gray-900">
                                <SiSpeedtest size={28} className="text-white mx-auto" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/crew" className="block p-3 rounded hover:bg-gray-900">
                                <GrGroup size={28} className="text-white mx-auto" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/driver" className="block p-3 rounded hover:bg-gray-900">
                                <TbHelmet size={28} className="text-white mx-auto" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="block p-3 rounded hover:bg-gray-900">
                                <GrShop size={28} className="text-white mx-auto" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block p-3 rounded hover:bg-gray-900">
                                <FaFlagCheckered size={28} className="text-white mx-auto" />
                            </Link>
                            
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default SideBarIn

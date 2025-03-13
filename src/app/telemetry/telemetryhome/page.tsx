import { SignedOut, SignInButton, useAuth } from '@clerk/nextjs';
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link';

async function LandingPage(){
     const { userId } = await auth()

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return (<div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Logo */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Telemetry</h1>
        <p className="text-gray-600 mt-2">God Speed</p>
      </div>
      <div className="mb-6">
        <img  src="https://pbs.twimg.com/media/Glt9EvQbgAAoFED?format=jpg&name=large" alt="InRequiem Logo" className="max-w object-covered" />
      </div>

      {/* Branding */}
      <h1 className="text-3xl font-bold tracking-widest">InRequiem</h1>
      <p className="text-gray-400 text-sm mt-2 uppercase">Sign-In to view this page</p>

      <SignedOut>
        <SignInButton>
          <button className="mt-4 px-6 py-3 border border-white text-black bg-white hover:bg-gray-300 transition rounded">Sign In</button>
        </SignInButton>
      </SignedOut>

    </div>)
  }

    return (
        <>

            <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
                {/* Logo */}
                <div className="mb-6">
                    <img  src="https://pbs.twimg.com/media/Glt9EvQbgAAoFED?format=jpg&name=large" alt="InRequiem Logo" className="max-w object-covered" />
                </div>

                {/* Branding */}
                <h1 className="text-3xl font-bold tracking-widest">InRequiem</h1>
                <p className="text-gray-400 text-sm mt-2 uppercase">Personalized Telemetry without expensive sensors</p>
                <p className="text-gray-400 text-sm mt-2 uppercase">just your smartphone</p>

                {/* CTA Button */}
                <Link href="/telemetry" className="mt-10 px-6 py-3 border border-white text-black bg-white hover:bg-gray-300 transition rounded">
                    Start
                </Link>
                <Link href="/telemetry" className="mt-10 px-6 py-3 border border-white text-black bg-white hover:bg-gray-300 transition rounded">
                    0-100
                </Link>
            </div>
        </>
    );
};

export default LandingPage;
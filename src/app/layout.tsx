"use client"; // Make it a client component
import "./globals.css";
import SideBarIn from "./components/SideBarIn";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  // Define paths where the sidebar should be hidden
  const hiddenPaths = ["/", "/telemetry","/signup"];

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json"/>
        </head>
        <body className="flex">
          {/* Hide sidebar if pathname matches any hidden path */}
          {!hiddenPaths.includes(pathname) && <SideBarIn />}
          <main className="flex-1 p-4">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}


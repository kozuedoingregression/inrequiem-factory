"use client"; // Make it a client component
import "./globals.css";
import SideBarIn from "./components/SideBarIn";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route

  // Define paths where the sidebar should be hidden
  const hiddenPaths = ["/", "/telemetry"];

  return (
    <html lang="en">
      <body className="flex">
        {/* Hide sidebar if pathname matches any hidden path */}
        {!hiddenPaths.includes(pathname) && <SideBarIn />}
        
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}


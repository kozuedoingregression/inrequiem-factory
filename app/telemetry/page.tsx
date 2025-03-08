"use client";
import React, { useEffect, useState } from "react";

function Telemetry() {
    const [time, setTime] = useState(0); // Time in seconds
    const [speed, setSpeed] = useState(0); // Speed in km/h
    const [topSpeed, setTopSpeed] = useState(0);
    const [distance, setDistance] = useState(0); // Distance in km

    function toKmH(speed) {
        return (speed * 3.6).toFixed(0); // Convert m/s to km/h
    }

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        const updateSpeed = (position) => {
            let speed = position.coords.speed; // Speed in m/s
            if (speed !== null) {
                let kmh = toKmH(speed);
                setSpeed(kmh);
                setTopSpeed(prevTopSpeed => Math.max(prevTopSpeed, kmh));
            }
        };

        const watcher = navigator.geolocation.watchPosition(updateSpeed, console.error, {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 1000
        });

        return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1); // Increase time by 1 second
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    useEffect(() => {
        // Convert speed from km/h to km/s
        let speedKms = speed / 3600;
        setDistance(prevDistance => prevDistance + speedKms);
    }, [speed, time]);

    return (
        <>
            <fieldset className="border p-4 flex justify-center">
                <legend className="font-bold text-lg px-2">InRequiem</legend>

                <div className="p-4 text-center w-full max-w-md mx-auto">
                    {/* Enlarged Speed Block as a Square */}
                    <fieldset className="border text-white w-full h-48 sm:w-64 sm:h-64 flex flex-col items-center justify-center mx-auto">
                        <legend className="font-bold text-xl px-2">Speed</legend>
                        <p className="text-5xl font-extrabold">{speed} kmph</p>
                    </fieldset>

                    <fieldset className="border p-4 mt-4">
                        <legend className="font-bold">Top Speed</legend>
                        <h1 className="text-2xl">{topSpeed} kmph</h1>
                    </fieldset>

                    <fieldset className="border p-4 mt-4">
                        <legend className="font-bold">Time</legend>
                        <h1 className="text-2xl">{new Date(time * 1000).toISOString().substr(11, 8)}</h1>
                    </fieldset>

                    <fieldset className="border p-4 mt-4">
                        <legend className="font-bold">Distance</legend>
                        <h1 className="text-2xl">{distance.toFixed(2)} km</h1>
                    </fieldset>
                </div>
            </fieldset>
        </>
    );
}

export default Telemetry;

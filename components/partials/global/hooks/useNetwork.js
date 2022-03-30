import { useState, useEffect } from "react";

function useNetwork() {
    const [ isOnline, setOnline ] = useState(true);

    const updateOnline = () => {
        setOnline(window.navigator.onLine);
    };

    useEffect(() => {
        updateOnline();

        window.addEventListener("online", updateOnline);

        window.addEventListener("offline", updateOnline);

        return () => {
            window.removeEventListener("online", updateOnline);

            window.removeEventListener("offline", updateOnline);
        };
    });

    return isOnline;
}

export default useNetwork;

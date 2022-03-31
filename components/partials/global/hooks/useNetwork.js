import { useState, useEffect } from "react";

function useNetwork() {
    const [isOnline, setNetwork] = useState(true);

    const updateNetwork = () => {
        setNetwork(window.navigator.onLine);
    };

    useEffect(() => {
        updateNetwork();

        window.addEventListener("offline", updateNetwork);

        window.addEventListener("online", updateNetwork);

        return () => {
            window.removeEventListener("offline", updateNetwork);

            window.removeEventListener("online", updateNetwork);
        };
    });

    return isOnline;
}

export default useNetwork;

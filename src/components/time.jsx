import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>Time: {time}</div>;
}
export default Time;
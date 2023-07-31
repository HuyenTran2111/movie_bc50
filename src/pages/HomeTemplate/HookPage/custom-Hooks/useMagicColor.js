import  { useState, useEffect } from 'react';

const useMagicColor = () => {
    const [color, setColor] = useState("hotpink");
    useEffect(() => {
        const interval = setInterval(() => {
        const newColor = Math.floor(Math.random() * 999999);
        setColor(`#${newColor}`);
        console.log("newColor", newColor);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return color;
}
export default useMagicColor;
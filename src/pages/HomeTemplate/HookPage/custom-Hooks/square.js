// import React,  { useState, useEffect } from 'react';
import "./style.css";
import useMagicColor from './useMagicColor';

export default function Square() {
    // const [color, setColor] = useState("hotpink");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     const newColor = Math.floor(Math.random() * 999999);
    //     setColor(`#${newColor}`);
    //     console.log("newColor", newColor);
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);
    const color = useMagicColor();
  return (
    <div className='square' style={{backgroundColor:color}}>square</div>
  )
}

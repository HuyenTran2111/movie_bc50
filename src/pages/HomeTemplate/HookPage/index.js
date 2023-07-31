import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Child from './child';
import CustomHooks from './custom-Hooks';

export default function HookPage() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
console.log("useEffect - tương đương LifeCycle DidMount bên class - chạy 1l nếu đối số thứ 2 là mảng rỗng");
    }, []);

    useEffect(() => {
        console.log("useEffect - tương đương DidUpdate bên class - chạy nhiều lần nếu mảng k rỗng");
    }, [number]);

    useEffect(() => {
      const interval =  setInterval(() => {
            console.log("Trân");
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const countUp = () => {
        let i = 0;

        while(i < 1000) {
            i++
        }

        console.log(i);
        return i;
    };

    const countUpMemo = useMemo(() => {
        return countUp();
    },
    []);

    const renderNoti = () => {
        console.log("renderNoti");
    };
    const renderNotiCallBack = useCallback(renderNoti, [])

  return (
    <div>
        <h3>Number: {number}</h3>
        <h3>Number Up: {countUpMemo}</h3>
        <button className='btn btn-success' onClick={() => {
            setNumber(number + 1);
        }}>Click</button>

        <hr />
        <Child renderNoti= {renderNotiCallBack} />

        <hr />
        <CustomHooks />
    </div>
  )
}

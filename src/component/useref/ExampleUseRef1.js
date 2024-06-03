import React, {useEffect, useRef, useState} from 'react';

const ExampleUseRef1 = () => {
    const [count, setCount] = useState(60);
    const timerId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleStart = () => {
        if (timerId.current === null) { // Đảm bảo chỉ có một bộ đếm
            timerId.current = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        }
    };

    const handleStop = () => {
        if (timerId.current !== null) {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    };

    const handleReset = () => {
        setCount(60)
    }

    return (
        <div className='example'>
            <h1>Example:</h1>
            <div style={{padding: '0 20px'}}>
                <h2>{count}</h2>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default ExampleUseRef1;

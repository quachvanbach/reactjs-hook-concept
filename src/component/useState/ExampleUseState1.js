import React, {useState} from 'react';

const ExampleUseState1 = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div className="example">
            <h1>Example 1: <u>setState</u> dạng number</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Increase
            </button>
        </div>
    );
};

export default ExampleUseState1;
import React, {useState} from 'react';

const ExampleUseSate2 = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
        setCount(prevState => prevState + 1);
    }

    return (
        <div className="example">
            <h1>Example 2: <u>setState</u> dạng callback</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Increase
            </button>
        </div>
    );
};

export default ExampleUseSate2;
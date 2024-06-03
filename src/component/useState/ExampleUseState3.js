import React, {useState} from 'react';

const orders = [100, 200, 300];


const ExampleUseSate3 = () => {
    const [count, setCount] = useState(() => {
        return orders.reduce((total, cur) => total + cur);
    });

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div className="example">
            <h1>Example 3: <u>initState</u> dạng callback: Lấy giá trị được return của ham callback để làm gi trị
                của <u>initState</u></h1>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>Increase
            </button>
        </div>
    );
};

export default ExampleUseSate3;
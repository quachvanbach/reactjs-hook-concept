import React, {useState} from 'react';
import ExampleMemo1A from "./ExampleMemo1A";
import ExampleMemo1B from "./ExampleMemo1B";

const ExampleMemo1 = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        setCount(() => count + 1)
    }

    return (
        <div className='example'>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <ExampleMemo1A/>
            <ExampleMemo1B count={count}/>
        </div>
    );
};

export default ExampleMemo1;
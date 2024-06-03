import React, {useCallback, useState} from 'react';
import ExampleUseCallback1A from "./ExampleUseCallback1A";

const ExampleUseCallback1 = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = useCallback(() => {
        setCount(() => count + 1)
    }, [])

    return (
        <div className='example'>
            <h1>{count}</h1>
            <ExampleUseCallback1A onIncrease={handleIncrease}/>
        </div>
    );
};

export default ExampleUseCallback1;
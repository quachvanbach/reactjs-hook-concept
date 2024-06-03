import React, {memo} from 'react';

const ExampleUseCallback1A = ({onIncrease}) => {
    console.log('re-render')
    return (
        <div>
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
};

export default memo(ExampleUseCallback1A);
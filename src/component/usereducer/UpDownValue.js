import React, {useReducer} from 'react';

// 1. Init state:
const initState = 0;

// 2. Action:
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// 3. Reducer:
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
}

// 4. Dispatch
const UpDownValue = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <>
            <h1>Example 1: Up Down value</h1>
            <div style={{padding: '0 20px'}}>
                <h2>{count}</h2>
                <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
                <button onClick={() => dispatch(UP_ACTION)}>UP</button>
            </div>
        </>
    );
};

export default UpDownValue;
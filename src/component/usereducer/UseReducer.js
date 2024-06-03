import React from 'react';
import TodoList from "./TodoList";
import UpDownValue from "./UpDownValue";

const UseReducer = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>useReducer: </h1>
            </div>
            <div className='examples'>
                <UpDownValue/>
                <TodoList/>
            </div>
        </div>
    );
};

export default UseReducer;
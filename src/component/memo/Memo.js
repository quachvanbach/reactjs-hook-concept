import React from 'react';
import ExampleMemo1 from "./ExampleMemo1";

const Memo = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>memo: Higher order component (HOC): bọc lại class/component và ghi nhớ nó, để sau đó sẽ quyết định
                    có re-render class/component đó hay không. Để tránh re-render lại các class/component trong các
                    tình huống không cần thiết</h1>
                <h2></h2>
                <p></p>
            </div>
            <div className='examples'>
                <ExampleMemo1/>
            </div>
        </div>
    );
};

export default Memo;
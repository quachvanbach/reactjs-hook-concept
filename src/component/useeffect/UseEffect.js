import React from 'react';
import ExampleUseEffect1 from "./ExampleUseEffect1";
import ExampleUseEffect2 from "./ExampleUseEffect2";
import ExampleUseEffect3 from "./ExampleUseEffect3";

const UseEffect = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>useEffect: Sử dụng khi muốn thực hiện các <u>side effect</u>:</h1>
                <ul>
                    <li>Update DOM</li>
                    <li>Call API</li>
                    <li>Listen DOM event
                        <ul>
                            <li>Scroll</li>
                            <li>Resize</li>
                        </ul>
                    </li>
                    <li>Cleanup
                        <ul>
                            <li>Remove listener / Unsubscribe</li>
                            <li>Clear time</li>
                        </ul>
                    </li>
                </ul>
                <h2>Cú pháp: <i>useEffect(callback, [dependence])</i></h2>
                <p>Trong đó callback là bắt buộc, dependence thì có thể có hoặc không.</p>
                <ul>
                    <h2>Lưu ý:</h2>
                    <li>Callback luôn được gọi sau khi component mounted.</li>
                    <li>Cleanup function luôn được gọi truớc khi component unmount. Luôn sử dụng cleanup function trong
                        trường hợp thực hiện tác vụ với DOM và timer function (setTimeout & setInterval)
                    </li>
                    <li>Cleanup function luôn được gọi truớc khi callback được gọi (trừ lần mounted)</li>
                </ul>
            </div>
            <div className='examples'>
                <h1>Example:</h1>
                <ExampleUseEffect1/>
                <ExampleUseEffect2/>
                <ExampleUseEffect3/>
            </div>
        </div>
    );
};

export default UseEffect;
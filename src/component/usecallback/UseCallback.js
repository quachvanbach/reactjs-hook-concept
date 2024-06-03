import React from 'react';
import ExampleUseCallback1 from "./ExampleUseCallback1";

const arrs = [1,2,3,4,5];

let b = [];



console.log(b);

const UseCallback = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>useCallback: là một hook trong React được sử dụng để ghi nhớ (memoize) một hàm callback, giúp tránh
                    việc tạo lại hàm này ở mỗi lần render trừ khi các dependencies thay đổi.</h1>
                <h2>Cú pháp: <i>useCallback(callback, [deps])</i></h2>
                <p>- Khi sử dụng useCallback component cha, cần kết hợp với <i>React.memo</i> ở component con có chứa
                    props</p>
            </div>
            <div className='examples'>
                <ExampleUseCallback1/>
            </div>
        </div>
    );
};

export default UseCallback;
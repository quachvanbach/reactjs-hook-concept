import React from 'react';
import ExampleUseRef1 from "./ExampleUseRef1";

const UseRef = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>useRef: là một hook trong React được sử dụng để tạo và quản lý một đối tượng tham chiếu có thể duy
                    trì giá trị của nó giữa các lần render mà không gây ra việc re-render của component.</h1>
                <h2>Cú pháp khởi tạo: <i>const varName = useRef(initValue)</i></h2>
                <p> Khi bạn tạo một ref bằng cách sử dụng useRef, nó trả về một đối tượng có một thuộc tính duy nhất là <i>.current</i></p>
            </div>
            <div className='examples'>
                <ExampleUseRef1/>
            </div>
        </div>
    );
};

export default UseRef;
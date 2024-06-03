import React from 'react';
import ExampleUseLayoutEffect from "./ExampleUseLayoutEffect";

const UseLayoutEffect = () => {
    return (
        <div className='container'>
            <div className="concept">
                <h1>useLayoutEffect: Tương tự như <u>useEffect</u> nhưng khác nhau 1 chút về trình tự hoạt động:</h1>
                <h1>So sánh useEffect & useLayoutEffect</h1>
                <ul style={{listStyleType: 'decimal'}}>Trình tự hoạt động của useEffect:
                    <li>Cập nhật lại state</li>
                    <li>Cập nhật DOM (mutated)</li>
                    <li>Render lại UI</li>
                    <li>Gọi cleanup nếu deps thay đổi</li>
                    <li>Gọi useEffect callback</li>
                </ul>
                <ul style={{listStyleType: 'decimal'}}>Trình tự hoạt động của useLayoutEffect:
                    <li>Cập nhật lại state</li>
                    <li>Cập nhật DOM (mutated)</li>
                    <li>Gọi cleanup nếu deps thay đổi</li>
                    <li>Gọi useLayoutEffect</li>
                    <li>Render lại UI</li>
                </ul>
            </div>
            <div className='examples'>
                <h1>Example:</h1>
                <ExampleUseLayoutEffect/>
            </div>
        </div>
    );
};

export default UseLayoutEffect;
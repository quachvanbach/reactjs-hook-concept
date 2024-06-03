import React, {useEffect, useState} from 'react';
import ExampleUseEffect1A from "./ExampleUseEffect1A";

const ExampleUseEffect1 = () => {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <div className="example">
            <h2>Trường hợp 1: Không có dependence. <i>useEffect(callback)</i></h2>
            <ul>
                <li>Gọi callback mỗi khi component re-render</li>
                <li>Gọi callback sau khi component thêm element vào DOM</li>
            </ul>
            <button onClick={() => setToggleShow(!toggleShow)}>{toggleShow ? 'Hide' : 'Show'} Example</button>
            {toggleShow && <ExampleUseEffect1A/>}
        </div>
    )
        ;
};

export default ExampleUseEffect1;
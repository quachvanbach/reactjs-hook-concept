import React, {useState} from 'react';
import ExampleUseState1 from "./ExampleUseState1";
import ExampleUseState2 from "./ExampleUseState2";
import ExampleUseState3 from "./ExampleUseState3";
import ExampleUseState4 from "./ExampleUseState4";
import ExampleUseState5 from "./ExampleUseState5";
import ExampleUseState6 from "./ExampleUseState6";
import ExampleUseState7 from "./ExampleUseState7";

const UseState = () => {

    return (
        <div className='container'>
            <div className="concept">
                <h1>ueState: Sử dụng khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật. (render lại theo dữ
                    liệu)</h1>
                <h2>Cú pháp: <i>const [state, setState] = useState(initState);</i></h2>
                <ul>
                    <h2>*** Lưu ý:</h2>
                    <li>Component được re-render sau khi <u>setState</u></li>
                    <li><u>initState</u> chỉ được dùng cho lần đầu.</li>

                </ul>
            </div>
            <div className='examples'>
                <h1>Example:</h1>
                <ExampleUseState1/>
                <ExampleUseState2/>
                <ExampleUseState3/>
                <ExampleUseState4/>
                <ExampleUseState5/>
                <ExampleUseState6/>
                <ExampleUseState7/>
            </div>
        </div>
    );
};

export default UseState;
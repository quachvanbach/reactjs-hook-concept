import React, {useState} from 'react';
import ExampleUseEffect2A from "./ExampleUseEffect2A";
import ExampleUseEffect2B from "./ExampleUseEffect2B";
import ExampleUseEffect2C from "./ExampleUseEffect2C";
import ExampleUseEffect2D from "./ExampleUseEffect2D";

const ExampleUseEffect2 = () => {
    const [toggleShow1, setToggleShow1] = useState(false);
    const [toggleShow2, setToggleShow2] = useState(false);
    const [toggleShow3, setToggleShow3] = useState(false);
    const [toggleShow4, setToggleShow4] = useState(false);

    return (
        <div className="example">
            <h2>Trường hợp 2: Có dependence là mảng rỗng. <i>useEffect(callback, [])</i></h2>
            <ul>
                <li>Chỉ gọi component 1, lần sau khi component mounted.</li>
            </ul>
            <button onClick={() => setToggleShow1(!toggleShow1)}>{toggleShow1 ? 'Hide' : 'Show'} Example 1</button>
            {toggleShow1 && <ExampleUseEffect2A/>}

            <button onClick={() => setToggleShow2(!toggleShow2)}>{toggleShow2 ? 'Hide' : 'Show'} Example 2</button>
            {toggleShow2 && <ExampleUseEffect2B/>}

            <button onClick={() => setToggleShow3(!toggleShow3)}>{toggleShow3 ? 'Hide' : 'Show'} Example 3</button>
            {toggleShow3 && <ExampleUseEffect2C/>}

            <button onClick={() => setToggleShow4(!toggleShow4)}>{toggleShow4 ? 'Hide' : 'Show'} Example 4</button>
            {toggleShow4 && <ExampleUseEffect2D/>}
        </div>
    );
};

export default ExampleUseEffect2;
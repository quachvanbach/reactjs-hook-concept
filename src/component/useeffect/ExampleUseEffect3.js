import React, {useState} from 'react';
import ExampleUseEffect3A from "./ExampleUseEffect3A";
import ExampleUseEffect3B from "./ExampleUseEffect3B";
import ExampleUseEffect3C from "./ExampleUseEffect3C";

const ExampleUseEffect3 = () => {
    const [toggleShow1, setToggleShow1] = useState(false);
    const [toggleShow2, setToggleShow2] = useState(false);
    const [toggleShow3, setToggleShow3] = useState(false);

    return (
        <div>
            <div className="example">
                <h2>Trường hợp 3: Có dependence. <i>useEffect(callback, [deps])</i></h2>
                <ul>
                    <li>Callback sẽ được gọi lại mỗi khi deps thay đổi.</li>
                </ul>

                <button onClick={() => setToggleShow1(!toggleShow1)}>{toggleShow1 ? 'Hide' : 'Show'} Example 1</button>
                {toggleShow1 && <ExampleUseEffect3A/>}

                <button onClick={() => setToggleShow2(!toggleShow2)}>{toggleShow2 ? 'Hide' : 'Show'} Example 2</button>
                {toggleShow2 && <ExampleUseEffect3B/>}

                <button onClick={() => setToggleShow3(!toggleShow3)}>{toggleShow3 ? 'Hide' : 'Show'} Example 3</button>
                {toggleShow3 && <ExampleUseEffect3C/>}
            </div>
        </div>
    );
};

export default ExampleUseEffect3;
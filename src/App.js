import './App.css';
import UseRef from "./component/useref/UseRef";
import UseReducer from "./component/usereducer/UseReducer";
import UseEffect from "./component/useeffect/UseEffect";
import UseState from "./component/useState/UseState";
import UseLayoutEffect from "./component/uselayouteffect/UseLayoutEffect";
import Memo from "./component/memo/Memo";
import UseCallback from "./component/usecallback/UseCallback";

function App() {
    return (
        <>
            <UseState/>
            <UseEffect/>
            <UseLayoutEffect/>
            <UseRef/>
            <Memo/>
            <UseCallback/>
            <UseReducer/>
            {/*<UseContext/>*/}
            {/*<useImperativeHandle/>*/}
        </>
    );
}

export default App;

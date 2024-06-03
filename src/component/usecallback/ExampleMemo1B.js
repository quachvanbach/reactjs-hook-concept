import React, {memo} from 'react';

const ExampleMemo1B = ({count}) => {
    console.log('re-render')
    return (
        <div>
            <p>Đoạn text này bị re-render khi click vào nút <u>Increase</u> do có giá trị <i>{'{'}count{'}'}</i> sau
                đây bị thay đổi: Count = <b>{count}</b></p>
        </div>
    );
};

export default memo(ExampleMemo1B);
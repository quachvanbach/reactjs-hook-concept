import React, {memo} from 'react';

const ExampleMemo1A = () => {
    console.log('re-render')
    return (
        <div>
            <p>Đoạn text này không bị re-render khi click vào nút <u>Increase</u>, do không có giá trị nào trong
                component bị thay đổi.</p>
        </div>
    );
};

export default memo(ExampleMemo1A);
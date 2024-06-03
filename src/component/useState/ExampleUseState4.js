import React, {useState} from 'react';

const ExampleUseState4 = () => {

    const [info, setInfo] = useState({
        name: 'Nguyễn Văn A',
        age: 16,
        address: 'Nam Sách, Hải Dương'
    });

    const handleUpdate = () => {
        setInfo({
            name: 'Trần Văn B',
            age: 18,
            address: 'Thanh Hà, Hải Dương'
        })
    }

    return (
        <div className="example">
            <h1>Example 3: Thay thế state thành giá trị mới</h1>
            <h2>{JSON.stringify(info)}</h2>
            <button onClick={handleUpdate}>Update học sinh top 1 tỉnh Hải Dương</button>
        </div>
    );
};

export default ExampleUseState4;
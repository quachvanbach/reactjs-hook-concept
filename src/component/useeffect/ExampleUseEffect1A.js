import React, {useEffect, useState} from 'react';

const ExampleUseEffect1A = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        document.title = title;
    })

    return (
        <div>
            <p><b>Ví dụ áp dụng để thay đổi title của trang theo nội dung trong input:</b></p>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
    );
};

export default ExampleUseEffect1A;
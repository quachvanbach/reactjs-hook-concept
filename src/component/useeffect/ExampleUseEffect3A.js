import React, {useEffect, useState} from 'react';

const ExampleUseEffect3A = () => {
    const tabs = ['posts', 'comments', 'albums'];
    const [datas, setDatas] = useState([])
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(datas => {
                setDatas(datas)
            })
    }, [type]);

    return (
        <div>
            <p><b>Ví dụ áp dụng để tạo giao diện tab các nội dung khác nhau được gọi về từ API:</b></p>
            {
                tabs.map(tab => (
                    <button key={tab} style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
                            onClick={() => setType(tab)}>{tab}</button>
                ))
            }

            <ul>
                {
                    datas.map(data => (
                        <li key={data.id}>{data.title || data.name}</li>
                    ))
                }
            </ul>


        </div>
    );
};

export default ExampleUseEffect3A;
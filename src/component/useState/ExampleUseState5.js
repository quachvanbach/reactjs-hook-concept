import React, {useState} from 'react';

const gifts = [
    '$1000',
    'iPhone 15 Pro Max 256GB',
    'iPad Pro M4 11 inch Wifi 256GB',
    'MacBook Air M1 8GB 256GB',
    'Mercedes C-Class 2022 C300 AMG',
]

const ExampleUseState5 = () => {

    const [gift, setGift] = useState();

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }

    return (
        <div className='example'>
            <h1>Example 5: Lấy giá trị phần quà. <u>initState</u> là <u>undefined</u></h1>
            <h2>{gift || "Chưa có phần quà"}</h2>
            <button onClick={randomGift}>Lấy thưởng ngay</button>
        </div>
    );
};

export default ExampleUseState5;
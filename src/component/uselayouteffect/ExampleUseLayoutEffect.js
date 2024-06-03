import React, {useEffect, useLayoutEffect, useState} from 'react';

const ExampleUseLayoutEffect = () => {
    const [countWithUseEffect, setCountWithUseEffect] = useState(5);
    const [countWithUseLayoutEffect, setCountWithUseLayoutEffect] = useState(5);

    useEffect(() => {
        if (countWithUseEffect < 0) {
            setCountWithUseEffect(5);
        }
    }, [countWithUseEffect]);

    useLayoutEffect(() => {
        if (countWithUseLayoutEffect < 0) {
            setCountWithUseLayoutEffect(5);
        }
    }, [countWithUseLayoutEffect]);

    const handleCountWithUseEffect = () => {
        setCountWithUseEffect(countWithUseEffect - 1)
    }

    const handleCountWithUseLayoutEffect = () => {
        setCountWithUseLayoutEffect(countWithUseLayoutEffect - 1)
    }

    return (
        <div>
            <h2>{countWithUseEffect}</h2>
            <button onClick={handleCountWithUseEffect}>Count with useEffect</button>
            <h2>{countWithUseLayoutEffect}</h2>
            <button onClick={handleCountWithUseLayoutEffect}>Count with useEffect</button>
            <p>=> Đối với trường hợp sử dụng <u>useEffect</u> gặp phải hiện tượng nháy khi chuyển từ 0 về 5. Do useEffect
                Render UI sau đó mới gọi callback. Còn đối với <u>useLayoutEffect</u> thì không.</p>
        </div>
    );
};

export default ExampleUseLayoutEffect;
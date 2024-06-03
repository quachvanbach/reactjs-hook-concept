import React, {useEffect, useState} from 'react';

const ExampleUseEffect2D = () => {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => setCountdown(prevState => prevState - 1), 1000)

        return () => clearInterval(timerId);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => setCountdown(countdown - 1), 1000)
    // }, [countdown]);


    return (
        <div><p><b>Tạo đồng hồ đếm ngược</b></p>
            <p><b>Countdown: {countdown}s</b></p>
        </div>
    );
};

export default ExampleUseEffect2D;
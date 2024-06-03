import React, {useEffect, useState} from 'react';

const ExampleUseEffect2C = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
        <div><p><b>Hiển thị độ rộng của cửa sổ trình duệt:</b></p>
            <p><b>Current width: <u>{width}px</u></b></p>
        </div>
    );
};

export default ExampleUseEffect2C;
import React, {useEffect, useState} from 'react';

const ExampleUseEffect2B = () => {

    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            } // or setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div><p><b>Tạo nút Back to Top khi scroll >= 200px:</b></p>
            {showGoToTop && (
                <button style={{position: 'fixed', right: '20px', bottom: '20px'}}
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Go to Top
                </button>
            )}
        </div>
    );
};

export default ExampleUseEffect2B;
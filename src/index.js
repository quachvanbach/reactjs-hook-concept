import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Fake comment
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson ${id}`,
            })
        )
    }, 3000)
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <App/>
    // </React.StrictMode>
);

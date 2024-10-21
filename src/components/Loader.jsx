import { useEffect } from 'react';

const Loader = () => {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100% - 2rem)',
        position: 'absolute',
        left: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '2rem',
        backdropFilter: 'blur(1px)'
    };

    const spinnerStyle = {
        border: '8px solid rgba(0, 0, 0, 0.1)',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '5rem',
        height: '5rem',
        animation: 'spin 1s linear infinite',
    };

    useEffect(() => {
        const keyframes = `@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }, []);

    return (
        <div style={loaderStyle}>
            <div style={spinnerStyle}></div>
        </div>
    );
};

export default Loader;

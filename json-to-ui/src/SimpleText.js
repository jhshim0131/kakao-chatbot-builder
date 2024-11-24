import React from 'react';

const SimpleText = ({ text }) => {
    const bubbleStyle = {
        display: 'inline-block',
        maxWidth: '70%',
        padding: '10px 15px',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #EDEDED',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        fontSize: '14px',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
            <div style={bubbleStyle}>{text}</div>
        </div>
    );
};

export default SimpleText;

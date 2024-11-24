import React from 'react';

const BasicCard = ({ card }) => {
    const cardStyle = {
        backgroundColor: '#FFFFFF',
        border: '1px solid #EDEDED',
        borderRadius: '10px',
        padding: '15px',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '70%',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px' }}>
            <div style={cardStyle}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.buttons &&
                    card.buttons.map((button, index) => (
                        <button
                            key={index}
                            style={{
                                padding: '10px',
                                backgroundColor: '#6200EE',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '5px',
                                marginTop: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            {button.label}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default BasicCard;

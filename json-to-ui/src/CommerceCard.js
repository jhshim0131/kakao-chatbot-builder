const CommerceCard = ({ card }) => {
    const cardStyle = {
        backgroundColor: "#FFFFFF",
        border: "1px solid #EDEDED",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        maxWidth: "70%"
    };

    return (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={cardStyle}>
                <p>{card.description}</p>
                <p>
                    <strong>가격:</strong> {card.price} {card.currency}
                </p>
                {card.thumbnails &&
                    card.thumbnails.map((thumb, index) => (
                        <img key={index} src={thumb.imageUrl} alt="" style={{ width: "100%", borderRadius: "10px" }} />
                    ))}
                {card.buttons &&
                    card.buttons.map((button, index) => (
                        <button
                            key={index}
                            style={{
                                padding: "10px",
                                marginTop: "10px",
                                backgroundColor: "#6200EE",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            {button.label}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default CommerceCard;

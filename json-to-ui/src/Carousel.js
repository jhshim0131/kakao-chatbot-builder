const Carousel = ({ carousel }) => {
    const carouselStyle = {
        display: "flex",
        gap: "15px",
        overflowX: "scroll",
        padding: "10px"
    };

    return (
        <div style={carouselStyle}>
            {carousel.items &&
                carousel.items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: "300px",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #EDEDED",
                            borderRadius: "10px",
                            padding: "15px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {item.thumbnail && <img src={item.thumbnail.imageUrl} alt="" style={{ width: "100%", borderRadius: "10px" }} />}
                        {item.buttons &&
                            item.buttons.map((button, index) => (
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
                ))}
        </div>
    );
};

export default Carousel;

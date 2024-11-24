const SimpleImage = ({ imageUrl, altText }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
                src={imageUrl}
                alt={altText}
                style={{ maxWidth: "70%", borderRadius: "10px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}
            />
        </div>
    );
};

export default SimpleImage;

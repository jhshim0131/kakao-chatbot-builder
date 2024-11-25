import React from "react";

const TemplateRenderer = ({ template }) => {
    const renderTemplate = () => {
        switch (template.type) {
            case "simpleText":
                return <p>{template.text}</p>;
            case "simpleImage":
                return (
                    <img
                        src={template.imageUrl}
                        alt={template.altText || "Image"}
                        style={{ maxWidth: "100%" }}
                    />
                );
            case "basicCard":
                return (
                    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h4>{template.title}</h4>
                        <p>{template.description}</p>
                        {template.thumbnail && (
                            <img
                                src={template.thumbnail.imageUrl}
                                alt="Thumbnail"
                                style={{ maxWidth: "100px" }}
                            />
                        )}
                        {template.buttons &&
                            template.buttons.map((button, idx) => (
                                <button key={idx} onClick={() => window.open(button.webLinkUrl)}>
                                    {button.label}
                                </button>
                            ))}
                    </div>
                );
            case "textCard":
                return (
                    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h4>{template.text}</h4>
                        <p>{template.description}</p>
                        {template.buttons &&
                            template.buttons.map((button, idx) => (
                                <button key={idx} onClick={() => window.open(button.webLinkUrl)}>
                                    {button.label}
                                </button>
                            ))}
                    </div>
                );
            case "imageCard":
                return (
                    <div style={{ textAlign: "center", padding: "10px" }}>
                        <img
                            src={template.imageUrl}
                            alt={template.altText || "Image"}
                            style={{ maxWidth: "100%" }}
                        />
                        <p>{template.description}</p>
                    </div>
                );
            case "listCard":
                return (
                    <div>
                        <h4>{template.header.title}</h4>
                        {template.items &&
                            template.items.map((item, idx) => (
                                <div key={idx} style={{ marginBottom: "10px" }}>
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                    </div>
                );
            case "commerceCard":
                return (
                    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                        <h4>{template.description}</h4>
                        <p>
                            Price: {template.price} {template.currency}
                        </p>
                        {template.discount > 0 && <p>Discount: {template.discount}</p>}
                        {template.thumbnails &&
                            template.thumbnails.map((thumbnail, idx) => (
                                <img
                                    key={idx}
                                    src={thumbnail.imageUrl}
                                    alt="Thumbnail"
                                    style={{ maxWidth: "100px" }}
                                />
                            ))}
                        {template.buttons &&
                            template.buttons.map((button, idx) => (
                                <button key={idx} onClick={() => window.open(button.webLinkUrl)}>
                                    {button.label}
                                </button>
                            ))}
                    </div>
                );
            default:
                return <p>Unsupported template type</p>;
        }
    };

    return <div>{renderTemplate()}</div>;
};

export default TemplateRenderer;

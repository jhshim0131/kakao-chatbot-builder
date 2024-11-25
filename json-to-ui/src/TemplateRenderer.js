import React from "react";

const TemplateRenderer = ({ template, onUpdate }) => {
    const handleChange = (field, value) => {
        const updatedTemplate = { ...template, [field]: value };
        onUpdate(updatedTemplate);
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...template.items];
        updatedItems[index] = {
            ...updatedItems[index],
            [field]: value,
        };
        const updatedTemplate = { ...template, items: updatedItems };
        onUpdate(updatedTemplate);
    };

    const handleNestedChange = (field, subField, value) => {
        const updatedTemplate = {
            ...template,
            [field]: {
                ...template[field],
                [subField]: value,
            },
        };
        onUpdate(updatedTemplate);
    };


    const renderTemplate = () => {
        switch (template.type) {
            case "simpleText":
                return (
                    <div>
                        <label>Text:</label>
                        <input
                            type="text"
                            value={template.text || ""}
                            onChange={(e) => handleChange("text", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "simpleImage":
                return (
                    <div>
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={template.imageUrl || ""}
                            onChange={(e) => handleChange("imageUrl", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Alt Text:</label>
                        <input
                            type="text"
                            value={template.altText || ""}
                            onChange={(e) => handleChange("altText", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "basicCard":
                return (
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={template.title || ""}
                            onChange={(e) => handleChange("title", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            value={template.description || ""}
                            onChange={(e) => handleChange("description", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "textCard":
                return (
                    <div>
                        <label>Text:</label>
                        <input
                            type="text"
                            value={template.text || ""}
                            onChange={(e) => handleChange("text", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            value={template.description || ""}
                            onChange={(e) => handleChange("description", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "imageCard":
                return (
                    <div>
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={template.imageUrl || ""}
                            onChange={(e) => handleChange("imageUrl", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            value={template.description || ""}
                            onChange={(e) => handleChange("description", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "listCard":
                return (
                    <div>
                        {/* Header Section */}
                        <h4>Header</h4>
                        <label>Header Title:</label>
                        <input
                            type="text"
                            value={template.header?.title || ""}
                            onChange={(e) => handleNestedChange("header", "title", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Header Image URL:</label>
                        <input
                            type="text"
                            value={template.header?.imageUrl || ""}
                            onChange={(e) => handleNestedChange("header", "imageUrl", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />

                        {/* Items Section */}
                        <h4>Items</h4>
                        {template.items?.map((item, index) => (
                            <div key={index} style={{ marginBottom: "10px", paddingLeft: "10px" }}>
                                <label>Item {index + 1} Title:</label>
                                <input
                                    type="text"
                                    value={item.title || ""}
                                    onChange={(e) => handleItemChange(index, "title", e.target.value)}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                                <label>Item {index + 1} Description:</label>
                                <input
                                    type="text"
                                    value={item.description || ""}
                                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                                <label>Item {index + 1} Image URL:</label>
                                <input
                                    type="text"
                                    value={item.imageUrl || ""}
                                    onChange={(e) => handleItemChange(index, "imageUrl", e.target.value)}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                            </div>
                        ))}

                        {/* Buttons Section */}
                        <h4>Buttons</h4>
                        {template.buttons?.map((button, index) => (
                            <div key={index} style={{ marginBottom: "10px" }}>
                                <label>Button {index + 1} Label:</label>
                                <input
                                    type="text"
                                    value={button.label || ""}
                                    onChange={(e) => {
                                        const updatedButtons = [...template.buttons];
                                        updatedButtons[index] = { ...updatedButtons[index], label: e.target.value };
                                        onUpdate({ ...template, buttons: updatedButtons });
                                    }}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                                <label>Button {index + 1} URL:</label>
                                <input
                                    type="text"
                                    value={button.webLinkUrl || ""}
                                    onChange={(e) => {
                                        const updatedButtons = [...template.buttons];
                                        updatedButtons[index] = { ...updatedButtons[index], webLinkUrl: e.target.value };
                                        onUpdate({ ...template, buttons: updatedButtons });
                                    }}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                            </div>
                        ))}
                    </div>
                );
            case "itemCard":
                return (
                    <div>
                        {/* Head Section */}
                        <label>Head Title:</label>
                        <input
                            type="text"
                            value={template.head?.title || ""}
                            onChange={(e) => handleNestedChange("head", "title", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Head Description:</label>
                        <input
                            type="text"
                            value={template.head?.description || ""}
                            onChange={(e) => handleNestedChange("head", "description", e.target.value)}
                            style={{ width: "100%", margin: "5px 0" }}
                        />

                        {/* Items Section */}
                        <h4>Items</h4>
                        {template.items?.map((item, index) => (
                            <div key={index} style={{ marginBottom: "10px", paddingLeft: "10px" }}>
                                <label>Item {index + 1} Title:</label>
                                <input
                                    type="text"
                                    value={item.title || ""}
                                    onChange={(e) => handleItemChange(index, "title", e.target.value)}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                                <label>Item {index + 1} Description:</label>
                                <input
                                    type="text"
                                    value={item.description || ""}
                                    onChange={(e) => handleItemChange(index, "description", e.target.value)}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                            </div>
                        ))}

                        {/* Buttons Section */}
                        <h4>Buttons</h4>
                        {template.buttons?.map((button, index) => (
                            <div key={index} style={{ marginBottom: "10px" }}>
                                <label>Button {index + 1} Label:</label>
                                <input
                                    type="text"
                                    value={button.label || ""}
                                    onChange={(e) => {
                                        const updatedButtons = [...template.buttons];
                                        updatedButtons[index] = { ...updatedButtons[index], label: e.target.value };
                                        onUpdate({ ...template, buttons: updatedButtons });
                                    }}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                                <label>Button {index + 1} URL:</label>
                                <input
                                    type="text"
                                    value={button.webLinkUrl || ""}
                                    onChange={(e) => {
                                        const updatedButtons = [...template.buttons];
                                        updatedButtons[index] = { ...updatedButtons[index], webLinkUrl: e.target.value };
                                        onUpdate({ ...template, buttons: updatedButtons });
                                    }}
                                    style={{ width: "100%", margin: "5px 0" }}
                                />
                            </div>
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

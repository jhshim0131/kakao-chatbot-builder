import React, { useState } from "react";

const TemplateForm = ({ onGenerateJson }) => {
    const [templates, setTemplates] = useState([]); // 추가된 템플릿 리스트
    const [currentTemplateType, setCurrentTemplateType] = useState("simpleText");
    const [currentData, setCurrentData] = useState({});

    const handleTemplateTypeChange = (e) => {
        setCurrentTemplateType(e.target.value);
        setCurrentData({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentData({ ...currentData, [name]: value });
    };

    const handleAddTemplate = () => {
        const newTemplate = { type: currentTemplateType, data: { ...currentData } };
        setTemplates([...templates, newTemplate]);
        setCurrentData({});
    };

    const handleGenerateJson = () => {
        const generatedJson = {
            version: "2.0",
            template: {
                outputs: templates.map((template) => {
                    switch (template.type) {
                        case "simpleText":
                            return { simpleText: { text: template.data.text || "" } };
                        case "simpleImage":
                            return {
                                simpleImage: {
                                    imageUrl: template.data.imageUrl || "",
                                    altText: template.data.altText || "",
                                },
                            };
                        case "basicCard":
                            return {
                                basicCard: {
                                    title: template.data.title || "",
                                    description: template.data.description || "",
                                    thumbnail: {
                                        imageUrl: template.data.thumbnailUrl || "",
                                    },
                                    buttons: [
                                        {
                                            action: "webLink",
                                            label: template.data.buttonLabel || "",
                                            webLinkUrl: template.data.webLinkUrl || "",
                                        },
                                    ],
                                },
                            };
                        case "listCard":
                            return {
                                listCard: {
                                    header: {
                                        title: template.data.headerTitle || "",
                                        imageUrl: template.data.headerImageUrl || "",
                                    },
                                    items: [
                                        {
                                            title: template.data.item1Title || "",
                                            description: template.data.item1Description || "",
                                            imageUrl: template.data.item1ImageUrl || "",
                                        },
                                        {
                                            title: template.data.item2Title || "",
                                            description: template.data.item2Description || "",
                                            imageUrl: template.data.item2ImageUrl || "",
                                        },
                                    ],
                                    buttons: [
                                        {
                                            action: "webLink",
                                            label: template.data.listButtonLabel || "",
                                            webLinkUrl: template.data.listButtonUrl || "",
                                        },
                                    ],
                                },
                            };
                        case "commerceCard":
                            return {
                                commerceCard: {
                                    description: template.data.description || "",
                                    price: parseInt(template.data.price, 10) || 0,
                                    discount: parseInt(template.data.discount, 10) || 0,
                                    currency: template.data.currency || "won",
                                    thumbnails: [
                                        {
                                            imageUrl: template.data.thumbnailUrl || "",
                                            link: {
                                                web: template.data.webLink || "",
                                            },
                                        },
                                    ],
                                    buttons: [
                                        {
                                            action: "webLink",
                                            label: template.data.buttonLabel || "",
                                            webLinkUrl: template.data.webLink || "",
                                        },
                                    ],
                                },
                            };
                        case "carousel":
                            return {
                                carousel: {
                                    type: "basicCard",
                                    items: [
                                        {
                                            title: template.data.carouselTitle1 || "",
                                            description: template.data.carouselDescription1 || "",
                                            thumbnail: {
                                                imageUrl: template.data.carouselImage1 || "",
                                            },
                                            buttons: [
                                                {
                                                    action: "webLink",
                                                    label: template.data.carouselButtonLabel1 || "",
                                                    webLinkUrl: template.data.carouselButtonUrl1 || "",
                                                },
                                            ],
                                        },
                                        {
                                            title: template.data.carouselTitle2 || "",
                                            description: template.data.carouselDescription2 || "",
                                            thumbnail: {
                                                imageUrl: template.data.carouselImage2 || "",
                                            },
                                            buttons: [
                                                {
                                                    action: "webLink",
                                                    label: template.data.carouselButtonLabel2 || "",
                                                    webLinkUrl: template.data.carouselButtonUrl2 || "",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            };
                        case "itemCard":
                            return {
                                itemCard: {
                                    head: {
                                        title: template.data.headTitle || "",
                                        description: template.data.headDescription || "",
                                    },
                                    items: [
                                        {
                                            title: template.data.item1Title || "",
                                            description: template.data.item1Description || "",
                                        },
                                        {
                                            title: template.data.item2Title || "",
                                            description: template.data.item2Description || "",
                                        },
                                    ],
                                    buttons: [
                                        {
                                            action: "webLink",
                                            label: template.data.itemButtonLabel || "",
                                            webLinkUrl: template.data.itemButtonUrl || "",
                                        },
                                    ],
                                },
                            };
                        case "textCard":
                            return {
                                textCard: {
                                    text: template.data.text || "",
                                    description: template.data.description || "",
                                    buttons: [
                                        {
                                            action: "webLink",
                                            label: template.data.buttonLabel || "",
                                            webLinkUrl: template.data.webLinkUrl || "",
                                        },
                                    ],
                                },
                            };
                        default:
                            return {};
                    }
                }),
            },
        };
        onGenerateJson(generatedJson);
    };

    const renderFields = () => {
        switch (currentTemplateType) {
            case "simpleText":
                return (
                    <div>
                        <label>Text:</label>
                        <input
                            type="text"
                            name="text"
                            value={currentData.text || ""}
                            onChange={handleInputChange}
                            placeholder="Enter text"
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
                            name="imageUrl"
                            value={currentData.imageUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter image URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Alt Text:</label>
                        <input
                            type="text"
                            name="altText"
                            value={currentData.altText || ""}
                            onChange={handleInputChange}
                            placeholder="Enter alt text"
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
                            name="title"
                            value={currentData.title || ""}
                            onChange={handleInputChange}
                            placeholder="Enter card title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={currentData.description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter card description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Thumbnail URL:</label>
                        <input
                            type="text"
                            name="thumbnailUrl"
                            value={currentData.thumbnailUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter thumbnail URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Button Label:</label>
                        <input
                            type="text"
                            name="buttonLabel"
                            value={currentData.buttonLabel || ""}
                            onChange={handleInputChange}
                            placeholder="Enter button label"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Web Link URL:</label>
                        <input
                            type="text"
                            name="webLinkUrl"
                            value={currentData.webLinkUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter web link URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            // Add fields for other templates here
            case "listCard":
                return (
                    <div>
                        <label>Header Title:</label>
                        <input
                            type="text"
                            name="headerTitle"
                            value={currentData.headerTitle || ""}
                            onChange={handleInputChange}
                            placeholder="Enter header title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Header Image URL:</label>
                        <input
                            type="text"
                            name="headerImageUrl"
                            value={currentData.headerImageUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter header image URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 1 Title:</label>
                        <input
                            type="text"
                            name="item1Title"
                            value={currentData.item1Title || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 1 title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 1 Description:</label>
                        <input
                            type="text"
                            name="item1Description"
                            value={currentData.item1Description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 1 description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 1 Image URL:</label>
                        <input
                            type="text"
                            name="item1ImageUrl"
                            value={currentData.item1ImageUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 1 image URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 2 Title:</label>
                        <input
                            type="text"
                            name="item2Title"
                            value={currentData.item2Title || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 2 title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 2 Description:</label>
                        <input
                            type="text"
                            name="item2Description"
                            value={currentData.item2Description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 2 description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 2 Image URL:</label>
                        <input
                            type="text"
                            name="item2ImageUrl"
                            value={currentData.item2ImageUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 2 image URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>List Button Label:</label>
                        <input
                            type="text"
                            name="listButtonLabel"
                            value={currentData.listButtonLabel || ""}
                            onChange={handleInputChange}
                            placeholder="Enter list button label"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>List Button URL:</label>
                        <input
                            type="text"
                            name="listButtonUrl"
                            value={currentData.listButtonUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter list button URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "commerceCard":
                return (
                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={currentData.description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={currentData.price || ""}
                            onChange={handleInputChange}
                            placeholder="Enter price"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Discount:</label>
                        <input
                            type="number"
                            name="discount"
                            value={currentData.discount || ""}
                            onChange={handleInputChange}
                            placeholder="Enter discount"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Currency:</label>
                        <input
                            type="text"
                            name="currency"
                            value={currentData.currency || ""}
                            onChange={handleInputChange}
                            placeholder="Enter currency"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Thumbnail URL:</label>
                        <input
                            type="text"
                            name="thumbnailUrl"
                            value={currentData.thumbnailUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter thumbnail URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Web Link:</label>
                        <input
                            type="text"
                            name="webLink"
                            value={currentData.webLink || ""}
                            onChange={handleInputChange}
                            placeholder="Enter web link"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Button Label:</label>
                        <input
                            type="text"
                            name="buttonLabel"
                            value={currentData.buttonLabel || ""}
                            onChange={handleInputChange}
                            placeholder="Enter button label"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "carousel":
                return (
                    <div>
                        <label>Carousel Title 1:</label>
                        <input
                            type="text"
                            name="carouselTitle1"
                            value={currentData.carouselTitle1 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel title 1"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Description 1:</label>
                        <input
                            type="text"
                            name="carouselDescription1"
                            value={currentData.carouselDescription1 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel description 1"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Image 1:</label>
                        <input
                            type="text"
                            name="carouselImage1"
                            value={currentData.carouselImage1 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel image 1"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Button Label 1:</label>
                        <input
                            type="text"
                            name="carouselButtonLabel1"
                            value={currentData.carouselButtonLabel1 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel button label 1"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Button URL 1:</label>
                        <input
                            type="text"
                            name="carouselButtonUrl1"
                            value={currentData.carouselButtonUrl1 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel button URL 1"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Title 2:</label>
                        <input
                            type="text"
                            name="carouselTitle2"
                            value={currentData.carouselTitle2 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel title 2"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Description 2:</label>
                        <input
                            type="text"
                            name="carouselDescription2"
                            value={currentData.carouselDescription2 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel description 2"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Image 2:</label>
                        <input
                            type="text"
                            name="carouselImage2"
                            value={currentData.carouselImage2 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel image 2"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Button Label 2:</label>
                        <input
                            type="text"
                            name="carouselButtonLabel2"
                            value={currentData.carouselButtonLabel2 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel button label 2"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Carousel Button URL 2:</label>
                        <input
                            type="text"
                            name="carouselButtonUrl2"
                            value={currentData.carouselButtonUrl2 || ""}
                            onChange={handleInputChange}
                            placeholder="Enter carousel button URL 2"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            case "itemCard":
                return (
                    <div>
                        <label>Head Title:</label>
                        <input
                            type="text"
                            name="headTitle"
                            value={currentData.headTitle || ""}
                            onChange={handleInputChange}
                            placeholder="Enter head title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Head Description:</label>
                        <input
                            type="text"
                            name="headDescription"
                            value={currentData.headDescription || ""}
                            onChange={handleInputChange}
                            placeholder="Enter head description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 1 Title:</label>
                        <input
                            type="text"
                            name="item1Title"
                            value={currentData.item1Title || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 1 title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 1 Description:</label>
                        <input
                            type="text"
                            name="item1Description"
                            value={currentData.item1Description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 1 description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 2 Title:</label>
                        <input
                            type="text"
                            name="item2Title"
                            value={currentData.item2Title || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 2 title"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item 2 Description:</label>
                        <input
                            type="text"
                            name="item2Description"
                            value={currentData.item2Description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item 2 description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item Button Label:</label>
                        <input
                            type="text"
                            name="itemButtonLabel"
                            value={currentData.itemButtonLabel || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item button label"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Item Button URL:</label>
                        <input
                            type="text"
                            name="itemButtonUrl"
                            value={currentData.itemButtonUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter item button URL"
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
                            name="text"
                            value={currentData.text || ""}
                            onChange={handleInputChange}
                            placeholder="Enter text"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={currentData.description || ""}
                            onChange={handleInputChange}
                            placeholder="Enter description"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Button Label:</label>
                        <input
                            type="text"
                            name="buttonLabel"
                            value={currentData.buttonLabel || ""}
                            onChange={handleInputChange}
                            placeholder="Enter button label"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                        <label>Web Link URL:</label>
                        <input
                            type="text"
                            name="webLinkUrl"
                            value={currentData.webLinkUrl || ""}
                            onChange={handleInputChange}
                            placeholder="Enter web link URL"
                            style={{ width: "100%", margin: "5px 0" }}
                        />
                    </div>
                );
            default:
                return <p>필드를 선택하세요.</p>;
        }
    };
        return (
            <div>
                <h3>템플릿 선택</h3>
                <select
                    value={currentTemplateType}
                    onChange={handleTemplateTypeChange}
                    style={{ width: "100%", padding: "5px", margin: "10px 0" }}
                >
                    <option value="simpleText">Simple Text</option>
                    <option value="simpleImage">Simple Image</option>
                    <option value="basicCard">Basic Card</option>
                    <option value="listCard">List Card</option>
                    <option value="commerceCard">Commerce Card</option>
                    <option value="carousel">Carousel</option>
                    <option value="itemCard">Item Card</option>
                    <option value="textCard">Text Card</option>
                </select>
                {renderFields()}
                <button
                    onClick={handleAddTemplate}
                    style={{
                        padding: "10px",
                        backgroundColor: "#007BFF",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "5px",
                        margin: "10px 0",
                    }}
                >
                    템플릿 추가
                </button>
                <button
                    onClick={handleGenerateJson}
                    style={{
                        padding: "10px",
                        backgroundColor: "#28A745",
                        color: "#FFF",
                        border: "none",
                        borderRadius: "5px",
                        margin: "10px 0",
                    }}
                >
                    JSON 생성
                </button>
                <div>
                    <h4>추가된 템플릿</h4>
                    <ul>
                        {templates.map((template, index) => (
                            <li key={index}>
                                {template.type}: {JSON.stringify(template.data)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    export default TemplateForm;
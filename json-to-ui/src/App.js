import React, { useState } from "react";
import "./App.css";
import TemplateRenderer from "./TemplateRenderer";

const jsonExamples = {
    simpleText: {
        type: "simpleText",
        text: "Hello, Kakao Work!",
    },
    simpleImage: {
        type: "simpleImage",
        imageUrl: "https://via.placeholder.com/150",
        altText: "Example Image",
    },
    basicCard: {
        type: "basicCard",
        title: "Basic Card Title",
        description: "This is a basic card example.",
        thumbnail: {
            imageUrl: "https://via.placeholder.com/150",
        },
        buttons: [
            {
                action: "webLink",
                label: "Visit",
                webLinkUrl: "https://example.com",
            },
        ],
    },
    textCard: {
        type: "textCard",
        text: "Welcome to Kakao Work!",
        description: "This is an example of a Text Card template.",
        buttons: [
            {
                action: "webLink",
                label: "Learn More",
                webLinkUrl: "https://www.kakao.com",
            },
        ],
    },
    imageCard: {
        type: "imageCard",
        imageUrl: "https://via.placeholder.com/300",
        altText: "Sample Image",
        description: "This is an example of an Image Card template.",
    },
    listCard: {
        type: "listCard",
        header: {
            title: "List Card Header",
            imageUrl: "https://via.placeholder.com/100",
        },
        items: [
            {
                title: "Item 1",
                description: "Description of item 1",
                imageUrl: "https://via.placeholder.com/50",
            },
            {
                title: "Item 2",
                description: "Description of item 2",
                imageUrl: "https://via.placeholder.com/50",
            },
        ],
        buttons: [
            {
                action: "webLink",
                label: "View More",
                webLinkUrl: "https://example.com",
            },
        ],
    },
    itemCard: {
        type: "itemCard",
        head: {
            title: "Item Card Header",
            description: "Header description",
        },
        items: [
            {
                title: "Item 1",
                description: "Item 1 description",
            },
            {
                title: "Item 2",
                description: "Item 2 description",
            },
        ],
        buttons: [
            {
                action: "webLink",
                label: "Go to Item",
                webLinkUrl: "https://example.com",
            },
        ],
    },
    commerceCard: {
        type: "commerceCard",
        description: "Commerce Card Description",
        price: 10000,
        discount: 10,
        currency: "KRW",
        thumbnails: [
            {
                imageUrl: "https://via.placeholder.com/150",
            },
        ],
        buttons: [
            {
                action: "webLink",
                label: "Buy Now",
                webLinkUrl: "https://example.com",
            },
        ],
    },
};

const App = () => {
    const [jsonInput, setJsonInput] = useState(JSON.stringify(jsonExamples.simpleText, null, 2));
    const [error, setError] = useState("");

    const handleJsonChange = (e) => {
        const value = e.target.value;
        setJsonInput(value);

        try {
            JSON.parse(value);
            setError("");
        } catch (err) {
            setError("Invalid JSON format");
        }
    };

    const handleExampleSelect = (exampleKey) => {
        const selectedExample = jsonExamples[exampleKey];
        setJsonInput(JSON.stringify(selectedExample, null, 2));
    };

    const parsedJson = (() => {
        try {
            return JSON.parse(jsonInput);
        } catch {
            return null;
        }
    })();

    return (
        <div className="app">
            <div className="json-editor">
                <h3>JSON Input</h3>
                <div className="example-buttons">
                    {Object.keys(jsonExamples).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleExampleSelect(key)}
                            style={{ marginRight: "10px", padding: "10px", cursor: "pointer" }}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <textarea
                    value={jsonInput}
                    onChange={handleJsonChange}
                    placeholder="Enter JSON here"
                    style={{ width: "100%", height: "300px", marginTop: "10px", fontFamily: "monospace" }}
                />
                {error && <p className="error">{error}</p>}
            </div>
            <div className="ui-preview">
                <h3>UI Preview</h3>
                {parsedJson ? (
                    <TemplateRenderer template={parsedJson} />
                ) : (
                    <p>Please provide valid JSON to preview</p>
                )}
            </div>
        </div>
    );
};

export default App;

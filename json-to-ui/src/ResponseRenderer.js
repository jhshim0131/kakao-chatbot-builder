import React from "react";
import SimpleText from "./SimpleText";
import SimpleImage from "./SimpleImage";
import BasicCard from "./BasicCard";
import CommerceCard from "./CommerceCard";
import ListCard from "./ListCard";
import Carousel from "./Carousel";

const ResponseRenderer = ({ json }) => {
    if (!json || !json.template || !json.template.outputs) {
        return <div>JSON 구조가 올바르지 않습니다.</div>;
    }

    const renderOutput = (output, index) => {
        if (output.simpleText) {
            return <SimpleText key={index} text={output.simpleText.text} />;
        }

        if (output.simpleImage) {
            return (
                <SimpleImage
                    key={index}
                    imageUrl={output.simpleImage.imageUrl}
                    altText={output.simpleImage.altText}
                />
            );
        }

        if (output.basicCard) {
            return <BasicCard key={index} card={output.basicCard} />;
        }

        if (output.commerceCard) {
            return <CommerceCard key={index} card={output.commerceCard} />;
        }

        if (output.listCard) {
            return <ListCard key={index} card={output.listCard} />;
        }

        if (output.carousel) {
            return <Carousel key={index} carousel={output.carousel} />;
        }

        return (
            <div key={index} style={{ color: "red" }}>
                지원하지 않는 카드 타입입니다.
            </div>
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginTop: "20px"
            }}
        >
            {json.template.outputs.map(renderOutput)}
        </div>
    );
};

export default ResponseRenderer;

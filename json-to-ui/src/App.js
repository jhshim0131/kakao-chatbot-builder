import React, { useState } from "react";
import TemplateForm from "./TemplateForm";

function App() {
    const [generatedJson, setGeneratedJson] = useState(null);

    const handleGenerateJson = (json) => {
        setGeneratedJson(json);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>카카오 챗봇 JSON 생성기</h1>

            <TemplateForm onGenerateJson={handleGenerateJson} />

            {generatedJson && (
                <div style={{ marginTop: "20px" }}>
                    <h3>생성된 JSON</h3>
                    <pre style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
            {JSON.stringify(generatedJson, null, 2)}
          </pre>
                </div>
            )}
        </div>
    );
}

export default App;

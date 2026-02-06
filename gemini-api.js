// Gemini API Integration for CDM
export async function askGemini(projectCode, userQuestion) {
    const API_KEY = "YOUR_GEMINI_API_KEY"; // এখানে আপনার নিজের API Key বসাতে হবে
    const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    const prompt = `
        You are an AI assistant integrated into CDM (Code Data Manager). 
        The user is working on the following code:
        ---
        ${projectCode}
        ---
        Question: ${userQuestion}
    `;

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Gemini Error:", error);
        return "দুঃখিত, আমি এখন উত্তর দিতে পারছি না। আপনার API Key চেক করুন।";
    }
}

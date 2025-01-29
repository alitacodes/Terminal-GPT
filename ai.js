const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const AI = async (prompt) => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}

AI("Give a brief explanation of blackholes");
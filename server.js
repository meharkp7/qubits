require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const port = 1000;

app.use(cors());
app.use(express.json());

if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is missing! Check your .env file.");
    process.exit(1); 
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

app.post("/generate-task", async (req, res) => {
    const { summary } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are an expert coding instructor." },
                { role: "user", content: `Based on this summary: ${summary}, generate a detailed practical coding/design task.` }
            ]
        });

        const task = response.choices[0].message.content;
        res.json({ task });
    } catch (error) {
        console.error("Error generating task:", error);
        res.status(500).json({ error: "Error generating task" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
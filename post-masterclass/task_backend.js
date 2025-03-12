require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.post("/generate-task", async (req, res) => {
    const { summary } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are an expert coding instructor." },
                { role: "user", content: `Based on this summary: ${summary}, generate a detailed practical coding/design task.` }
            ]
        });

        const task = response.data.choices[0].message.content;
        res.json({ task });
    } catch (error) {
        res.status(500).json({ error: "Error generating task" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

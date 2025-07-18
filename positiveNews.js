import OpenAI from "openai";

const client = new OpenAI();

async function getPositiveNews() {
  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    tools: [{ type: "web_search_preview" }],
    messages: [
      { role: "user", content: "What was a positive news story from today?" }
    ],
  });

  console.log(response.choices[0].message.content);
}

getPositiveNews();
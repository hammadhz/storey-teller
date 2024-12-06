import { GPTScript } from "@gptscript-ai/gptscript";

export const g = new GPTScript({
  APIKey: process.env.OPENAI_API_KEY,
  DefaultModel: "gpt-3.5-turbo",
});

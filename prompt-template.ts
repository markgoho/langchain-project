import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";

const parser = new StringOutputParser();

const model = new ChatOpenAI({
  model: "gpt-4",
});

const systemTemplate = `Translate the following from {language}:`;

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{text}"],
]);

const chain = promptTemplate.pipe(model).pipe(parser);

const result = await chain.invoke({
  language: "italian",
  text: "hi!",
});

console.log(result);

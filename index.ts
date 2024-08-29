import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

const parser = new StringOutputParser();

const model = new ChatOpenAI({
  model: "gpt-4",
});

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hi!"),
];

const chain = model.pipe(parser);
console.log(await chain.invoke(messages));

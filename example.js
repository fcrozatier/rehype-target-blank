import fs from "fs";
import { rehype } from "rehype";
import rehypeTargetBlank from "./index.js";

const buffer = fs.readFileSync("example.html");

rehype()
  .use(rehypeTargetBlank)
  .process(buffer)
  .then((file) => {
    console.log(file);
  });

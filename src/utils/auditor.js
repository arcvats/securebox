import { spawn } from "child_process";
import Requests from "./requests";

export default () => {
  const child = spawn("npm", ["audit", "--json"]);
  let finalString = "";
  // use child.stdout.setEncoding('utf8'); if you want text chunks
  child.stdout.on("data", (chunk) => {
    finalString += chunk.toString();
  });

  child.on("close", (code) => {
    new Requests("abcd", "http://localhost:9000")
      .sendAudit({ audit: JSON.parse(finalString) })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(`child process exited with code ${code}`);
  });
};

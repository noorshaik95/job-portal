import express from "express";
import { dbInit } from "./db/init.js";
import Routes from "./routes/index.js";
const app = express();
app.use(express.json());

try {
  await dbInit();
} catch (e) {
  console.error(e);
  process.exit(1);
}

app.use("/", Routes);

app.listen(3000);

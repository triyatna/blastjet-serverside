import "dotenv/config";
import express, { application } from "express";
import nodeCleanup from "node-cleanup";
import routes from "./models/routes.js";
import { init, cleanup } from "./models/whatsapp.js";
import cors from "cors";

const app = express();
const host = process.env.HOST || undefined;
const port = parseInt(process.env.PORT ?? 8000);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

const listenerCallback = () => {
  init();
  console.log(`Server is listening on port: ${port}`);
};

if (host) {
  app.listen(port, host, listenerCallback);
} else {
  app.listen(port, listenerCallback);
}

nodeCleanup(cleanup);

export default app;

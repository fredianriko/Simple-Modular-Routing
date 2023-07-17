import express from "express";
import { logger } from "./utils/logger.js";
import "dotenv/config";
import routes from "./routes/index.js";
import compression from "compression";

const app = express();

app.use(compression());
app.use(express.json());
app.use(routes);

app.listen(3009, () => {
  logger.info("Server running on port 3000");
});

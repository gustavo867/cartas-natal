import express from "express";

import "dotenv/config";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.API_PORT || 3333);

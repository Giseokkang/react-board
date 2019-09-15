import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import routes from "./routes";
import apiRouter from "./router/apiRouter";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.api, apiRouter);

export default app;

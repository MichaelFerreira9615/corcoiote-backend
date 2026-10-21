import app from "./app.ts";
import PinoHttp, { pinoHttp } from "pino-http";
import logger from "./lib/logger.ts";

app.use(pinoHttp({ logger }));

app.listen(Number(process.env.PORT));

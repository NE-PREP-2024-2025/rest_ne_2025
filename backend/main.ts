import Express from "express";
import Cors from "cors";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import prisma from "./prisma/prisma-client";
import * as swaggerDocument from './documentation/swagger.json';
import Routes from "./routes"
import morgan from "morgan"
import helmet from "helmet"
import path from "path";
import fs from "fs";
import {rateLimit} from "express-rate-limit"
import errorHandler from "./middleware/error.middleware";
import logger from "./utils/logger";
import { ErrorRequestHandler } from "express";
dotenv.config()
const app = Express();
app.use(Express.json());
app.use(Cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: accessLogStream }));
app.use(helmet.xssFilter()); 
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());

  const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true, 
  legacyHeaders: false, 
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
});
app.use('/api/v1', Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(limiter);
app.use(errorHandler as ErrorRequestHandler);
app.listen(8000, () => {
  prisma.$connect().then(() => {
    console.log("Connected to database");
  }).catch((err => {
  logger.error(err.message)
  console.log("Connection to database failed", err);
  })
  )
})



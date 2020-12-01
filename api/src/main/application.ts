import express from "express";
import { resolve } from "path";
import cors from "cors";
import helmet from "helmet";

const server = express();

server.use(cors({ exposedHeaders: "X-Total-Count" }));
server.use(helmet());

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));

server.use("/files", express.static(resolve(__dirname, "..", "..", "uploads")));

export { server };

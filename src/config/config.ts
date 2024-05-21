import { IConfigProps } from "../interfaces/config.interface";
import * as process from "node:process";

export const config = (): IConfigProps => ({
  port: parseInt(process.env.PORT) || 8000,
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'partier_db',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  },
});

import { config } from "dotenv";
import abi from "../data/offlineid.json";
config();

export const RPC = process.env["RPC"] as string;
export const CONTRACT_ADDRESS = process.env["CONTRACT_ADDRESS"];
export const OFFLINE_CONTRACT_ABI = abi;

console.log(RPC);
export const PG_CONFIG = {
  user: process.env["PG_API_USER"] as string,
  host: process.env["PG_API_HOST"] as string,
  database: process.env["PG_API_DATABASE"] as string,
  password: process.env["PG_API_PASSWORD"] as string,
  port: Number.parseInt(process.env["PG_API_PORT"] as string),
  ssl: true,
};

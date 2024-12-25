import { config } from "dotenv";
import abi from "../data/offlineid.json";
config();

export const SEPOLIA_RPC = process.env["SEPOLIA_RPC"] as string;
export const CONTRACT_ADDRESS = "0x060aee03c73dcfe921a775f99bf997add518f3b0";
export const OFFLINE_CONTRACT_ABI = abi;

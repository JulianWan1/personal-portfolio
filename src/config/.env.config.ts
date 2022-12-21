import { config } from "dotenv";

config();

export const GMAIL_ADDRESS = process.env.VUE_APP_GMAIL_ADDRESS;
export const LINKEDIN_URL = process.env.VUE_APP_LINKEDIN_URL;
export const DISCORD_USERNAME = process.env.VUE_APP_DISCORD_USERNAME;
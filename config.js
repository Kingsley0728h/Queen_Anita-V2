//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FWcVVGN0IyeWJudk8renpDRkNiOElIYk5UNWM5Y3JWcjFhZmx2dm9WTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXRvbmp1amZhQUZzYVFhekNjLzNIV1dDSVk2TVZiRmk2TnEzWXpNTDlnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRXdmcnYrSDJEbVpMaEhLOXR1c3hjOFVzQmcrTERhWDI2TVJiZHBrYlZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmaDVKWGNQYlVncHlJNE5MQ29UeDhMazZSeFI2NjE4NXVGQW8vQ003L3hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGWWNOTWJJNkZVVDl1ZURQNkJvejRPMUkxRFAvMnJsMlNCRDEzd1pLazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdwNG12QU1uckYxemlkSWN3VFE4MktpeXN2ZkRYZzBNbnBHaHNMOHVTZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUV6dGdCVlpUaVRIMjhUTnFISUs2eFZERFc5YndzdWZaWElsOEdSMHRXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2o1blA4WDVSYWZrNWhiYU8yVUNEbnRLajYyVTEySnQxSlNMMVVDZXV3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCRm9nV1QyTG9RSVB1UHN1MERWMUVHay9aS3AwNE9zWUdpYlFhMWFrZWRyank5TVNtSUNtZkVpZ2tKNXJjU01BTUtFelBzK1owQXFJOWlPdHh5MUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IlFYVTN6OTRmQnVXQnRnckwwK28wMmZsMk1zMlAzeWdqNkc0NFRMRHVxNmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlCRW5TbWRlVHlxWUdBSWxLZUNOdlEiLCJwaG9uZUlkIjoiNzU4OTdjNzMtNjY0ZC00MTYzLWJjZDItNWViZWJmNjZmMWMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5zb1VSSnpMMWZQbkZLNjRNM3FaeVptKytBST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QmFodXdscUljZy84WkFlYmF2WnRKR1IvL3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMzU1QVM1QVQiLCJtZSI6eyJpZCI6IjI0MTA0NTUyNjUzOjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImtpbmdzbGV5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeXdrVjhRMzkvTXRBWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnT2Nta2dQUlFwbzNlNmlUdmxZSjFpQVpEZk5CbGxLVngrNGg0UkVsdm4wPSIsImFjY291bnRTaWduYXR1cmUiOiI4TmxDaitudVBZeVU1TUY3NTQ5bWszT21lc0d4VkVqME9CUE9EMHBSWUNneVhaZmhUUlMvd3kxV3dDQ0g3OEthdXQ3UDZOVGdrWnNPMWlxUVBHUG9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYm9KeGhxUDRkMGVUVGJBeG1sS3dreXVyc1k5aHhGWFIrREZiYjJ4ZVhLZkowbUx6d2F2QS9jaXEra0xsNDRxazNuZnl5RTM2NzdNUnVPREVkTXFWRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDEwNDU1MjY1Mzo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRG5KcElEMFVLYU4zdW9rNzVXQ2RZZ0dRM3pRWlpTbGNmdUllRVJKYjU5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTIyMDkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNCbiJ9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

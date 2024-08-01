//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT; 500
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
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "24104552653";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "24104552653";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVJVlFSd1Vuenh1RHJFeXExRXNObHlqTGM1RHo1QVRmdFRZVUFpNnpXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdDVzcxWFNESlJFelZkUlN0c09DTmFWeWpFdHd6TDBSaVJtSnU3alRuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTndTL25xUzJjUlJiYW9OWUdQcU1ubHZVZml0RHQwTG51TFdiVkxDSlZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWK2YwTEx3TEwyNm9BRk1CWU5CcDlwNXJ5THNZM083VEZ0WVlLYWhjZlFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCSmhzYjhiSU4rY1dDSk1Ualg4YlVoZlR1SEppSlRLdDBFY3BEUjlqM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldxYWpJK1U3M3k5QlNnZ2VSWWJ5aEhnNlAyS0ZLZTIxU1RUNStIcnc0MEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU81RU41QUVTblcvQXFOK1VIM3JvOHhzNVNWbTJvWVJOMkh3dXZzdTYxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXl0b2xuM0pUd2U1QUVZcmhDM0tjTmI2RHFRai9nVldRNm4rL3k4NTd4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV6VDVML2xUeWJHZlEyT0hqVitvbWdXaVNBbW9VN3RoZ0syeWQ3S3IzYnI0Q1pjdThPekpUL3dWMWltZVg1N3dFREpnejhEVFRqTEkzcU9FaEVyY2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImFIbmNOd1pRRm95Qll2d1h5T3QzdGpZUGpLUy8zM0p1NHpXeTNyejN0NGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVyU3VKZnJvVHRlbU9CLTNnLXF3UEEiLCJwaG9uZUlkIjoiYjQxZTIxMzEtNDg2Yy00Zjg2LTgwNjMtZjVlNmIxMjBiZWQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhXUzVwZ0taNFQrUmUwQWprd1ByN09rMUpMaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudkxQaVVqRm9ra2tKTERPV1Q2bWZHeFRTdk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlpXWDk2SFIiLCJtZSI6eyJpZCI6IjI0MTA0NTUyNjUzOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QivCdmrDwnZq08J2QhvCdkJLwnZCL8J2atfCdkJhf8J2atPCdkJgg8J2arvCdmqvwnZCD8J2atfCdkJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05qUzlQRUhFSjZkcjdVR0dCWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVsTC9TSmw1c1B2elM2MHV6NmRua09iTldkelJXcWZFSGR1dzN3K2Q1Qms9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBwcndYYlU3MVc0Vi80cjBRaXc4K0tmQTdyOCtHUzdRdVBySjhpL3hZYTBLaHY3UjFwOGtVY2tOQTh4UzFZTEMrRXlJRXNBL3NSVkE1MDBDN2U0bEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrOUp0N200MzQ3TmVxTnJ4c3pya01UU0JWa3FvcTNzLzF0N2hLdHh4NGkxRHlSeGh4RVNLQmdCem0valpNaC9nc1g1ZVhjcVRkNVFEUnk0NVlLSGNnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA0NTUyNjUzOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHBTLzBpWmViRDc4MHV0THMrblo1RG16Vm5jMFZxbnhCM2JzTjhQbmVRWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUzNTU5N30=
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVJVlFSd1Vuenh1RHJFeXExRXNObHlqTGM1RHo1QVRmdFRZVUFpNnpXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHdDVzcxWFNESlJFelZkUlN0c09DTmFWeWpFdHd6TDBSaVJtSnU3alRuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTndTL25xUzJjUlJiYW9OWUdQcU1ubHZVZml0RHQwTG51TFdiVkxDSlZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWK2YwTEx3TEwyNm9BRk1CWU5CcDlwNXJ5THNZM083VEZ0WVlLYWhjZlFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCSmhzYjhiSU4rY1dDSk1Ualg4YlVoZlR1SEppSlRLdDBFY3BEUjlqM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldxYWpJK1U3M3k5QlNnZ2VSWWJ5aEhnNlAyS0ZLZTIxU1RUNStIcnc0MEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU81RU41QUVTblcvQXFOK1VIM3JvOHhzNVNWbTJvWVJOMkh3dXZzdTYxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXl0b2xuM0pUd2U1QUVZcmhDM0tjTmI2RHFRai9nVldRNm4rL3k4NTd4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV6VDVML2xUeWJHZlEyT0hqVitvbWdXaVNBbW9VN3RoZ0syeWQ3S3IzYnI0Q1pjdThPekpUL3dWMWltZVg1N3dFREpnejhEVFRqTEkzcU9FaEVyY2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImFIbmNOd1pRRm95Qll2d1h5T3QzdGpZUGpLUy8zM0p1NHpXeTNyejN0NGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVyU3VKZnJvVHRlbU9CLTNnLXF3UEEiLCJwaG9uZUlkIjoiYjQxZTIxMzEtNDg2Yy00Zjg2LTgwNjMtZjVlNmIxMjBiZWQ3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhXUzVwZ0taNFQrUmUwQWprd1ByN09rMUpMaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudkxQaVVqRm9ra2tKTERPV1Q2bWZHeFRTdk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlpXWDk2SFIiLCJtZSI6eyJpZCI6IjI0MTA0NTUyNjUzOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QivCdmrDwnZq08J2QhvCdkJLwnZCL8J2atfCdkJhf8J2atPCdkJgg8J2arvCdmqvwnZCD8J2atfCdkJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05qUzlQRUhFSjZkcjdVR0dCWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVsTC9TSmw1c1B2elM2MHV6NmRua09iTldkelJXcWZFSGR1dzN3K2Q1Qms9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBwcndYYlU3MVc0Vi80cjBRaXc4K0tmQTdyOCtHUzdRdVBySjhpL3hZYTBLaHY3UjFwOGtVY2tOQTh4UzFZTEMrRXlJRXNBL3NSVkE1MDBDN2U0bEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrOUp0N200MzQ3TmVxTnJ4c3pya01UU0JWa3FvcTNzLzF0N2hLdHh4NGkxRHlSeGh4RVNLQmdCem0valpNaC9nc1g1ZVhjcVRkNVFEUnk0NVlLSGNnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA0NTUyNjUzOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWHBTLzBpWmViRDc4MHV0THMrblo1RG16Vm5jMFZxbnhCM2JzTjhQbmVRWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUzNTU5N30="
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

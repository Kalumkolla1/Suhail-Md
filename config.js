const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94755666349";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,94755666349,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_35_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNVcwQTJ3b3FQMENQVEEyV1hYYmo2ZDJVMmsxRjRJU3oxVXRKNHJrYUw2bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3ZmTmtUY2RRS3FYU0dBOVMtWTI2Z1wiLFxuICBcInBob25lSWRcIjogXCIwMTMwZWMwOC1mODVjLTRiYzgtYjY0NS0xYjAwYmIwYzRkZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAyMjcsXG4gICAgICAyNDUsXG4gICAgICAxMzEsXG4gICAgICA0MixcbiAgICAgIDEsXG4gICAgICAxNTEsXG4gICAgICAzOSxcbiAgICAgIDgwLFxuICAgICAgMTQ1LFxuICAgICAgMTcwLFxuICAgICAgMjQ3LFxuICAgICAgMTAyLFxuICAgICAgNzgsXG4gICAgICA0MCxcbiAgICAgIDQwLFxuICAgICAgNTUsXG4gICAgICA2OSxcbiAgICAgIDI1MyxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAzMCxcbiAgICAgIDI0NCxcbiAgICAgIDkwLFxuICAgICAgMTIxLFxuICAgICAgMTk3LFxuICAgICAgMTQzLFxuICAgICAgMTU3LFxuICAgICAgMjU0LFxuICAgICAgMTM1LFxuICAgICAgNDgsXG4gICAgICA3NyxcbiAgICAgIDExNSxcbiAgICAgIDUyLFxuICAgICAgMTU1LFxuICAgICAgMTI0LFxuICAgICAgMTU3LFxuICAgICAgNzUsXG4gICAgICAxOTQsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXODNFWEU1U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTU2NjYzNDk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4Mjg1MDA3ODkzNzEzNjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPemVucmdGRUpQaWs3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImExbFhHeVk1Y05VVURhMThNVTVLZnR4Y05BMkxNeVZmb2h5UnFUQjlaSHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib01SNmlaS1ZWb0hNZjdSVHNXdkhzL2pTeGQ2dFp2T2RmK0JRdWN6Q3ZrRjZ4MFpsMVg2ZUpheGRoc3VVT1l5aWJrbUdpMFI2VXpFSlpnWGtETmpBQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiczRpL0xLNWFuYm1uQzJFYXJRNWxkdzYweTg1TkdBUVgwbHJVbmUzenhIRHp2VzZEdnM1SzRNeFBGMmNRT3JCQk1CR2dsN2VSRlpaU3EyNXlTQXY1QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTU2NjYzNDk6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5ODg1MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKV29cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpXby5qc29uIjogIntcImtleURhdGFcIjpcImxvUU5ZcmxITExTNWF0TUdDZ3pUZHBtSjBDbGFBeXZ6OEpHRkFtbkdxT0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2MDEyMTQ1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MDM4NDE4MTU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "✌️𝓚𝓓_𝓑𝓡𝓞✌️",
  botname : process.env.BOT_NAME  || "✌️𝓚𝓓_𝓑𝓡𝓞✌️-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "✌️𝓚𝓓_𝓑𝓡𝓞✌️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "KALUM"  ).toUpperCase(),



};obal.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Loser08:<db_uWeyOsjkFwvHGJyT>@cluster0.namy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_43_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2eUlhMDhNS2daeXhWSGlhdDFveWtoOXZiTW43aXhIRUhGQzlyVE1xWmFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQUtqQkVwT1RvNjc3aXVWbTF1clpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1NTE0YjE0LTYyODctNDZjYi05YjIyLTE3NDZmMjFkZTgyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICA4NSxcbiAgICAgIDIwMSxcbiAgICAgIDE3LFxuICAgICAgMTYsXG4gICAgICAxODYsXG4gICAgICAzNyxcbiAgICAgIDIzOSxcbiAgICAgIDY4LFxuICAgICAgMTY0LFxuICAgICAgMTIwLFxuICAgICAgMzAsXG4gICAgICAxODksXG4gICAgICAyMjUsXG4gICAgICA2NSxcbiAgICAgIDEzNyxcbiAgICAgIDI0NSxcbiAgICAgIDE5MixcbiAgICAgIDUwLFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjUwLFxuICAgICAgMTgxLFxuICAgICAgMTMxLFxuICAgICAgMTQxLFxuICAgICAgMTU0LFxuICAgICAgMTgwLFxuICAgICAgNDUsXG4gICAgICAyMDgsXG4gICAgICAxNzUsXG4gICAgICAyNDMsXG4gICAgICAxNSxcbiAgICAgIDk5LFxuICAgICAgMTI5LFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgMTc0LFxuICAgICAgMzAsXG4gICAgICAzMSxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5WVdTQjQxSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk3NDgxMDEyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDcyMjc0NjExNjk0MDY6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTE9TRVItMDA3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSi9aMmVRRkVPTEs4YmdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWbG91V0ZWaVZCVXplNXpySmJHLzlUdVBkbWUwUzh1cm1yZXg1dE41bWpVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw1ZDJtQzVDZnlUVzdSVFdtT2xmczBtV1RFeVBMd1ZTQktlVHF6bTdLSExrbXdkZFRKdm01RkFiUXR2RFN5bEY4aHFQeVB5VnFmZ2cvSnZZOURYZEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9yMTlnb0U4NDRtMElVZXJZQ2I4UDVNdkRVS0NpZEJzL3p4YnRQK0VBTkg2MDFseVljNW1MaUFUNUZOQ2NrSnNiYjF2MU9VRUxxQlBSa2ZDcFVwL2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5NzQ4MTAxMjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTE0MjEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0R3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDRHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJycGNObHBVYWVJWGxLWU5WQnJJVFhRNXVQK0piUi9CVGlCM0xEb1FHeG5FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTMzNjIwNzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTg4MjYxMTg1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

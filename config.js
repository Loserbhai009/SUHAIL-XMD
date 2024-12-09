hiconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '923251039272') : "923251039272";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_10_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzNHhCTTlwaTJpR1dpUnllMWtpc3dDS0tETG1LOWhoYmh0SFQwOU5rWTNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCOElLcXZPVlF2S20zc2hRdnNKX3NnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlYTFjZTE3LWU5MjYtNGJlZi05MGYzLWNjZWYzODdlMjNiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMjE3LFxuICAgICAgMTM4LFxuICAgICAgNzcsXG4gICAgICAxNjAsXG4gICAgICA3OCxcbiAgICAgIDMxLFxuICAgICAgMjQzLFxuICAgICAgMjM0LFxuICAgICAgMTM5LFxuICAgICAgOTEsXG4gICAgICA3OSxcbiAgICAgIDI1MSxcbiAgICAgIDEyLFxuICAgICAgMjI1LFxuICAgICAgOTUsXG4gICAgICA0MyxcbiAgICAgIDQ0LFxuICAgICAgMjM1LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTMsXG4gICAgICAyMzUsXG4gICAgICAxMTAsXG4gICAgICAyMDgsXG4gICAgICAxMjIsXG4gICAgICAxOCxcbiAgICAgIDEzOCxcbiAgICAgIDExOCxcbiAgICAgIDE4NixcbiAgICAgIDEyOCxcbiAgICAgIDI0LFxuICAgICAgNDIsXG4gICAgICA3OCxcbiAgICAgIDE1NyxcbiAgICAgIDIxMixcbiAgICAgIDQzLFxuICAgICAgMTUxLFxuICAgICAgNDAsXG4gICAgICAxNzYsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlZXSFpYVktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1MTAzOTI3Mjo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIvwnZCO8J2QkvCdkITwnZCRLeKBsOKBsOKBt1xcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcbvCdka/wnZGi8J2Rn/CdkZ/wnZGO8J2RlvCdkZ/wnZGO44ODXCIsXG4gICAgXCJsaWRcIjogXCIyMDkxMDUzODE3NzM1NTU6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pZb1B3SEVMclUxTG9HR0I4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSelUxUWw2UyswN1pVaXdtNjBqUmI1M2NuYk54Wk9veGw3MHVONXllcEhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhMeEQxVzdLUUpxSndHcVFDcUtIVFp2Wms0QkF3MFd6VGZJNlZQaXJpTGtYbEM0UmlqU1h0RUdZMUJkcHlUYUhvVXhRQVBlL1dhT1I2OGJibjl6TEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJ4VFNJSmtNb0o1TWF4M0hIbklQaVp2dlNubUNSbE1KdFpPVC96SFFuVTU4cW5JcFgyRjVTZll1SzNTSlZFdHB3OGY1M1hkbG5MTVRlVkIzanpJRWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1MTAzOTI3Mjo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjM0NjIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjcyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNzIuanNvbiI6IHt9Cn0="
 author : process.env.PACK_AUTHER|| "LOSER-OO7",
  packname: process.env.PACK_NAME || "LOSER-OO7",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "LOSER-OO7",
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

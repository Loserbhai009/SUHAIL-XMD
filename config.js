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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_01_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlp4MmZ0RnY0RDUrQ2tUWlhSTEJ5djBUblJRRElnQytNcVE5MzVSendyL2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndkY0RRMGlSUzZxem1Jd0t3SjF1T3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTM0MWMyNjItNzRkZS00MzYyLTgxMWUtOWM2NGJiODAyMzE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDYsXG4gICAgICAxODIsXG4gICAgICAxMzMsXG4gICAgICAyMjcsXG4gICAgICAxNTUsXG4gICAgICA1NyxcbiAgICAgIDEzNixcbiAgICAgIDU0LFxuICAgICAgMTkwLFxuICAgICAgMTQ3LFxuICAgICAgMTgwLFxuICAgICAgMjQzLFxuICAgICAgNzEsXG4gICAgICA0LFxuICAgICAgMjE0LFxuICAgICAgMTAzLFxuICAgICAgMjcsXG4gICAgICA3OSxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDExNixcbiAgICAgIDEwNCxcbiAgICAgIDI1NSxcbiAgICAgIDIxNixcbiAgICAgIDEzMSxcbiAgICAgIDkyLFxuICAgICAgNzksXG4gICAgICAyMzYsXG4gICAgICAxODMsXG4gICAgICAxNzQsXG4gICAgICA4NSxcbiAgICAgIDEyNSxcbiAgICAgIDIxOSxcbiAgICAgIDIxMyxcbiAgICAgIDY3LFxuICAgICAgNzEsXG4gICAgICAxNjksXG4gICAgICAyMTMsXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjNUTTcxNEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1MTAzOTI3MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIvwnZCO8J2QkvCdkITwnZCRLeKBsOKBsOKBt1xcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcbvCdka/wnZGi8J2Rn/CdkZ/wnZGO8J2RlvCdkZ/wnZGO44ODXCIsXG4gICAgXCJsaWRcIjogXCIyMDkxMDUzODE3NzM1NTU6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZZb1B3SEVMNkhtN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSelUxUWw2UyswN1pVaXdtNjBqUmI1M2NuYk54Wk9veGw3MHVONXllcEhzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZST0JGZDZCeWtNcENQeS9pQi85RWQxQk4yb0NwYWtVanhlRVpNQktybjBMWmVHUHVtdXRnNGJLYjMwQkMzLzRlZ2w0TlJnMzAvYzZRblhUV2hISER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpsMkVhajNkS1M1SzF4V0haOFRlMCtWRGRaWWs2eUdvanAwUk5HMVBpSmlqaGQrNjMrVVJHTDU2US83ek95a0xMMnVqM0dRWFBQdXRXcjd1RXJrT0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1MTAzOTI3MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjkwODgzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="
 
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

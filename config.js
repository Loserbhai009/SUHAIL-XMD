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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_08_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpVDFKRUpyWCtKM0R2NjBlRXhzb2l2Qm1MazU4dndUT3cydkVoTkJ0QjdNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI1MTAzOTI3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjIyQzEzRUJDNEE2NTgyRUMxOERFOEM4OEFGNDJDNzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDMzMzA4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjUxMDM5MjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMENFM0Q2MjA4QjlERjYyMTg0N0RCMTk2RkEyMEIzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwMzMzMTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWtPZFNPOExSRTZtM21PN0dzMEhuUVwiLFxuICBcInBob25lSWRcIjogXCI3MjM1NDI1NS02NzkzLTRlNjYtOTMwMi1hZTlhMTA2MjE1ODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxNjEsXG4gICAgICAyMzYsXG4gICAgICAxMTUsXG4gICAgICAxNDMsXG4gICAgICAxNTQsXG4gICAgICAxNCxcbiAgICAgIDI1MSxcbiAgICAgIDIzOSxcbiAgICAgIDE0NSxcbiAgICAgIDEyNCxcbiAgICAgIDg3LFxuICAgICAgNzgsXG4gICAgICA4MyxcbiAgICAgIDM2LFxuICAgICAgMTIzLFxuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDE4OSxcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDEzNSxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgMjQyLFxuICAgICAgMTk0LFxuICAgICAgMjUzLFxuICAgICAgMzIsXG4gICAgICA2OSxcbiAgICAgIDAsXG4gICAgICAxMDMsXG4gICAgICAyMjcsXG4gICAgICAyMSxcbiAgICAgIDE5OCxcbiAgICAgIDMzLFxuICAgICAgMTEyLFxuICAgICAgMTAsXG4gICAgICAyNDQsXG4gICAgICA1NyxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJQS1oxQ1pQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTEwMzkyNzI6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCL8J2QjvCdkJLwnZCE8J2QkS3igbDigbDigbdcXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG7wnZGv8J2RovCdkZ/wnZGf8J2RjvCdkZbwnZGf8J2RjuODg1wiLFxuICAgIFwibGlkXCI6IFwiMjA5MTA1MzgxNzczNTU1OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qWW9Qd0hFTlg2cjdvR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnpVMVFsNlMrMDdaVWl3bTYwalJiNTNjbmJOeFpPb3hsNzB1TjV5ZXBIcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPQUM3MmRBcGpnaVlGaEFXa2Y0SHVkL0NaeVg1M201MG5ZOHB0ZFRDd2MzQkZRdTJwNUJGRTQ2OHBneHJ0NkoyYzNVdnJaRnZsNGd2SGRxcmt5SVFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZa05YM0RUM1lWYzBJdU1OcTZPSGdtU2s5djZmd2hDbnRsRlhYbGpFTUhWSjNVN2RnUGJ0RENBZ0I5TURTZ1lRWHFyQlR1R3p0YTMxZXRyMlBmanloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNTEwMzkyNzI6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzAzMzMwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUFYMXQ5Y0t5ZHBYOEpLYnh3ME94MTk1cHA1dEUzSDNGY09YaUJVVVRWcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM5NjMwNjk2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4OTYwODMyODJcIn0iCn0="
 
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

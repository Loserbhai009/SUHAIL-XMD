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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923251039272";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_16_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhM2t5aDh4dStYK1Q5ZTk2MlB4NEtlNm5HSmh4MEx4d21vb3ZNNktpRWxJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI1MTAzOTI3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODNCRjdEQUQyQzg4NkEwMjI4MTREOTc2NUNCNEMyMUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNTkwOTczXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjUxMDM5MjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMTlGNTNBQkU3NDVGQjc3Q0ZCMzFFOTE4QzQwMzE4NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI1OTA5NzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3RRNnJGY1VUMU92YjlVUjg5NFp0d1wiLFxuICBcInBob25lSWRcIjogXCI2MGMyODAwMi03YzdiLTQ2YTAtYTJmOC1kNTYyYTVkOTE1NGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAyOCxcbiAgICAgIDEzNCxcbiAgICAgIDQ1LFxuICAgICAgMjI1LFxuICAgICAgMzksXG4gICAgICAyMjAsXG4gICAgICAxMTQsXG4gICAgICA5MyxcbiAgICAgIDE0MSxcbiAgICAgIDIxMCxcbiAgICAgIDE3NCxcbiAgICAgIDYsXG4gICAgICA3MixcbiAgICAgIDEyMCxcbiAgICAgIDQ1LFxuICAgICAgMTg4LFxuICAgICAgMjI5LFxuICAgICAgMTk0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDQ1LFxuICAgICAgMTE0LFxuICAgICAgMTMxLFxuICAgICAgMTkwLFxuICAgICAgMjUzLFxuICAgICAgMTMyLFxuICAgICAgMTA5LFxuICAgICAgMTM2LFxuICAgICAgNjcsXG4gICAgICAxMTEsXG4gICAgICAxODYsXG4gICAgICAxODcsXG4gICAgICAxNTksXG4gICAgICAxODgsXG4gICAgICAxMjMsXG4gICAgICAyOCxcbiAgICAgIDEzMCxcbiAgICAgIDk3LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdUS1RERTFCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTEwMzkyNzI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCL8J2QjvCdkJLwnZCE8J2QkS3igbDigbDigbdcXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG7wnZGv8J2RovCdkZ/wnZGf8J2RjvCdkZbwnZGf8J2RjuODg1wiLFxuICAgIFwibGlkXCI6IFwiMjA5MTA1MzgxNzczNTU1OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iWW9Qd0hFUFg2bExvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnpVMVFsNlMrMDdaVWl3bTYwalJiNTNjbmJOeFpPb3hsNzB1TjV5ZXBIcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyOWhFOXNLSXBFYTNFZXRoTlB2d3hhaGZLMmNrS2lESW5MV1JBSzJRbTV1bEFSOWUxNnhEVzYrWm9SaDhlK0doVHFDMnUrOWE0YUZGZTllQ3doVWpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTRFoyZ1ZCVUZ5TllJNHN6ZFE5dTJmb1dmc0paUktQV3g4eWVRRFE2TnhZelVucElXN0dicko0YWNXekxwMCtudTZtQm5SVHlnQUJVb3V1WGpMN0dpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNTEwMzkyNzI6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjU5MDk2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBvb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUG9vLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHdHNG55NGxscHd1VUx1SStMb096WU9ncmUxZHpZUXczSWpTZi8vQmRlcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM5NjMwNjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI1OTA4ODM4ODdcIn0iCn0="  // PUT your SESSION_ID 


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

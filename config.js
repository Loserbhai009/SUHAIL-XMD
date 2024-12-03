const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '923251039272') : "";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_23_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNHdRVmhPN1Y2RlNmaTc1blpoRThONVcvSUF0aERvdmRTYzhvVnRnb21lOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNTEwMzkyNzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRDRjg5QkE1RjVFNkM4MEVGM0RBMTk3NDI1Mzc0OEY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzIwMzQxMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI1MTAzOTI3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzg3NzkzOEY5OEJCNzAzODlDQjg1NEQzMTU4RTVGNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMjAzNDExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImIzSFJBN2ZGUnNpcTU5TDFIV09uMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWZiMzc4ZGYtMmQ1NS00NjJhLTgwMTUtYjIyNDc1ZDAyYTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgODQsXG4gICAgICAxMjcsXG4gICAgICAxOSxcbiAgICAgIDIyMixcbiAgICAgIDIzNyxcbiAgICAgIDQyLFxuICAgICAgMTcyLFxuICAgICAgMjA1LFxuICAgICAgNzgsXG4gICAgICA2MyxcbiAgICAgIDEyOSxcbiAgICAgIDI1NCxcbiAgICAgIDE5NCxcbiAgICAgIDI3LFxuICAgICAgNTksXG4gICAgICA1NSxcbiAgICAgIDE2NyxcbiAgICAgIDE3OSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNjgsXG4gICAgICAyMjIsXG4gICAgICAxOTQsXG4gICAgICAyLFxuICAgICAgOTgsXG4gICAgICA5NSxcbiAgICAgIDg1LFxuICAgICAgMTM1LFxuICAgICAgMTQ1LFxuICAgICAgMTk0LFxuICAgICAgMyxcbiAgICAgIDE1MixcbiAgICAgIDE3NSxcbiAgICAgIDI0NCxcbiAgICAgIDk4LFxuICAgICAgODgsXG4gICAgICA1OSxcbiAgICAgIDc4LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdRNjE2UTlBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTEwMzkyNzI6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCL8J2QjvCdkJLwnZCE8J2QkS3igbDigbDigbdcXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG7wnZGv8J2RovCdkZ/wnZGf8J2RjvCdkZbwnZGf8J2RjuODg1wiLFxuICAgIFwibGlkXCI6IFwiMjA5MTA1MzgxNzczNTU1OjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qWW9Qd0hFTXFydXJvR0dCVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnpVMVFsNlMrMDdaVWl3bTYwalJiNTNjbmJOeFpPb3hsNzB1TjV5ZXBIcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxT2pjLzR3V3FYRjc5cERodFV1Y01Rd294WSt5RVpyVnJqcWYrWTc3MkZpRitxbWUrbTA0eFphdHZ0VUF5bVBzUTVOU3VkS2hwMVdLdVJCSEgwbmRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRRGIrbFh5eXhIMFFDekFnMElWb2RpdUJVSVhWZVhxTXRoYmo3bjJJdlNsNjF2aEdqM2dGL01jaWh5SjN5YWVtQ1hhbkdpUmx6REk5bm9Ba2xKNmJqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNTEwMzkyNzI6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzIwMzQwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUFYMXQ5Y0t5ZHBYOEpLYnh3ME94MTk1cHA1dEUzSDNGY09YaUJVVVRWcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTM5NjMwNjk2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4OTYwODMyODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LOSER-007",
  ownername:process.env.OWNER_NAME|| "LOSER-007",


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

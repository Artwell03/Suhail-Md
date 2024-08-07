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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  'SUHAIL_11_47_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVgxWTI1VUdkNG8zR0dWc3l0Q0czWVRxVVRoRTI2ZE9wM2xhUUU5ZWRWcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODk3ODA4ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU0RUIzNDY4NDE2RkQwMEU4MzAzNzAzNkUwQ0RFRTBCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzAzMTIyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOMUJSLVJGSlJ1dUJmN29rTWxyN1JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwNjZjZGZjLWZiNGItNDRjYi04NjgwLWRlM2JhMTFhYzhiN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAxMzksXG4gICAgICAxOTQsXG4gICAgICAyMzIsXG4gICAgICAyNTUsXG4gICAgICA4NyxcbiAgICAgIDI0NSxcbiAgICAgIDI1NCxcbiAgICAgIDQ2LFxuICAgICAgMzUsXG4gICAgICAyMTIsXG4gICAgICAyMTksXG4gICAgICA3LFxuICAgICAgMTA5LFxuICAgICAgMTk4LFxuICAgICAgNzksXG4gICAgICAxNzQsXG4gICAgICA5MixcbiAgICAgIDIxOSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDIwNCxcbiAgICAgIDE4NCxcbiAgICAgIDIzMixcbiAgICAgIDIxMCxcbiAgICAgIDc4LFxuICAgICAgMjM2LFxuICAgICAgMTYsXG4gICAgICAzMyxcbiAgICAgIDEzOSxcbiAgICAgIDYxLFxuICAgICAgMyxcbiAgICAgIDExOSxcbiAgICAgIDEwMixcbiAgICAgIDQ2LFxuICAgICAgMjQxLFxuICAgICAgMjE2LFxuICAgICAgMTI4LFxuICAgICAgMTg5LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkgyNzlGRVAxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODk3ODA4ODE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzYyNjU5NjkyMDUyOTA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJAVGxkw7MhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlCd09zQkVMSzl6YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0N0pVYzVWRTFGQ0FBZm1vQXVNZWVJT2RkVEJ4T0R2UjNrS2l4Rmdxd2tvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI0UU5ZV1dPNmJzQ3A0RkZEak1zUVAveW4wMGxMM2ZlVzJFRFFnQUQvMk1CTHN2VFhxVzZyeGx3clV2dTBCS1d4aGRHWmlnT1F0S21zcmU5Wjk5MERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9Qd1JkRjNWaGJNRTdQT0w4dmRhb1l6b0dsSGN1QWpvRG9uUnBJdWNtY21QSTUxY0xUczNvNmRnQmtVdEwyVFZpaFloSEJnMGpFRWRETytFWENhNmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4OTc4MDg4MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDMxMjIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDNLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEM0suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPNnBHbStrMzVyb1VpVEJhYWlwQVUwVndoaDBYdW9TQnNuMkZzQjdmREhzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ5Mzg3OTQzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMDMxMjI0Mzc0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

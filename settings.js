const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': '7A6uf36pxoX4TK2', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6708853490:AAE1AoxG_o12lY9hvBhMBswwbth05k1lE60" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "RiynsDownloader_bot" //your bot name
global.OWNER_NAME = "ᴹᴿ᭄ Riyns ×፝֟͜× //your name
global.OWNER_NUMBER = "6283116136568" //your telegram number
global.OWNER = ["https://t.me/ᴹᴿ᭄ Riyns ×፝֟͜×", "https://t.me/ᴹᴿ᭄ Riyns ×፝֟͜×"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change

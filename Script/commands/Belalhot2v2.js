module.exports.config = {
 name: "hot2v2",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "hot video",
 commandCategory: "admin",
 usages: "horny vedio",
 cooldowns: 5,
 dependencies: {
 request: '',
 "fs-extra": '',
 axios: ''
 }
};

module.exports.run = async function({ api, event }) {
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
var videoLinks = [
"https://drive.google.com/uc?export=download&id=12a2ZD1kq0_lq2SYQD-otE3UNPWpA44CL",
"https://drive.google.com/uc?export=download&id=1mmER1zNzwD28RQedfUI6z-mUctZpAypY",
"https://drive.google.com/uc?export=download&id=1s2q9cZeu_E0YS1SBaJB9EmDyeWJO4NJB",
"https://drive.google.com/uc?export=download&id=1AxoAzqvhuHjetOZg_nOFQ4YPI49vBJHA",
"https://drive.google.com/uc?export=download&id=1EUMGtoVduVv14HrGZu2ztLOoJQSDMyTl",
"https://drive.google.com/uc?export=download&id=1K0yBKMUmm8edJFPhAUcEsd60T6piWqvT",
"https://drive.google.com/uc?export=download&id=1jHY3b65oI9BK1XKwbG3UCyZYtHya4Daw",
"https://drive.google.com/uc?export=download&id=1WgAAojDA3hUIr8HSHqaMn5ChbR3MZyfI",
"https://drive.google.com/uc?export=download&id=1axmlgaCo3UAjccc_1k_7a5MeSP7j9P_2",
"https://drive.google.com/uc?export=download&id=1YkxNkHqLmNk9evflMA3tLWg2-uAJZWyN",
"https://drive.google.com/uc?export=download&id=1Mh7RX6_S9Yc_GDEA9xpxNJTZSdHdDcp1",
"https://drive.google.com/uc?export=download&id=10UL6XxJnfouUx0zVhB1xQH1bKbluiWQd",
"https://drive.google.com/uc?export=download&id=1_rn3_8Bmkoe_fUnHHoNa_h4sZwbdjKAc",
"https://drive.google.com/uc?export=download&id=1qPCr-2czy2i3jhyAi7lrv1AAQiidlcJn",
"https://drive.google.com/uc?export=download&id=1OQZY6Fra5PTYUwJzllwLXGkPDXyIFLLO",
"https://drive.google.com/uc?export=download&id=1hDlG6xdM8l-4ynhYuRloMDIXSo4CYg08",
"https://drive.google.com/uc?export=download&id=1e-ekdWyVdX0AWsjmjrfWbxAinM2a_RgH",
"https://drive.google.com/uc?export=download&id=1FMN4dVRPlW8Nov0qZ_9qMhzd_WmTaMoX",
"https://drive.google.com/uc?export=download&id=1vQJMqBeSg0bRaiZVpgu0DKN7fghALzpq",
"https://drive.google.com/uc?export=download&id=1vv3JnCb1l9XEnUFRMoRLnEukkaHOOiIN",
"https://drive.google.com/uc?export=download&id=1MPbHGTAJi0cBNuyXKXmnzMRmDqW9ZsYS",
"https://drive.google.com/uc?export=download&id=1XXDs8MkMUX-CtQrZsQQhVU_mz2MC4QPN",
"https://drive.google.com/uc?export=download&id=10lm2foxn2pxl5TWkTRJfRRRcuYOM9X0C",
"https://drive.google.com/uc?export=download&id=1TpAEBX1WJn5XZGackS0KmuFuTbOfxy4D",
"https://drive.google.com/uc?export=download&id=1k5S1q0lm8ZTQcQfVNvH3B7MsmmAXIouh",
"https://drive.google.com/uc?export=download&id=1hrYXt_hSuw_Ys9WHqzYb9-pBSdGJTdQs",
"https://drive.google.com/uc?export=download&id=1O3umDG248bNukoEw76ZyNL43x3as3_Tz",
"https://drive.google.com/uc?export=download&id=1Mi93zAPFkaT12GkX3NXL1LjADCbRpDMZ",
"https://drive.google.com/uc?export=download&id=1ssxX1mt_N6TQ8hV2Xm32rM0RFR-zY3DY",
"https://drive.google.com/uc?export=download&id=1XwMbUnz2wKh9T6QZbcRUIsGTa6Xr5xr0",
"https://drive.google.com/uc?export=download&id=1xmvWnxFUVNMtOHlp8_usBvwmyvS8ON8L",
"https://drive.google.com/uc?export=download&id=1sbTzwZskQEo5_wR0psCdLo5Ley4eUJ_z",
"https://drive.google.com/uc?export=download&id=1TsDNWfh3fBQh00e3pkr53Mlm6llfMSKt",
"https://drive.google.com/uc?export=download&id=1nK3m7L51wletqsVHINr6EeWadThxGb0U",
"https://drive.google.com/uc?export=download&id=13LHaKS9sUCirvplSxLnx7blo5ClEcqjk",
"https://drive.google.com/uc?export=download&id=1ebuMn6MIrVPKTspxuIrUj7ZjSg7HOYt0",
"https://drive.google.com/uc?export=download&id=1xCfdTKQ45SAStcyy9ixel0Jkoav2VJ2g",
"https://drive.google.com/uc?export=download&id=1pmLJAU__shHqnuyibggvU7fuwvadEf-A",
"https://drive.google.com/uc?export=download&id=1MZ7TplDsALX0sK_oC6rv-zrXGbM2I3Aa",
"https://drive.google.com/uc?export=download&id=1qR3pvcjscpagMLIOs7F-xlgdHl04MZjo",
"https://drive.google.com/uc?export=download&id=1wKDemUsxk-E1-ol-qoX9aUMMryxG8pUl",
"https://drive.google.com/uc?export=download&id=1KuYf09bfM2TD6ruYbwHQctGFnhxOp0tB",
"https://drive.google.com/uc?export=download&id=1FhU20PMXrqaP_OGYqMfPKUDuYmAEBXd1",
"https://drive.google.com/uc?export=download&id=1U1itxBTuv8qMp9Zzo9DLLhLIyNxZO10E",
"https://drive.google.com/uc?export=download&id=1Q79NgaQOFwfF-yHxiMHT5vE-fuXsOP6h"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: "hot2v2 এই নে তোদের জন্য আমার মালিক চাঁদের পাহাড় ✡️ এনে দিলো Hot video 1X 🥵 এবার হাত মারার জন্য রেডি হয়ে যা 🧘 ",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};

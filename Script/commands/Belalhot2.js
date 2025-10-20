module.exports.config = {
 name: "hot2",
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
"https://drive.google.com/uc?export=download&id=1kq66LLo8nA-lC9PSela46AdZcQBZHuTT",
"https://drive.google.com/uc?export=download&id=1A8FMLiLz_egexghVgmTMXhPvegfdpTXg",
"https://drive.google.com/uc?export=download&id=1gS2H_pJKvIgxetfNEkRur0_dEt3Qjqu6",
"https://drive.google.com/uc?export=download&id=1M79lr2o-jfSXKFtB22SFARWaWdrnMfEL",
"https://drive.google.com/uc?export=download&id=1q3eiMmKUVcdIDJBqSCizId5W-FypJXK6",
"https://drive.google.com/uc?export=download&id=1z6J6QqhoAPv1SgzmSy_LOjHfE4d48hs9",
"https://drive.google.com/uc?export=download&id=1sDsckq1wt-YYBedJLHeTZK7ntalqvDEs",
"https://drive.google.com/uc?export=download&id=1G0M20cZVuXXHii-cKZAsLI-LLgg5IeEb",
"https://drive.google.com/uc?export=download&id=1X0h049ECLpTLLzlgoQfjEkxB69e3ForO",
"https://drive.google.com/uc?export=download&id=12GtFGG9rhqabj2oB0J0Dt5cUu2s0gABB",
"https://drive.google.com/uc?export=download&id=1p9A75ajUJcDm1UQBADN3h3vKnG4WKTMz",
"https://drive.google.com/uc?export=download&id=18lsuXWcxiK_UxTXWZaF-Ti8C4VHvYQ9w",
"https://drive.google.com/uc?export=download&id=1Qdv0xenyM99gMfWdwB-kq7mdIAE9-kOK",
"https://drive.google.com/uc?export=download&id=14mNAlbfbBPINHDnca8ATSsw32Pu67rhG",
"https://drive.google.com/uc?export=download&id=1WaOCMHHZI-6OcF5xu8pG6cmAiI9lDQeE",
"https://drive.google.com/uc?export=download&id=1CJAjMVpgy70Z9KAsILUplBhp3NM4kqCb",
"https://drive.google.com/uc?export=download&id=1lt4LGDc17Mgk4_afha-pMEu9UC_aSwMx",
"https://drive.google.com/uc?export=download&id=1NwipOKe_FRF3GhtoCn8k3kqwMgdLFiqj",
"https://drive.google.com/uc?export=download&id=1HebDETA0FJxx4PZm4j7rCRAuOqDEyNUw",
"https://drive.google.com/uc?export=download&id=1PcR7-WWLYqqqI70RcYVm3n2_Z659m-56",
"https://drive.google.com/uc?export=download&id=1HgkCMkLqE4YAPFUeEweGo_RlsPyYvgSX",
"https://drive.google.com/uc?export=download&id=1x1CRO6whbuea545Sfex0Rd-H8ro0OKlW",
"https://drive.google.com/uc?export=download&id=1MsZolqm1gtEQ4YCX4LWi0xSYZ7znQIDK",
"https://drive.google.com/uc?export=download&id=14cUUkb_W-FdMkN_zZJo-WQAoOvIEWZ77",
"https://drive.google.com/uc?export=download&id=11528TW4oAome48Ca8D2Zog1P5c7MXeIH",
"https://drive.google.com/uc?export=download&id=1f6-F0WPa17cd9sysRFFZyDPxk33mHDiy",
"https://drive.google.com/uc?export=download&id=1ZjnoHgo1R9lqFWdrx53n4x6E4ih0v0FU",
"https://drive.google.com/uc?export=download&id=1HGLMeZXAIVJMg4kRrzvHj4DvUdWwdqsE",
"https://drive.google.com/uc?export=download&id=1UiFDDfsgj4RS1KPon3rylju0XmnXURcj",
"https://drive.google.com/uc?export=download&id=1_GCvrwAZEO1QJ1lJcO9DBoAzGIFMVxep",
"https://drive.google.com/uc?export=download&id=1sYo29R91scjd_Sr_O7bmw8pUorMN1EkU",
"https://drive.google.com/uc?export=download&id=1pPJz97LTU6RllXsQDiVkl-B628CDbxXE",
"https://drive.google.com/uc?export=download&id=1EORsC6u_j-WzOyzg6-uwkBnfSYEX7R_G",
"https://drive.google.com/uc?export=download&id=1BQ9fQQqDOlRyRguwsLj1MoeLIG0uvWUC",
"https://drive.google.com/uc?export=download&id=1Dj7Ka9G9Qpy4jEbjEOyFuV-sU7PqKWa7",
"https://drive.google.com/uc?export=download&id=1DH4ab7DDjjhbhIwcvJpNkoW7s0ZvN7ti",
"https://drive.google.com/uc?export=download&id=1p3pCwsCXyBe7VIOHFv0VZFwcaou1JAXo",
"https://drive.google.com/uc?export=download&id=1uy54ns0BfnEus14PYwrsfpZW2yMhW-EB",
"https://drive.google.com/uc?export=download&id=1SwTgeSdAUEgWS1tsQYvo-qG2j_k9LUY5",
"https://drive.google.com/uc?export=download&id=1DQSNe6-xsPc1SqqWjVRRYQfN9OgmUX5P"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: " এই নে তোদের জন্য আমার মালিক চাঁদের পাহাড় ✡️ এনে দিলো Hot video 1X 🥵 এবার হাত মারার জন্য রেডি হয়ে যা 🧘 ",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};

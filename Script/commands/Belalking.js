module.exports.config = {
 name: "king",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "hot video",
 commandCategory: "admin",
 usages: "max vedio",
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
"https://drive.google.com/uc?export=download&id=10srxhZa-VS6dQPZUEKbjBHFe9cibWwEA",
"https://drive.google.com/uc?export=download&id=1Z9wmpUoOEcSFcBAz4hpTyON2RqajW9rg",
"https://drive.google.com/uc?export=download&id=1XcwsrCgJ3YYv1SUgJQeU9jDLeSbn_alt",
"https://drive.google.com/uc?export=download&id=1Nd3nZ4TjfecxQOTAFeXSTEMG0WBdtVYU",
"https://drive.google.com/uc?export=download&id=15MWnIkerQC9zwZyondtginYfwROdWoro",
"https://drive.google.com/uc?export=download&id=15ZoRwME67t-fmeBWI8vco5HQgEaJTEPy",
"https://drive.google.com/uc?export=download&id=14Gb56b3sosdggEtwlCz2xhR9ZNLIyT87",
"https://drive.google.com/uc?export=download&id=1b0Bapju4mmOqs5DDeF1dwtb-GP0BXCJ6",
"https://drive.google.com/uc?export=download&id=1u7uebZZy1tObHrPVkkH0w4elq-JUhyeX",
"https://drive.google.com/uc?export=download&id=1pTw86nsj0xAUqq7UgdXV8SGhrH0-BFOm",
"https://drive.google.com/uc?export=download&id=1nwdvjRhB-ugqL2AHM7YDwZBUuxzb22LC",
"https://drive.google.com/uc?export=download&id=1QHcTDvrOWRtzjEsWf-U0aqjvcXAsV7ma",
"https://drive.google.com/uc?export=download&id=1aJi0rsuecFgqr1bFXKw2ZVPsHUfv_POL",
"https://drive.google.com/uc?export=download&id=1HtESWKuf9C8oXJU2vlOh4gL8uu-INLrS",
"https://drive.google.com/uc?export=download&id=1QnBXK9S9owbEc4BEgC6q6FFbFqOf_m2w",
"https://drive.google.com/uc?export=download&id=1RsMAfuQ1mLAPesfj8SE2E5jlrvyy1nMm",
"https://drive.google.com/uc?export=download&id=13qr3xtmsuHHRq0IsoKpZBQDx3KhI-ML_",
"https://drive.google.com/uc?export=download&id=1auxUayraodonevh5htuAHZepp0MKkanY",
"https://drive.google.com/uc?export=download&id=1vO7AostbLbDNQjqw18yP9IbD5j5lgBpZ",
"https://drive.google.com/uc?export=download&id=18XES0vJ4Hzxcrb6bsXKP2CJtAf8x8OJP",
"https://drive.google.com/uc?export=download&id=1n2cnVb9S6EFJ3rqBsHyGnFjl6rz_MOwq",
"https://drive.google.com/uc?export=download&id=1gfPdELtC6B5pYzc5pFOF_lhrlotPdmcY",
"https://drive.google.com/uc?export=download&id=1D2z2v-_3Onc-gPe0v6eyhf0alY7tXw7x",
"https://drive.google.com/uc?export=download&id=1G1bDOdz-YWyOYbUOpzVqGL9rqPh7nGFx",
"https://drive.google.com/uc?export=download&id=15z3NlSVSSBqXEeR3rD4EryuQos8qM8TB",
"https://drive.google.com/uc?export=download&id=1BE_pA_P8G0PWf8A8rVJC2UcISFhpYEMd",
"https://drive.google.com/uc?export=download&id=1Tc49OifkAraoPFNv_i3WhdNmN0VwyauQ",
"https://drive.google.com/uc?export=download&id=1JJDAE6Z8hwMywXCQpKY0k5gsraWZHH5s",
"https://drive.google.com/uc?export=download&id=1gooJ0cdAZJ6iMX52frRTP2uAgAiQnCnb",
"https://drive.google.com/uc?export=download&id=18yydUzPJ8MuzsmUqCThChw3xMEYBU0CP",
"https://drive.google.com/uc?export=download&id=10lHhF-7xdFHwjeKDKNzfM_gG3JT2Lkrt",
"https://drive.google.com/uc?export=download&id=1dBmIOFSdCyD8O8Bi_vofWpgX0h7xs4Ky",
"https://drive.google.com/uc?export=download&id=1Qa9_1Vm7m0wv9TaBBd6rEnLN6-i2gXSs",
"https://drive.google.com/uc?export=download&id=1FAVu9VY9kY7rS3jMIUNX5WAzYwrP_yTL",
"https://drive.google.com/uc?export=download&id=1O6qyK_uscxXNOittXT4L7TM-xJ7QYuX4"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: "My hero Kingdom of heaven ✡️",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};

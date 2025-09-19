module.exports.config = {
 name: "hot3",
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
"https://drive.google.com/uc?export=download&id=15I2WPtvFaK962s3YZI02tmxzrvLxDfsg",
"https://drive.google.com/uc?export=download&id=1eKWsTNW94wPh3UH7cjYmTHGZzH99ly2L",
"https://drive.google.com/uc?export=download&id=1eKWsTNW94wPh3UH7cjYmTHGZzH99ly2L",
"https://drive.google.com/uc?export=download&id=1Zk12e1A1ZxAxnr8a1fXGeoAZxfceTXS6",
"https://drive.google.com/uc?export=download&id=1NFySwj2jxImgccis2Ee3PfOyoc5LEbVx",
"https://drive.google.com/uc?export=download&id=1-JMh5BJ8LtCDmNs6-rUXdQ3MEiWQk1nl",
"https://drive.google.com/uc?export=download&id=1AOJQKyIzKO1I7bETXnoO8-JhmLJyj-rt",
"https://drive.google.com/uc?export=download&id=1frWLp3pY5mrTSorfZtVKt0UASyi2UDqr",
"https://drive.google.com/uc?export=download&id=1JjkMYegUz594VwATMt7fpjj7Zbs-rqFq",
"https://drive.google.com/uc?export=download&id=1yU2OrBcXgF2OydU_VduNCLFazcEOMTuI",
"https://drive.google.com/uc?export=download&id=1X7N7BT700JYMwqYpk5uChPYAabfIG4Hc",
"https://drive.google.com/uc?export=download&id=1pSDR7R0FqIJUfIp-ActdSZ6Xm4shLOc_",
"https://drive.google.com/uc?export=download&id=1Kj0WAd2EEh6cP2MNWOGEqaqmmq8o7RKs",
"https://drive.google.com/uc?export=download&id=1HEhrNxW5YkTldhlzN3KENUPcLGXHUvJq",
 
 
];
 
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: " এই নে তোদের জন্য আমার মালিক চাঁদের পাহাড় এনে দিরো 4X HOT video🧘 ",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};

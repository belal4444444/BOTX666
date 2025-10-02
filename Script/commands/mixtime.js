const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
  name: "time",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "BELAL BOTX666",
  description: "Displays current time and bot runtime with owner mention.",
  commandCategory: "Info",
  cooldowns: 1,
  dependencies: {
    "fs-extra": "",
    "axios": "",
    "moment-timezone": ""
  }
};

module.exports.run = async function({ api, event }) {
  const { threadID } = event;

  // বটের আপটাইম
  const uptime = process.uptime(),
    hours = Math.floor(uptime / 3600),
    minutes = Math.floor((uptime % 3600) / 60),
    seconds = Math.floor(uptime % 60);

  // ঢাকার সময়
  const now = moment.tz("Asia/Dhaka");
  const timeStr = now.format("hh:mm A");
  const dateStr = now.format("DD-MM-YYYY");

  // হিজরী ডেট (উদাহরণ হিসাবে)
  const hijriDate = "[Sunday 6th Ashwin 1432]";

  // Bot Owner ID
  const ownerID = "100056725134303";

  // মেসেজ পাঠানোর আগে গ্রুপ মেম্বার চেক করা
  let ownerText = "┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄"; // ডিফল্ট
  try {
    const threadInfo = await api.getThreadInfo(threadID);
    const memberIDs = threadInfo.participantIDs || [];
    if (memberIDs.includes(ownerID)) {
      ownerText = { tag: "┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄", id: ownerID }; // মেনশন
    }
  } catch (err) {
    console.log(err);
  }

  // মেসেজ ফরম্যাট
  const message = `
____❮ 𝙲𝚊𝚕𝚎𝚗𝚍𝚎𝚛 ❯____
• 𝐓𝐢𝐦𝐞 : ${timeStr} ⏰
• 𝐃𝐚𝐭𝐞 : ${dateStr}
• 𝐇𝐢𝐣𝐫𝐢 𝐃𝐚𝐭𝐞 : ${hijriDate}
• 𝐁𝐨𝐭 𝐔𝐩𝐭𝐢𝐦𝐞 : ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)

• 𝙱𝚘𝚝 𝙾𝚠𝚗𝚎𝚛 - ${ownerText}
`;

  api.sendMessage(message, threadID);
};

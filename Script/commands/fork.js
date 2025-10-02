module.exports.config = {
    name: "fork",
    version: "1.0.8",
    hasPermssion: 0,
    credits: "BELAL BOTX666",
    description: "Send repository link when 'fork' is mentioned in text, without prefix",
    commandCategory: "info",
    usages: "fork",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const text = (event.body || "").toLowerCase();

    // 'fork' শব্দ টেক্সটে আছে কি চেক করছে
    if (text.includes("fork")) { 
        const message = `
📌 *BELAL BOTX666*

•𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐲 𝐋𝐢𝐧𝐤:*  
https://github.com/BOTX666/BOTX666.git

কোনো সমস্যা বা প্রশ্ন থাকলে যোগাযোগ করুন:  
https://www.facebook.com/mahi.gaming.165

─────────────────
Thank you for supporting the Bot!
─────────────────
`;
        return api.sendMessage(message, event.threadID, event.messageID);
    }
};

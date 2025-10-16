/install 4k.js const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    "https://raw.githubusercontent.com/Mostakim0978/D1PT0/refs/heads/main/baseApiUrl.json"
  );
  return base.data.mostakim;
};

module.exports = {
  config: {
    name: "4k",
    aliases: ["remini"],
    category: "enhanced",
    author: "Romim",
    version: "1.0.0",
    shortDescription: "Enhance image quality using AI",
    longDescription: "Enhance low-quality or blurry photos to 4K using AI-based remini API",
    commandCategory: "enhancement",
  },

  onStart: async function ({ api, event, args }) {
    try {
      // check if user replied to an image
      if (
        !event.messageReply ||
        !event.messageReply.attachments ||
        !event.messageReply.attachments[0]
      ) {
        return api.sendMessage(
          "𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐩𝐥𝐲 𝐭𝐨 𝐚𝐧 𝐢𝐦𝐚𝐠𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝.",
          event.threadID,
          event.messageID
        );
      }

      const imageURL = event.messageReply.attachments[0].url;
      const apiUrl = `${await baseApiUrl()}/remini?input=${encodeURIComponent(imageURL)}`;

      const response = await axios.get(apiUrl, { responseType: "stream" });

      api.sendMessage(
        {
          body: "┄┉❈✡️⋆⃝চাঁদেড়~পাহাড়✿⃝🪬❈┉┄✨",
          attachment: response.data,
        },
        event.threadID,
        event.messageID
      );
    } catch (e) {
      api.sendMessage(`❌ Error: ${e.message}`, event.threadID, event.messageID);
    }
  },
};

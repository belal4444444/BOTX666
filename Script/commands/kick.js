module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "the person you need to remove from the group by tag",
	commandCategory: "System", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
		"needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
		"missingTag": "Bạn phải tag người cần kick"
	},
	"en": {
		"error": "Error! An error occurred. Please try again later!",
		"needPermssion": "Need group admin\nPlease add and try again!",
		"missingTag": "বস চাঁদের পাহাড় আপনি শুধু একজন কে মেনশন করেন ওরে লাথি মেরে গ্রুপ থেকে বের করে দেব 🤬 শালার এই গ্রুপে থাকার কোন অধিকার নাই 🚫 যতসব মূর্খ পাবলিক 😌 আমি এটা বুঝি না এদেরকে ভার্চুয়াল এর টিকিট দেয় কিডা 🥴"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("You have to tag the need to kick",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}

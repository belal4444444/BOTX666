const { join } = require('path');
const { writeFileSync, existsSync, createReadStream } = require('fs-extra');
const moment = require("moment-timezone");
const axios = require('axios')
module.exports.config = {
    name: "dating",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Dũng, Modded: TuấnDzz",
    description: "Hẹn hò qua messenger?",
    commandCategory: "game",
    usages: "[shop/info/breakup/daily]",
    cooldowns: 0
};

const _1DAY = 1000 * 60 * 60 * 24;

const thinh = ["Chocolate đắng đầu lưỡi nhưng ngọt ở cuống họng, như tình yêu em dành cho anh.", "Bên em thôi, đừng bên ai. Yêu em thôi, đừng thêm ai.", "Như lon coca mùa hè, hạt cacao mùa đông. Em đến bên anh thật nhanh và đúng lúc.", "Một cách đơn giản để hạnh phúc là tôn trọng những gì mình đang có.", "Khi yêu ai đó cách mà người ấy gọi tên bạn cũng khiến bạn mỉm cười hạnh phúc.", "Tình yêu không phải là những lời thề non hẹn biển, chỉ đơn giản là cùng nhau bình yên qua ngày.", "Muốn hạnh phúc trong tình yêu hãy cho đi nhiều hơn, hãy tha thứ, hãy thông cảm, và hãy yêu thương nhiều hơn.", "Em không cần một tình yêu quá lớn, nhưng em cần một tình yêu vừa đủ… để em cảm thấy an tâm.", "Yêu chính là muốn ở cạnh người đó không rời dù chỉ một phút một giây.", "Trăng dưới nước là trăng ngụ trên trời. Người đứng trước mặt là người ngụ ở trong tim.", "Chỉ cần chúng ta yêu ai đó bằng cả trái tim thì đó luôn được gọi là mối tình đầu.", "Nếu phải lựa chọn giữa việc yêu em và không khí để thở. Anh sẽ dùng hơi thở cuối cùng để nói lời yêu em.", "Anh thà làm một hồn ma, ở bên em như một linh hồn vất vưởng còn hơn là lên thiên đàng mà không có em.", "Mỗi ngày thức dậy anh được nghĩ đến em, khi đi ngủ anh có thể mơ về em đối với anh đó là 1 ngày trọn vẹn!", "Tình yêu giống như thiên đường, nhưng nỗi đau nó gây ra thì như địa ngục vậy.", "Đừng vì quá cô đơn mà nắm nhầm 1 bàn tay. Đừng vì quá lạnh mà vội ôm 1 bờ vai", "Sâu thẳm như mối tình đầu và điên cuồng bằng tất cả niềm nuối tiếc.", "Hãy chọn một kết thúc buồn thay vì một nỗi buồn không bao giờ kết thúc.", "Nếu mọi nỗi đau đều có thể quyên đi, thì đâu tồn tại làm gì cái thứ gọi là nước mắt…"];
const TextForHouse = ["Gia đình là điều quan trọng nhất trên thế giới này","Nhà là nơi để trở về","Nhà không cần quá lớn, miễn là trong đó có đủ yêu thương.","Gia đình – đó là nơi bình yên và an toàn nhất trong cuộc đời.","Gia đình là nơi mà khi nghĩ về bạn thấy tâm hồn mình thật bình yên…","Gia đình là nơi cuộc sống bắt đầu và tình yêu không bao giờ kết thúc.","Nhà không phải nơi trú ẩn tạm thời: điều cốt lõi của nó nằm trong tính cách của những người sống trong đó.","Bạn được sinh ra từ gia đình của mình và gia đình được sinh ra từ trong bạn. Không mưu cầu. Không đổi chác.","Yêu thương gia đình nhiều nhất bạn có thể vì đó là điều tuyệt vời nhất mà thượng đế ban tặng cho mỗi người.","Hãy dành thời gian cho gia đình ngay cả khi bạn không hề biết điều gì đã và đang xảy đến với cuộc đời của mình.","Điểm tựa quan trọng nhất trong cuộc đời bạn luôn là gia đình dù bạn có muốn thừa nhận hay không . Đó vẫn là sự thật.","Gia đình là duy nhất trên cuộc đời mà không gì có thể thay thế được, và cho dù bạn có đi bất cứ nơi đâu thì đây cũng là nơi duy nhất chờ mong bạn trở về."];

module.exports.onLoad = function () {
    const path = join(__dirname, 'game', 'dating.json');
    if (!existsSync(path)) { writeFileSync(path, JSON.stringify([], null, 4)) }
    const dataDating = require('./game/dating.json');


    //UPDATE JSON FOR VERSION 1.1.0
    for (let user of dataDating) {
        if (user.data && user.data.pet) {
            for (let pet of user.data.pet) {
                if (!pet.health) pet.health = 'good';
            }
        }
    }
    writeFileSync(path, JSON.stringify(dataDating, null, 4));

    const get_day_of_time = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    };
    setInterval(function () {
        for (let i of dataDating) {
            if (dataDating.length == 0) continue;
            let dayStart = new Date(i.data.timestamp);
            let today = new Date();
            let time = get_day_of_time(dayStart, today);
            i.data.countDays = time;
            //pet check
            if (i.data.pet && i.data.pet.length > 0 && i.data.petLastFeed) {
                if (Date.now() - i.data.petLastFeed > (_1DAY * 2)) {
                    i.data.pet = [];
                    delete i.data.petLastFeed;
                }
                for (pet of i.data.pet) {
                    if (!pet.timeHealtStartBeingBad) continue;
                    if (Date.now() - pet.timeHealtStartBeingBad > (_1DAY * 3)) {
                        delete pet.timeHealtStartBeingBad;
                    }
                }
            }
            writeFileSync(path, JSON.stringify(dataDating, null, 4));
        }
    }, 1000);

    setInterval(() => {
        for (let i of dataDating) {
            if (!i.data.pet) continue;
            for (const petData of i.data.pet) {
                if (Math.random() > 0.7) {
                    if (petData.health == 'good') {
                        petData.health = 'normal';
                    } else {
                        petData.health = 'bad';
                        petData.timeHealtStartBeingBad = Date.now();
                    }
                }
            }
            writeFileSync(path, JSON.stringify(dataDating, null, 4));
        }
    }, 4 * 60 * 60 * 1000);
}

function msgBreakup() {
    var msg = ['Thật sự 2 người không thể làm lành được sao?', 'Cứ như vậy mà buông tay nhau?', 'Không đau sao? Có chứ? Vậy sao còn muốn buông?', 'Vì một lí do nào đó... 2 người có thể cố gắng được không? ^^', 'Tình yêu là khi hai người quan tâm, chăm sóc lẫn nhau. Bây giờ cả 2 bạn đã hiều điều gì đã xảy ra, 2 bạn có thể quay về bên nhau được không', 'Giận để biết yêu nhau nhiều hơn phải không, cả 2 làm lành nhé vì khi giận nhau mới biết đối phương không thể sống thiếu nhau']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {
    return `𝐌𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐮̀𝐧𝐠 𝐭𝐨̛́𝐢 𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐜𝐡𝐨 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐧𝐚̀𝐲 𝐧𝐚̀𝐨 🥰\n\𝐋𝐮̛𝐮 𝐘́:\n- 𝐂𝐚̉ 𝟐 𝐛𝐚̣𝐧 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐭𝐫𝐨𝐧𝐠 𝐯𝐨̀𝐧𝐠 𝟕 𝐧𝐠𝐚̀𝐲 𝐤𝐞̂̉ 𝐭𝐮̛̀ 𝐤𝐡𝐢 𝐲𝐞̂𝐮 𝐧𝐡𝐚𝐮\n- 𝐂𝐮𝐨̂́𝐢 𝐜𝐮̀𝐧𝐠 𝐜𝐡𝐮́𝐜 𝐜𝐚̉ 𝟐 𝐛𝐚̣𝐧 𝐜𝐨́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐧𝐢𝐞̂̀𝐦 𝐡𝐚̣𝐧𝐡 𝐩𝐡𝐮́𝐜 𝐤𝐡𝐢 𝐨̛̉ 𝐛𝐞̂𝐧 𝐧𝐡𝐚𝐮, 𝐜𝐚̉𝐦 𝐨̛𝐧 𝐯𝐢̀ 𝐭𝐢𝐧 𝐭𝐮̛𝐨̛̉𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐛𝐨𝐭 𝐜𝐮̉𝐚 𝐦𝐢̀𝐧𝐡\n- 𝐊𝐲́ 𝐭𝐞̂𝐧: 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑷𝒉𝒂̣𝒎 𝑴𝒊𝒏𝒉 𝑻𝒖𝒂̂́𝒏 ❤️`
}
module.exports.run = async function ({ api, event, args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const dataDating = require('./game/dating.json');
    const type = (args[0] || 'false').toLowerCase();
    const input = type
        .replace('nữ', 1)
        .replace('gái', 1)
        .replace('nam', 2)
        .replace('trai', 2)
        .replace('breakup', 3)
        .replace('chiatay', 3)
        .replace('ct', 3)
        .replace('info', 4)
        .replace('-i', 4)
        .replace('shop', 5)
        .replace('-s', 5)
        .replace('daily', 6)
        .replace('diemdanh', 6)
        .replace('top', 7)
        .replace('rank', 7)
        .replace('-r', 7)
        .replace('-t', 7)
        .replace('house', 8)
        .replace('-h', 8)
        .replace('pet', 9)
        .replace('-p', 9)
        .replace('exchange', 10)
        .replace('-e', 10)

    const dataUser = await Users.getData(senderID)
    const author = dataDating.find(i => i.ID_one == senderID || i.ID_two == senderID);
    switch (input) {
        case '1': {
            if (author == undefined) break
            if (author.status == true) return api.sendMessage(`𝐌𝐮𝐨̂́𝐧 𝐜𝐚̆́𝐦 𝐬𝐮̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?, 𝐡𝐚̃𝐲 𝐥𝐚̀𝐦 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐫𝐚́𝐜𝐡 𝐧𝐡𝐢𝐞̣̂𝐦 𝐧𝐚̀𝐨. 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐨̛̉ 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 𝐫𝐨̂̀𝐢 𝐜𝐨̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐚̀ 😈`, threadID, messageID);
            break;
        }
        case '2': {
            if (author == undefined) break
            if (author.status == true) return api.sendMessage(`𝐌𝐮𝐨̂́𝐧 𝐜𝐚̆́𝐦 𝐬𝐮̛̀𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?, 𝐡𝐚̃𝐲 𝐥𝐚̀𝐦 𝐦𝐨̣̂𝐭 𝐜𝐨𝐧 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝐭𝐫𝐚́𝐜𝐡 𝐧𝐡𝐢𝐞̣̂𝐦 𝐧𝐚̀𝐨. 𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐨̛̉ 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 𝐫𝐨̂̀𝐢 𝐜𝐨̀𝐧 𝐦𝐮𝐨̂́𝐧 𝐤𝐢𝐞̂́𝐦 𝐭𝐡𝐞̂𝐦 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐚́𝐜 𝐚̀ 😈`, threadID, messageID);
            break;
        }
        case '3': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐡𝐮̛𝐚 𝐡𝐞̣𝐧 𝐡𝐨̀ 𝐯𝐨̛́𝐢 𝐚𝐢 𝐭𝐡𝐢̀ 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐜𝐚́𝐢 𝐠𝐢̀ ?`, threadID, messageID);
            if (author.data.countDays < 3) return api.sendMessage(`𝐂𝐨̀𝐧 𝐜𝐡𝐮̛𝐚 𝐭𝐨̛́𝐢 3 𝐧𝐠𝐚̀𝐲 𝐦𝐚̀ 𝐦𝐮𝐨̂́𝐧 𝐜𝐡𝐢𝐚 𝐭𝐚𝐲 𝐥𝐚̀ 𝐬𝐚𝐨? 🥺\n\n${msgBreakup()}\n\n𝐇𝐚̃𝐲 𝐜𝐮̛́ 𝐛𝐢̀𝐧𝐡 𝐭𝐢̃𝐧𝐡 𝐬𝐮𝐲 𝐧𝐠𝐡𝐢̃, 𝐜𝐡𝐨 𝐦𝐨̣𝐢 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐝𝐚̂̀𝐧 𝐥𝐚̆́𝐧𝐠 𝐱𝐮𝐨̂́𝐧𝐠 𝐫𝐨̂̀𝐢 𝐠𝐢𝐚̉𝐢 𝐪𝐮𝐲𝐞̂́𝐭 𝐜𝐮̀𝐧𝐠 𝐧𝐡𝐚𝐮 𝐧𝐡𝐞́ 𝐯𝐢̀ 𝐭𝐢̀𝐧𝐡 𝐲𝐞̂𝐮 𝐤𝐡𝐨̂𝐧𝐠 𝐩𝐡𝐚̉𝐢 𝐚𝐢 𝐜𝐮̃𝐧𝐠 𝐦𝐚𝐲 𝐦𝐚̆́𝐧 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐧𝐡𝐚𝐮 𝐦𝐚̀ ^^`, threadID, messageID);
            return api.sendMessage(`𝐂𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐭𝐡𝐚̣̂𝐭 𝐬𝐮̛̣ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐧𝐮̛̃𝐚 𝐡𝐚𝐲 𝐬𝐚𝐨 ?\n𝐂𝐡𝐨 𝐛𝐨𝐭 𝐱𝐢𝐧 𝐩𝐡𝐞́𝐩 𝐱𝐞𝐧 𝐯𝐚̀𝐨 𝐦𝐨̣̂𝐭 𝐜𝐡𝐮́𝐭 𝐧𝐡𝐞́:\n\n${msgBreakup()}\n\n𝐍𝐞̂́𝐮 𝐜𝐨́ 𝐱𝐞𝐦 𝐭𝐡𝐚̂́𝐲 𝐝𝐨̀𝐧𝐠 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲, 𝐡𝐚̃𝐲 𝐜𝐮̛́ 𝐜𝐡𝐨 𝐦𝐨̣𝐢 𝐜𝐡𝐮𝐲𝐞̣̂𝐧 𝐥𝐚̆́𝐧𝐠 𝐱𝐮𝐨̂́𝐧𝐠...𝐘𝐞̂𝐧 𝐥𝐚̣̆𝐧𝐠 𝐦𝐨̣̂𝐭 𝐜𝐡𝐮́𝐭, 𝐬𝐮𝐲 𝐧𝐠𝐡𝐢̃ 𝐜𝐡𝐨 𝐤𝐢̃ 𝐧𝐚̀𝐨...\n𝐂𝐨́ 𝐧𝐡𝐢𝐞̂̀𝐮 𝐭𝐡𝐮̛́...𝐌𝐨̣̂𝐭 𝐤𝐡𝐢 𝐦𝐚̂́𝐭 đ𝐢 𝐭𝐡𝐢̀ 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢̀𝐦 𝐥𝐚̣𝐢 𝐧𝐮̛̃𝐚. ^^\n\n𝐂𝐨̀𝐧 𝐧𝐞̂́𝐮...𝐕𝐚̂̃𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐭𝐢𝐞̂́𝐩 𝐭𝐮̣𝐜 𝐜𝐮̀𝐧𝐠 𝐧𝐡𝐚𝐮 𝐧𝐮̛̃𝐚...𝐂𝐚̉ 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐡𝐚̃𝐲 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐡𝐞́ !`, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    senderID: senderID,
                    type: input,
                    data: {
                        ID_one: author.ID_one,
                        accept_one: false,
                        ID_two: author.ID_two,
                        accept_two: false
                    }
                });
            }, messageID);
        }
        case '4': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ 𝐱𝐞𝐦 𝐢𝐧𝐟𝐨 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            const your_name = author.ID_one == senderID ? author.name_one : author.name_two;
            const partner_name = author.ID_two == senderID ? author.name_one : author.name_two;
            var msg = `💓==『 𝐁𝐞𝐞𝐧 𝐓𝐨𝐠𝐞𝐭𝐡𝐞𝐫 』==💓\n\n` + `» ❤️ 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻: ${your_name}\n` + `» 🤍 𝗧𝗲̂𝗻 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗮̂́𝘆: ${partner_name}\n` + `» 💌 𝗛𝗲̣𝗻 𝗵𝗼̀ 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: \n${author.data.days}\n` + `» 📆 𝗬𝗲̂𝘂 𝗻𝗵𝗮𝘂: ${author.data.countDays} 𝗻𝗴𝗮̀𝘆\n` + `» 🎁 𝗘𝘅𝗽 𝘁𝗵𝗮̂𝗻 𝗺𝗮̣̂𝘁: ${author.data.point} 𝗲𝘅𝗽\n` + `» 🎐 𝗫𝗲̂́𝗽 𝗵𝗮̣𝗻𝗴: ${getRank(senderID)}\n` + `──────────────\n` + `» 💘 𝗖𝗵𝗮̂𝗺 𝗻𝗴𝗼̂𝗻 𝘁𝗶̀𝗻𝗵 𝘆𝗲̂𝘂: ${thinh[Math.floor(Math.random() * thinh.length)]}`;
            return api.sendMessage({ body: msg, attachment: await this.canvas(author.ID_two, author.ID_one, 1) }, threadID, messageID);
        }
        case '5': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ 𝗺𝘂𝗮 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            var shop = [
                { name: 'Hoa', point: 10, money: 1000 },
                { name: 'Nhẫn', point: 20, money: 2000 },
                { name: 'Socola', point: 30, money: 3000 },
                { name: 'Mỹ phẩm', point: 40, money: 4000 },
                { name: 'Vé xem phim', point: 50, money: 5500 },
                { name: 'Sextoy', point: 100, money: 10000 }
            ]
            return api.sendMessage({
                body: "== 𝐒𝐖𝐄𝐄𝐓 𝐋𝐎𝐕𝐄 𝐒𝐇𝐎𝐏 ==\n\n𝟭. 𝗛𝗼𝗮 (𝟭𝟬𝟬𝟬$)\n𝟮. 𝗡𝗵𝗮̂̃𝗻 (𝟮𝟬𝟬𝟬$)\n𝟯. 𝗦𝗼𝗰𝗼𝗹𝗮 (𝟯𝟬𝟬𝟬$)\n𝟰. 𝗠𝘆̃ 𝗽𝗵𝗮̂̉𝗺 (𝟰𝟬𝟬𝟬$)\n𝟱. 𝗩𝗲́ 𝘅𝗲𝗺 𝗽𝗵𝗶𝗺 (𝟱𝟬𝟬𝟬$)\n𝟲. 𝗦𝗲𝘅𝘁𝗼𝘆 (𝟭𝟬𝟬𝟬𝟬$)\n\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛ 𝐭𝐮̛̣",
                attachment: await this.image('https://i.imgur.com/lYLFJ8G.jpg')
            },
                threadID, (error, info) => global.client.handleReply.push({
                    type: input,
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    shop,
                    data: author
                }), messageID);
        }
        case '6': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐅𝐀 𝐦𝐚̀ 𝐝𝐢𝐞𝐦𝐝𝐚𝐧𝐡 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐜𝐨̛ ?`, threadID, messageID);
            if (author.data.daily != null && Date.now() - author.data.daily < 86400000)
                return api.sendMessage(`𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐜𝐚̉ 𝟐 𝐛𝐚̣𝐧 𝐝𝐢𝐞𝐦𝐝𝐚𝐧𝐡 𝐫𝐨̂̀𝐢 𝐡𝐚̃𝐲 𝐪𝐮𝐚𝐲 𝐥𝐚̣𝐢 𝐬𝐚𝐮 𝟐𝟒 𝐭𝐢𝐞̂́𝐧𝐠 𝐧𝐮̛̃𝐚 𝐧𝐡𝐞́`, threadID, messageID)
            return api.sendMessage(`𝐂𝐚̉ 𝟐 𝐜𝐮̀𝐧𝐠 𝐭𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 [❤] 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐮̀𝐧𝐠 𝐝𝐢𝐞𝐦𝐝𝐚𝐧𝐡 !`, threadID, (error, info) => {
                global.client.handleReaction.push({
                    name: this.config.name,
                    type: input,
                    messageID: info.messageID,
                    senderID: senderID,
                    author: author,
                    data: {
                        ID_one: author.ID_one,
                        accept_one: false,
                        ID_two: author.ID_two,
                        accept_two: false
                    }
                })
            }, messageID);
        }
        case '7': {
            if (dataDating.length == 0) return api.sendMessage('𝐂𝐡𝐮̛𝐚 𝐜𝐨́ 𝐜𝐚̣̆𝐩 𝐧𝐚̀𝐨 𝐭𝐫𝐨𝐧𝐠 𝐝𝐮̛̃ 𝐥𝐢𝐞̣̂𝐮 𝐜𝐮̉𝐚 𝐛𝐨𝐭', threadID, messageID);
            dataDating.sort(function (a, b) { return b.data.point - a.data.point });
            var msg = '️🏆=== [ 𝐓𝐎𝐏 𝐂𝐎𝐔𝐏𝐋𝐄 ] ===️🏆\n\n'
            for (let i = 0; i <= 10; i++) {
                if (dataDating[i] == undefined) continue
                msg += `${i + 1}. ${dataDating[i].name_one} 💓 ${dataDating[i].name_two}\nSố điểm: ${dataDating[i].data.point}\nSố ngày: ${dataDating[i].data.countDays}\n\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        case '8': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ 𝗺𝘂𝗮 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            var msg = "🏚==== [ 𝐇𝐎𝐔𝐒𝐄 ] ====🏚\n\n𝟏. 𝐍𝐡𝐚̀ 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 🏡\n𝟐. 𝐍𝐚̂𝐧𝐠 𝐂𝐚̂́𝐩/𝐌𝐮𝐚 𝐧𝐡𝐚̀ 🏗\n𝟑. 𝐁𝐚́𝐧 𝐧𝐡𝐚̀ 💸\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣";
            return api.sendMessage(msg, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    type: 'house',
                    messageID: info.messageID,
                    author: senderID,
                    authorData: author
                });
            }, messageID);
        }
        case '9': {
            if (author == undefined || author.status == false) return api.sendMessage(`𝐁𝐚̣𝐧 𝐅.𝐀 𝐬𝐦𝐥 𝐫𝐚 𝐦𝐚̀ 𝗺𝘂𝗮 𝐜𝐚́𝐢 𝐠𝐢̀ 𝐳𝐚̣̂𝐲 𝐡𝐮̛̉ ?`, threadID, messageID);
            var msg = "🐰 ==== [ 𝐏𝐄𝐓 ] ==== 🐰\n\n𝟏. 𝐏𝐞𝐭 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧\n𝟐. 𝐊𝐡𝐚́𝐦 𝐁𝐞̣̂𝐧𝐡\n𝟑. 𝐌𝐮𝐚 𝐏𝐞𝐭\n\n𝐑𝐞𝐩𝐥𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐭𝐡𝐮̛ 𝐭𝐮̛̣";
            return api.sendMessage(msg, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    type: 'pet',
                    messageID: info.messageID,
                    author: senderID,
                    authorData: author
                });
            }, messageID);
        }
        case '10': {
            if (!author) return;
            let authorPoint = author.data.point;
            var msg = `𝐁𝐚̣𝐧 𝐡𝐢𝐞̣̂𝐧 𝐜𝐨́ ${authorPoint} 𝐩𝐨𝐢𝐧𝐭, 𝐫𝐞𝐩𝐥𝐲 𝐬𝐨̂́ 𝐩𝐨𝐢𝐧𝐭 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐭𝐢𝐞̂̀𝐧 𝐦𝐚̣̆𝐭 💵`;
            return api.sendMessage(msg, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    type: 'convertToMoney',
                    messageID: info.messageID,
                    authorPoint,
                    author: senderID,
                });
            }, messageID);
        }
        default:
            return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐧𝐡𝐚̣̂𝐩 𝐠𝐢𝐨̛́𝐢 𝐭𝐢́𝐧𝐡 𝐜𝐮̉𝐚 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐦𝐚̀ 𝐛𝐚̣𝐧 𝐦𝐮𝐨̂́𝐧 𝐃𝐚𝐭𝐢𝐧𝐠 [𝐧𝐚𝐦/𝐧𝐮̛̃]`, threadID, messageID);
    }
    var { money } = await Currencies.getData(senderID);
    if (money < 2000) return api.sendMessage(`𝐁𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝟐𝟎𝟎𝟎 𝐕𝐍𝐃 𝐭𝐢𝐞̂̀𝐧 𝐩𝐡𝐢́ 𝐦𝐮𝐚 𝐧𝐡𝐚̂̃𝐧 𝐏𝐍𝐉 𝐭𝐚̣̆𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐚𝐭𝐢𝐧𝐠 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧 💍`, threadID, messageID);
    return api.sendMessage(`𝐁𝐚̣𝐧 𝐬𝐞̃ 𝐛𝐢̣ 𝐭𝐫𝐮̛̀ 𝟐𝟎𝟎𝟎 𝐕𝐍𝐃 𝐭𝐢𝐞̂̀𝐧 𝐩𝐡𝐢́ 𝐦𝐮𝐚 𝐧𝐡𝐚̂̃𝐧 𝐏𝐍𝐉 𝐭𝐚̣̆𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐚𝐭𝐢𝐧𝐠 𝐯𝐨̛́𝐢 𝐛𝐚̣𝐧 💍\n𝐒𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 𝐧𝐚̀𝐲 𝐬𝐞̃ 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨𝐚̀𝐧 𝐭𝐫𝐚̉ 𝐧𝐞̂́𝐮 𝟏 𝐭𝐫𝐨𝐧𝐠 𝟐 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐤𝐡𝐨̂𝐧𝐠 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢𝐞̂́𝐧 𝐯𝐚̀𝐨 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐃𝐚𝐭𝐢𝐧𝐠 💜\n\n𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐜𝐡𝐚̂́𝐩 𝐧𝐡𝐚̣̂𝐧 𝐭𝐢̀𝐦 𝐤𝐢𝐞̂́𝐦 𝐦𝐨̣̂𝐭 𝐧𝐠𝐮̛𝐨̛̀𝐢.`, threadID, (error, info) => {
        global.client.handleReaction.push({
            name: this.config.name,
            type: input,
            messageID: info.messageID,
            senderID: senderID,
            author: dataUser
        });
    }, messageID);
}
function getRank(senderID) {
    var dataDating = require('./noprefix/dating.json');
    dataDating.sort(function (a, b) { return b.data.point - a.data.point })
    var rank = dataDating.findIndex(i => i.ID_one == senderID || i.ID_two == senderID);
    return rank + 1
}
module.exports.handleReply = async function ({ api, event, handleReply, utils, Currencies }) {
    const { threadID, messageID, body, senderID } = event;
    if (handleReply.author != senderID) return
    var { money } = await Currencies.getData(senderID);
    const dataDating = require('./noprefix/dating.json');
    var path = join(__dirname, 'noprefix', 'dating.json');
    var data = handleReply.data;
    var chosenIndex = parseInt(body - 1);
    let type = handleReply.type;
    if (type == 'house') {
        if ((!chosenIndex && chosenIndex != 0) || chosenIndex == NaN || isNaN(chosenIndex) || chosenIndex > 2 || chosenIndex < 0) return api.sendMessage("𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐡𝐨̛̣𝐩 𝐥𝐞̣̂.", threadID, messageID);

        const Houses = {
            'house-0': {
                image: 'https://i.imgur.com/CuCrUEi.jpg',
                baseImage: 'https://i.imgur.com/hUpEEx4.png',
                cost: 10000000,
                requiredExp: 500,
            },
            'house-1': {
                image: 'https://i.imgur.com/GHlJL6e.jpg',
                baseImage: 'https://i.imgur.com/tnGoXnN.jpg',
                cost: 20000000,
                requiredExp: 1200
            },

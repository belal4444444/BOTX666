module.exports.config = {
  name: "hot5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BELAL BOTX666",
  description: "hot video",
  commandCategory: "admin",
  usages: "horny + hot + sex vedio",
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
  
  const videoLinks = [
    "https://drive.google.com/uc?id=196GS-0a1HOGF5qOel3P7AC0rPEGgognO",
    "https://drive.google.com/uc?id=19-UI5cf2l3E4KXZ69Ts2wue92tdZLb0d",
    "https://drive.google.com/uc?id=1AKLgQKT7Dr-LFWynOlA4lDN-ySPkDOD8",
    "https://drive.google.com/uc?id=192rfTydqFBuqffcLqdAalM-lX06RWArY",
    "https://drive.google.com/uc?id=1AEqPO50O1eanOMIOwzIZrnsdYk3M3-Q7",
    "https://drive.google.com/uc?id=1BRyantlhCTiu74LQG2f_PrJnRpkbUaUI",
    "https://drive.google.com/uc?id=19geIE0T2JrI3FV1jUrT6KxFSyrxrAXaQ",
    "https://drive.google.com/uc?id=19qUOL6usIDDO9HyzgwA4GS84b1fn43KX",
    "https://drive.google.com/uc?id=19O390CZ84TAibBs-ia-V15KrJS2ia2u4",
    "https://drive.google.com/uc?id=1BA6o7VFYy5sf92o1_gQJQn7y8LTNhuWr",
    "https://drive.google.com/uc?id=1BulVr8xplV69FbkF2RkibuM5qGXqsAtO",
    "https://drive.google.com/uc?id=18qb8fMubr2U5PPI7KJ3q45T-oNXI5oOB",
    "https://drive.google.com/uc?id=1A0RSYaykjcpUBnc8vGQHdShULj-M8vxF",
    "https://drive.google.com/uc?id=18a_Y0AFxdFadgjaTqCNcgkUidvwyIoSh",
    "https://drive.google.com/uc?id=1BSHYwtZNTIlTFqIIhddwYkxy5yWfJhH7",
    "https://drive.google.com/uc?id=19OWbsQ01CK7-waMYHBwIL2iPeCuV9Fi4",
    "https://drive.google.com/uc?id=19NJRYXib7JGJhWuKFDCONbfVvnMLw7h8",
    "https://drive.google.com/uc?id=19F6ZTSXDE6UTHXmdOzu7KoWDn7CjHP3v",
    "https://drive.google.com/uc?id=19zTnXe0H2TRp2vtjAjNQeO8FNg_WA4DE",
    "https://drive.google.com/uc?id=19ibqiqQziTwG39_rnadLw_RlR8iTsKja",
    "https://drive.google.com/uc?id=18dN7BgO2LvxtA4uYjNS1ujN4xNHCSckD",
    "https://drive.google.com/uc?id=19krxxa6N7YYBpZf9cGZtLjvTKDzpLFIl",
    "https://drive.google.com/uc?id=1B5OcYmB6l1POe7iAG2jKbk9cJYRK3uaR",
    "https://drive.google.com/uc?id=1BaeV1dSUEb6PWWrUur5CUjiyH-0tWMgQ",
    "https://drive.google.com/uc?id=19Ut381EDTdjYPRnPvy3pQq6oyQ5Y8bq3",
    "https://drive.google.com/uc?id=1BwWdiggrcPRemz3UHtQZ8PxBSexLY_cp",
    "https://drive.google.com/uc?id=1ARSdgb82oP6DsIUi-YxDaZu-XSMOJdz1",
    "https://drive.google.com/uc?id=19A4UI8fCQnFd1Z3aONYNrf2jYsCcoFn4",
    "https://drive.google.com/uc?id=1C2ZX7bRSM04DZ9tKTT3l4oj4Qi2Fbkdt",
    "https://drive.google.com/uc?id=1A1zlmgOTsPoJHmyXDm4T49cmjSbTLgg0",
    "https://drive.google.com/uc?id=18tOHBnG_vrnG_io6Kgj1LPI36-7mDsBy",
    "https://drive.google.com/uc?id=19fhL4nvaVT2ehz93W0DPRVocrczSljaF",
    "https://drive.google.com/uc?id=1AixGc0pxlmpmgHYu5wAbDlYHv2whRqDg",
    "https://drive.google.com/uc?id=1BMuw5bV5I100iACo52fGujoL5vQDlRVA",
    "https://drive.google.com/uc?id=1BenMV3N13x80P-hEG4G8u5opRxm6Vlfc",
    "https://drive.google.com/uc?id=1AUlNoTFOWKSFhRPpjv1KCv48MGpd8r0C",
    "https://drive.google.com/uc?id=1AIeMHRnwQ0SUN0TiPQ32UHyx9eL9cicL",
    "https://drive.google.com/uc?id=1BAMLpNMZQaHhWNKIsjCDFAdTnQvhuQh7",
    "https://drive.google.com/uc?id=1BoUF2w17L9XGnqlqG3JibQr7iP7Anmqs",
    "https://drive.google.com/uc?id=1Bk_ITSsW_RAVKniu69RYVMpqZAT7kABl",
    "https://drive.google.com/uc?id=19erDLH1W5-rOvUHOBNpg0Ur0lS3O88a8",
    "https://drive.google.com/uc?id=1A-yFTjlvltRjyDZEnyQrpmZsYgLQRTbi",
    "https://drive.google.com/uc?id=192VVIzLzmh4hTekLiL_7PeleZUCs5uj3",
    "https://drive.google.com/uc?id=19TcB5dAvlS3-47WWFKvXgZrNlG7l0r0o",
    "https://drive.google.com/uc?id=19gPSfV0_Dx1tE8bOYciUICS7Wk9h4x-l",
    "https://drive.google.com/uc?id=1AHFuEHZ2NhYPaiZDAQZVvZHHuu1DQR13",
    "https://drive.google.com/uc?id=1AcGr8oNrQUxpO8FTBvypImLJu6u0Nehh",
    "https://drive.google.com/uc?id=19cTN8R1si-0a-2HHRl51531B9LeUVGgi",
    "https://drive.google.com/uc?id=1BC7jTudYN-6_BKks4GZwjK3CDFKNtftG",
    "https://drive.google.com/uc?id=19TBwM2CfPgzZ7bNOtbnQxptwHEn03stv",
    "https://drive.google.com/uc?id=1BR50XoBRpCv1oN9WrfPTYx8fNWjSy0Ql"
];
  
  let randomLink;
  const lastSent = this.lastSentVideo || null;
  do {
    randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  } while (videoLinks.length > 1 && randomLink === lastSent);
  this.lastSentVideo = randomLink; // Remember the last sent video
  const path = __dirname + "/cache/hotvideo.mp4";
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }

  request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(path))
    .on("close", () => {
      api.sendMessage({
        body: "পাপির দল 😤 হাত মারবি না কিন্তু 🥵🫵",
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path));
    })
    .on("error", (err) => {
      console.error("Error downloading video:", err);
      api.sendMessage("Bokasoda video Dawonlod korte pari nai🤧\nPlease aktu por hat mara🥵.", event.threadID);
    });
};

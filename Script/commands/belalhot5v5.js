module.exports.config = {
  name: "hot5v5",
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
  
  const videoLinks = ["https://drive.google.com/uc?id=1DPE3Oo2QSzEVKbgE5CbnJGAX16IMcG2C",
    "https://drive.google.com/uc?id=1DJPcWco6WFnfLTwa28XZMdhcDEKzYukQ",
    "https://drive.google.com/uc?id=1DZ_1wRItCK8B9wT6TQ1NlH3-V4ul1x8q",
    "https://drive.google.com/uc?id=1DJZ0jnaRPS2Pq3D_b-xFjMWlfdxQW80a",
    "https://drive.google.com/uc?id=1EDdiUaFAFAX9Sy6qoizrcd6h3S6M-H1W",
    "https://drive.google.com/uc?id=1D9l-zGTB2ZCnhGYnOR1Y1GygnFO12KOx",
    "https://drive.google.com/uc?id=1Dkki3NB-bErOo41u6mMAesUNyzaK-xcV",
    "https://drive.google.com/uc?id=1DnMnX5Y4-PLDT5c9v8qko6TANFLmiBfj",
    "https://drive.google.com/uc?id=1DT_e5vknWWH2c0QB8rdHtLRHaI1voJKk",
    "https://drive.google.com/uc?id=1DTXWUsYbEqFB0pwdBndsJVbTDNRpYLRh",
    "https://drive.google.com/uc?id=1CdSQFpqdHGb-mLY7B11QE_mzSEsLk6ct",
    "https://drive.google.com/uc?id=1CiuNzx5ySZJcByVkhmYePfD4SGiPXANo",
    "https://drive.google.com/uc?id=1CnAIypeceTDi7bdubCMG76FI2DiMTZgC",
    "https://drive.google.com/uc?id=1DNoZ7XIKUnwJkXU7Ce4Dp2R3wdNgNiui",
    "https://drive.google.com/uc?id=1CalzQLKWvhKvQXp4T0T2GL3CEG97U4AS",
    "https://drive.google.com/uc?id=1CaVat1YKppKsEVF6E3bVEYZh08IJRt5U",
    "https://drive.google.com/uc?id=1DLB0qSrZlvmfYnM1COaMU83qDfwCCtmF",
    "https://drive.google.com/uc?id=1CiIemCjTcxcHG9R6bJrIKCZgNq34MaGj",
    "https://drive.google.com/uc?id=1Dhv1cEKsRxAGk1lYhxpZp-yR9DUx8zVY",
    "https://drive.google.com/uc?id=1Cj4cA5lxffQtpF9TBGhwaNosGwyUrNEW",
    "https://drive.google.com/uc?id=1ELthYZYuPm76rO3qGfordD-5C9V7FdQF",
    "https://drive.google.com/uc?id=1ECpc89QFu-meH2AvfCLsQpi6awmQjUfx",
    "https://drive.google.com/uc?id=1ABtEvo3Cvls7pkA4e937k9aNAL_YJc8Q",
    "https://drive.google.com/uc?id=1AFXbiWAIh90KQOqVYxHWHmv-3NKmJ76a",
    "https://drive.google.com/uc?id=1AB6SN7vCf7CD1sKiklfPHZOCzf3x8iLG",
    "https://drive.google.com/uc?id=1AC3BNRdKYOMAAS1lhu91PMkY27C0woVH",
    "https://drive.google.com/uc?id=1ACc1GddqGYPo80E4vStBvqVXA7FcdMlS",
    "https://drive.google.com/uc?id=1A67KkN-FThrW1O79ZxqioBnvvpaDVgfT",
    "https://drive.google.com/uc?id=1A8YWpc7a1n-aDGSoQeGNO8gGphtj-HBl",
    "https://drive.google.com/uc?id=1BKjLsM7owAO97f8R3hlSjTUgKZ2lVn6c",
    "https://drive.google.com/uc?id=1AQRYq6PPWpiUY7lpLvMy3gXvGOWmSlSs",
    "https://drive.google.com/uc?id=1BSrpsS5-9UaumBTdY6ixqXJBTP2-PxvM",
    "https://drive.google.com/uc?id=19PIfqFwxPx93nFAMuo1w8RxvdpVOfq7j",
    "https://drive.google.com/uc?id=1a7XsNXizFTTlSD_gRQwK4bDA3HPam56W",
    "https://drive.google.com/uc?id=1aF6H24ILE6wIFGW3M3BGXg8l63ktP8B3",
    "https://drive.google.com/uc?id=1_ysGMbGZQexheta6tuSBhJQDeAMioXr_",
    "https://drive.google.com/uc?id=1bTwYfovA2YKCs_kskWyp2GHh7K9XHQN0",
    "https://drive.google.com/uc?id=1bPdkmq6lKm8BGwxkWaADHe0kutTtEujR",
    "https://drive.google.com/uc?id=1b_evUu8zmfiPs-CeaZp1DkkArB5zl5x-",
    "https://drive.google.com/uc?id=1brkBa03NdRCx6lfrjopbWJUCoJupCRYg",
    "https://drive.google.com/uc?id=1c6SCqToTZamfuiiz5LrckOxDYT9gnJGu",
    "https://drive.google.com/uc?id=1bv8GL0XDReocf1NfZBMCNoMAsBBwDE1i",
    "https://drive.google.com/uc?id=1c01XFZFNYRi_harhEbPvf-i25QIo9c0V",
    "https://drive.google.com/uc?id=1bs5sI8NDRVK_omefR59how1UjZ6TEu91",
    "https://drive.google.com/uc?id=1bcIoyM9T_wQlaXxar4nVjCXsKHavRmnb",
    "https://drive.google.com/uc?id=1boVaYpbxIH3RItPY6k0Ld2F98YasHVq9",
    "https://drive.google.com/uc?id=1c5YXcgK3kOx6bTfVjxNGGMdDYbGmVInC",
    "https://drive.google.com/uc?id=1c1OHfuq-YBOO-UwO5uybPqO7gOqTwInp",
    "https://drive.google.com/uc?id=1jsoQ4wuRdN6EP6jOE3C0L6trLZmoPI0L",
    "https://drive.google.com/uc?id=1jr4YzPNCTOj_lfdOSnauXfTPJkbuqS3f",
    "https://drive.google.com/uc?id=1tlon-avneE7lQF2rS13GOeiuLWIUEA7J",
    "https://drive.google.com/uc?id=1tqaCw0vfG2zJDijgsFF2UTlOB-EmI4SZ",
    "https://drive.google.com/uc?id=1ta1ujBjmcvxSuYVwQ3oEXIJsnPCW2VZO",
    "https://drive.google.com/uc?id=1svD1h3vEYbwxMeU5v4c2wQPBaU90fcEx",
    "https://drive.google.com/uc?id=1seUwXvoVFyCzOA5SykF9uxhlwuwLzPn0",
    "https://drive.google.com/uc?id=1t2oFQmOtw-6V_ahWzYo08v1g2oGnkhPL"
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
        body: " Hot5v5 পাপির দল 😤 হাত মারবি না কিন্তু 🥵🫵",
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path));
    })
    .on("error", (err) => {
      console.error("Error downloading video:", err);
      api.sendMessage("Bokasoda video Dawonlod korte pari nai🤧\nPlease aktu por hat mara🥵.", event.threadID);
    });
};

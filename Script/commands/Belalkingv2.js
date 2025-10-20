module.exports.config = {
 name: "kingv2",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "BELAL BOTX666",
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
var videoLinks = ["https://drive.google.com/uc?export=download&id=1gJwa6fhc5b7-S1Z5Vxyf5SkmSNLnxEI_",
"https://drive.google.com/uc?export=download&id=1tg9ys4PVz9xEzwWZ_BCTdQa_CY3aFRm4",
"https://drive.google.com/uc?export=download&id=1fIgpGHl2YfvJF9YU5O55XTduD-WgyCmO",
"https://drive.google.com/uc?export=download&id=1cnRC-CYntb8iIYeLafHDnhTHqx4KhoJf",
"https://drive.google.com/uc?export=download&id=1SUVurwWQZfinVlu8d8sloT6qk-as21_R",
"https://drive.google.com/uc?export=download&id=1n0x-PUF2AI9uDGgzpNUIx-Ub2cPmakPP",
"https://drive.google.com/uc?export=download&id=12mGIUEs8lgjZT-gb9Uwee1uZm6TJqsNB",
"https://drive.google.com/uc?export=download&id=15p2UF11MR7eGBFDpLCylxfg71PrijPWe",
"https://drive.google.com/uc?export=download&id=1cuGXIGvtqEfHfMXhQrC9G6GuEoevoEHW",
"https://drive.google.com/uc?export=download&id=18HS93ftltVPr3wBtz3ilqbtoKoDcD7go",
"https://drive.google.com/uc?export=download&id=1_2IDqxzOwzh_2NBf9qKhsucDQTMYOsbT",
"https://drive.google.com/uc?export=download&id=14dR1oGZllr41G67UhvLZDS3QSpxoyRj8",
"https://drive.google.com/uc?export=download&id=1KxSzi7lHmcXAhaXrAjTvsfXxcj1MKGyA",
"https://drive.google.com/uc?export=download&id=19Ceb3FXrztBwuwKIIvQA3a4Utd8bUM1X",
"https://drive.google.com/uc?export=download&id=1TCV1ByADTjbIfV4_92FVuO891vOhcCFy",
"https://drive.google.com/uc?export=download&id=1bBZMzlTE8kCelOx00sYO7XBWFz45z1Kd",
"https://drive.google.com/uc?export=download&id=1n5LRVzCTm1oD9jJb1by7dkOIUcOHv1YF",
"https://drive.google.com/uc?export=download&id=1VgzfcocG-0wu5TZS-UIt8mCWoeFFSkMu",
"https://drive.google.com/uc?export=download&id=1lffQoBck0Z9vmE3J_sSwqXQERxT3s7Cj",
"https://drive.google.com/uc?export=download&id=1avrADmp98C_m875B8Fd-ifQGzaf2iRCr",
"https://drive.google.com/uc?export=download&id=1M0I0Ym0i5w6B7ckTR4y9SRR7wshuNqod",
"https://drive.google.com/uc?export=download&id=1VHaRQYYwCssbGgQ1clvnZLtEpkhTFI6j",
"https://drive.google.com/uc?export=download&id=1N84oimJM4UGcauqM-zS61yW8UmMGH4NV",
"https://drive.google.com/uc?export=download&id=1aBkBe_je9JuHB2IkI-EtlNFA7JNFRql1",
"https://drive.google.com/uc?export=download&id=1rcdilATYkq8YZHBSGHOakttaLn_akDTP",
"https://drive.google.com/uc?export=download&id=1q8IGwnqzHejiqI73NBReM6LCkVVSy3rm",
"https://drive.google.com/uc?export=download&id=1_GNTMms6y7R_2vp_oVbVhAtoiX_zV7mK",
"https://drive.google.com/uc?export=download&id=1gKpwtgOIxaRxzwODGBx-F4Fz2E84usiX",
"https://drive.google.com/uc?export=download&id=1E-3nIaRpySOKPdoDk_uChVqkZSpX2QEq",
"https://drive.google.com/uc?export=download&id=1_almrSaU7TjV3kVif-VG_GiYEL2Sv8ay",
"https://drive.google.com/uc?export=download&id=1llhIbDWx9UGChwlxDSgpYDp5Fl8iMiqd",
"https://drive.google.com/uc?export=download&id=1HiSiCv5vtzhuJqPbAJQ8u1COZ1bAfh2S",
"https://drive.google.com/uc?export=download&id=1VXsHlWr5oZfIvcrUeGZ1iWQofYtxuFUU",
"https://drive.google.com/uc?export=download&id=1GZC1jNNx1sFHiv5NfIYlb1HdWL3Wl_YD",
"https://drive.google.com/uc?export=download&id=19xeVMLex0Mv3sDnRTzENEtjcYxoqvoYR",
"https://drive.google.com/uc?export=download&id=1zBXnBMC-Yy1lsbvkIJAVxxXkXwKh5JXk",
"https://drive.google.com/uc?export=download&id=1Cjkotl8gAsWygqaS2Mh9B00pfb62uS26",
"https://drive.google.com/uc?export=download&id=14t6fXFM_6EU_DsVqFv2Yi6qHlOt0kl44",
"https://drive.google.com/uc?export=download&id=1lxeAOsI_nNtnn_qF_0mGnxjW7OHR5nnc",
"https://drive.google.com/uc?export=download&id=1BzonBaxBnZF2Hkq_5oolCgup24Edfo_3"
];
 

 const path = __dirname + "/cache/hotvideo.mp4";
 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

 request(encodeURI(randomLink))
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body: "kingv2 My hero Kingdom of heaven ✡️",
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};

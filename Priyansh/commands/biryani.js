module.exports.config = {
  name: "biryani",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Random joke image",
  commandCategory: "Image",
  usages: "biryani",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  var link = ["https://i.postimg.cc/YSmsMSHB/e8bc70d7725684b7c3f118263987a250.jpg", "https://i.postimg.cc/s2D546T6/0e12379ed98a57f02111c3a9ede4381c.jpg", "https://i.postimg.cc/wBGRc6yM/410185dfced2b573b173a09072816713.jpg", "https://i.postimg.cc/VNp50Dpb/90025c11bd03df63c929922c7e2ad633.jpg", "https://i.postimg.cc/LsY8Sj54/c095e631fd55efd54b821efbc89f640f.jpg", "https://i.postimg.cc/mkb4P9LH/5011ebd171cd5158d8a2f1f5f8f527e2.jpg", "https://i.postimg.cc/vHTRCbcb/a5c6925133d445fef8d8174299609485.jpg", "https://i.postimg.cc/PxS3MvbZ/c848eb1ddfde9eefb9827d48ff68599f.jpg", "https://i.postimg.cc/0yGCfJPQ/a28eaa5162abe55f8c109d327acd7fb0.jpg", "https://i.postimg.cc/xCBs7D7T/6c084dc16a3a948447627c3844745c26-1.jpg"];

  var max = Math.floor(Math.random() * 6);
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp = data.exp;
  var money = data.money;
  
  if (money < 200) {
    api.sendMessage("You need 200$ to see the photo!", event.threadID, event.messageID);
  } else {
    Currencies.setData(event.senderID, options = { money: money - 200 });
    var callback = () => api.sendMessage(
      { body: `𝗟𝗢 𝗝𝗘𝗘 𝗔𝗣 𝗞𝗛𝗔 𝗟𝗢 𝗕𝗜𝗥𝗬𝗔𝗡𝗜 𝗠𝗔𝗥𝗘 𝗞𝗛𝗔𝗜𝗥 𝗛𝗬 🫠: ${link.length}`, attachment: fs.createReadStream(__dirname + "/cache/1.jpg") },
      event.threadID,
      () => fs.unlinkSync(__dirname + "/cache/1.jpg"),
      event.messageID
    );

    return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min)))
      .pipe(fs.createWriteStream(__dirname + "/cache/1.jpg"))
      .on("close", () => callback());
  }
};
const axios = require('axios');

module.exports.config = {
  name: "quotes",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yan Maglinte",
  description: "احصل على اقتباسات عشوائية",
  usePrefix: true,
  commandCategory: "ملاحظات",
  usages: "quotes",
  cooldowns: 10,
};

module.exports.run = async function({ api, event }) {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const quote = response.data;
    const content = quote.content;
    const author = quote.author;
    const message = `"${content}" - ${author}`;
    api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error('حدث خطأ ما:', error);
    api.sendMessage('حدث خطأ أثناء جلب البيانات من API. الرجاء المحاولة مرة أخرى.', event.threadID, event.messageID);
  }
};
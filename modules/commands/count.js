module.exports.config = {
  name: "count",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Blue & Yan Maglinte",
  description: "يحسب عدد الكلمات والفقرات والأحرف الأبجدية الرقمية في سلسلة الإدخال المقدمة.",
  usePrefix: true,
  commandCategory: "الادوات",
  usages: "count الكلمات، الفقرات، والأحرف الأبجدية الرقمية [الإدخال]",
  cooldowns: 5,
  dependencies: {}
};

module.exports.run = function ({ api, event, args }) {
  const inputStr = args.join(" ");
  const wordCount = inputStr.split(" ").length;
  const paragraphCount = (inputStr.match(/\n\n/g) || []).length + 1;
  const alphanumericCount = (inputStr.match(/[a-zA-Z0-9]/g) || []).length;

  api.sendMessage(`❯ يوجد ${wordCount} كلمة/كلمات، ${paragraphCount} فقرة/فقرات، و ${alphanumericCount} حرف/أحرف أبجدية رقمية في مدخلك.`, event.threadID);
};
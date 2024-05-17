const fs = require('fs');
const azkar = JSON.parse(fs.readFileSync('azkar.json', 'utf8'));
const randomAzkar = azkar[Math.floor(Math.random() * azkar.length)];
module.exports.config = {
    name: 'اذكار عشوائيه تلقائيه',
    version: '10.02',
    hasPermssion: 0,
    credits: 'Vihoo',
    description: 'إرسال الرسائل تلقائيًا وفقًا للوقت المحدد!',
    commandCategory: 'النظام',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '11:00:00 PM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
},
{
    timer: '6:00:00 AM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
},
         {
    timer: '10:00:00 AM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
},           {
    timer: '11:00:00 AM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
},               
             {
    timer: '6:00:00 PM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
},               
{
    timer: '5:00:00 PM',
    message: [`\nاذكار عشوائيه: ${randomAzkar.zekr}`]
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};

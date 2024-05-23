module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Yan Maglinte",
    description: "إرسال رسالة إلى جميع المجموعات ويمكن القيام بذلك فقط من قبل المسؤول.",
    usePrefix: true,
    commandCategory: "المطور",
    usages: "[نص]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const threadList = await api.getThreadList(25, null, ['INBOX']);
    let sentCount = 0;
    const custom = args.join(' ');

    async function sendMessage(thread) {
        try {
            await api.sendMessage(`› رسالة من المسؤول:\n\n${custom}`, thread.threadID);
            sentCount++;
        } catch (error) {
            console.error("خطأ في إرسال الرسالة:", error);
        }
    }

    for (const thread of threadList) {
        if (sentCount >= 20) {
            break;
        }
        if (thread.isGroup && thread.name != thread.threadID && thread.threadID != event.threadID) {
            await sendMessage(thread);
        }
    }

    if (sentCount > 0) {
        api.sendMessage(`› تم إرسال الإشعار بنجاح.`, event.threadID);
    } else {
        api.sendMessage("› لم يتم العثور على مجموعات مؤهلة لإرسال الرسالة إليها.", event.threadID);
    }
};
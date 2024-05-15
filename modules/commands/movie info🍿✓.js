const axios = require('axios');
const fs = require('fs');
const request = require('request');

module.exports.config = {
  name: "فيلم",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Ali Fadel",
  description: "البحث عن الافلام ومختلف الافلام من الاجنبيه والعربيه",
  usePrefix: true,
  commandCategory: "معلومات",
  usages: "فيلم  [أسم فيلم]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const API_KEY = '890d685742fa1316f2288b6c4c8243d5';
  let searchQuery = args.join(' ');

  // Validate input
  if (!searchQuery) {
    return api.sendMessage('يرجى إدخال اسم فيلم', event.threadID, event.messageID);
  }

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ar&query=${encodeURI(searchQuery)}`;

  try {
    const res = await axios.get(url);

    if (res.data.total_results > 0) {
      const movie = res.data.results[0];
      const title = movie.title;
      const released = movie.release_date;
      const year = released.substring(0, 4);
      const language = movie.original_language;
      const overview = movie.overview;
      const rating = movie.vote_average;
      const poster = movie.poster_path;
      const genres = movie.genre_ids;
      const popularity = movie.popularity;
      const voteCount = movie.vote_count;

      let callback = function () {
        return api.sendMessage(
          {
            body: `🎥 العنوان: ${title}\n---\nتاريخ الصدور: ${released}\nعام: ${year}\nاللغة: ${language}\nالتقييم: ${rating}\nالتصنيفات: ${genres}\nالشهرة: ${popularity}\nعدد التصويتات: ${voteCount}\nنظرة عامة: ${overview}`,
            attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };

      request(`https://image.tmdb.org/t/p/w500/${poster}`).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    } else {
      api.sendMessage('عذرًا، لم يتم العثور على نتائج. يرجى التاكد من كتابه الاسم بشكل صحيح', event.threadID, event.messageID);
    }
  } catch (err) {
    console.error(err);
    api.sendMessage('حدث خطأ أثناء جلب معلومات فيلم.', event.threadID, event.messageID);
  }
};

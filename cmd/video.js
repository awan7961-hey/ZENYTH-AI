/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: video  (aliases: ytmp4, playvid)
*/

module.exports = {
  name: 'video',
  aliases: ["ytmp4", "playvid"],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, reply, moment, axios, yts, ytmp4 } = ctx;
    try {
        const text = args.join(' ');
        if (!text) return reply("🎥 *Send me a video name or yt link !*");

        try { await socket.sendMessage(sender, { react: { text: '🔍', key: msg.key } }); } catch (_) {}
 
        const search = await yts(text);
        const video = search.videos[0]; 

        if (!video) return reply("❌ *I cant get video*");

        const slDate = moment().tz('Asia/Colombo').format('YYYY-MM-DD');
        const slTimeNow = moment().tz('Asia/Colombo').format('HH:mm:ss');

        let caption = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙑𝙞𝙙𝙚𝙤 ⚡🔥] ¡! ❞*\n\n` +
                        `🎬 *𝚃𝙸𝚃𝙻𝙴 :* ${video.title}\n` +
                        `👤 *𝙲𝙷𝙰𝙽𝙽𝙴𝙻 :* ${video.author.name}\n` +
                        `⏱️ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽 :* ${video.timestamp}\n` +
                        `📽️ *𝚀𝚄𝙰𝙻𝙸𝚃𝚈 :* 360p\n` +
                        `__________________________\n\n` +
                        `📅 *𝙳𝙰𝚃𝙴 :* ${slDate} | ⌚ *𝚃𝙸𝙼𝙴 :* ${slTimeNow}\n\n` +
                        `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥*`;

        try { await socket.sendMessage(sender, { react: { text: '📥', key: msg.key } }); } catch (_) {}

        const ytRes = await axios.get(`https://ytdl-new-dxz.vercel.app/api/ytmp4?url=${encodeURIComponent(video.url)}&quality=360`);
        
        const downloadUrl = ytRes.data.video_url || ytRes.data.download_url;

        if (!downloadUrl) {
            return reply("❌ *API error !*");
        }

        const response = await axios.get(downloadUrl, { responseType: 'arraybuffer' });
        const videoBuffer = Buffer.from(response.data);

        await socket.sendMessage(sender, {
            video: videoBuffer,
            mimetype: 'video/mp4',
            caption: caption,
            fileName: `${video.title}.mp4`,
            jpegThumbnail: (await axios.get(video.thumbnail, { responseType: 'arraybuffer' })).data
        }, { quoted: msg });

        try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}

    } catch (e) {
        console.log("VIDEO CMD ERROR:", e);
        reply("❌ *ERROR try again later !*");
        try { await socket.sendMessage(sender, { react: { text: '❌', key: msg.key } }); } catch (_) {}
    }
  }
};
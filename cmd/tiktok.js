/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: tiktok  (aliases: tt)
*/

module.exports = {
  name: 'tiktok',
  aliases: ["tt"],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, text, reply, moment, axios } = ctx;
    try {
        const query = args.join(' ');
        if (!query) return reply("🔗 *𝐌𝐮𝐣𝐡𝐞 𝐞𝐤 𝐓𝐢𝐤𝐓𝐨𝐤 𝐥𝐢𝐧𝐤 𝐛𝐡𝐞𝐣𝐨 !*");
        
        if (!query.includes('tiktok.com')) {
            return reply("❌ *𝐘𝐞 𝐓𝐢𝐤𝐓𝐨𝐤 𝐤𝐚 𝐥𝐢𝐧𝐤 𝐧𝐚𝐡𝐢 𝐡𝐚𝐢 !*");
        }

        try { await socket.sendMessage(sender, { react: { text: '📥', key: msg.key } }); } catch (_) {}

        const ttRes = await axios.get(`https://www.movanest.xyz/v2/tiktok?url=${encodeURIComponent(query)}`);
        
        if (!ttRes.data.status || !ttRes.data.results) {
            return reply("❌ *𝐌𝐚𝐢𝐧 𝐯𝐢𝐝𝐞𝐨 𝐧𝐚𝐡𝐢 𝐥𝐚 𝐬𝐤𝐚 !*");
        }

        const videoData = ttRes.data.results;
        const videoUrl = videoData.no_watermark || videoData.watermark;

        const response = await axios.get(videoUrl, { 
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
            }
        });
        const videoBuffer = Buffer.from(response.data);
        const fileSizeMB = (videoBuffer.length / (1024 * 1024)).toFixed(2);

        const slDate = moment().tz('Asia/Colombo').format('YYYY-MM-DD');
        const slTimeNow = moment().tz('Asia/Colombo').format('HH:mm:ss');

        const caption = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙏𝙞𝙠𝙏𝙤𝙠 ⚡🔥] ¡! ❞*\n\n` +
                        `🎬 *𝗧𝗜𝗧𝗟𝗘 :* ${videoData.title || 'TikTok Video'}\n` +
                        `⚖️ *𝗦𝗜𝗭𝗘 :* ${fileSizeMB} MB\n` +
                        `🚫 *𝗪𝗔𝗧𝗘𝗥𝗠𝗔𝗥𝗞 :* 𝐍𝐨\n` +
                        `__________________________\n\n` +
                        `📅 *𝗗𝗔𝗧𝗘 :* ${slDate} | ⌚ *𝗧𝗜𝗠𝗘 :* ${slTimeNow}\n\n` +
                        `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥*`;

        await socket.sendMessage(sender, {
            video: videoBuffer,
            mimetype: 'video/mp4',
            caption: caption,
            fileName: `tiktok_video_${slTimeNow}.mp4`
        }, { quoted: msg });

        try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}

    } catch (e) {
        console.log("TIKTOK CMD ERROR:", e);
        reply("❌ *𝐊𝐧𝐨𝐰𝐧 𝐄𝐫𝐫𝐨𝐫*");
        try { await socket.sendMessage(sender, { react: { text: '❌', key: msg.key } }); } catch (_) {}
    }
  }
};
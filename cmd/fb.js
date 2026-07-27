/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: fb  (aliases: facebook)
*/

module.exports = {
  name: 'fb',
  aliases: ["facebook"],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, text, reply, moment, axios } = ctx;
    try {
        const query = args.join(' ');
        if (!query) return reply("🔗 *𝐌𝐮𝐣𝐡𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐯𝐢𝐝𝐞𝐨 𝐥𝐢𝐧𝐤 𝐝𝐨!*");
        
        if (!query.includes('facebook.com') && !query.includes('fb.watch')) {
            return reply("❌ *𝐘𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐤𝐚 𝐥𝐢𝐧𝐤 𝐧𝐚𝐡𝐢 𝐡𝐚𝐢!*");
        }

        try { await socket.sendMessage(sender, { react: { text: '📥', key: msg.key } }); } catch (_) {}

        const fbRes = await axios.get(`https://www.movanest.xyz/v2/fbdown?url=${encodeURIComponent(query)}`);
        
        if (!fbRes.data.status || !fbRes.data.results.length) {
            return reply("❌ *𝐌𝐚𝐢𝐧 𝐯𝐢𝐝𝐞𝐨 𝐧𝐚𝐡𝐢 𝐥𝐚 𝐬𝐤𝐚!*");
        }

        const videoData = fbRes.data.results[0];
        const videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        const quality = videoData.hdQualityLink ? '𝙃𝙞𝙜𝙝 𝘿𝙚𝙛𝙞𝙣𝙞𝙩𝙞𝙤𝙣 (𝙃𝘿)' : '𝙎𝙩𝙖𝙣𝙙𝙖𝙧𝙙 (𝙎𝘿)';

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

        const caption = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 ⚡🔥] ¡! ❞*\n\n` +
                        `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                        `┃ 🎬 *𝙏𝙄𝙏𝙇𝙀 :* ${videoData.title !== "No video title" ? videoData.title : 'Facebook Video'}\n` +
                        `┃ ⏱️ *𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉 :* ${videoData.duration}\n` +
                        `┃ 📺 *𝙌𝙐𝘼𝙇𝙄𝙏𝙔 :* ${quality}\n` +
                        `┃ ⚖️ *𝙎𝙄𝙕𝙀 :* ${fileSizeMB} MB\n` +
                        `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                        `📅 *𝘿𝘼𝙏𝙀 :* ${slDate} | ⌚ *𝙏𝙄𝙈𝙀 :* ${slTimeNow}\n\n` +
                        `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`;

        await socket.sendMessage(sender, {
            video: videoBuffer,
            mimetype: 'video/mp4',
            caption: caption,
            fileName: `fb_video_${slTimeNow}.mp4`
        }, { quoted: msg });

        try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}

    } catch (e) {
        console.log("FB CMD ERROR:", e);
        reply("❌ *𝐀𝐏𝐈 𝐞𝐫𝐫𝐨𝐫 !*");
        try { await socket.sendMessage(sender, { react: { text: '❌', key: msg.key } }); } catch (_) {}
    }
  }
};
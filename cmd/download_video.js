/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: download_video
*/

module.exports = {
  name: 'download_video',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, text, reply, axios, ytmp4 } = ctx;
    try {
        const youtubeUrl = args[0];
        if (!youtubeUrl) return reply("❌ *𝐌𝐮𝐣𝐡𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤 𝐜𝐡𝐚𝐡𝐢𝐞!*");

        try { await socket.sendMessage(sender, { react: { text: '🎥', key: msg.key } }); } catch (_) {}
        reply("📥 _🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 ⚡🔥_ 𝐕𝐢𝐝𝐞𝐨 𝐥𝐞 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧..._");

        const API_TOKEN = "aWK0z4";
        const YT_VIDEO_API = `https://whiteshadow-x-api.onrender.com/api/download/ytmp4`;

        const dlRes = await axios.get(`${YT_VIDEO_API}?url=${encodeURIComponent(youtubeUrl)}&quality=720&apitoken=${API_TOKEN}`);
        
        if (dlRes.data && dlRes.data.success && dlRes.data.result) {
            const videoDownloadUrl = dlRes.data.result.download_url;
            const songTitle = dlRes.data.result.title || "Zenyth Video";

            // Send Video File
            await socket.sendMessage(sender, {
                video: { url: videoDownloadUrl },
                mimetype: 'video/mp4',
                caption: `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨 ⚡🔥] ¡! ❞*\n\n` +
                         `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                         `┃ 🎬 *𝙏𝙄𝙏𝙇𝙀 :* ${songTitle}\n` +
                         `┃ 📽️ *𝙌𝙐𝘼𝙇𝙄𝙏𝙔 :* 720p\n` +
                         `┃ ✅ *𝙎𝙏𝘼𝙏𝙐𝙎 :* 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝘿\n` +
                         `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                         `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`
            }, { quoted: msg });

            try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}
        } else {
            reply("❌ *𝐄𝐫𝐫𝐨𝐫:* 𝐕𝐢𝐝𝐞𝐨 𝐧𝐚𝐡𝐢 𝐦𝐢𝐥𝐚!");
        }
    } catch (e) {
        reply("❌ *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫:* " + e.message);
    }
  }
};
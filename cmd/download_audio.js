/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: download_audio
*/

module.exports = {
  name: 'dlplay',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, text, reply, axios, ytmp3 } = ctx;
    try {
        const youtubeUrl = args[0];
        if (!youtubeUrl) return reply("❌ *𝐌𝐮𝐣𝐡𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤 𝐜𝐡𝐚𝐡𝐢𝐞!*");
        
        try { await socket.sendMessage(sender, { react: { text: '📥', key: msg.key } }); } catch (_) {}
        reply("📥 _🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙪𝙙𝙞𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 ⚡🔥_ 𝟑𝟐𝟎𝐤𝐛𝐩𝐬 𝐀𝐮𝐝𝐢𝐨 𝐥𝐞 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧..._");

        const API_TOKEN = "aWK0z4";
        const YT_DOWNLOAD_API = "https://whiteshadow-x-api.onrender.com/api/download/ytmp3";

        const dlRes = await axios.get(`${YT_DOWNLOAD_API}?url=${encodeURIComponent(youtubeUrl)}&quality=320&apitoken=${API_TOKEN}`);
        
        if (dlRes.data && dlRes.data.success && dlRes.data.result) {
            const audioDownloadUrl = dlRes.data.result.download_url;
            const songTitle = dlRes.data.result.title || "Zenyth Audio";
            const cleanFileName = songTitle.replace(/[\\/:*?"<>|]/g, "_").slice(0, 60) + ".mp3";

            // Send Audio File with caption
            await socket.sendMessage(sender, {
                audio: { url: audioDownloadUrl },
                mimetype: 'audio/mpeg',
                fileName: cleanFileName,
                ptt: false,
                caption: `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙪𝙙𝙞𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨 ⚡🔥] ¡! ❞*\n\n` +
                         `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                         `┃ 🎵 *𝙏𝙄𝙏𝙇𝙀 :* ${songTitle}\n` +
                         `┃ 🔊 *𝙌𝙐𝘼𝙇𝙄𝙏𝙔 :* 320kbps\n` +
                         `┃ ✅ *𝙎𝙏𝘼𝙏𝙐𝙎 :* 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝘿\n` +
                         `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                         `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`
            }, { quoted: msg });

            try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}
        } else {
            reply("❌ *𝐄𝐫𝐫𝐨𝐫:* 𝐀𝐮𝐝𝐢𝐨 𝐧𝐚𝐡𝐢 𝐦𝐢𝐥𝐚!");
        }
    } catch (e) {
        reply("❌ *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫:* " + e.message);
    }
  }
};
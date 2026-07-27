/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: download_doc
*/

module.exports = {
  name: 'dldoc',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, args, quoted, text, reply, axios, ytmp3 } = ctx;
    try {
        const youtubeUrl = args[0];
        if (!youtubeUrl) return reply("❌ *𝐌𝐮𝐣𝐡𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤 𝐜𝐡𝐚𝐡𝐢𝐞!*");

        try { await socket.sendMessage(sender, { react: { text: '📂', key: msg.key } }); } catch (_) {}
        reply("📥 _🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘿𝙤𝙘𝙪𝙢𝙚𝙣𝙩 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 ⚡🔥_ 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 𝐭𝐚𝐲𝐚𝐫 𝐡𝐨 𝐫𝐡𝐚 𝐡𝐚𝐢..._");

        const API_TOKEN = "aWK0z4";
        const YT_DOWNLOAD_API = "https://whiteshadow-x-api.onrender.com/api/download/ytmp3";

        const dlRes = await axios.get(`${YT_DOWNLOAD_API}?url=${encodeURIComponent(youtubeUrl)}&quality=320&apitoken=${API_TOKEN}`);
        
        if (dlRes.data && dlRes.data.success && dlRes.data.result) {
            const audioDownloadUrl = dlRes.data.result.download_url;
            const songTitle = dlRes.data.result.title || "Zenyth Audio";
            const cleanFileName = songTitle.replace(/[\\/:*?"<>|]/g, "_").slice(0, 60) + ".mp3";

            // Send Document File
            await socket.sendMessage(sender, {
                document: { url: audioDownloadUrl },
                mimetype: 'audio/mpeg',
                fileName: cleanFileName,
                caption: `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘿𝙤𝙘𝙪𝙢𝙚𝙣𝙩 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨 ⚡🔥] ¡! ❞*\n\n` +
                         `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                         `┃ 🎵 *𝙏𝙄𝙏𝙇𝙀 :* ${songTitle}\n` +
                         `┃ 📂 *𝙁𝙊𝙍𝙈𝘼𝙏 :* 𝘿𝙊𝘾𝙐𝙈𝙀𝙉𝙏\n` +
                         `┃ ✅ *𝙎𝙏𝘼𝙏𝙐𝙎 :* 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝘿\n` +
                         `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                         `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`
            }, { quoted: msg });

            try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}
        } else {
            reply("❌ *𝐄𝐫𝐫𝐨𝐫:* 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 𝐧𝐚𝐡𝐢 𝐦𝐢𝐥𝐚!");
        }
    } catch (e) {
        reply("❌ *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫:* " + e.message);
    }
  }
};
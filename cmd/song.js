/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: song  (aliases: ytmp3, music, video, ytv, yta)
*/

module.exports = {
  name: 'song',
  aliases: ["ytmp3", "music", "video", "ytv", "yta"],
  execute: async (ctx) => {
    const { socket, msg, sender, args, command, quoted, text, type, reply, images, axios } = ctx;
    try {
        const query = args.join(' ');
        if (!query) return reply("🎵 *𝐌𝐮𝐣𝐡𝐞 𝐞𝐤 𝐠𝐚𝐧𝐚 𝐲𝐚 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤 𝐝𝐨!*\n💡 𝐄𝐱: `.song 𝐀𝐭𝐢𝐟 𝐀𝐬𝐥𝐚𝐦` 𝐲𝐚 `.song <youtube 𝐥𝐢𝐧𝐤>`");

        try { await socket.sendMessage(sender, { react: { text: '🔎', key: msg.key } }); } catch (_) {}

        // WhiteShadow YT APIs & Token
        const API_TOKEN = "aWK0z4";
        const YT_SEARCH_API = "https://whiteshadow-x-api.onrender.com/api/search/yt";
        
        let youtubeUrl = null;
        let songTitle = "Zenyth Audio";
        let songThumb = "https://images.unsplash.com/photo-1614680376593-902f74fa0d41";
        let duration = "Unknown";
        let views = "Unknown";

        // 1. Check if input is a YouTube Link
        const regex = /(https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)[^\s?#]+)/i;
        const match = query.match(regex);

        if (match) {
            youtubeUrl = match[0].trim();
            reply("🔗 _𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐥𝐢𝐧𝐤 𝐦𝐢𝐥 𝐠𝐲𝐚. 𝐃𝐚𝐭𝐚 𝐥𝐞 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧..._");
            
            const searchRes = await axios.get(`${YT_SEARCH_API}?q=${encodeURIComponent(youtubeUrl)}&apitoken=${API_TOKEN}`);
            if (searchRes.data && searchRes.data.success && searchRes.data.result.length > 0) {
                songTitle = searchRes.data.result[0].title || songTitle;
                songThumb = searchRes.data.result[0].thumbnail || songThumb;
                duration = searchRes.data.result[0].duration || duration;
                views = searchRes.data.result[0].views || views;
            }
        } else {
            // It's a name search
            reply(`🔍 _𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐩𝐞 "${query}" 𝐝𝐡𝐮𝐧𝐝 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧..._`);
            const searchRes = await axios.get(`${YT_SEARCH_API}?q=${encodeURIComponent(query)}&apitoken=${API_TOKEN}`);

            if (searchRes.data && searchRes.data.success && searchRes.data.result.length > 0) {
                youtubeUrl = searchRes.data.result[0].url;
                songTitle = searchRes.data.result[0].title || songTitle;
                songThumb = searchRes.data.result[0].image || searchRes.data.result[0].thumbnail || songThumb;
                duration = searchRes.data.result[0].timestamp || searchRes.data.result[0].duration || duration;
                views = searchRes.data.result[0].views || views;
            }
        }

        if (!youtubeUrl) {
            try { await socket.sendMessage(sender, { react: { text: '❌', key: msg.key } }); } catch (_) {}
            return reply("❌ *𝐄𝐫𝐫𝐨𝐫:* 𝐆𝐚𝐧𝐚 𝐧𝐚𝐡𝐢 𝐦𝐢𝐥𝐚!");
        }

        // 2. Thumbnail + song info
        try {
            await socket.sendMessage(sender, {
                image: { url: songThumb },
                caption: `✨ *_🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙈𝙪𝙨𝙞𝙘 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧 ⚡🔥_* ✨\n\n📌 *𝚃𝙸𝚃𝙻𝙴:* ${songTitle}\n🕒 *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${duration}\n👁️ *𝚅𝙸𝙴𝚆𝚂:* ${views}\n🔗 *𝚄𝚁𝙻:* ${youtubeUrl}`,
            }, { quoted: msg });
        } catch (thumbErr) {
            console.error('[song] thumbnail send failed:', thumbErr);
        }

        // 3. Interactive buttons — modern WhatsApp "native flow" format
        const buttonMessage = {
            interactiveMessage: {
                body: { text: '*𝐍𝐢𝐜𝐡𝐞 𝐛𝐮𝐭𝐭𝐨𝐧𝐬 𝐦𝐞𝐢𝐧 𝐬𝐞 𝐚𝐩𝐧𝐢 𝐟𝐨𝐫𝐦𝐚𝐭 𝐜𝐡𝐮𝐧𝐞𝐧:* 🎧' },
                footer: { text: '🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥' },
                header: { hasMediaAttachment: false },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: 'quick_reply',
                            buttonParamsJson: JSON.stringify({
                                display_text: '🎵 𝐀𝐮𝐝𝐢𝐨 (320kbps)',
                                id: `.download_audio ${youtubeUrl}`,
                            }),
                        },
                        {
                            name: 'quick_reply',
                            buttonParamsJson: JSON.stringify({
                                display_text: '🎥 𝐕𝐢𝐝𝐞𝐨 (720p)',
                                id: `.download_video ${youtubeUrl}`,
                            }),
                        },
                        {
                            name: 'quick_reply',
                            buttonParamsJson: JSON.stringify({
                                display_text: '📂 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭 (𝐅𝐢𝐥𝐞)',
                                id: `.download_doc ${youtubeUrl}`,
                            }),
                        },
                    ],
                    messageVersion: 1,
                },
            },
        };

        try {
            await socket.sendMessage(sender, { viewOnceMessage: { message: buttonMessage } }, { quoted: msg });
        } catch (btnErr) {
            console.error('[song] button message failed, falling back to text:', btnErr);
            await socket.sendMessage(sender, {
                text: `🎧 *𝐀𝐩𝐧𝐢 𝐟𝐨𝐫𝐦𝐚𝐭 𝐜𝐡𝐮𝐧𝐧𝐞 𝐤𝐞 𝐥𝐢𝐲𝐞 𝐧𝐢𝐜𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐭𝐲𝐩𝐞 𝐤𝐚𝐫𝐞𝐧:*\n\n1️⃣ .download_audio ${youtubeUrl}\n2️⃣ .download_video ${youtubeUrl}\n3️⃣ .download_doc ${youtubeUrl}`,
            }, { quoted: msg });
        }

        try { await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } }); } catch (_) {}

    } catch (e) {
        console.log("SONG CMD ERROR:", e);
        try { await socket.sendMessage(sender, { react: { text: '❌', key: msg.key } }); } catch (_) {}
        reply("❌ *𝐙𝐞𝐧𝐲𝐭𝐡 𝐄𝐫𝐫𝐨𝐫:* " + e.message);
    }
  }
};
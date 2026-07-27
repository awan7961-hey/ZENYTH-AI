/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: styletext  (aliases: fancy, fancytext)
*/

module.exports = {
  name: 'styletext',
  aliases: ["fancy", "fancytext"],
  execute: async (ctx) => {
    const { socket, msg, sender, quoted, text, akira, axios } = ctx;
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || 
              msg.message?.imageMessage?.caption || '';

    const textToStyle = q.replace(/^[^\s]+\s+/, '').trim();

    if (!textToStyle || textToStyle === '') {
        return await socket.sendMessage(sender, { 
            text: '*❓ 𝐓𝐞𝐱𝐭 𝐍𝐚𝐡𝐢 𝐇𝐚𝐢* \n📋 𝐄𝐱: .fancy 𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝' 
        });
    }

    try {
        await socket.sendMessage(sender, { react: { text: '✨', key: msg.key } });

        const response = await axios.get(`https://www.movanest.xyz/v2/fancytext?word=${encodeURIComponent(textToStyle)}`);
        
        if (!response.data.status) {
            throw new Error('API processing failed');
        }

        const results = response.data.results;
        
        let styledMsg = `*✨ 𝙁𝘼𝙉𝘾𝙔 𝙏𝙀𝙓𝙏 𝙎𝙏𝙔𝙇𝙀𝙎 ✨*\n\n`;
        styledMsg += `*𝙊𝙧𝙞𝙜𝙞𝙣𝙖𝙡:* ${textToStyle}\n\n`;
        styledMsg += `*┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓*\n`;

        results.slice(0, 25).forEach((styledText, index) => {
            styledMsg += `*┃ ${index + 1}.* ${styledText}\n`;
        });
        
        styledMsg += `*┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛*\n\n`;
        styledMsg += `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥*`;

        await socket.sendMessage(sender, { 
            image: { url: akira }, 
            caption: styledMsg
        }, { quoted: msg });

        await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('StyleText API Error:', err);
        await socket.sendMessage(sender, { 
            text: `*❌ 𝐊𝐧𝐨𝐰𝐧 𝐄𝐫𝐫𝐨𝐫 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧*` 
        });
    }
  }
};
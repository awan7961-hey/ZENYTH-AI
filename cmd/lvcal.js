/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: lvcal
*/

module.exports = {
  name: 'lvcal',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, quoted, text } = ctx;
    const q = msg.message?.conversation || 
              msg.message?.extendedTextMessage?.text || '';

    const parts = q.trim().split('&');
    if (parts.length !== 2) {
        return await socket.sendMessage(sender, { 
            text: '*❌ 𝐃𝐨 𝐧𝐚𝐦 𝐝𝐨!* \n📋 𝐄𝐱: .lvcal 𝐀𝐥𝐢 & 𝐒𝐢𝐦𝐫𝐚𝐧' 
        });
    }

    try {
        await socket.sendMessage(sender, { react: { text: '💕', key: msg.key } });

        const name1 = parts[0].trim();
        const name2 = parts[1].trim();
        
        const combined = name1.toLowerCase() + name2.toLowerCase();
        let hash = 0;
        for (let i = 0; i < combined.length; i++) {
            hash = combined.charCodeAt(i) + ((hash << 5) - hash);
        }
        const percentage = Math.abs(hash % 101);

        // Heart emojis based on percentage
        let hearts = '';
        if (percentage >= 90) hearts = '💕💕💕💕💕';
        else if (percentage >= 70) hearts = '💕💕💕💕';
        else if (percentage >= 50) hearts = '💕💕💕';
        else if (percentage >= 30) hearts = '💕💕';
        else hearts = '💕';

        // Messages based on percentage (Roman Urdu)
        let msgLine = '';
        if (percentage >= 80) msgLine = '*✨ 𝐏𝐞𝐫𝐟𝐞𝐜𝐭 𝐌𝐚𝐭𝐜𝐡! 💕*';
        else if (percentage >= 60) msgLine = '*💫 𝐆𝐫𝐞𝐚𝐭 𝐂𝐡𝐞𝐦𝐢𝐬𝐭𝐫𝐲! 💝*';
        else if (percentage >= 40) msgLine = '*🌟 𝐆𝐨𝐨𝐝 𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥! 💓*';
        else if (percentage >= 20) msgLine = '*🤔 𝐓𝐡𝐨𝐝𝐚 𝐤𝐚𝐦 𝐡𝐚𝐢! 💔*';
        else msgLine = '*😢 𝐌𝐮𝐪𝐚𝐝𝐝𝐚𝐫 𝐦𝐞𝐢𝐧 𝐧𝐚𝐡𝐢! 💔*';

        let shipText = `*↳ ❝ [🔥💕 𝙕𝙚𝙣𝙮𝙩𝙝 𝙇𝙤𝙫𝙚 𝘾𝙖𝙡𝙘𝙪𝙡𝙖𝙩𝙤𝙧 💕🔥] ¡! ❞*\n\n`;
        shipText += `*${name1}* 💑 *${name2}*\n\n`;
        shipText += `┏━━━━━°⌜ \`💕 ༒ 🔥\` ⌟°━━━━━┓\n`;
        shipText += `┃ 💕 ${hearts}\n`;
        shipText += `┃ 📊 *𝙇𝙊𝙑𝙀 :* ${percentage}%\n`;
        shipText += `┃ ${msgLine}\n`;
        shipText += `┗━━━━━°⌜ \`💕 ༒ 🔥\` ⌟°━━━━━┛\n\n`;
        shipText += `> *🔥💕 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 💕🔥*`;

        await socket.sendMessage(sender, { text: shipText }, { quoted: msg });
        await socket.sendMessage(sender, { react: { text: '✅', key: msg.key } });

    } catch (err) {
        console.error('Ship Error:', err);
        await socket.sendMessage(sender, { text: '*❌ 𝐋𝐨𝐯𝐞 𝐜𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫 𝐟𝐚𝐢𝐥𝐞𝐝!*' });
    }
  }
};
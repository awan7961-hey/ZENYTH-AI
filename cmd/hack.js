/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: hack
*/

module.exports = {
  name: 'hack',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, quoted, text, reply, arabianCtx } = ctx;
    try {
        const from = msg.key.remoteJid; 
        const steps = [
            '☠️ *𝐙𝐄𝐍𝐘𝐓𝐇 𝐇𝐀𝐂𝐊 𝐈𝐍𝐈𝐓𝐈𝐀𝐓𝐄𝐃...* ☠️\n\n`⚠️ 𝙔𝙊𝙐𝙍 𝘿𝙀𝙑𝙄𝘾𝙀 𝙄𝙎 𝘾𝙊𝙈𝙋𝙍𝙊𝙈𝙄𝙎𝙀𝘿 ⚠️`',
            
            '`🔓 𝘽𝙍𝙀𝘼𝘾𝙃𝙄𝙉𝙂 𝙁𝙄𝙍𝙀𝙒𝘼𝙇𝙇...` 🔥\n`𝙳𝙴𝚃𝙴𝙲𝚃𝙴𝙳 : 𝚄𝙽𝙰𝚄𝚃𝙷𝙾𝚁𝙸𝚉𝙴𝙳 𝙰𝙲𝙲𝙴𝚂𝚂`',
            
            '`📡 𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙄𝙉𝙂 𝙏𝙊 𝙎𝙀𝙍𝙑𝙀𝙍...` 🌐\n`𝙸𝙿 : 𝟷𝟿𝟸.𝟷𝟼𝟾.𝟷.{} 𝙱𝙻𝙾𝙲𝙺𝙴𝙳`',
            
            '`💀 𝙰𝙲𝙲𝙴𝚂𝚂𝙸𝙽𝙶 𝙲𝙰𝙼𝙴𝚁𝙰...` 👁️\n`[##] 𝟸𝟶% ⚠️ 𝙲𝙰𝙼𝙴𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚃𝙴𝙳`',
            
            '`🔴 𝙼𝙸𝙲𝚁𝙾𝙿𝙷𝙾𝙽𝙴 𝙴𝙽𝙰𝙱𝙻𝙴𝙳...` 🎤\n`[####] 𝟺𝟶% 🔊 𝙻𝙸𝚂𝚃𝙴𝙽𝙸𝙽𝙶...`',
            
            '`📱 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝚂...` 📋\n`[######] 𝟼𝟶% ⚡ 𝟸𝟺𝟽 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝚂 𝙵𝙾𝚄𝙽𝙳`',
            
            '`🔑 𝙲𝚁𝙰𝙲𝙺𝙸𝙽𝙶 𝙿𝙰𝚂𝚂𝚆𝙾𝚁𝙳𝚂...` 🔓\n`[########] 𝟾𝟶% 💀 𝙰𝙻𝙻 𝙳𝙰𝚃𝙰 𝙴𝚇𝙿𝙾𝚂𝙴𝙳`',
            
            '`☠️ 𝙵𝙸𝙽𝙰𝙻 𝙿𝙷𝙰𝚂𝙴...` ⚡\n`[##########] 𝟷𝟶𝟶% ✅ 𝚂𝚈𝚂𝚃𝙴𝙼 𝙲𝙾𝙼𝙿𝚁𝙾𝙼𝙸𝚂𝙴𝙳`',
            
            '🔐 *𝙎𝙔𝙎𝙏𝙀𝙈 𝙄𝙉𝙁𝙄𝙇𝙏𝙍𝘼𝙏𝙀𝘿!* 🔓\n`🔥 𝙔𝙊𝙐𝙍 𝘿𝙀𝙑𝙄𝘾𝙀 𝙄𝙎 𝙐𝙉𝘿𝙀𝙍 𝙈𝙔 𝘾𝙊𝙉𝙏𝙍𝙊𝙇 🔥`',
            
            '☠️ *𝙔𝙊𝙐 𝙃𝘼𝙑𝙀 𝘽𝙀𝙀𝙉 𝙃𝘼𝘾𝙆𝙀𝘿!* ☠️\n\n`👻 𝙄 𝙆𝙉𝙊𝙒 𝙀𝙑𝙀𝙍𝙔𝙏𝙃𝙄𝙉𝙂 𝘼𝘽𝙊𝙐𝙏 𝙔𝙊𝙐\n📱 𝙔𝙊𝙐𝙍 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙎\n📸 𝙔𝙊𝙐𝙍 𝙋𝙃𝙊𝙏𝙊𝙎\n💬 𝙔𝙊𝙐𝙍 𝘾𝙃𝘼𝙏𝙎\n🔐 𝙔𝙊𝙐𝙍 𝙋𝘼𝙎𝙎𝙒𝙊𝙍𝘿𝙎\n\n💀 𝙉𝙊𝙏𝙃𝙄𝙉𝙂 𝙄𝙎 𝙎𝘼𝙁𝙀 𝘼𝙉𝙔𝙈𝙊𝙍𝙀 💀`',
            
            '🎭 *𝙅𝙐𝙎𝙏 𝙆𝙄𝘿𝘿𝙄𝙉𝙂! 😈*\n\n`🔥 𝙏𝙝𝙞𝙨 𝙬𝙖𝙨 𝙖 𝙨𝙞𝙢𝙪𝙡𝙖𝙩𝙞𝙤𝙣 𝙗𝙪𝙩 𝙞𝙢𝙖𝙜𝙞𝙣𝙚 𝙞𝙛 𝙞𝙩 𝙬𝙖𝙨 𝙧𝙚𝙖𝙡... 👻\n\n⚡ 𝙎𝙩𝙖𝙮 𝙨𝙖𝙛𝙚, 𝙨𝙩𝙖𝙮 𝙨𝙚𝙘𝙪𝙧𝙚! 🔒\n\n> *☠️ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙎𝙚𝙘𝙪𝙧𝙞𝙩𝙮 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ☠️*`'
        ];

        await socket.sendMessage(from, { react: { text: '☠️', key: msg.key } });

        let initialMsg = await socket.sendMessage(from, { text: steps[0] }, { quoted: msg });

        for (let i = 1; i < steps.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1200));

            await socket.sendMessage(from, {
                text: steps[i],
                edit: initialMsg.key,
                contextInfo: arabianCtx() 
            });
        }

    } catch (e) {
        console.log(e);
        reply(`❌ *𝙀𝙧𝙧𝙤𝙧!* ${e.message}`);
    }
  }
};
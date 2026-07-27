/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: tagall
*/

module.exports = {
  name: 'tagall',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, args, command, quoted, isGroup, groupMetadata, participants, reply } = ctx;
      if (!isGroup) return reply('*❌ 𝐘𝐞 𝐤𝐚𝐦 𝐬𝐢𝐫𝐟 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐢𝐧 𝐜𝐡𝐚𝐥𝐭𝐚 𝐡𝐚𝐢*');
      try {
        const gm       = await socket.groupMetadata(sender);
        const ps       = gm.participants || [];
        const tm       = args.join(' ').trim() || '*𝐒𝐚𝐛 𝐤𝐚 𝐝𝐡𝐲𝐚𝐧 𝐝𝐞𝐧!*';
        const mentions = ps.map(p => p.id);
        let text = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙏𝙖𝙜𝙖𝙡𝙡 ⚡🔥] ¡! ❞*\n\n> *\`🗣️ :\`* ${tm}\n\n`;
        for (const p of ps) text += `₊❏❜ ⋮ @${p.id.split('@')[0]}\n`;
        text += `\n> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥*`;
        await socket.sendMessage(sender, { text, mentions }, { quoted: msg });
      } catch (e) { await reply(`❌ 𝐓𝐚𝐠𝐚𝐥𝐥 𝐟𝐚𝐢𝐥𝐞𝐝: ${e.message}`); }
  }
};
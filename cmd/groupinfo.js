/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: groupinfo
*/

module.exports = {
  name: 'groupinfo',
  aliases: [],
  execute: async (ctx) => {
    const { socket, sender, isGroup, groupMetadata, participants, reply, msg, arabianCtx, akira } = ctx;
      if (!isGroup) return reply('❌ *𝐘𝐞 𝐤𝐚𝐦 𝐬𝐢𝐫𝐟 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐢𝐧 𝐜𝐡𝐚𝐥𝐭𝐚 𝐡𝐚𝐢*');
      try {
        const gm = await socket.groupMetadata(sender);
        const total = gm.participants.length;
        const admins = gm.participants.filter(p => p.admin);
        const admCnt = admins.length;
        const created = gm.creation ? new Date(gm.creation * 1000).toLocaleDateString() : 'Unknown';
        const creator = gm.participants.find(p => p.id === gm.owner) || gm.participants[0];
        
        // Get group profile picture
        let dpUrl = 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41';
        try {
          const pp = await socket.profilePictureUrl(sender, 'image');
          dpUrl = pp;
        } catch (_) {}

        // Get group invite link without admin permission
        let inviteLink = '🔒 *𝐋𝐢𝐧𝐤 𝐧𝐚𝐡𝐢 𝐦𝐢𝐥𝐚*';
        try {
          const code = await socket.groupInviteCode(sender);
          inviteLink = `https://chat.whatsapp.com/${code}`;
        } catch (_) {}

        // Admin list with mentions
        let adminList = '';
        admins.forEach((admin, index) => {
          adminList += `┃ ${index + 1}. @${admin.id.split('@')[0]}\n`;
        });

        // Member list with mentions (first 20 only to avoid spam)
        let memberList = '';
        const membersToShow = gm.participants.slice(0, 20);
        membersToShow.forEach((member, index) => {
          memberList += `┃ ${index + 1}. @${member.id.split('@')[0]}\n`;
        });
        if (gm.participants.length > 20) {
          memberList += `┃ ... 𝐚𝐮𝐫 ${gm.participants.length - 20} 𝐚𝐮𝐫\n`;
        }

        const groupInfo = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙂𝙧𝙤𝙪𝙥 𝙄𝙣𝙛𝙤 ⚡🔥] ¡! ❞*\n\n` +
                         `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                         `┃ 📛 *𝙉𝘼𝙈𝙀 :* ${gm.subject}\n` +
                         `┃ 🆔 *𝙅𝙄𝘿 :* ${gm.id}\n` +
                         `┃ 👑 *𝘾𝙍𝙀𝘼𝙏𝙀𝘿 𝘽𝙔 :* @${creator.id.split('@')[0]}\n` +
                         `┃ 📅 *𝘾𝙍𝙀𝘼𝙏𝙀𝘿 :* ${created}\n` +
                         `┃ 👥 *𝙈𝙀𝙈𝘽𝙀𝙍𝙎 :* ${total}\n` +
                         `┃ 👑 *𝘼𝘿𝙈𝙄𝙉𝙎 :* ${admCnt}\n` +
                         `┃ 🔗 *𝙇𝙄𝙉𝙆 :* ${inviteLink}\n` +
                         `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                         `📝 *𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 :*\n┏━━━━━┓\n┃ ${(gm.desc || '𝐍𝐨 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧')}\n┗━━━━━┛\n\n` +
                         `👑 *𝘼𝘿𝙈𝙄𝙉 𝙇𝙄𝙎𝙏 :*\n┏━━━━━┓\n${adminList}┗━━━━━┛\n\n` +
                         `👥 *𝙈𝙀𝙈𝘽𝙀𝙍 𝙇𝙄𝙎𝙏 :*\n┏━━━━━┓\n${memberList}┗━━━━━┛\n\n` +
                         `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`;

        // Send with group image and mentions
        const mentions = gm.participants.map(p => p.id);
        
        await socket.sendMessage(sender, {
          image: { url: dpUrl },
          caption: groupInfo,
          mentions: mentions,
          contextInfo: arabianCtx()
        }, { quoted: msg });

      } catch (e) { 
        await reply(`❌ *𝐄𝐫𝐫𝐨𝐫:* ${e.message}`); 
      }
  }
};
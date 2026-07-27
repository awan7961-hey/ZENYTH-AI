/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: owner
*/

module.exports = {
  name: 'owner',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, quoted, text, type, akira } = ctx;
    const ownerNum = '+923315462969';
    const ownerName = 'お 𝒁𝑨𝑰𝑫𝙄  ࣪𖤐.ᐟ';
    
    await socket.sendMessage(sender, { react: { text: '🥷', key: msg.key } });

    await socket.sendMessage(sender, {
		image: { url: akira }, 
        contacts: {
            displayName: ownerName,
            contacts: [{
                vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${ownerName}\nORG:𝙕𝙚𝙣𝙮𝙩𝙝 𝐗 𝐎𝐰𝐧𝐞𝐫;\nTEL;type=CELL;type=VOICE;waid=${ownerNum.slice(1)}:${ownerNum}\nEND:VCARD`
            }]
        }
    });

    await socket.sendMessage(sender, {
        text: `*↳ ❝ [🎀 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄  𝗢𝘄𝗻𝗲𝗿 🎀] ¡! ❞*\n\n₊❏❜ ⋮👤 Name: ${ownerName}\n₊❏❜ ⋮ 📞 Number: ${ownerNum}\n\n> *𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄*`,
        contextInfo: {
            mentionedJid: [`${ownerNum.slice(1)}@s.whatsapp.net`]
        }
    }, {
        quoted: msg
    });

  }
};

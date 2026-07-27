/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: alive
*/

module.exports = {
  name: 'alive',
  aliases: [],
  execute: async (ctx) => {
    const {
      socket,
      msg,
      sender,
      quoted,
      text,
      arabianCtx,
      akira,
      sanitizedNumber,
      socketCreationTime,
      prefix
    } = ctx;

    try { await socket.sendMessage(sender, { react: { text: '🔥', key: msg.key } }); } catch (_) {}

    const startTime = socketCreationTime?.get(sanitizedNumber) || Date.now();
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    // Funny alive messages array
    const funnyMessages = [
      '😎 *𝐌𝐚𝐢𝐧 𝐡𝐮𝐧 𝐧𝐚, 𝐭𝐞𝐧𝐬𝐢𝐨𝐧 𝐦𝐚𝐭 𝐥𝐨!*',
      '🔥 *𝐙𝐢𝐧𝐝𝐚 𝐡𝐮𝐧, 𝐚𝐮𝐫 𝐤𝐢𝐬𝐬𝐢 𝐤𝐢 𝐫𝐚𝐭 𝐤𝐚𝐭 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧!*',
      '💀 *𝐌𝐚𝐢𝐧 𝐭𝐨 𝐦𝐚𝐫𝐚 𝐧𝐚𝐡𝐢, 𝐛𝐚𝐬 𝐝𝐞𝐤𝐡 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧!*',
      '🤖 *𝐑𝐨𝐛𝐨𝐭 𝐡𝐮𝐧, 𝐛𝐚𝐭𝐭𝐞𝐫𝐲 𝟏𝟎𝟎%!*',
      '⚡ *𝐁𝐢𝐣𝐥𝐢 𝐡𝐮𝐧, 𝐬𝐚𝐛 𝐤𝐨 𝐣𝐡𝐚𝐩𝐩𝐚 𝐝𝐞𝐭𝐚!*',
      '👻 *𝐁𝐡𝐨𝐨𝐭 𝐡𝐮𝐧, 𝐝𝐞𝐤𝐡 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧 𝐬𝐚𝐛𝐤𝐨!*',
      '🎮 *𝐆𝐚𝐦𝐞 𝐬𝐭𝐚𝐫𝐭 𝐡𝐨 𝐜𝐡𝐮𝐤𝐢 𝐡𝐚𝐢, 𝐦𝐚𝐢𝐧 𝐡𝐮𝐧!*',
      '💪 *𝐏𝐚𝐡𝐥𝐞 𝐣𝐢𝐬𝐬𝐢 𝐤𝐚 𝐛𝐡𝐚𝐢, 𝐚𝐛 𝐙𝐞𝐧𝐲𝐭𝐡!*',
      '🚀 *𝐒𝐩𝐚𝐜𝐞 𝐬𝐞 𝐚𝐲𝐚 𝐡𝐮𝐧, 𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐨𝐧!*',
      '🎯 *𝐍𝐢𝐬𝐡𝐚𝐧𝐚 𝐩𝐚𝐫 𝐡𝐮𝐧, 𝐦𝐢𝐬𝐬 𝐧𝐚𝐡𝐢 𝐡𝐨𝐧𝐠𝐚!*',
      '😈 *𝐃𝐞𝐯𝐢𝐥 𝐡𝐮𝐧, 𝐝𝐞𝐤𝐡 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧 𝐤𝐚𝐮𝐧 𝐤𝐲𝐚 𝐤𝐚𝐫𝐭𝐚!*',
      '🦁 *𝐒𝐡𝐞𝐫 𝐡𝐮𝐧, 𝐝𝐚𝐫𝐧𝐞 𝐤𝐢 𝐳𝐚𝐫𝐮𝐫𝐚𝐭 𝐧𝐚𝐡𝐢!*',
      '🐉 *𝐃𝐫𝐚𝐠𝐨𝐧 𝐡𝐮𝐧, 𝐚𝐚𝐠 𝐮𝐠𝐚𝐥 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧!*',
      '☕ *𝐂𝐡𝐚𝐢 𝐩𝐢 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧, 𝐚𝐚𝐨 𝐦𝐚𝐳𝐞 𝐤𝐚𝐫𝐨!*',
      '🎵 *𝐆𝐚𝐧𝐚 𝐬𝐮𝐧 𝐫𝐡𝐚 𝐡𝐮𝐧, 𝐝𝐢𝐬𝐭𝐮𝐫𝐛 𝐦𝐚𝐭 𝐤𝐚𝐫𝐨!*',
      '🍕 *𝐏𝐢𝐳𝐳𝐚 𝐤𝐡𝐚 𝐫𝐡𝐚 𝐡𝐮𝐧, 𝐚𝐩𝐧𝐚 𝐤𝐡𝐚𝐨!*',
      '😴 *𝐍𝐞𝐧𝐝 𝐚 𝐫𝐡𝐢 𝐡𝐚𝐢, 𝐣𝐚𝐠𝐚𝐨 𝐦𝐚𝐭!*'
    ];

    const randomFunny = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    // Funny status lines
    const statusLines = [
      '💪 *𝙼𝚄𝚂𝙲𝙻𝙴𝚂 𝙰𝚁𝙴 𝚁𝙴𝙰𝙳𝚈!*',
      '🔥 *𝙲𝙾𝙵𝙵𝙴𝙴 𝙿𝙸 𝚁𝙷𝙰 𝙷𝚄𝙽!*',
      '⚡ *𝙴𝙽𝙴𝚁𝙶𝚈 𝟷𝟶𝟶%!*',
      '🎮 *𝙶𝙰𝙼𝙴 𝙾𝙽 𝙷𝙰𝙸!*',
      '😎 *𝙲𝙾𝙾𝙻 𝙼𝙾𝙳𝙴 𝙾𝙽!*',
      '🚀 *𝚁𝙴𝙰𝙳𝚈 𝚃𝙾 𝙵𝙻𝚈!*',
      '🎯 *𝚃𝙰𝚁𝙶𝙴𝚃 𝙻𝙾𝙲𝙺𝙴𝙳!*',
      '🦁 *𝚁𝙾𝙰𝚁𝙸𝙽𝙶 𝙼𝙾𝙳𝙴!*'
    ];

    const randomStatus = statusLines[Math.floor(Math.random() * statusLines.length)];

    // Funny about messages
    const aboutMessages = [
      '👀 *𝐌𝐚𝐢𝐧 𝐭𝐨 𝐡𝐮𝐧 𝐡𝐢 𝐞𝐤 𝐠𝐚𝐣𝐚𝐛!*',
      '💀 *𝐒𝐚𝐛 𝐤𝐢 𝐫𝐚𝐭 𝐤𝐚𝐭𝐧𝐞 𝐰𝐚𝐥𝐚!*',
      '🔥 *𝐅𝐢𝐫𝐞 𝐰𝐢𝐭𝐡 𝐬𝐭𝐲𝐥𝐞!*',
      '🌟 *𝐓𝐡𝐞 𝐨𝐧𝐞 𝐚𝐧𝐝 𝐨𝐧𝐥𝐲!*',
      '💪 *𝐃𝐨𝐧\'𝐭 𝐦𝐞𝐬𝐬 𝐰𝐢𝐭𝐡 𝐦𝐞!*'
    ];

    const randomAbout = aboutMessages[Math.floor(Math.random() * aboutMessages.length)];

    const title = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙡𝙞𝙫𝙚 ⚡🔥] ¡! ❞*`;
    const content = `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                    `┃ 💀 ${randomFunny}\n` +
                    `┃ 📢 ${randomStatus}\n` +
                    `┃ 🤖 ${randomAbout}\n` +
                    `┃ ⏱️ *𝚄𝙿𝚃𝙸𝙼𝙴 :* ${hours}h ${minutes}m ${seconds}s\n` +
                    `┃ 🔋 *𝙱𝙰𝚃𝚃𝙴𝚁𝚈 :* ${Math.floor(Math.random() * 30) + 70}% 🔥\n` +
                    `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                    `📝 *𝘼𝘽𝙊𝙐𝙏 𝙈𝙀 :*\n` +
                    `💬 *"${randomAbout}"*\n\n` +
                    `💻 *𝙳𝙴𝙿𝙻𝙾𝚈 :* https://zenyth.gotukolaya.site\n\n`;

    const footer = `> *${randomFunny}*\n\n> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`;

    const buttons = [
      { buttonId: `${prefix}menu`, buttonText: { displayText: '📜 𝐌𝐞𝐧𝐮' }, type: 1 },
      { buttonId: `${prefix}ping`, buttonText: { displayText: '🏓 𝐏𝐢𝐧𝐠' }, type: 1 },
      { buttonId: `${prefix}active`, buttonText: { displayText: '👻 𝐀𝐜𝐭𝐢𝐯𝐞' }, type: 1 }
    ];

    await socket.sendMessage(sender, {
        image: { url: akira },
        caption: `${title}\n\n${content}\n${footer}`,
        footer: footer,
        buttons,
        headerType: 4,
        contextInfo: arabianCtx()
    }, { quoted: msg });

  }
};
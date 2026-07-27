/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: active
*/

module.exports = {
  name: 'active',
  aliases: [],
  execute: async (ctx) => {
    const { isOwner, activeSockets, reply } = ctx;
      if (!isOwner && !isDevUser) return reply('❌ *𝐘𝐞 𝐤𝐚𝐦 𝐬𝐢𝐫𝐟 𝐨𝐰𝐧𝐞𝐫/𝐝𝐞𝐯 𝐤𝐚 𝐡𝐚𝐢*');
      
      const sockets = typeof activeSockets !== 'undefined' ? activeSockets : new Map();
      const nums = Array.from(sockets.keys());
      
      // Funny alive replies array
      const funnyAliveMessages = [
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
        '🛸 *𝐄𝐓 𝐡𝐮𝐧, 𝐩𝐡𝐨𝐧𝐞 𝐡𝐨𝐦𝐞!*',
        '☕ *𝐂𝐡𝐚𝐢 𝐩𝐢 𝐫𝐚𝐡𝐚 𝐡𝐮𝐧, 𝐚𝐚𝐨 𝐦𝐚𝐳𝐞 𝐤𝐚𝐫𝐨!*'
      ];

      // Random funny alive message
      const randomAlive = funnyAliveMessages[Math.floor(Math.random() * funnyAliveMessages.length)];

      // Funny replies about users
      const userFunnyReplies = [
        '😎 *𝐀𝐣𝐣 𝐤𝐢𝐭𝐧𝐞 𝐥𝐨𝐠 𝐣𝐢𝐧𝐝𝐚 𝐡𝐚𝐢𝐧?*',
        '🤖 *𝐌𝐞𝐫𝐢 𝐟𝐚𝐮𝐣 𝐤𝐢𝐭𝐧𝐢 𝐛𝐚𝐝𝐢 𝐡𝐚𝐢?*',
        '👀 *𝐂𝐡𝐨𝐫𝐢 𝐜𝐡𝐡𝐢𝐩𝐞 𝐤𝐢𝐭𝐧𝐞 𝐡𝐚𝐢𝐧?*',
        '🔥 *𝐀𝐥𝐢𝐯𝐞 𝐚𝐮𝐫 𝐤𝐢𝐜𝐤𝐢𝐧𝐠!*',
        '💀 *𝐙𝐢𝐧𝐝𝐚 𝐡𝐚𝐢 𝐭𝐨 𝐛𝐡𝐢 𝐤𝐢𝐭𝐧𝐞?*',
        '🎮 *𝐆𝐚𝐦𝐞𝐫𝐬 𝐨𝐧𝐥𝐢𝐧𝐞 𝐜𝐨𝐮𝐧𝐭!*',
        '⚡ *𝐂𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐛𝐫𝐞𝐚𝐭𝐡𝐢𝐧𝐠:*',
        '🌟 *𝐀𝐜𝐭𝐢𝐯𝐞 𝐬𝐨𝐮𝐥𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐦𝐚𝐭𝐫𝐢𝐱:*'
      ];

      const randomFunny = userFunnyReplies[Math.floor(Math.random() * userFunnyReplies.length)];

      let responseText = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙘𝙩𝙞𝙫𝙚 𝙎𝙚𝙨𝙨𝙞𝙤𝙣𝙨 ⚡🔥] ¡! ❞*\n\n` +
                        `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                        `┃ 💀 ${randomAlive}\n` +
                        `┃ 📡 *𝙲𝙾𝚄𝙽𝚃 :* ${nums.length}\n` +
                        `┃ 👻 *𝚂𝚃𝙰𝚃𝚄𝚂 :* ${nums.length > 0 ? '𝙰𝙻𝙸𝚅𝙴 𝙰𝙽𝙳 𝙺𝙸𝙲𝙺𝙸𝙽𝙶 🔥' : '𝚂𝙰𝙱 𝚂𝙾 𝚁𝙷𝙴 𝙷𝙰𝙸𝙽 😴'}\n` +
                        `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n`;

      if (nums.length > 0) {
        responseText += `👥 *𝙰𝙲𝚃𝙸𝚅𝙴 𝚄𝚂𝙴𝚁𝚂 :*\n┏━━━━━┓\n`;
        nums.forEach((n, i) => {
          const emojis = ['🔥', '💀', '⚡', '💪', '🎯', '👑', '🌟', '🚀', '💎', '🎮', '🦁', '🐉', '😈', '👻', '🤖'];
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          responseText += `┃ ${randomEmoji} ${i + 1}. +${n}\n`;
        });
        responseText += `┗━━━━━┛\n\n`;
        
        // Funny extra line when users are active
        const activeExtra = [
          '🔥 *𝐒𝐚𝐛 𝐣𝐢𝐧𝐝𝐚 𝐡𝐚𝐢𝐧, 𝐦𝐳𝐚 𝐚 𝐫𝐡𝐚 𝐡𝐚𝐢!*',
          '💪 *𝐊𝐚𝐦𝐚𝐥 𝐤𝐚 𝐦𝐚𝐡𝐨𝐥 𝐡𝐚𝐢!*',
          '🎮 *𝐆𝐚𝐦𝐞 𝐨𝐧 𝐡𝐚𝐢 𝐝𝐨𝐬𝐭𝐨!*',
          '⚡ *𝐁𝐢𝐣𝐥𝐢 𝐬𝐞 𝐛𝐡𝐢 𝐭𝐞𝐳 𝐡𝐚𝐢𝐧 𝐲𝐞 𝐥𝐨𝐠!*',
          '😎 *𝐂𝐨𝐨𝐥 𝐥𝐨𝐠 𝐨𝐧𝐥𝐢𝐧𝐞!*'
        ];
        responseText += `${activeExtra[Math.floor(Math.random() * activeExtra.length)]}\n\n`;
      } else {
        responseText += `😴 *𝙺𝙾𝙸 𝙰𝙲𝚃𝙸𝚅𝙴 𝙽𝙰𝙷𝙸 𝙷𝙰𝙸*\n┏━━━━━┓\n` +
                       `┃ 💤 𝙼𝚄𝙹𝙷𝙴 𝙰𝙺𝙴𝙻𝙰 𝙲𝙷𝙾𝙳 𝙳𝙾\n` +
                       `┃ 🥱 𝙻𝙾𝙶 𝙺𝙴𝙷𝙰 𝙶𝙰𝚈𝙴 𝚂𝙰𝙱?\n` +
                       `┃ 😴 𝙼𝚄𝙹𝙷𝙴 𝙽𝙴𝙽𝙳 𝙰 𝚁𝙷𝙸 𝙷𝙰𝙸\n` +
                       `┃ 👻 𝙼𝙰𝙸𝙽 𝙱𝙷𝙸 𝙶𝙷𝚄𝙼 𝙶𝙰𝚈𝙰...\n` +
                       `┗━━━━━┛\n\n`;
      }

      // Random ending messages
      const endings = [
        '💀 *𝙕𝙚𝙣𝙮𝙩𝙝 𝙞𝙨 𝙬𝙖𝙩𝙘𝙝𝙞𝙣𝙜 𝙮𝙤𝙪...*',
        '🔥 *𝘽𝙪𝙧𝙣 𝙞𝙩 𝙡𝙞𝙠𝙚 𝙙𝙧𝙖𝙜𝙤𝙣!*',
        '⚡ *𝙎𝙩𝙖𝙮 𝙘𝙝𝙖𝙧𝙜𝙚𝙙, 𝙨𝙩𝙖𝙮 𝙖𝙡𝙞𝙫𝙚!*',
        '👻 *𝘽𝙤𝙤! 𝙄 𝙠𝙣𝙤𝙬 𝙬𝙝𝙚𝙧𝙚 𝙮𝙤𝙪 𝙡𝙞𝙫𝙚...*',
        '🎮 *𝙂𝙖𝙢𝙚 𝙤𝙫𝙚𝙧? 𝙉𝙤𝙥𝙚, 𝙟𝙪𝙨𝙩 𝙨𝙩𝙖𝙧𝙩𝙚𝙙!*',
        '💪 *𝙈𝙪𝙨𝙘𝙡𝙚𝙨 𝙖𝙧𝙚 𝙧𝙚𝙖𝙙𝙮, 𝙛𝙞𝙜𝙝𝙩 𝙤𝙣!*',
        '🦁 *𝙍𝙤𝙖𝙧! 𝙕𝙚𝙣𝙮𝙩𝙝 𝙞𝙨 𝙝𝙚𝙧𝙚!*',
        '🐉 *𝘿𝙧𝙖𝙜𝙤𝙣 𝙗𝙧𝙚𝙖𝙩𝙝 𝙖𝙘𝙩𝙞𝙫𝙖𝙩𝙚𝙙!*',
        '😈 *𝘿𝙚𝙫𝙞𝙡 𝙞𝙨 𝙗𝙖𝙘𝙠!*'
      ];
      const randomEnding = endings[Math.floor(Math.random() * endings.length)];

      responseText += `> *${randomEnding}*\n\n` +
                      `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`;
                           
      await reply(responseText);
  }
};
/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: system
*/

module.exports = {
  name: 'system',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, quoted, text, getUptime, arabianCtx, akira, moment, os } = ctx;
      try { await socket.sendMessage(sender, { react: { text: '🛸', key: msg.key } }); } catch (_) {}

      const uptime = getUptime();
      const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
      const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
      const nodeVersion = process.version;
      const platform = os.platform();
      
      const slDate = moment().tz('Asia/Colombo').format('YYYY-MM-DD');
      const slTimeNow = moment().tz('Asia/Colombo').format('HH:mm:ss');

      const sysInfo = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙎𝙮𝙨𝙩𝙚𝙢 ⚡🔥] ¡! ❞*\n\n` +
		              `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                      `┃ *⏱️ 𝚄𝙿𝚃𝙸𝙼𝙴:* ${uptime}\n` +
                      `┃ *📟 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴:* ${ramUsage} MB / ${totalRam} GB\n` +
                      `┃ *📦 𝙽𝙾𝙳𝙴 𝚅𝙴𝚁:* ${nodeVersion}\n` +
                      `┃ *💻 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼:* ${platform}\n` +
                      `┃ *📅 𝙳𝙰𝚃𝙴:* ${slDate}\n` +
                      `┃ *⌚ 𝚃𝙸𝙼𝙴:* ${slTimeNow}\n` +
		              `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                      `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝑰 ⚡🔥*`;

      await socket.sendMessage(sender, {
        image: { url: akira },
        caption: sysInfo,
        contextInfo: arabianCtx()
      }, { quoted: msg });

  }
};
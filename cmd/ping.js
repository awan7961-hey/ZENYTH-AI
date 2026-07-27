/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: ping
*/

module.exports = {
  name: 'ping',
  aliases: [],
  execute: async (ctx) => {
    const { socket, msg, sender, quoted, text, getUptime, arabianCtx, akira } = ctx;
      try { await socket.sendMessage(sender, { react: { text: '⚡', key: msg.key } }); } catch (_) {}     
      const start = Date.now();
      const ms    = Date.now() - start;
      try { if (pong?.key) await socket.sendMessage(sender, { delete: pong.key }); } catch (_) {}

      // All 5 styles with different layouts
      const styles = [
        {
          // HACKING - Dark/Edgy Layout
          caption: `*↳ ❝ [💻🔥 𝙕𝙚𝙣𝙮𝙩𝙝 𝙋𝙄𝙉𝙂 🔥💻] ¡! ❞*\n\n` +
                   `╔══════════════════════════╗\n` +
                   `║  ☠️  𝙎𝙔𝙎𝙏𝙀𝙈 : 𝙊𝙉𝙇𝙄𝙉𝙀\n` +
                   `║  🏓  𝙋𝙊𝙉𝙂 : _𝙥𝙤𝙣𝙜!_\n` +
                   `║  ⚡  𝙎𝙋𝙀𝙀𝘿 : ${ms}𝙢𝙨\n` +
                   `║  ⏱️  𝙐𝙋𝙏𝙄𝙈𝙀 : ${getUptime()}\n` +
                   `║  🔐  𝙎𝙀𝙍𝙑𝙀𝙍 : 𝙎𝙀𝘾𝙐𝙍𝙀\n` +
                   `╚══════════════════════════╝\n\n` +
                   `> *💻🔥 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 🔥💻*`,
          react: '💻'
        },
        {
          // LOVE - Romantic/Soft Layout
          caption: `*↳ ❝ [❤️💕 𝙕𝙚𝙣𝙮𝙩𝙝 𝙋𝙄𝙉𝙂 💕❤️] ¡! ❞*\n\n` +
                   `╭────────────────────╮\n` +
                   `│  💖 𝙃𝙀𝘼𝙍𝙏 𝘽𝙀𝘼𝙏𝙄𝙉𝙂\n` +
                   `│  🏓 𝙋𝙊𝙉𝙂 : _𝙥𝙤𝙣𝙜!_\n` +
                   `│  ⚡ 𝙎𝙋𝙀𝙀𝘿 : ${ms}𝙢𝙨\n` +
                   `│  ⏱️ 𝙐𝙋𝙏𝙄𝙈𝙀 : ${getUptime()}\n` +
                   `│  💞 𝙎𝙏𝘼𝙏𝙐𝙎 : 𝙄𝙉 𝙇𝙊𝙑𝙀\n` +
                   `╰────────────────────╯\n\n` +
                   `> *❤️💕 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 💕❤️*`,
          react: '❤️'
        },
        {
          // TECH - Clean/Modern Layout
          caption: `*↳ ❝ [⚡🤖 𝙕𝙚𝙣𝙮𝙩𝙝 𝙋𝙄𝙉𝙂 🤖⚡] ¡! ❞*\n\n` +
                   `┌──────────────────┐\n` +
                   `│ 🖥️ 𝙎𝙔𝙎𝙏𝙀𝙈 : 𝙊𝙉\n` +
                   `│ 🏓 𝙋𝙊𝙉𝙂 : _𝙥𝙤𝙣𝙜!_\n` +
                   `│ 🚀 𝙇𝘼𝙏𝙀𝙉𝘾𝙔 : ${ms}𝙢𝙨\n` +
                   `│ ⏱️ 𝙐𝙋𝙏𝙄𝙈𝙀 : ${getUptime()}\n` +
                   `│ 🔋 𝘽𝘼𝙏𝙏𝙀𝙍𝙔 : 100%\n` +
                   `└──────────────────┘\n\n` +
                   `> *⚡🤖 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 🤖⚡*`,
          react: '🤖'
        },
        {
          // ASTHENIA - Dreamy/Soft Layout
          caption: `*↳ ❝ [🌙🌌 𝙕𝙚𝙣𝙮𝙩𝙝 𝙋𝙄𝙉𝙂 🌌🌙] ¡! ❞*\n\n` +
                   `◇───────────────◇\n` +
                   `  🌙 𝙈𝙊𝙊𝙉 : 𝙁𝙐𝙇𝙇\n` +
                   `  🏓 𝙋𝙊𝙉𝙂 : _𝙥𝙤𝙣𝙜!_\n` +
                   `  ⚡ 𝙎𝙋𝙀𝙀𝘿 : ${ms}𝙢𝙨\n` +
                   `  ⏱️ 𝙐𝙋𝙏𝙄𝙈𝙀 : ${getUptime()}\n` +
                   `  🌌 𝙑𝙄𝘽𝙀 : 𝘼𝙎𝙏𝙃𝙀𝙉𝙄𝘼\n` +
                   `◇───────────────◇\n\n` +
                   `> *🌙🌌 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 🌌🌙*`,
          react: '🌙'
        },
        {
          // GAMING - Fun/Layout
          caption: `*↳ ❝ [🎮⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙋𝙄𝙉𝙂 ⚡🎮] ¡! ❞*\n\n` +
                   `▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n` +
                   ` ▎ 🎯 𝙂𝘼𝙈𝙀 : 𝙋𝙇𝘼𝙔𝙄𝙉𝙂\n` +
                   ` ▎ 🏓 𝙋𝙊𝙉𝙂 : _𝙥𝙤𝙣𝙜!_\n` +
                   ` ▎ ⚡ 𝙋𝙄𝙉𝙂 : ${ms}𝙢𝙨\n` +
                   ` ▎ ⏱️ 𝙐𝙋𝙏𝙄𝙈𝙀 : ${getUptime()}\n` +
                   ` ▎ 🏆 𝙇𝙀𝙑𝙀𝙇 : 𝙇𝙀𝙂𝙀𝙉𝘿\n` +
                   `▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n\n` +
                   `> *🎮⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🎮*`,
          react: '🎮'
        }
      ];

      // Randomly pick one style
      const randomStyle = styles[Math.floor(Math.random() * styles.length)];

      // Send reaction with style's emoji
      try { await socket.sendMessage(sender, { react: { text: randomStyle.react, key: msg.key } }); } catch (_) {}

      await socket.sendMessage(sender, {
        image: { url: akira },
        caption: randomStyle.caption,
        contextInfo: arabianCtx()
      }, { quoted: msg });

  }
};
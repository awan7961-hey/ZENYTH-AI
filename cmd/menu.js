/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: menu  (aliases: list, panel)

  Updated: commands grouped into categories, rendered as a WhatsApp
  list message (native "button" that expands into sections) instead
  of one long caption. Falls back to the old text menu if the list
  message type fails to send (some clients / WA versions reject it).
*/

const CATEGORIES = [
  {
    title: '🔥 𝕄𝕒𝕚𝕟 ℂ𝕞𝕕𝕫 🔥',
    rows: [
      { title: 'menu',  id: 'menu',  description: '𝙶𝚎𝚝 𝙲𝚖𝚍 𝙻𝚒𝚜𝚝 📋' },
      { title: 'system', id: 'system', description: '𝙶𝚎𝚝 𝚂𝚢𝚜𝚝𝚎𝚖 𝙸𝚗𝚏𝚘 ⚡' },
      { title: 'ping',  id: 'ping',  description: '𝙶𝚎𝚝 𝙱𝚘𝚝 𝚂𝚙𝚎𝚎𝚍 🚀' },
      { title: 'alive', id: 'alive', description: '𝙲𝚑𝚎𝚌𝚔 𝙱𝚘𝚝 𝙰𝚕𝚒𝚟𝚎 💚' },
      { title: 'owner', id: 'owner', description: '𝙶𝚎𝚝 𝙾𝚠𝚗𝚎𝚛 𝙸𝚗𝚏𝚘 👑' },
    ],
  },
  {
    title: '🎵 𝔻𝕨𝕟 ℂ𝕞𝕕𝕫 🎵',
    rows: [
      { title: 'song',  id: 'song',  description: '𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚂𝚘𝚗𝚐 🎶' },
      { title: 'video', id: 'video', description: '𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚅𝚒𝚍𝚎𝚘 🎬' },
      { title: 'fb',    id: 'fb',    description: '𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝙵𝙱 𝚅𝚒𝚍𝚎𝚘 📱' },
      { title: 'tt',    id: 'tt',    description: '𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚃𝚃 𝚅𝚒𝚍𝚎𝚘 🎵' },
    ],
  },
  {
    title: '🔧 𝕋𝕠𝕠𝕝 ℂ𝕞𝕕𝕫 🔧',
    rows: [
      { title: 'vv',      id: 'vv',      description: '𝙳𝚎𝚌𝚛𝚢𝚙𝚝 𝙾𝚗𝚎 𝚃𝚒𝚖𝚎 𝙵𝚒𝚕𝚎 🔓' },
      { title: 'sticker', id: 'sticker', description: '𝙲𝚘𝚗𝚟𝚎𝚛𝚝 𝚝𝚘 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 🎨' },
      { title: 'fancy',   id: 'fancy',   description: '𝙲𝚘𝚗𝚟𝚎𝚛𝚝 𝚝𝚘 𝙵𝚊𝚗𝚌𝚢 𝚃𝚎𝚡𝚝 ✨' },
      { title: 'getdp',   id: 'getdp',   description: '𝙶𝚎𝚝 𝚆𝙷 𝙿𝚛𝚘𝚏𝚒𝚕𝚎 𝙿𝚑𝚘𝚝𝚘 📸' },
      { title: 'npm',     id: 'npm',     description: '𝚂𝚎𝚊𝚛𝚌𝚑 𝙽𝙿𝙼 𝙿𝚔𝚐𝚜 📦' },
      { title: 'img',     id: 'img',     description: '𝚂𝚎𝚊𝚛𝚌𝚑 𝙸𝚖𝚊𝚐𝚎𝚜 🖼️' },
      { title: 'mode',    id: 'mode',    description: '𝙲𝚑𝚊𝚗𝚐𝚎 𝙱𝚘𝚝 𝙼𝚘𝚍𝚎 ⚙️' },
    ],
  },
  {
    title: '👥 𝔾𝕣𝕠𝕦𝕡 ℂ𝕞𝕕𝕫 👥',
    rows: [
      { title: 'tagall',      id: 'tagall',      description: '𝚃𝚊𝚐𝚊𝚕𝚕 𝙼𝚎𝚖𝚋𝚎𝚛𝚜 👥' },
      { title: 'hidetag',     id: 'hidetag',     description: '𝚃𝚊𝚐𝚊𝚕𝚕 𝙼𝚎𝚖𝚋𝚎𝚛𝚜 𝚂𝚒𝚕𝚎𝚗𝚝𝚕𝚢 🤫' },
      { title: 'add',         id: 'add',         description: '𝙰𝚍𝚍 𝙼𝚎𝚖𝚋𝚎𝚛 ➕' },
      { title: 'kick',        id: 'kick',        description: '𝙺𝚒𝚌𝚔 𝙼𝚎𝚖𝚋𝚎𝚛 🦵' },
      { title: 'tagadmin',    id: 'tagadmin',    description: '𝚃𝚊𝚐 𝙰𝚕𝚕 𝙰𝚍𝚖𝚒𝚗𝚜 👑' },
      { title: 'promote',     id: 'promote',     description: '𝙼𝚊𝚔𝚎 𝙶𝚛𝚘𝚞𝚙 𝙰𝚍𝚖𝚒𝚗 ⬆️' },
      { title: 'demote',      id: 'demote',      description: '𝙳𝚒𝚜𝚖𝚒𝚜𝚜 𝙶𝚛𝚘𝚞𝚙 𝙰𝚍𝚖𝚒𝚗 ⬇️' },
      { title: 'lockgroup',   id: 'lockgroup',   description: '𝙻𝚘𝚌𝚔 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 🔒' },
      { title: 'unlockgroup', id: 'unlockgroup', description: '𝚄𝚗𝚕𝚘𝚌𝚔 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 🔓' },
      { title: 'mute',        id: 'mute',        description: '𝙼𝚞𝚝𝚎 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 🔇' },
      { title: 'unmute',      id: 'unmute',      description: '𝚄𝚗𝚖𝚞𝚝𝚎 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 🔊' },
      { title: 'setname',     id: 'setname',     description: '𝚂𝚎𝚝 𝙶𝚛𝚘𝚞𝚙 𝙽𝚊𝚖𝚎 ✏️' },
      { title: 'setdesc',     id: 'setdesc',     description: '𝚂𝚎𝚝 𝙶𝚛𝚘𝚞𝚙 𝙳𝚎𝚜𝚌 📝' },
      { title: 'seticon',     id: 'seticon',     description: '𝚂𝚎𝚝 𝙶𝚛𝚘𝚞𝚙 𝙸𝚌𝚘𝚗 🖼️' },
      { title: 'linkgroup',   id: 'linkgroup',   description: '𝙶𝚎𝚝 𝙶𝚛𝚘𝚞𝚙 𝙻𝚒𝚗𝚔 🔗' },
      { title: 'revokelink',  id: 'revokelink',  description: '𝚁𝚎𝚜𝚎𝚝 𝙶𝚛𝚘𝚞𝚙 𝙻𝚒𝚗𝚔 🔄' },
      { title: 'leave',       id: 'leave',       description: '𝙻𝚎𝚊𝚟𝚎 𝚃𝚑𝚎 𝙶𝚛𝚘𝚞𝚙 🚶' },
    ],
  },
  {
    title: '🤖 𝔸𝕀 ℂ𝕞𝕕𝕫 🤖',
    rows: [
      { title: 'zenyth', id: 'zenyth', description: '𝚉𝚎𝚗𝚢𝚝𝚑 𝙰𝙸 𝙱𝚘𝚢𝚏𝚛𝚒𝚎𝚗𝚍 💪✨' },
    ],
  },
  {
    title: '🎮 𝔽𝕦𝕟 ℂ𝕞𝕕𝕫 🎮',
    rows: [
      { title: 'lvcal',  id: 'lvcal',  description: '𝙻𝚘𝚟𝚎 𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛 💕❤️' },
      { title: 'hentai', id: 'hentai', description: '𝙶𝚎𝚝 𝙷𝚎𝚗𝚝𝚊𝚒 𝚅𝚒𝚍𝚎𝚘 (𝟷𝟾+) 🔞💪' },
      { title: 'hack',   id: 'hack',   description: '𝚂𝚎𝚗𝚍 𝙷𝚊𝚌𝚔𝚒𝚗𝚐 𝙼𝚜𝚐 💻🔥' },
    ],
  },
];

// Prefix used to invoke a command when a list row is tapped.
// Change this if your bot's real prefix differs.
const PREFIX = '.';

function buildSections() {
  return CATEGORIES.map((cat) => ({
    title: cat.title,
    rows: cat.rows.map((r) => ({
      title: r.title,
      id: `${PREFIX}${r.id}`,
      description: r.description,
    })),
  }));
}

function buildFallbackText(pushname, slDate, slTimeNow) {
  let body = `*↳ ❝ [🔥✨ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙈𝙚𝙣𝙪 ✨🔥] ¡! ❞*

┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓
┃👤 *𝚄𝚂𝙴𝚁* : ${pushname}
┃📦 *𝚅𝙴𝚁𝚂𝙸𝙾𝙽* : V2.0 🔥⚡
┃📅 *𝙳𝙰𝚃𝙴* : ${slDate}
┃⌚ *𝚃𝙸𝙼𝙴* : ${slTimeNow}
┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛
`;

  for (const cat of CATEGORIES) {
    body += `\n╭─⊹₊⟡⋆『 \`${cat.title}\` 』𖤐\n`;
    for (const r of cat.rows) {
      body += `│₊❏❜ ⋮ ${PREFIX}${r.id} ➜ ${r.description}\n`;
    }
    body += `╰──────────────────<𝟑 \n`;
  }

  body += `\n> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝘾𝙝𝙖𝙢𝙤𝙙 ⚡🔥*`;
  return body;
}

module.exports = {
  name: 'menu',
  aliases: ['list', 'panel'],
  execute: async (ctx) => {
    const { socket, msg, sender, arabianCtx, akira, moment } = ctx;

    try {
      await socket.sendMessage(sender, { react: { text: '🔥', key: msg.key } });
    } catch (_) {}

    const pushname = msg.pushName || 'User';
    const slDate = moment().tz('Asia/Colombo').format('YYYY-MM-DD');
    const slTimeNow = moment().tz('Asia/Colombo').format('HH:mm:ss');

    // 1) Header image with a short caption.
    try {
      await socket.sendMessage(
        sender,
        {
          image: { url: akira },
          caption: `*↳ ❝ [🔥✨ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙈𝙚𝙣𝙪 ✨🔥] ¡! ❞*\n\n👤 *𝚄𝚂𝙴𝚁* : ${pushname}\n📅 *𝙳𝙰𝚃𝙴* : ${slDate}  ⌚ *𝚃𝙸𝙼𝙴* : ${slTimeNow}\n\n_Tap the button below to browse commands by category._ 🔥⚡`,
          contextInfo: arabianCtx ? arabianCtx() : undefined,
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error('[menu] failed to send header image:', err);
    }

    // 2) Categorized command list as an interactive "native flow" button
    //    (single_select) — the current WhatsApp-supported replacement for
    //    the old list message. The old `sections`/`buttonText` list format
    //    was deprecated by WhatsApp itself and is no longer rendered by
    //    regular (non business-API) WhatsApp clients — this happens
    //    regardless of where the bot is hosted (Heroku or otherwise).
    //    This uses the same interactiveMessage/nativeFlowMessage pattern
    //    already working in cmd/emoji.js, which pair.js's incoming-message
    //    parser already knows how to read.
    try {
      const buttonMessage = {
        interactiveMessage: {
          body: { text: '*𝚂𝚎𝚕𝚎𝚌𝚝 𝚊 𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚢 𝚝𝚘 𝚅𝚒𝚎𝚠 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜* 🔥⚡' },
          footer: { text: '🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘼𝙚𝙨𝙩𝙝𝙚𝙩𝙞𝙘 𝙆𝙞𝙣𝙜 𝘽𝙮 𝘾𝙝𝙖𝙢𝙤𝙙 ⚡🔥' },
          header: { title: '🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝘽𝙤𝙮 𝙈𝙚𝙣𝙪 ⚡🔥', hasMediaAttachment: false },
          nativeFlowMessage: {
            buttons: [
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '𝙾𝚙𝚎𝚗 𝙼𝚎𝚗𝚞 🔥🎯',
                  sections: buildSections(),
                }),
              },
            ],
            messageVersion: 1,
          },
        },
      };

      await socket.sendMessage(
        sender,
        { viewOnceMessage: { message: buttonMessage } },
        { quoted: msg }
      );
    } catch (err) {
      // Fail-safe: if the interactive message is ever rejected outright,
      // fall back to the classic single-message text menu so users are
      // never left without a response.
      console.error('[menu] interactive menu failed, falling back to text:', err);
      try {
        await socket.sendMessage(
          sender,
          { text: buildFallbackText(pushname, slDate, slTimeNow) },
          { quoted: msg }
        );
      } catch (err2) {
        console.error('[menu] fallback text menu also failed:', err2);
      }
    }
  },
};
/*
  Auto-extracted from pair.js switch-case during cmd/ refactor.
  Exposes: wainfo  (aliases: whatsappinfo, wa)
*/

module.exports = {
  name: 'wainfo',
  aliases: ["whatsappinfo", "wa"],
  execute: async (ctx) => {
    const { socket, msg, sender, args, command, quoted, text, type, reply, arabianCtx, jidNormalizedUser, isGroup, groupMetadata, participants } = ctx;
    try {
        const qCtx = msg.message?.extendedTextMessage?.contextInfo;
        const realSender = msg.key.participant || msg.key.remoteJid;

        let target;
        let targetName = '';

        // Check if in group and someone is mentioned or replied
        if (qCtx?.mentionedJid?.[0]) {
            target = qCtx.mentionedJid[0];
            // Get name from group metadata if available
            if (isGroup) {
                const gm = await socket.groupMetadata(sender);
                const participant = gm.participants.find(p => p.id === target);
                targetName = participant?.notify || participant?.id?.split('@')[0] || 'User';
            }
        } else if (qCtx?.participant) {
            target = qCtx.participant;
            if (isGroup) {
                const gm = await socket.groupMetadata(sender);
                const participant = gm.participants.find(p => p.id === target);
                targetName = participant?.notify || participant?.id?.split('@')[0] || 'User';
            }
        } else if (args[0]) {
            let input = args[0];
            // Check if it's a username or number
            if (input.startsWith('@')) {
                input = input.substring(1);
            }
            
            // If it's a number
            if (/^\d+$/.test(input)) {
                target = input + '@s.whatsapp.net';
                targetName = input;
            } 
            // If it's a username (try to find in group)
            else if (isGroup) {
                const gm = await socket.groupMetadata(sender);
                const found = gm.participants.find(p => 
                    p.notify?.toLowerCase().includes(input.toLowerCase()) || 
                    p.id?.split('@')[0] === input
                );
                if (found) {
                    target = found.id;
                    targetName = found.notify || found.id.split('@')[0];
                }
            }
        }

        // If no target found, use sender
        if (!target) {
            target = realSender;
            targetName = msg.pushName || 'User';
        }

        // Normalize jid
        try {
            if (typeof jidNormalizedUser === 'function') {
                target = jidNormalizedUser(target);
            }
        } catch (_) { /* ignore */ }

        const targetNumber = target.split('@')[0];

        // Get profile picture
        let dpUrl = 'https://images.unsplash.com/photo-1614680376593-902f74fa0d41';
        let hasDP = false;
        try {
            const pp = await socket.profilePictureUrl(target, 'image');
            dpUrl = pp;
            hasDP = true;
        } catch (_) {}

        // Get profile info
        let name = targetName || targetNumber;
        let about = '📝 *𝐍𝐨 𝐚𝐛𝐨𝐮𝐭 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞*';
        let business = '❌ *𝐍𝐨*';
        let status = '🟢 *𝐎𝐧𝐥𝐢𝐧𝐞*';

        try {
            // Try to get profile name
            const contact = await socket.getContact(target);
            if (contact) {
                name = contact.notify || contact.name || targetName || targetNumber;
            }
        } catch (_) {}

        try {
            // Try to get status/ about
            const aboutData = await socket.fetchStatus(target);
            if (aboutData) {
                about = aboutData.status || about;
            }
        } catch (_) {}

        // Check if business (via presence or other means)
        try {
            const presence = await socket.presenceSubscribe(target);
            // Some business accounts have special presence
        } catch (_) {}

        // Check if it's business by trying to get business profile
        try {
            const bizProfile = await socket.getBusinessProfile(target);
            if (bizProfile) {
                business = '✅ *𝐘𝐞𝐬*';
                if (bizProfile.description) {
                    about = bizProfile.description || about;
                }
            }
        } catch (_) {}

        // Build the message
        const infoText = `*↳ ❝ [🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝙄𝙣𝙛𝙤 ⚡🔥] ¡! ❞*\n\n` +
                        `┏━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┓\n` +
                        `┃ 👤 *𝙉𝘼𝙈𝙀 :* ${name}\n` +
                        `┃ 🆔 *𝙉𝙐𝙈𝘽𝙀𝙍 :* ${targetNumber}\n` +
                        `┃ 🖼️ *𝘿𝙋 :* ${hasDP ? '✅ *𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎*' : '❌ *𝙽𝚘 𝙳𝙿*'}\n` +
                        `┃ 💼 *𝘽𝙐𝙎𝙄𝙉𝙀𝙎𝙎 :* ${business}\n` +
                        `┃ 📝 *𝘼𝘽𝙊𝙐𝙏 :* ${about}\n` +
                        `┃ 📱 *𝙅𝙄𝘿 :* ${target}\n` +
                        `┗━━━━━°⌜ \`⚡ ༒ 🔥\` ⌟°━━━━━┛\n\n` +
                        `> *🔥⚡ 𝙕𝙚𝙣𝙮𝙩𝙝 𝙆𝙞𝙣𝙜 𝘽𝙮 𝒁𝑨𝑰𝑫𝙄 ⚡🔥*`;

        // Send with DP image
        await socket.sendMessage(sender, {
            image: { url: dpUrl },
            caption: infoText,
            mentions: [target],
            contextInfo: typeof arabianCtx === 'function' ? arabianCtx() : undefined
        }, { quoted: msg });

    } catch (err) {
        console.error("WAINFO CMD ERROR:", err);
        reply('❌ *𝐊𝐧𝐨𝐰𝐧 𝐄𝐫𝐫𝐨𝐫*');
    }
  }
};
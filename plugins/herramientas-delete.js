import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ šš®šš®šš¼š-š š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `šššššššæš š¼š ššššš¼šš šæš š¼šššššš šš¼šš¼ šššæšš ššššššš¼š šš ššššš¼šš\n\nššššš šš ššššššš'š ššššš¼šš šš ššš š¾š¼š šæššššš ššš ššššš¼šš`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['š  š š” šØ āļø', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^eliminar|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler

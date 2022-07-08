let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/5nyvkTF/Whats-App-Image-2022-07-08-at-12-35-17.jpg'
    let trut = [
"ziiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
]  // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'truth.png', `*TRUTH*\n\n“${tru}”`, m)
}
handler.help = ['Zii']
handler.tags = ['fun']
handler.command = /^(Zii)$/i
handler.limit = true

module.exports = handler

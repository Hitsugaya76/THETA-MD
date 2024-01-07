const {zokou} = require('../framework/zokou');
const insta = require('insta');
cmd({
        pattern: "insta",
        desc: "Téléchargement de la vidéo instagram.",
        category: "Téléchargement",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../framework/zokou')
if(!text) return citel.reply('Veillez insérer un url instagram.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Téléchargement de la vidéo instagram.*`, citel)
}
    });

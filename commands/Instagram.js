const {cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: "Téléchargement de la vidéo instagram.",
        category: "Téléchargement",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
        const { Insta } = require('../lib')
if(!text) return citel.reply('Veillez insérer un url instagram.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Téléchargement de la vidéo instagram.*`, citel)
}
    });

const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", reaction:"📦",categorie: "Général" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if (s.MODE != "oui") {
        mode = "privé";
    }

     

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╔════════════ 𝚻𝚮𝚵𝚻𝚫-𝚳𝐃 ═══════════
┃    ╭────────────────
┃ ◈ │_Préfixe_ : ${s.PREFIXE}
┃ ◈ │_Owner_ : ${s.NOM_OWNER}    
┃ ◈ │_Mode_ : ${mode}
┃ ◈ │_Commandes_:${cm.length}
┃ ◈ │_Date_ : ${date}
┃ ◈ │_Heure_ : ${temps}
┃ ◈ │_Mémoire_ : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃ ◈ │_Plateforme_ : ${os.platform()}
┃ ◈ │_Développeurs_ : L
┃    ╰─────────────────
╚══════════════════════════════════\n\n`;
    
let menuMsg = `
👋 salut ${nomAuteurMessage} 👋
Je suis *${s.BOT}*, un bot développé par *La team Zokou*.

*Voici la liste de mes commandes :*
❏                             ❏
`;

    for (const cat in coms) {
        menuMsg += `*╔══ ◈* *${cat}*  *◈ ══╗*`;
        for (const cmd of coms[cat]) {
            menuMsg += `
*►❃* ${cmd}`;
        }
        menuMsg += `
❏╚════ ❏ ❏ ═══╝❏ \n`
    }

    menuMsg += `
❏            ❏
*❃————— •✧✧• —————❃*
Pour utiliser une  commande, tapez  ${prefixe}"nom de la commande"
 
 *『ThetaMD*
                                                
*❃————— •✧✧• —————❃*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});

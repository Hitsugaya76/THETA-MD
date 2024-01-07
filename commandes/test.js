"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Salut je m\'appelle *Theta* \n\n ' + 'je suis un bot Whatsapp Multi-appareil ';
    let d = ' developpé par *Ryuzaki*';
    let varmess = z + d;
    var img = 'https://i.pinimg.com/236x/7c/ca/e6/7ccae665f4eb72a13893a29c00523f6e.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Theta* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Ryuzaki*'
      let varmess=z+d
      var img='https://i.pinimg.com/236x/7c/ca/e6/7ccae665f4eb72a13893a29c00523f6e.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 

const {zokou} = require("../framework/zokou");
const conf = require("../set")
const {jidDecode}=require("@sampandey001/baileys")


zokou( {
  nomCom : "profile",
 categorie : "Fun",
   },
      async(dest,zk, commandeOptions)=> {

        const {ms , arg, repondre,auteurMessage,nomAuteurMessage, msgRepondu , auteurMsgRepondu , mybotpic} = commandeOptions ;
        let jid = null 
          let nom = null ;

          



        if (!msgRepondu) {
            jid = auteurMessage;
           nom = nomAuteurMessage;

           try { ppUrl = await zk.profilePictureUrl(jid , 'image') ; } catch { ppUrl = mybotpic()};
          const status = await zk.fetchStatus(jid) ;

           mess = {
            image : { url : ppUrl },
            caption : '*Nom :* '+ nom + '\n*Actu :*\n' + status.status
        }
          
        } else {
            jid = auteurMsgRepondu;
            nom ="@"+auteurMsgRepondu.split("@")[0] ;

            try { ppUrl = await zk.profilePictureUrl(jid , 'image') ; } catch { ppUrl = mybotpic()};
          const status = await zk.fetchStatus(jid) ;

             mess = {
              image : { url : ppUrl },
              caption : '*Nom :* '+ nom + '\n*Actu :*\n' + status.status,
               mentions:[auteurMsgRepondu]
          }
            
        } ;

     
      
      
         
            zk.sendMessage(dest,mess,{quoted : ms})
      });

{
  "name":"Zokou-2.0",
  "description":"bot whatsapp développé par djalega++",
  "keywords":["bot","node","baileys","whatsapp"],
  "logo":"https://raw.githubusercontent.com/djalega8000/Zokou-2.0/main/Zokou.jpg",
  "repository":"https://github.com/Hitsugaya76/THETA-MD",
  "succes_url":"/",
  "stack":"container",
  "env":{
    "PREFIXE":
    {
      "description":"choisissez votre préfixe",
      "value":"#",
      "required":true
    },
    "LECTURE_AUTO_STATUS":
    {
      "description":"le bot lira tous les status automatiquement (oui pour activer et non pour désactiver)",
      "value":"oui",
      "required":false
    }, "TELECHARGER_AUTO_STATUS":
    {
      "description":"le bot téléchargera tous les status automatiquement (oui pour activer et non pour désactiver)",
      "value":"oui",
      "required":false
    }
    ,
    "NOM_BOT" : {
       
      "description":"Un nom pour votre bot",
      "value":"Zokou-MD",
      "required":false

    } ,
     "LIENS_MENU" : {
    
      "description":"Ajoutez un ou plusieurs lien(s) d'image ou de video pour votre bot ; exemple : lien1,lien2,lien3......",
      "value":"https://wallpapercave.com/uwp/uwp3943464.jpeg",
      "required":false
       
     },

     "PM_PERMIT" :
     {
      "description":"Les commandes seront pas fonctionnelles en priver pour les autres utilisateurs (oui pour activer et non pour désactiver)",
      "value":"non",
      "required":false
    }
    ,
    "MODE_PUBLIC":
    {
      "description":"oui pour le mode public ou non pour le mode privé(Dans ce vous seul  utiliserez le bot)",
      "value":"oui",
      "required":false
    }
	,
    "HEROKU_APY_KEY": {
    "description": "inserez l'apikey de votre compte heroku",
     "required" :false
    },
  "HEROKU_APP_NAME": {
    "description": "inserez le nom que vous avez inserez(APP NAME) au tout debut de la page",
     "required" :false
    }  
	  ,
    "APILOLHUMAIN":
    {
      "description":"placer votre  apikey de chez api.lolhuman.xyz(pas obligatoire)",
      "value":"",
      "required":false
    },
	  "ETAT":{
		  "description":"marquez votre présence : 1 pour signaler que vous êtes en ligne même si vous ne l'êtes pas . 2 pour dire que vous êtes entrain d écrire un message. 3 pour signaler que vous êtes entrain de d enregistrer un audio . ou laissez le champs  vide pour signaler votre état réel.  ",
		  "value":"1",
		  "required":"false"
	  },
    "SESSION_ID":
    {
      "description":"veuillez renseigner votre id de session",   
      "value":"",
      "required":true
      
    },
    "NOM_OWNER":
    {
    
    "desc": "Votre nom",
    "required": false,
    "value": "Djalega++"
  },
    "NUMERO_OWNER":
  {
    
    "desc": "Votre numero de telephone; il doit etre dans le format ID+numero",
    "required":false,
    "value": "243993366258"
  },
    

    "WARN_COUNT":
  {
    "desc": "il s'agit de nombre d'avertissement limite",
    "required": false,
    "value": "3"
  }
  },

  "formation": {
		"worker": {
			"quantity": 1,
			"size": "basic"
		}
	},

  "addons":[
    {

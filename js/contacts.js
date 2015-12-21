/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
//Proposer un choix à l'utilisateur
console.log("Bienvenue dans ce mini annuaire. Faites votre choix");
console.log("1 : Affichez vos contacts");
console.log("2 : Ajoutez un contact");
console.log("3 quittez le gestionnaire");
//Les contacts  
    // Initialise la liste 
var listcontact = { 
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    // Renvoie la description d'un contact
    decrire: function () {
        var description = "Prénom : " + this.prenom + " " + "Nom : " +this.nom;
        return description;
    }
};

//Les contacts existants  
var contact1 = Object.create(listcontact);
contact1.init("Carole", "Lévisse");

var contact2 = Object.create(listcontact);
contact2.init("Mélodie", "Nelson");

//création du tableau
var contacts = [];

//insertion des contacts dans le tableau
contacts.push(contact1);
contacts.push(contact2);

 function addContact()
  {
var newContact = Object.create(listcontact);
        newContact.init(prompt("Saisissez un prénom :"), prompt("saisissez un nom : "));
        contacts.push(newContact);
        confirm("Votre contact est ajouté.");
  }


//Programme

var programme = Number (prompt("Faites votre choix"));
//tant que le choix est différent de 
while(programme !== 3){
switch (programme) {
    case 1 :
        console.log(("\n\n: Liste des contats").toUpperCase());
        console.log("Voici votre liste");
        
        contacts.forEach(function (contact) {
        console.log(contact.decrire());
});
       
        console.log("1 : Affichez vos contacts");
        console.log("2 : Ajoutez un contact");
        console.log("3 quittez le gestionnaire");
		
		programme = Number(prompt("Choisissez votre programme"));
        break;
		
    case 2 :
       
        console.log ((" : saisissez un contact").toUpperCase());
        var newContact = Object.create(listcontact);
        newContact.init(prompt("Saisissez un prénom :"), prompt("saisissez un nom : "));
        contacts.push(newContact);
        confirm("Votre contact est ajouté.");
		contacts.forEach(function (contact) {
        console.log(contact.decrire());
		});
        
        var oui = prompt(("Ajoutez un autre contact ? (OUI ou NON) ?").toUpperCase());
        if (oui==="OUI") {
		addContact();
		contacts.forEach(function (contact) {
        console.log(contact.decrire());
		});
		
		} else {
			console.log("1: Lister les contacts");
            console.log("2: Ajouter un contact");
            console.log("3: Quitter");
            programme = Number(prompt("Choisissez votre programme"));
		}
		break;
     default:
	 
	 programme = Number(prompt("Votre numéro de programme n'est pas valide !\nChoisissez de 1 à 3"));

}
}
console.log("Merci et à bientôt")
   




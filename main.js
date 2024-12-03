let rubrica = {
    // PROPRIETA
    'contacts': [
        {'name': 'Nicola', 'telefono': '3331111111'},
        {'name': 'Lorenzo', 'telefono': '3332222222'},
        {'name': 'Paola', 'telefono': '3333333333'},
        {'name': 'Jenny', 'telefono': '3334444444'}
    ],
    
    // METODO 

    showAllContacts : function (){
        this.contacts.forEach (contact => {
            console.log(`Contact name ${contact.name}`);
        })
    },
    
    
    showSingleContact : function (name){
        let selectedContact = '';
        this.contacts.find(contact => {  
            if (contact.name == name) {
                selectedContact = contact;              
            } 
        });
        
        if(selectedContact != '' ){
            console.log(selectedContact);
        }else{
            console.log('nessuno')
        }
    },

    getContact : function (name) {
        let selectedContact = '';
        this.contacts.find(contact => {  
            if (contact.name == name) {
                selectedContact = contact;              
            } 
        });
        
        if(selectedContact != '' ){
            return selectedContact;
        }else{
            return null;
        }
        
    },
    
    findIndexOf : function (name) {
        let index = this.contacts.findIndex(contact => contact.name == name);
        console.log(index)
        return index;
    },
    
    deleteContact : function (name) {
        let indexDelete = this.findIndexOf(name);
        let deletedContact = this.contacts.splice(indexDelete, 1)
        console.log(deletedContact);
    },
    
    addContact : function (contact) {
        this.contacts.splice(0, 0, contact)
    },

    updateContact : function (actualName, newName, newNumber) {
        let oldNamedContact = this.getContact(actualName);
        if (oldNamedContact == null) {
            console.log("inserisci un contatto presente");
        }else{
            oldNamedContact.name = newName
            if (newNumber  != undefined) {
                oldNamedContact.telefono = newNumber
            }
        }
    }
};



rubrica.showAllContacts();
rubrica.showSingleContact('');
rubrica.getContact('Paola')
rubrica.deleteContact("Paola");
rubrica.updateContact('Jenny','Luca')
rubrica.addContact({'name': 'Eddy', 'telefono': '333000000'});
console.log(rubrica);
// DOT SYNTAX 
console.log(rubrica.contacts);
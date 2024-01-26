export const AddContact = (pers) =>{
    return {type:"Ajouter" , payloaad : pers}
}
export const Updatecontact = (newpres) =>{
    return {type:"Modifier" , payloaad : newpres}
}
export const DeleteContact = (id) =>{
    return {type:"Supp" , payload :id}
}

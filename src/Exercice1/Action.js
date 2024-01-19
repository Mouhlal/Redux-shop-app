export const Add_Client = (cl) =>{
    return {type:"Ajouter" , payload : cl}
}
export const Delete_Client = (id)=>{
    return {type:"Supp" , payload :id}
}
export const Update_Client = (newcl)=>{
    return {type:'Modifier',payload: newcl }
}
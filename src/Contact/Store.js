const initialState = {
    contacts:[
        {id:1,nom:"Akram Mouhlal",tel:"06-42-03-98-16"},
        {id:2,nom:"Walid Aribi",tel:"07-07-04-08-95"},
        {id:3,nom:"Salma Agir",tel:"06-23-44-12-11"}
    ]
}

const RedContact = (state = initialState , action)=>{
    switch(action.type){
        case "Ajouter" :
            return {...state , contacts:[...state.contacts , action.payload]}
        case "Supp" :
            return {...state , contacts:[...state.contacts.filter((u)=>u.id !== parseInt(action.payload))]}
        case "Modifier" :
            const update = state.contacts.filter( u => u.id !== parseInt(action.payload.id))
            return {...state , contacts:[...update , action.payload]}
        default :
        return state;
    }
}
export default RedContact
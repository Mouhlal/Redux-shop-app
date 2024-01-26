const initialState = {
    clients : [
        {id:1,nom:"Aziz ouazane",achats:"Tv_Samsung",prix_achats:250,quantité:1,total:""},
        {id:2,nom:"Akram Mouhlal",achats:"Ipad",prix_achats:190,quantité:1,total:""},
        {id:4,nom:"Saad Amane",achats:"Ipad",prix_achats:190,quantité:2,total:""},
        {id:3,nom:"Ilham Wahab",achats:"Airpods",prix_achats:550,quantité:5,total:""}
    ]
}

const Re = (state = initialState , action)=>{
    switch(action.type){
        case "Ajouter" :
            return {...state , clients:[...state.clients , action.payload]}
        case "Supp" :
            return {...state , clients:[...state.clients.filter((i)=>i.id !== parseInt(action.payload))]}
        case "Modifier" :
            let up = state.clients.filter((u)=>u.id !== parseInt(action.payload.id))
            return {...state , clients:[...up , action.payload]}
        default :
        return state
    }
}
export default Re

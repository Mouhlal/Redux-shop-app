const initialState = {
    drivers :[
        {id:1,image:"https://i.pravatar.cc/150?img=13",nom:"Amine Saad",numero:"0634679912",ville:"casa",prix:"55dhs"},
        {id:2,image:"https://i.pravatar.cc/150?img=14",nom:"Aziz wahran",numero:"0634679912",ville:"casa",prix:"50dhs"},
        {id:3,image:"https://i.pravatar.cc/150?img=3",nom:"Ayoub farih",numero:"0634679912",ville:"casa",prix:"33dhs"},
        {id:4,image:"https://i.pravatar.cc/150?img=17",nom:"Akram Marid",numero:"0634679912",ville:"casa",prix:"25dhs"},
        {id:5,image:"https://i.pravatar.cc/150?img=15",nom:"Yassine boucha",numero:"0705676911",ville:"casa",prix:"55dhs"},
        {id:6,image:"https://i.pravatar.cc/150?img=6",nom:"Ilias Azhir",numero:"061678086",ville:"casa",prix:"50dhs"},
        {id:7,image:"https://i.pravatar.cc/150?img=7",nom:"Khalil Ibrahim",numero:"0622567023",ville:"casa",prix:"47dhs"}
    ]
}

const Mareducer = (state=initialState , action)=>{
    switch(action.type){
        case "Supprimer":
            return {...state , drivers:[...state.drivers.filter((o)=>o.id !== parseInt(action.payload))]}
        default :
        return state
    }
}
export const AllDrivers = state=>state.drivers
export default Mareducer

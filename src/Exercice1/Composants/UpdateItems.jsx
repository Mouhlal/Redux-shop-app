import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Update_Client } from '../Action'
export default function UpdateItems() {
    const {id} = useParams()
    const items = useSelector(state => state.clients.filter((u) => u.id === id));
    const dispatch = useDispatch()
    const nav = useNavigate()

    const [newnom,setNewnom] = useState("")
    const [newachats,setNewachats] = useState("")
    const [newprix,setNewprix] = useState("")
    const [newquantité,setNewquantité] = useState("")

    function Valider(t){
        t.preventDefault()
            let p = {
                id:id,
                nom:newnom,
                achats:newachats,
                prix_achats:newprix,
                quantité:newquantité
            }
            dispatch(Update_Client(p))
            nav("/")
    }

  return (
    <div>
     <form onSubmit={Valider}>
  <h3>MODIFICATION DE CLIENTS :</h3>
  Nom: <input type="text" value={newnom} onChange={(e) => setNewnom(e.target.value)} />
  Achats: <input type="text" value={newachats} onChange={(e) => setNewachats(e.target.value)} /> <br /> <br />
  Prix: <input type="text" value={newprix} onChange={(e) => setNewprix(e.target.value)} /> <br /> <br />
  Quantité: <input type="number" value={newquantité} onChange={(e) => setNewquantité(e.target.value)} /> <br /> <br />
  <button className='btn btn-primary' type='submit'>Update</button>
</form>

    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Add_Client } from '../Action'

export default function AddItems() {
    const disp = useDispatch()
    const nav = useNavigate()

    const [nom,setNom] = useState("")
    const [achats,setAchats] = useState("")
    const [prx,setPrx] = useState("")
    const [qqt,setQqt] = useState("")
    const [tt,setTt] = useState(qqt*prx)
    
    function Adder(){
        let o = {
            id: Math.floor(Math.random(100*4)),
            nom : nom,
            achats : achats,
            prix_achats : prx,
            quantité : qqt,
            total: tt
        }
        disp(Add_Client(o))
        nav("/")
    }

  return (
    <div>
             <form onSubmit={Adder}>
  <h3>AJOUTATION DE CLIENTS :</h3>
  Nom: <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
  Achats: <input type="text" value={achats} onChange={(e) => setAchats(e.target.value)} /> <br /> <br />
  Prix: <input type="text" value={prx} onChange={(e) => setPrx(e.target.value)} /> <br /> <br />
  Quantité: <input type="number" value={qqt} onChange={(e) => setQqt(e.target.value)} /> <br /> <br />
  <button className='btn btn-primary' type='submit'>Add</button>
</form>
    </div>
  )
}

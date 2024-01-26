import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Updatecontact } from '../Actions'

export default function ModifierContact() {
  const {id} = useParams()
  const dis = useDispatch()
  const nav = useNavigate()
  const item = useSelector(state => state.contacts.filter(u=>u.id === id))
  const [name,setName] = useState()
  const [tele,setTele] = useState()
  function Changer(e){
    e.preventDefault()
    let upd = {
      id:id,
      nom:name,
      tel:tele
    }
    dis(Updatecontact(upd))
    nav("/Contact")
  }
  return (
    <div>
      <form className='form' onSubmit={Changer}>
      <div className="form-floating mb-3">
      <input type="text" className="form-control" id="floatingInput" placeholder="Nom Complet" value={name} onChange={e=>setName(e.target.value)} />
      <label htmlFor="floatingInput">Nom Complet :</label>
        </div>
      <div className="form-floating">
      <input type="text" className="form-control" id="floatingPassword" placeholder="Télephone" value={tele} onChange={e=>setTele(e.target.value)} />
          <label htmlFor="floatingPassword">Numéro Télephone :</label>
      </div>
      <button className='btn btn-primary' type='submit'>
            Enregistrer
      </button>
      </form>
    </div>
  ) 
}

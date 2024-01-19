import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete_Client } from '../Action'
import { Link } from 'react-router-dom'

function Clients() {
    const items = useSelector(state => state.clients)
    const dispatch = useDispatch()
    function Del(id){
        dispatch(Delete_Client(id))
    }
    return(
        <div>

                <h3 className='text-center'>
                    <Link to="/add" style={{textDecoration:"none"}}>
                    <i class="bi bi-person-plus-fill"></i> ADD CLIENT
                    </Link>
                    <span style={{padding:"15px"}}></span>
                    <Link to="/Recherche"  style={{textDecoration:"none"}}>
                    <i class="bi bi-search"></i> Rechercher Client
                    </Link>
                </h3>

            <table className="table table-striped m-5 p-2">
                <tr>
                    <th  scope="col">#</th>
                    <th  scope="col">Nom</th>
                    <th  scope="col">Achats</th>
                    <th  scope="col">Prix-Achats</th>
                    <th  scope="col">Quantité</th>
                    <th scope='col'>Total Prix</th>
                    <th scope='col'>Actions</th>
                </tr>
                {
                    items.map((item,index)=>(
                        <tr key={index}>
                            <td> {item.id} </td>
                            <td> {item.nom} </td>
                            <td> {item.achats} </td>
                            <td> {item.prix_achats} </td>
                            <td> {item.quantité} </td>
                            <td> {item.prix_achats * item.quantité}$ </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>Del(item.id)}>
                                    <span>X</span>
                                </button> 

                                <Link to={`/update/${item.id}`}>
                                    <button className='btn btn-second'>
                                    <i className="bi bi-arrow-repeat"></i>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Clients

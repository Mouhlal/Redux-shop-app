import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AllDrivers } from './Reducer'
import { Link } from 'react-router-dom'
//import '../Projet/Details.css';
export default function DetailsDrv() {
    const { id } = useParams()
    const drv = useSelector(AllDrivers).find((u) => u.id == id)
    console.log(drv)

    return (
        <div>
            <h2 className='text-center'>Détails Driver</h2>
            <div className='container'>
                {drv && (
                    <div className="users-details">
                        <img src={drv.image} alt="user" />
                        <div className="for">
                            <p id='name'> <i class="bi bi-person-circle"></i>   {drv.nom} </p>
                            <p> <i class="bi bi-telephone-fill"></i>  {drv.numero} </p>
                            <p> <i class="bi bi-house-fill"></i>  {drv.ville} </p>
                        </div>
                    </div>
                )}
                
                    <button className='btn btn-danger'>
                        Contact Me
                    </button>
                    <Link to="/">
                        <button className='btn btn-danger' id='but'>Back</button>
                    </Link>
                </div>
            </div>
    )
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete_Client } from '../Action';
import { Link } from 'react-router-dom';

function Clients() {
    const [achats, setAchats] = useState([]);
    const items = useSelector(state => state.clients.filter(u => u.achats == achats));
    const dispatch = useDispatch();

    function Del(id) {
        dispatch(Delete_Client(id));
    }

    return (
        <div>
            <h3 className='text-center'>
                <Link to="/add" style={{ textDecoration: "none" }}>
                    <i className="bi bi-person-plus-fill"></i> ADD CLIENT
                </Link>
                <span style={{ padding: "15px" }}></span>
                <Link to="/Recherche" style={{ textDecoration: "none" }}>
                    <i className="bi bi-search"></i> Rechercher Client
                </Link>
                <span style={{ padding: "15px" }}></span>
                <Link to="/details-Airpods" style={{ textDecoration: "none" }}>
                    <i className="bi bi-search"></i> Details Client
                </Link>

            </h3>

            <select value={achats} onChange={e => setAchats(e.target.value)}>
                <option value="Tv_Samsung">Tv-Samsung</option>
                <option value="Ipad">ipad</option>
                <option value="Airpods">Airpods</option>
            </select>

            <table className="table table-striped m-5 p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Achats</th>
                        <th scope="col">Prix-Achats</th>
                        <th scope="col">Quantité</th>
                        <th scope='col'>Total Prix</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nom}</td>
                            <td>{item.achats}</td>
                            <td>{item.prix_achats}</td>
                            <td>{item.quantité}</td>
                            <td>{item.prix_achats * item.quantité}$</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => Del(item.id)}>
                                    <span>X</span>
                                </button>

                                <Link to={`/update/${item.id}`}>
                                    <button className='btn btn-second'>
                                        <i className="bi bi-arrow-repeat"></i>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;

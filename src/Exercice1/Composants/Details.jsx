import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { achats } = useParams();
    const data = useSelector(state => state.clients.find(u => u.achats == "Airpods"));

    return (
        <div>
            <table className="table table-striped m-5 p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Achats</th>
                        <th scope="col">Prix-Achats</th>
                        <th scope="col">Quantité</th>
                        <th scope='col'>Total Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.nom}</td>
                        <td>{data.achats}</td>
                        <td>{data.prix_achats}</td>
                        <td>{data.quantité}</td>
                        <td>{data.prix_achats * data.quantité}$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

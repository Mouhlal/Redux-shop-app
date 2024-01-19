import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function RechercherItems() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const clients = useSelector(state => state.clients);

  function recherche(event) {
    event.preventDefault();
    const searchId = parseInt(search, 10);
    if (isNaN(searchId)) {
      alert("Veuillez saisir un ID numérique valide.");
      return;
    }
    const foundClient = clients.find(client => client.id === searchId);
    if (foundClient) {
      setData(foundClient);
    } else {
      alert("Aucun client trouvé avec cet ID.");
      setData(null); 
    }
  }

  return (
    <div>
      <form onSubmit={recherche}>
        <h1 className="text-center">Recherche client :</h1>
        <div className="input-group flex-nowrap">
          <span className="input-group-text">Taper Id :</span>{" "}
          <span className="input-group-text" id="addon-wrapping">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Id"
            aria-label="Id"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
        <br />
        {data && 
          <div className="text-center">
            Id du Client : {data.id} <br />
            Nom du Client : {data.nom} <br />
            Achats du client : {data.achats} <br />
            Prix d'achtas : {data.prix_achats}$ <br />
            Quantité du Client : {data.quantité} <br />
            Totale prix : {data.quantité * data.prix_achats}$
          </div>
        }
      </form>
    </div>
  );
}

import React, { useState } from 'react';

export default function FormErr() {
  // Données de test (utilisateur et mot de passe)
  const data = [
    { name: "Akram Mouhlal", pass: "akram2" }
  ];

  // États du composant
  const [name, setName] = useState("");
  const [errname, setErrname] = useState("");
  const [pass, setPass] = useState("");
  const [errpass, setErrpass] = useState("");
  const [res, setRes] = useState("");

  // Fonction de validation du formulaire
  const valider = (event) => {
    event.preventDefault();
    // Vérification du nom d'utilisateur
    if (name) {
      // Recherche du nom dans les données
      let user = data.find((e) => e.name === name);
      if (user) {
        // Nom d'utilisateur trouvé, vérification du mot de passe
        if (user.pass === pass) {
          setRes(`Bienvenue, ${name} !`);
          // Réinitialisation des erreurs
          setErrname("");
          setErrpass("");
        } else {
          setErrpass("Mot de passe incorrect");
        }
      } else {
        setErrname("Nom d'utilisateur invalide");
      }
    } else {
      setErrname("Nom d'utilisateur requis");
    }
  };

  return (
    <div>
      <form onSubmit={valider}>
        <label>Nom d'utilisateur</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <span style={{ color: "red" }}>{errname}</span> <br /> <br />

        <label>Mot de passe</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /> <br /> <br />
        <span style={{ color: "red" }}>{errpass}</span> <br /> <br />

        <button type='submit'>
          Valider
        </button>
      </form>

      <p>{res}</p>
    </div>
  );
}

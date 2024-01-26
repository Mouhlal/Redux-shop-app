import React from "react";
import '../Projet/Stagiare.css';
import { useSelector } from "react-redux";
import { AllDrivers } from "./Reducer";
import { Link } from "react-router-dom";
function Drivers() {
  const drv = useSelector(AllDrivers);
  return (
    <div>

    <div className="navbar">
        <nav>
            <h1 id="title"> <span style={{color:"rgb(216, 18, 166)"}}>W</span>Uber </h1>
            <ul>
                <li> <Link>Drivers</Link> </li>
                <li> <Link>Contacts</Link> </li>
                <li> user   </li>
                <li> <Link>  <i className="bi bi-person-circle "></i></Link> </li>
            </ul>
        </nav>
    </div>


<h4 id="title-drivers"> Disponibles Drivers : </h4>
<br />
      <div className="container">
        {drv.map((drive, index) => (
          <div className="users" key={index}>
            <div className="ff">
                <img src={drive.image} alt="user" />
                <p id="nom"> <b>{drive.nom}</b> </p>
            </div>
            <div className="bb">
                <p> <b>{drive.prix}</b> </p>
                <Link to={`/details_drivers/${drive.id}`}>
                  <button className="btn" id="btn">Details</button>
                </Link> 
            </div>
          </div>
        ))}
      </div>
<div className="map">
    <iframe width="600" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=casablanca,maroc+(drive)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
    </div>
    </div>
  );
}

export default Drivers;

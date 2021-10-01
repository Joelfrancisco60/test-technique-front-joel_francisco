import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Filter from './component/Filter/Filter';
import Navbar from './component/Navbar/Navbar';


function App() {


  const [cars, setCars] = useState([]);


  useEffect(() => {
    let mounted = true;
    getCars('cars.json')
      .then(items => {
        if(mounted) {
          setCars(items)
        }
      })
    return () => mounted = false;
  }, [])


  const getCars = async (url) => {

    const localhost = "http://localhost:3001/";

    const data = await fetch(localhost.concat(url));
    return await data.json();
  }



  const getRentalPrice = (perDay, perKm) => {
    var rentalPrice = 0;
    var duration = document.getElementById("duration").value;
    var distance = document.getElementById("distance").value;

    rentalPrice = (perDay * duration) + (perKm * distance)+'€';

    if (rentalPrice === 0 || duration === '' || distance === '') {
      rentalPrice = "Sélectionner le nombre de jours et de kilometre que vous souhaiter";
    }

    return rentalPrice;
  }
 

  const allCars = cars.map((car) =>
    <div class="col-md-6 col-sm-12 col-lg-3 p-3">
        <Card>
          <Card.Img variant="top" src={car.picturePath} />
          <Card.Body className="cardBackgroud">
          <Card.Title color="black"><b>Model :</b> {car.model}</Card.Title>
          <Card.Text>
            <div class="d-flex flex-column">
              <p class="p-1"><b>Marque :</b> {car.brand}</p>
              <p class="p-1"><b>Prix de location :</b> {getRentalPrice(car.pricePerDay, car.pricePerKm)}</p>
              <p class="p-1"><b>Prix par jour :</b> {car.pricePerDay} €</p>
              <p class="p-1"><b>Prix par Km :</b> {car.pricePerKm} €</p>
            </div>
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
      );


    return (
      <div className="body">
        <Navbar
          getCars={getCars}
          setCars={setCars}
        />
        <div class="container">
          <div class="row p-3">
              {allCars !== [] ? allCars : "Il n'y a pas de voiture"}   
            </div>
          </div>
      </div>
    );
}

export default App;

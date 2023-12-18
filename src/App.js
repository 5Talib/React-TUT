import React from "react";
import Card from "./Components/Card.js"; 
import "./index.css";
import Data from "./Components/Data.js";

export default function App() {
    const dataElements=Data.map(function(items){
        // return <Card img={items.img} name={items.name} jersey={items.jersey} hun={items.hun} />
        return <Card 
                items={items}
                />
    });
    console.log(dataElements);
  return (
    <div className="container">
      {dataElements}
    </div>
  );
}

    //   <Card 
    //     img="Images/rohit.jpeg"
    //     name="Rohit Sharma"
    //     jersey="45"
    //     hun="45"
    //   />
    //   <Card 
    //     img="Images/virat.png"
    //     name="Virat Kohli"
    //     jersey="18"
    //     hun="80"
    //   />
    //   <Card 
    //     img="Images/sachin.png"
    //     name="Sachin Tendulkar"
    //     jersey="10"
    //     hun="100"
    //   />
    //   <Card 
    //     img="Images/dhoni.webp"
    //     name="MS Dhoni"
    //     jersey="7"
    //     hun="16"
    //   />
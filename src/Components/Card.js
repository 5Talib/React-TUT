import React from "react";
// import "../index.css";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.items.img} alt={props.items.name} height={200}/>
            <div className="name">Name: {props.items.name}</div>
            <div className="jersey">Jersey No: {props.items.jersey}</div>
            <div className="hundereds">Hundereds: {props.items.hun}</div>
            
        </div>
    )
}
            // <img src={props.img} alt={props.name} height={200}/>
            // <div className="name">Name: {props.name}</div>
            // <div className="jersey">Jersey No: {props.jersey}</div>
            // <div className="hundereds">Hundereds: {props.hun}</div>
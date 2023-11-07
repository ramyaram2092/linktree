import React from "react";
import "./Card.css";
import 'primeicons/primeicons.css';

function Card(props) {
  return (
    <div className="card">
    <h2>{props.title}</h2>
    <i className="pi pi-check"></i>

     <a href={props.url}  >
    </a>
    </div>
  );
}

export default Card;
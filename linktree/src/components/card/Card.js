import React from "react";
import "./Card.css";
import 'primeicons/primeicons.css';

function Card(props) {
  console.log(props.url);
  return (
    <div className="card">
   
    {/* <i className="pi pi-check"></i> */}

     <a href={props.url} target="_blank"  > 
     <h2>{props.title}</h2>
    </a>
    </div>
  );
}

export default Card;
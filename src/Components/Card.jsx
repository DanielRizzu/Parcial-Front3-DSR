import React from "react";
import '../styles.css'


const Card = ({ nombre, apellido, hobbie, descripcion }) => {
    return (
        <div>
            <h2>Información recibida:</h2>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Hobbie: {hobbie}</p>
            <p>Descripción: {descripcion}</p>
        </div>
    );
};

export default Card;
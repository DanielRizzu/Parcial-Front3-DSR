
import React, { useState } from "react";
import Card from "./Card";
import '../styles.css'

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [hobbie, setHobbie] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [mostrarCard, setMostrarCard] = useState(false);
    const [error, setError] = useState("");

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleApellidoChange = (e) => {
        setApellido(e.target.value);
    };

    const handleHobbieChange = (e) => {
        setHobbie(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.length < 3 ||
            nombre.trim() === "" ||
            apellido.length < 3 ||
            apellido.trim() === "" ||
            hobbie.length < 3 ||
            hobbie.trim() === "" ||
            descripcion.length < 6
        ) {
            setError("Por favor chequea que la información sea correcta");
        } else {
            setMostrarCard(true);
            setError("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input type="text" value={apellido} onChange={handleApellidoChange} />
                </div>
                <div>
                    <label>Hobbie:</label>
                    <input type="text" value={hobbie} onChange={handleHobbieChange} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" value={descripcion} onChange={handleDescripcionChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {error && <div>{error}</div>}
            {mostrarCard && (
                <Card nombre={nombre} apellido={apellido} hobbie={hobbie} descripcion={descripcion} />
            )}
        </div>
    );
}

export default Formulario;


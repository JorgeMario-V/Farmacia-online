// ApiComponent.js
import React, { useState } from 'react';

const ApiComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch('https://api.github.com/users/octocat'); // Cambia la URL si usas otra API
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Obtener Datos</button>
            
            {loading && <p>Cargando...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            {data && (
                <div>
                    <h3>Información del Usuario</h3>
                    <p>Nombre: {data.name}</p>
                    <p>Bio: {data.bio}</p>
                    <p>Ubicación: {data.location}</p>
                </div>
            )}
        </div>
    );
};

export default ApiComponent;

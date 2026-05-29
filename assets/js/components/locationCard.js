/**
 * =========================================================
 * locationCard.js — Componente de tarjeta de ubicación
 * =========================================================
 *
 * @param {Object} location - Objeto ubicación de la API
 * @param {string} location.name - Nombre del lugar
 * @param {string} location.type - Tipo (Planet, etc.)
 * @param {string} location.dimension - Dimensión
 * @param {Array}  location.residents - URLs de residentes
 * @returns {string} HTML del card
 */
export function locationCard(location) {
    return `
        <article class="card location-card">
            <div class="card-body">
                <h3>${location.name}</h3>
                <p>
                    <strong>Tipo:</strong>
                    ${location.type || 'Desconocido'}
                </p>
                <p>
                    <strong>Dimensión:</strong>
                    ${location.dimension || 'Desconocida'}
                </p>
                <p>
                    <strong>Residentes:</strong>
                    ${location.residents.length}
                </p>
            </div>
        </article>
    `;
}
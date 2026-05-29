/**
 * =========================================================
 * episodeCard.js — Componente de tarjeta de episodio
 * =========================================================
 * Sigue el mismo patrón que characterCard.js:
 * recibe un objeto y retorna HTML como string.
 *
 * @param {Object} episode - Objeto episodio de la API
 * @param {string} episode.name - Nombre del episodio
 * @param {string} episode.air_date - Fecha de emisión
 * @param {string} episode.episode - Código (ej: S01E01)
 * @param {Array}  episode.characters - URLs de personajes
 * @returns {string} HTML del card
 */


export function episodeCard(episode){
    return `
<article class ="card episode-card">
 <div class="card-body">
    <span class="episode-code"> ${episode.episode}</span>
    <h3>${episode.name}</h3>

    <p>
    <strong>Fecha de emisión:</strong>
    ${episode.air_date}
    </p>
    <p>
    <strong>Episodio:</strong>
    ${episode.episode}
    </p>
    <p>
    <strong>Personajes:</strong>
    ${episode.characters.length}
    </p>
    </div>
</article>
    
    `;
}


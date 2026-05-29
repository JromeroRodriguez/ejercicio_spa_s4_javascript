/**
 * =========================================================
 * characterCard.js — Componente de tarjeta de personaje
 * =========================================================
 * Cambios al el original:
 *  - Botón "Eliminar" con data-id para identificar el personaje
 *  - Botón "Editar" con data-id
 *  - Badge "Ficticio" si el personaje es local
 *  - onerror en la imagen para manejar imágenes rotas (req. 7)
 *
 * @param {Object} character
 * @returns {string} HTML del card
 */
export function characterCard(character) {
    const localBadge = character.local
        ? `<span class="badge-local">✦ Ficticio</span>`
        : '';

    return `
        <article class="card" data-id="${character.id}">

            ${localBadge}

            <img
                src="${character.image}"
                alt="${character.name}"
                onerror="this.src='https://via.placeholder.com/300x300?text=Sin+imagen'"
            >

            <div class="card-body">
                <h3>${character.name}</h3>
                <p>
                    <strong>Status:</strong>
                    ${character.status}
                </p>
                <p>
                    <strong>Species:</strong>
                    ${character.species}
                </p>

                <div class="card-actions">
                    <!-- data-action y data-id permiten identificar qué botón
                         fue presionado y sobre qué personaje, desde home.js -->
                    <button
                        class="btn-edit"
                        data-action="edit"
                        data-id="${character.id}"
                    >
                        Editar
                    </button>
                    <button
                        class="btn-delete"
                        data-action="delete"
                        data-id="${character.id}"
                    >
                         Eliminar
                    </button>
                </div>
            </div>
        </article>
    `;
}

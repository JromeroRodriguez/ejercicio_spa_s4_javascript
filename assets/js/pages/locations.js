/**
 * =========================================================
 * locations.js — Página de ubicaciones
 * =========================================================
 */

import { loadHTML }      from '../utils/helpers.js';
import { getLocations }  from '../services/api.js';
import { locationCard }  from '../components/locationCard.js';
import { showToast }     from '../utils/toast.js';

/**
 * Renderiza la página de ubicaciones.
 */
export async function renderLocations() {
    const content = document.getElementById('content');

    content.innerHTML = await loadHTML('./assets/js/views/locations.html');

    const container = document.getElementById('locations-container');

    const locations = await getLocations();

    if (!locations || locations.length === 0) {
        container.innerHTML = `<p class="error-msg">No se pudieron cargar las ubicaciones.</p>`;
        showToast('Error al cargar ubicaciones', 'error');
        return;
    }

    container.innerHTML = locations
        .map(location => locationCard(location))
        .join('');
}
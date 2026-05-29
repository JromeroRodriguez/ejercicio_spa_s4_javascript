/**
 * =========================================================
 * episodes.js — Página de episodios
 * =========================================================
 * 1. Carga el HTML base de la vista
 * 2. Llama a la API
 * 3. Renderiza los cards
 */
import { loadHTML } from '../utils/helpers.js';
import { getEpisodes } from '../services/api.js';
import { episodeCard } from '../components/episodeCard.js';
import { showToast } from '../utils/toast.js';

/**
 * Renderiza la página de episodios.
 */
export async function renderEpisodes(){
    const content = document.getElementById('content');

    content.innerHTML = await loadHTML('./assets/js/views/episodes.html');
    const container = document.getElementById('episodes-container');

    
    //llamado a la api
    const episode = await getEpisodes();
    
    // Manejo de respuesta vacía
    if(!episode || episode.length === 0){
        container.innerHTML = `<p class="error-msg">No se pudieron cargar los episodios.</p>`;
        showToast('No se encontraron episodios', 'error');
        return;
    }
    //renderizado de cards usando el componente episodeCard
    container.innerHTML = episode.map(episodes => episodeCard(episodes))
    .join('');
    
}
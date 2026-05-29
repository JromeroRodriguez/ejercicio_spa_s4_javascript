/**
 * Servicio API Rick and Morty
 */

import httpClient from './httpClient.js';

/**
 * Obtiene personajes.
 *Enpoint: GET /character
 * 
 * @returns {Promise<Array>}
 */
export async function getCharacters() {
    try {
        const response = await httpClient.get('/character');
        return response.data.results;

    } catch (error) {

        console.error('error al obtener personajes', error);
        const { showToast } = await import('../utils/toast.js');
        showToast('Error al obtener personajes', 'error');
        return [];
    }
}

/**
 * Obtiene episodios de la API.
 * Endpoint: GET /episode
 *
 * La API retorna: { info: {...}, results: [...] }
 * Nosotros solo necesitamos results.
 *
 * datos episodios:
 *   - name: nombre episodio
 *   - air_date: fecha emisión
 *   - characters: array de Urls de personajes participantes
 *
 * @returns {Promise<Array>} 
 */
export async function getEpisodes() {
    try {
        const response = await httpClient.get('/episode');
        return response.data.results;
    } catch (error) {
        console.error('error al obtener episodes', error);
        const { showToast } = await import('../utils/toast.js');
        showToast('Error al obtener episodios', 'error');
        return [];
    }
}

/**
 * Obtiene ubicaciones de la API.
 * Endpoint: GET /location
 *
 * Cada ubicación tiene:
 *   - name: nombre del lugar
 *   - type: tipo (Planet, Space station, etc.)
 *   - dimension: dimensión a la que pertenece
 *   - residents: array de URLs de residentes
 *
 * @returns {Promise<Array>} Lista de ubicaciones o [] si hay error
 */

export async function getLocations() {
    try {
        const response = await httpClient.get('/location');
        return response.data.results;
    } catch (error) {
        console.error('error al obtener locations', error);
        const { showToast } = await import('../utils/toast.js');
        showToast('Error al obtener ubicaciones', 'error');
        return [];
    }
}

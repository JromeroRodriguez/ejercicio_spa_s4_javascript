/**
 * =========================================================
 * store.js — Manejo de estado centralizado
 * =========================================================
 *
 * ¿Qué es un "store"?
 * Es un lugar único donde vive el estado de la aplicación.
 * En vez de que cada archivo maneje sus propios datos,
 * todos le preguntan y le dicen al store qué hacer.
 *
 * Flujo de datos:
 *   API  ──→  store.init()  ──→  localStorage
 *                                     │
 *   home.js  ←──  store.getAll()  ←──┘
 *                                     │
 *   CRUD  ──→  store.create/edit/delete  ──→  localStorage  ──→  re-render
 */

// ─────────────────────────────────────────────
// CLAVE que usamos para guardar en localStorage
// ─────────────────────────────────────────────
const STORAGE_KEY = 'spa_characters';

/**
 * Estado en memoria.
 * Este array vive mientras la pestaña está abierta.
 * Se llena desde localStorage al iniciar.
 *
 * @type {Array}
 */
let characters = [];

/**
 * ─────────────────────────────────────────────
 * INIT — Inicializa el store
 * ─────────────────────────────────────────────
 * Recibe los personajes de la API y los combina
 * con los personajes locales guardados en localStorage.
 *
 * Importante: los personajes de la API NO se guardan
 * en localStorage (son muchos y siempre están disponibles).
 * Solo guardamos los cambios locales (creados, editados, eliminados).
 *
 * @param {Array} apiCharacters - Personajes traídos de la API
 */
export function initStore(apiCharacters) {
    // Leemos el estado guardado en localStorage
    const saved = loadFromStorage();

    // IDs de personajes eliminados localmente
    // (para no volver a mostrar los que el usuario borró)
    const deletedIds = saved.deleted || [];

    // Personajes editados localmente
    // Es un objeto: { id: { nombre, especie, estado } }
    const editedMap = saved.edited || {};

    // Personajes creados localmente (los ficticios)
    const localCharacters = saved.local || [];

    // Combinamos: tomamos los de la API, aplicamos ediciones
    // y filtramos los eliminados
    characters = apiCharacters
        .filter(c => !deletedIds.includes(c.id))  // quitar eliminados
        .map(c => {
            // Si este personaje fue editado, aplicamos los cambios
            if (editedMap[c.id]) {
                return { ...c, ...editedMap[c.id] };
            }
            return c;
        });

    // Agregamos los personajes creados localmente al final
    characters = [...characters, ...localCharacters];
}

/**
 * ─────────────────────────────────────────────
 * GET ALL — Obtener todos los personajes
 * ─────────────────────────────────────────────
 * Retorna una copia del array para no modificar
 * el estado interno accidentalmente.
 *
 * @returns {Array}
 */
export function getAllCharacters() {
    return [...characters];
}

/**
 * ─────────────────────────────────────────────
 * CREATE — Crear personaje ficticio
 * ─────────────────────────────────────────────
 * Crea un nuevo personaje local con un ID único
 * y lo agrega al array en memoria y al localStorage.
 *
 * @param {Object} data - { name, species, gender, status, image }
 * @returns {Object} El personaje creado
 */
export function createCharacter(data) {
    // Creamos un ID único usando la fecha actual
    // Ejemplo: "local_1716900000000"
    const newCharacter = {
        id: `local_${Date.now()}`,   // ID con prefijo para distinguirlo
        local: true,                  // marca para saber que es ficticio
        name: data.name,
        species: data.species,
        gender: data.gender,
        status: data.status,
        image: data.image || 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
    };

    // Lo agregamos al array en memoria
    characters.push(newCharacter);

    // Lo guardamos en localStorage
    saveLocalCharacter(newCharacter);

    return newCharacter;
}

/**
 * ─────────────────────────────────────────────
 * UPDATE — Editar un personaje
 * ─────────────────────────────────────────────
 * Modifica nombre, especie y estado de un personaje.
 * Si es de la API, guarda los cambios en localStorage
 * bajo la clave "edited" para no tocar la fuente original.
 *
 * @param {string|number} id - ID del personaje
 * @param {Object} changes - { name, species, status }
 */
export function updateCharacter(id, changes) {
    // Buscamos el índice del personaje en el array
    const index = characters.findIndex(c => c.id == id);

    // Si no lo encontramos, salimos
    if (index === -1) return;

    // Actualizamos en memoria (spread: copiamos todo y pisamos los campos)
    characters[index] = { ...characters[index], ...changes };

    // Guardamos en localStorage según el tipo de personaje
    const saved = loadFromStorage();

    if (String(id).startsWith('local_')) {
        // Es ficticio: actualizamos dentro de la lista local
        saved.local = (saved.local || []).map(c =>
            c.id === id ? { ...c, ...changes } : c
        );
    } else {
        // Es de la API: guardamos solo los cambios en "edited"
        saved.edited = saved.edited || {};
        saved.edited[id] = { ...saved.edited[id], ...changes };
    }

    saveToStorage(saved);
}

/**
 * ─────────────────────────────────────────────
 * DELETE — Eliminar un personaje
 * ─────────────────────────────────────────────
 * Lo quita del array en memoria.
 * Si era de la API, guarda su ID en la lista "deleted"
 * para no volver a mostrarlo la próxima vez.
 *
 * @param {string|number} id - ID del personaje a eliminar
 */
export function deleteCharacter(id) {
    // Lo quitamos del array en memoria
    characters = characters.filter(c => c.id != id);

    const saved = loadFromStorage();

    if (String(id).startsWith('local_')) {
        // Era ficticio: lo quitamos de la lista local
        saved.local = (saved.local || []).filter(c => c.id !== id);
    } else {
        // Era de la API: guardamos su ID para no mostrarlo más
        saved.deleted = saved.deleted || [];
        if (!saved.deleted.includes(id)) {
            saved.deleted.push(id);
        }
    }

    saveToStorage(saved);
}

// ─────────────────────────────────────────────
// FUNCIONES PRIVADAS DE LOCALSTORAGE
// (solo se usan dentro de este archivo)
// ─────────────────────────────────────────────

/**
 * Lee el estado guardado en localStorage.
 * Si no hay nada guardado, retorna un objeto vacío.
 *
 * @returns {Object} { deleted: [], edited: {}, local: [] }
 */
function loadFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { deleted: [], edited: {}, local: [] };
    } catch {
        // Si el JSON está corrupto, retornamos estado limpio
        return { deleted: [], edited: {}, local: [] };
    }
}

/**
 * Guarda el estado completo en localStorage.
 *
 * @param {Object} state
 */
function saveToStorage(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/**
 * Agrega un personaje ficticio a la lista local en localStorage.
 *
 * @param {Object} character
 */
function saveLocalCharacter(character) {
    const saved = loadFromStorage();
    saved.local = saved.local || [];
    saved.local.push(character);
    saveToStorage(saved);
}
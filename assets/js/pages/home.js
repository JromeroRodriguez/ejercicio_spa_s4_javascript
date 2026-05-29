/**
 * =========================================================
 * home.js — Página principal con CRUD de personajes
 * =========================================================
 * CAMBIOS respecto al original:
 *  - Usa el store para manejar el estado
 *  - Delegación de eventos para editar y eliminar
 *  - Modal para crear y editar personajes
 *  - Feedback con toast en cada operación
 *
 * CONCEPTO CLAVE — Delegación de eventos:
 * En vez de poner un listener en cada botón (que podrían ser 20+),
 * ponemos UN SOLO listener en el contenedor padre.
 * Cuando el usuario hace clic, el evento "sube" (bubbles up)
 * hasta el contenedor, y ahí revisamos en qué elemento ocurrió.
 * Esto es más eficiente y funciona con elementos creados dinámicamente.
 */

import { loadHTML }                              from '../utils/helpers.js';
import { getCharacters }                         from '../services/api.js';
import { characterCard }                         from '../components/characterCard.js';
import { initStore, getAllCharacters,
         createCharacter, updateCharacter,
         deleteCharacter }                       from '../utils/store.js';
import { showToast }                             from '../utils/toast.js';

/**
 * Renderiza la página Home.
 * Es async porque espera la carga del HTML y de la API.
 */
export async function renderHome() {
    const content = document.getElementById('content');

    // Cargamos el HTML base de la vista
    content.innerHTML = await loadHTML('./assets/js/views/home.html');

    // Pedimos personajes a la API
    const apiCharacters = await getCharacters();

    // Inicializamos el store: combina API + localStorage
    initStore(apiCharacters);

    // Renderizamos todos los personajes
    renderCharacters();

    // Activamos los eventos de la página
    initHomeEvents();
}

/**
 * Renderiza el grid de personajes usando el store.
 * Se llama cada vez que hay un cambio (crear/editar/eliminar).
 */
function renderCharacters() {
    const container = document.getElementById('characters-container');
    const characters = getAllCharacters();

    if (characters.length === 0) {
        container.innerHTML = `<p class="error-msg">No hay personajes para mostrar.</p>`;
        return;
    }

    container.innerHTML = characters
        .map(c => characterCard(c))
        .join('');
}

/**
 * Inicializa todos los eventos de la página Home.
 * Se llama una vez después de que el HTML está cargado.
 */
function initHomeEvents() {

    // ── Delegación de eventos en el grid ─────────────────────
    // Un solo listener escucha todos los clics dentro del contenedor
    const container = document.getElementById('characters-container');

    container.addEventListener('click', event => {
        // event.target es el elemento exacto donde se hizo clic
        const button = event.target.closest('[data-action]');

        // Si el clic no fue en un botón con data-action, ignoramos
        if (!button) return;

        // Leemos qué acción y sobre qué personaje
        const action = button.dataset.action;
        const id     = button.dataset.id;

        if (action === 'delete') handleDelete(id);
        if (action === 'edit')   handleEdit(id);
    });

    // ── Botón "Crear personaje" ───────────────────────────────
    const btnCreate = document.getElementById('btn-create');
    btnCreate.addEventListener('click', () => showModal());

    // ── Formulario del modal ──────────────────────────────────
    const form = document.getElementById('character-form');
    form.addEventListener('submit', handleFormSubmit);

    // ── Botón cerrar modal ────────────────────────────────────
    const btnClose = document.getElementById('modal-close');
    btnClose.addEventListener('click', closeModal);

    // Cerrar modal si el usuario hace clic fuera del contenido
    const modal = document.getElementById('character-modal');
    modal.addEventListener('click', event => {
        if (event.target === modal) closeModal();
    });
}

/**
 * Maneja la eliminación de un personaje.
 * Pide confirmación antes de proceder (req. 4).
 *
 * @param {string|number} id
 */
function handleDelete(id) {
    // Confirmación del usuario (req. 4)
    const confirmed = window.confirm('¿Seguro que quieres eliminar este personaje?');
    if (!confirmed) return;

    // Le decimos al store que lo elimine
    deleteCharacter(id);

    // Actualizamos el DOM sin recargar
    renderCharacters();

    // Feedback al usuario (req. 8)
    showToast('Personaje eliminado correctamente', 'success');
}

/**
 * Maneja la edición de un personaje.
 * Abre el modal con los datos actuales pre-cargados.
 *
 * @param {string|number} id
 */
function handleEdit(id) {
    // Buscamos el personaje en el store
    const character = getAllCharacters().find(c => String(c.id) === String(id));
    if (!character) return;

    // Abrimos el modal en modo "editar", pasando los datos actuales
    showModal(character);
}

/**
 * Maneja el submit del formulario (crear o editar).
 * El formulario tiene un campo oculto "character-id"
 * que nos dice si estamos editando o creando.
 *
 * @param {Event} event
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Leemos los valores del formulario
    const id      = document.getElementById('character-id').value;
    const name    = document.getElementById('input-name').value.trim();
    const species = document.getElementById('input-species').value.trim();
    const gender  = document.getElementById('input-gender').value;
    const status  = document.getElementById('input-status').value;
    const image   = document.getElementById('input-image').value.trim();

    // Validación básica (req. 7)
    if (!name || !species) {
        showToast('Nombre y especie son obligatorios', 'error');
        return;
    }

    if (id) {
        // Tenemos ID → estamos EDITANDO
        updateCharacter(id, { name, species, status });
        showToast('Personaje actualizado correctamente', 'success');
    } else {
        // No hay ID → estamos CREANDO
        createCharacter({ name, species, gender, status, image });
        showToast('Personaje creado correctamente', 'success');
    }

    // Cerramos el modal y re-renderizamos
    closeModal();
    renderCharacters();
}

/**
 * Abre el modal de crear/editar.
 * Si se pasa un personaje, lo pre-carga para editar.
 * Si no se pasa nada, el formulario está vacío para crear.
 *
 * @param {Object|null} character - Personaje a editar (opcional)
 */
function showModal(character = null) {
    const modal = document.getElementById('character-modal');
    const title = document.getElementById('modal-title');
    const form  = document.getElementById('character-form');

    // Limpiamos el formulario antes de abrirlo
    form.reset();

    if (character) {
        // Modo editar: llenamos los campos con los datos actuales
        title.textContent = 'Editar Personaje';
        document.getElementById('character-id').value      = character.id;
        document.getElementById('input-name').value        = character.name;
        document.getElementById('input-species').value     = character.species;
        document.getElementById('input-gender').value      = character.gender || 'unknown';
        document.getElementById('input-status').value      = character.status;
        document.getElementById('input-image').value       = character.image || '';
    } else {
        // Modo crear: solo limpiamos el título y el ID oculto
        title.textContent = 'Crear Personaje Ficticio';
        document.getElementById('character-id').value = '';
    }

    // Mostramos el modal
    modal.classList.add('modal-visible');
}

/**
 * Cierra el modal.
 */
function closeModal() {
    const modal = document.getElementById('character-modal');
    modal.classList.remove('modal-visible');
}
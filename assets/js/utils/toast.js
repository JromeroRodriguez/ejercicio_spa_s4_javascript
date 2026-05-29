/**
 * =========================================================
 * toast.js — Sistema de notificaciones (feedback al usuario)
 * =========================================================
 * Un "toast" es ese mensajito que aparece brevemente
 * en la pantalla para informar algo, como en las apps móviles.
 *
 * ¿Por qué separarlo en su propio archivo?
 * Para reutilizarlo desde cualquier página sin duplicar código.
 *
 * Uso:
 *   showToast('Personaje eliminado', 'success')
 *   showToast('Error al cargar datos', 'error')
 *   showToast('Personaje actualizado', 'info')
 *
 * @param {string} message - Texto a mostrar
 * @param {'success'|'error'|'info'} type - Tipo de notificación
 * @param {number} duration - Milisegundos que dura (default: 3000)
 */
export function showToast(message, type = 'info', duration = 3000) {

    // Creamos el elemento del toast
    const toast = document.createElement('div');

    // Le agregamos las clases para el estilo
    toast.classList.add('toast', `toast-${type}`);
    toast.textContent = message;

    // Lo insertamos en el body
    document.body.appendChild(toast);

    // Pequeño delay para que la animación CSS funcione
    // (el navegador necesita un frame para registrar el elemento)
    requestAnimationFrame(() => {
        toast.classList.add('toast-visible');
    });

    // Después de "duration" ms, lo ocultamos y eliminamos del DOM
    setTimeout(() => {
        toast.classList.remove('toast-visible');

        // Esperamos que termine la animación de salida antes de eliminar
        toast.addEventListener('transitionend', () => toast.remove());
    }, duration);
}
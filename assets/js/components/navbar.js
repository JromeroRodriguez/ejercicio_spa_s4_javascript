/**
 * =========================================================
 * navbar.js — Componente de navegación
 * =========================================================
 * CAMBIOS: agregamos links a Episodios y Ubicaciones.
 * Todos los links tienen data-link para que el router SPA
 * los intercepte y navegue sin recargar la página.
 */

export async function loadNavbar() {
    const navbar = document.getElementById('navbar');

    navbar.innerHTML = `
        <nav class="navbar">
            <span class="navbar-brand"> Rick & Morty</span>
            <div class="navbar-links">
                <a href="/" data-link>Personajes</a>
                <a href="/episodes" data-link>Episodios</a>
                <a href="/locations" data-link>Ubicaciones</a>
                <a href="/contacts" data-link>Contacto</a>
                <a href="/about" data-link>Quiénes Somos</a>
            </div>
        </nav>
    `;

    // ← ESTO debe estar DENTRO de la función, no fuera
    const links = navbar.querySelectorAll('a[data-link]');
    links.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
            link.classList.add('nav-active');
        }
    });
} 
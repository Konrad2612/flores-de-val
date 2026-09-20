/**
 * =================================================================
 * ARCHIVO DE CONFIGURACIÓN DE LA CARTA Y ANIMAClÓN
 * =================================================================
 * Puedes modificar los textos, títulos y mensaje de la carta fácilmente
 * cambiando los valores entre comillas a continuación.
 */

const CONFIG = {
    // -----------------------------------------------------------------
    // 1. TEXTO DE LA CARTA PERSONALIZADA
    // -----------------------------------------------------------------
    letter: {
        // Título o saludo superior
        recipient: "Para ti, con todo mi corazón ✨",

        // Asunto / Título principal de la carta
        title: "Un detalle tan especial como tú",

        // Mensaje principal (puedes escribir varias líneas usando \n para saltos de línea)
        message: `Querida persona especial,

Quería regalarte un momento mágico lleno de flores que nunca se marchitan. 
Así como los girasoles buscan siempre la luz del sol, las rosas florecen con pasión y los tulipanes llenan de elegancia cada rincón, mi cariño por ti florece todos los días.

Gracias por iluminar mi mundo y por estar presente en los mejores momentos. Espero que este pequeño detalle dibuje una sonrisa enorme en tu rostro. 🌻🌹🌷`,

        // Firma final
        signature: "Con todo mi amor e infinito cariño,",

        // Nombre de quien envía la carta
        sender: "Tu persona especial ❤️",

        // Fecha que aparece en la esquina de la carta
        date: "Hoy y para siempre"
    },

    // -----------------------------------------------------------------
    // 2. CONFIGURACIÓN DE ANIMACIÓN DE FLORES (Duraciones en segundos)
    // -----------------------------------------------------------------
    animation: {
        // Tiempo que permanecen los girasoles amarillos antes de cambiar a rosas
        sunflowersDuration: 5,

        // Tiempo que permanecen las rosas antes de cambiar a tulipanes
        rosesDuration: 5,

        // Tiempo que permanecen los tulipanes antes de revelar el sobre
        tulipsDuration: 5,

        // Velocidad de la brisa / movimiento sutil
        breezeSpeed: 1,

        // Cantidad de polen / destellos flotantes en el atardecer
        sparklesCount: 50
    },

    // -----------------------------------------------------------------
    // 3. MÚSICA / SONIDO DE FONDO
    // -----------------------------------------------------------------
    audio: {
        // Canción: "Hasta donde te quiero" - La Rondalla de Saltillo
        // Nota: Coloca el archivo "hasta_donde_te_quiero.mp3" en esta misma carpeta,
        // o usa un enlace direct MP3 si lo tienes alojado en internet.
        musicUrl: "hasta_donde_te_quiero.mp3",
        
        // Enlace alternativo de respaldo si aún no has colocado el archivo local
        fallbackUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112185.mp3"
    }
};

// Exportar configuración globalmente
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

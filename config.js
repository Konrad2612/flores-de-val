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
        recipient: "Para ti, Princesa con la mirada de ocaso ✨",

        // Asunto / Título principal de la carta
        title: "Te quiero y quiero que veas que siempre debes ser querida de la forma más romantica...",

        // Mensaje principal (puedes escribir varias líneas usando \n para saltos de línea)
        message: `Querida Val,

Val... Mientras más te miro más me doy cuenta de lo mucho que me gustas de como tú sonrisa es lo más radiante que ví incluso más que el sol de medio día, de cómo tú dulce vos me endulza los días cada que la escucho y esa mirada que me tiene cautivó y extasiado, no negare que me encanta todo de ti desde tú dulce ama hasta tu ojazos tan profundos que me ilusionan... Bendito dios que me dió la dicha de observarte, de admirarte de entablar una que otra charla contigo.
Que en cada atardecer que veo no hago más que ver tus hermosos ojos reflejados en el que cada brisa del viento que rosa mi rostro no se compara al sentimiento que nace en mi con cada mensaje tuyo, que la más hermosa de las canciones no se asemeja a lo relajante de tu dulce voz, y cuando veo las obras de arte y lo mágico de esta ciudad quedan en nada cuando los comparo con la perfección de tu ser..
Tu única e inteligente, inigualable e incomparable no podría decirte más que me sigas dando la dicha de sacarte sonrisas y se que no somos nada y tal vez no lleguemos a serlo pero con solo saber que alguno de mis actos causa alegría en ti ,me siento realizado.... Me siento completo.
Sin etiquetas ni compromisos pero en mi ilusión espero algún día ser el que tenga el derecho de regalarte un ramo real, de darte un abrazo, de cuidarte de todo mal, el que te cubra en las lluvias y te mime cuando enfermes... El que te proteja como fiel guardian y caballero.
Espero te guste... Está carta la cual trate de hacerla más creativa este 21,Te quiero mucho Val. 🌻🌹🌷`,

        // Firma final
        signature: "quería darte flores reales pero como me dijiste que no saldrías recurrí al plan B jejeje,",

        // Nombre de quien envía la carta
        sender: "konrad Arana ❤️",

        // Fecha que aparece en la esquina de la carta
        date: "21 de septiembre de 2026"
    },

    // -----------------------------------------------------------------
    // 2. CONFIGURACIÓN DE ANIMACIÓN DE FLORES (Duraciones en segundos)
    // -----------------------------------------------------------------
    animation: {
        // Tiempo que permanecen los girasoles amarillos antes de cambiar a rosas
        sunflowersDuration: 6,

        // Tiempo que permanecen las rosas antes de cambiar a tulipanes
        rosesDuration: 6,

        // Tiempo que permanecen los tulipanes antes de revelar el sobre
        tulipsDuration: 6,

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

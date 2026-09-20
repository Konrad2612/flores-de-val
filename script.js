/**
 * =================================================================
 * JARDÍN DE ATARDECER - RAMO DE FLORES, CARTA Y PETALOS FLOTANTES
 * =================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. INICIALIZACIÓN Y ELEMENTOS DEL DOM
    // -------------------------------------------------------------
    const sunsetCanvas = document.getElementById('sunsetCanvas');
    const sunsetCtx = sunsetCanvas.getContext('2d');

    const flowerCanvas = document.getElementById('flowerCanvas');
    const flowerCtx = flowerCanvas.getContext('2d');

    // UI Elements
    const stageIcon = document.getElementById('stageIcon');
    const stageText = document.getElementById('stageText');
    const progressFill = document.getElementById('progressFill');

    const envelopeContainer = document.getElementById('envelopeContainer');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterModal = document.getElementById('letterModal');
    const closeLetterBtn = document.getElementById('closeLetterBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    // Letter Content Elements
    const letterDate = document.getElementById('letterDate');
    const letterRecipient = document.getElementById('letterRecipient');
    const letterTitle = document.getElementById('letterTitle');
    const letterBody = document.getElementById('letterBody');
    const letterSignature = document.getElementById('letterSignature');
    const letterSender = document.getElementById('letterSender');

    // Music Controls
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicText');
    const bgMusic = document.getElementById('bgMusic');

    // Ajustar resolución de Canvases (Optimizado para Escritorio y Móviles)
    let width, height;
    function resizeCanvases() {
        width = window.innerWidth;
        height = window.innerHeight;
        sunsetCanvas.width = width;
        sunsetCanvas.height = height;
        flowerCanvas.width = width;
        flowerCanvas.height = height;
    }
    window.addEventListener('resize', resizeCanvases);
    window.addEventListener('orientationchange', () => setTimeout(resizeCanvases, 200));
    resizeCanvases();

    // Cargar contenido inicial de la carta desde config.js
    function loadLetterData() {
        if (typeof CONFIG !== 'undefined' && CONFIG.letter) {
            letterDate.textContent = CONFIG.letter.date || "Hoy y para siempre";
            letterRecipient.textContent = CONFIG.letter.recipient || "Para alguien muy especial";
            letterTitle.textContent = CONFIG.letter.title || "Un detalle de mi corazón";
            letterBody.textContent = CONFIG.letter.message || "";
            letterSignature.textContent = CONFIG.letter.signature || "Con cariño,";
            letterSender.textContent = CONFIG.letter.sender || "Tu persona especial ❤️";
        }
    }
    loadLetterData();

    // -------------------------------------------------------------
    // 2. SISTEMA DE ATARDECER, POLEN Y PÉTALOS FLOTANTES
    // -------------------------------------------------------------
    const sparkles = [];
    const clouds = [];
    const floatingPetals = [];

    const sparkleCount = (CONFIG.animation && CONFIG.animation.sparklesCount) || 50;
    for (let i = 0; i < sparkleCount; i++) {
        sparkles.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.8,
            radius: Math.random() * 2.5 + 1,
            alpha: Math.random(),
            speedY: - (Math.random() * 0.4 + 0.1),
            speedX: Math.sin(Math.random() * Math.PI * 2) * 0.3,
            pulseSpeed: Math.random() * 0.02 + 0.008
        });
    }

    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * width,
            y: Math.random() * (height * 0.35),
            scale: Math.random() * 0.8 + 0.6,
            speed: Math.random() * 0.2 + 0.05,
            opacity: Math.random() * 0.25 + 0.15
        });
    }

    const petalColors = ['#ffcc00', '#e63946', '#ff4d6d', '#ffaa00', '#c77dff'];
    for (let i = 0; i < 35; i++) {
        floatingPetals.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 12 + 8,
            color: petalColors[i % petalColors.length],
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.03,
            speedY: Math.random() * 0.8 + 0.3,
            speedX: Math.random() * 0.6 - 0.3,
            wobble: Math.random() * Math.PI * 2
        });
    }

    function drawSunsetBackground() {
        const skyGradient = sunsetCtx.createLinearGradient(0, 0, 0, height);
        skyGradient.addColorStop(0.0, '#150628');
        skyGradient.addColorStop(0.35, '#3b123d');
        skyGradient.addColorStop(0.65, '#b83b5e');
        skyGradient.addColorStop(0.85, '#f07b3f');
        skyGradient.addColorStop(1.0, '#ffd460');

        sunsetCtx.fillStyle = skyGradient;
        sunsetCtx.fillRect(0, 0, width, height);

        clouds.forEach(cloud => {
            cloud.x += cloud.speed;
            if (cloud.x - 200 > width) cloud.x = -200;

            sunsetCtx.save();
            sunsetCtx.globalAlpha = cloud.opacity;
            sunsetCtx.fillStyle = '#ffb3a7';
            sunsetCtx.beginPath();
            sunsetCtx.arc(cloud.x, cloud.y, 40 * cloud.scale, 0, Math.PI * 2);
            sunsetCtx.arc(cloud.x + 35 * cloud.scale, cloud.y - 10 * cloud.scale, 50 * cloud.scale, 0, Math.PI * 2);
            sunsetCtx.arc(cloud.x + 80 * cloud.scale, cloud.y, 40 * cloud.scale, 0, Math.PI * 2);
            sunsetCtx.fill();
            sunsetCtx.restore();
        });

        sparkles.forEach(s => {
            s.y += s.speedY;
            s.x += s.speedX + Math.sin(Date.now() * 0.001 + s.radius) * 0.2;
            s.alpha += s.pulseSpeed;

            if (s.alpha > 1 || s.alpha < 0.1) s.pulseSpeed = -s.pulseSpeed;
            if (s.y < -10) {
                s.y = height + 10;
                s.x = Math.random() * width;
            }

            sunsetCtx.save();
            sunsetCtx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
            sunsetCtx.fillStyle = '#fff4cc';
            sunsetCtx.shadowColor = '#ffaa00';
            sunsetCtx.shadowBlur = 8;
            sunsetCtx.beginPath();
            sunsetCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            sunsetCtx.fill();
            sunsetCtx.restore();
        });

        const isLetterOpen = !letterModal.classList.contains('hidden');
        floatingPetals.forEach(p => {
            p.y += p.speedY;
            p.x += Math.sin(Date.now() * 0.001 + p.wobble) * 0.5 + p.speedX;
            p.rotation += p.rotSpeed;

            if (p.y > height + 20) {
                p.y = -20;
                p.x = Math.random() * width;
            }

            sunsetCtx.save();
            sunsetCtx.translate(p.x, p.y);
            sunsetCtx.rotate(p.rotation);
            sunsetCtx.globalAlpha = isLetterOpen ? 0.85 : 0.45;
            sunsetCtx.fillStyle = p.color;
            sunsetCtx.shadowColor = 'rgba(0,0,0,0.3)';
            sunsetCtx.shadowBlur = 4;

            sunsetCtx.beginPath();
            sunsetCtx.moveTo(0, 0);
            sunsetCtx.quadraticCurveTo(p.size * 0.6, -p.size * 0.5, 0, -p.size);
            sunsetCtx.quadraticCurveTo(-p.size * 0.6, -p.size * 0.5, 0, 0);
            sunsetCtx.fill();
            sunsetCtx.restore();
        });
    }

    // -------------------------------------------------------------
    // 3. MOTOR DE RENDERIZADO DEL RAMO Y FLORES
    // -------------------------------------------------------------
    let currentStage = 0;
    let stageProgress = 0;
    let stageStartTime = Date.now();

    const isMobile = width < 600;
    const STAGE_CONFIGS = [
        {
            name: "Girasoles radiantes como tus ojos",
            icon: "🌻",
            duration: (CONFIG.animation && CONFIG.animation.sunflowersDuration * 1000) || 5000,
            count: isMobile ? 5 : 7
        },
        {
            name: "Rosas hermosas como tu sonrisa",
            icon: "🌹",
            duration: (CONFIG.animation && CONFIG.animation.rosesDuration * 1000) || 5000,
            count: isMobile ? 6 : 9
        },
        {
            name: "Tulipanes unicos como tu",
            icon: "🌷",
            duration: (CONFIG.animation && CONFIG.animation.tulipsDuration * 1000) || 5000,
            count: isMobile ? 7 : 11
        }
    ];

    let flowers = [];

    function generateFlowersForStage(stageIndex) {
        flowers = [];
        const config = STAGE_CONFIGS[stageIndex];
        if (!config) return;

        const count = config.count;
        const centerX = width / 2;
        const bouquetWidth = isMobile ? width * 0.75 : 480;

        for (let i = 0; i < count; i++) {
            const spreadRatio = (i - (count - 1) / 2) / (count / 2);
            const targetX = centerX + spreadRatio * (bouquetWidth * 0.42);
            const targetHeight = Math.random() * (isMobile ? 100 : 160) + (isMobile ? 180 : 250);
            const flowerSize = Math.random() * 15 + (stageIndex === 0 ? (isMobile ? 40 : 52) : (isMobile ? 35 : 45));

            flowers.push({
                x: targetX,
                originX: centerX + (Math.random() * 20 - 10),
                baseY: height - (isMobile ? 30 : 50),
                targetHeight: targetHeight,
                size: flowerSize,
                growth: 0,
                bloomProgress: 0,
                colorVariant: i % 3,
                swayOffset: Math.random() * Math.PI * 2
            });
        }
    }

    function drawBouquetWrapper(ctx) {
        const centerX = width / 2;
        const baseY = height;
        const wrapperWidth = isMobile ? width * 0.65 : 320;
        const wrapperHeight = isMobile ? 170 : 220;

        ctx.save();

        ctx.fillStyle = '#c68b59';
        ctx.beginPath();
        ctx.moveTo(centerX - wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.lineTo(centerX + wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.lineTo(centerX + wrapperWidth * 0.25, baseY);
        ctx.lineTo(centerX - wrapperWidth * 0.25, baseY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#b57a48';
        ctx.beginPath();
        ctx.moveTo(centerX - wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.lineTo(centerX, baseY - wrapperHeight * 0.2);
        ctx.lineTo(centerX - wrapperWidth * 0.25, baseY);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#d49b6a';
        ctx.beginPath();
        ctx.moveTo(centerX + wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.lineTo(centerX, baseY - wrapperHeight * 0.2);
        ctx.lineTo(centerX + wrapperWidth * 0.25, baseY);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX - wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.quadraticCurveTo(centerX, baseY - wrapperHeight * 0.75, centerX + wrapperWidth * 0.55, baseY - wrapperHeight * 0.85);
        ctx.stroke();

        const knotY = baseY - wrapperHeight * 0.35;
        const bowSize = isMobile ? 28 : 38;

        ctx.fillStyle = '#9e2a2b';
        ctx.beginPath();
        ctx.moveTo(centerX, knotY);
        ctx.lineTo(centerX - bowSize * 0.8, knotY + bowSize * 1.5);
        ctx.lineTo(centerX - bowSize * 0.3, knotY + bowSize * 1.6);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(centerX, knotY);
        ctx.lineTo(centerX + bowSize * 0.8, knotY + bowSize * 1.5);
        ctx.lineTo(centerX + bowSize * 0.3, knotY + bowSize * 1.6);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#d90429';
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 8;

        ctx.beginPath();
        ctx.ellipse(centerX - bowSize * 0.8, knotY - 5, bowSize, bowSize * 0.55, -0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(centerX + bowSize * 0.8, knotY - 5, bowSize, bowSize * 0.55, 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ff2a4b';
        ctx.beginPath();
        ctx.arc(centerX, knotY - 5, bowSize * 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    function drawSunflower(ctx, x, headY, size, bloomProgress, sway) {
        if (bloomProgress <= 0) return;
        ctx.save();
        ctx.translate(x + sway, headY);
        ctx.scale(bloomProgress, bloomProgress);

        const petalCount = 20;
        const petalLength = size * 0.85;
        const petalWidth = size * 0.28;

        for (let layer = 0; layer < 2; layer++) {
            const layerScale = layer === 0 ? 1 : 0.85;
            const color = layer === 0 ? '#ffcc00' : '#ffa500';

            for (let i = 0; i < petalCount; i++) {
                const angle = (i * Math.PI * 2) / petalCount + (layer * 0.15);
                ctx.save();
                ctx.rotate(angle);
                ctx.fillStyle = color;
                ctx.shadowColor = 'rgba(255, 140, 0, 0.4)';
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(petalWidth, -petalLength * 0.5 * layerScale, 0, -petalLength * layerScale);
                ctx.quadraticCurveTo(-petalWidth, -petalLength * 0.5 * layerScale, 0, 0);
                ctx.fill();
                ctx.restore();
            }
        }

        const centerRadius = size * 0.38;
        ctx.fillStyle = '#3d2008';
        ctx.beginPath();
        ctx.arc(0, 0, centerRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#d48c00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, centerRadius * 0.85, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    function drawRose(ctx, x, headY, size, bloomProgress, sway, colorVariant) {
        if (bloomProgress <= 0) return;
        ctx.save();
        ctx.translate(x + sway, headY);
        ctx.scale(bloomProgress, bloomProgress);

        const roseColors = [
            { main: '#e63946', inner: '#b7094c', dark: '#800f2f' },
            { main: '#ff4d6d', inner: '#c77dff', dark: '#590d22' },
            { main: '#ff758f', inner: '#ff8fa3', dark: '#a4133c' }
        ];
        const colors = roseColors[colorVariant % roseColors.length];

        const petalLayers = 5;
        for (let l = petalLayers; l >= 1; l--) {
            const radius = (size * 0.65) * (l / petalLayers);
            const count = l * 3;

            for (let i = 0; i < count; i++) {
                const angle = (i * Math.PI * 2) / count + (l * 0.4);
                ctx.save();
                ctx.rotate(angle);
                ctx.fillStyle = l % 2 === 0 ? colors.main : colors.inner;
                ctx.shadowColor = colors.dark;
                ctx.shadowBlur = 4;
                ctx.beginPath();
                ctx.arc(0, -radius * 0.3, radius, 0, Math.PI * 1.2);
                ctx.fill();
                ctx.restore();
            }
        }

        ctx.fillStyle = colors.dark;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    function drawTulip(ctx, x, headY, size, bloomProgress, sway, colorVariant) {
        if (bloomProgress <= 0) return;
        ctx.save();
        ctx.translate(x + sway, headY);
        ctx.scale(bloomProgress, bloomProgress);

        const tulipColors = [
            { base: '#ffb703', top: '#ff0054' },
            { base: '#ff4d6d', top: '#ff8fa3' },
            { base: '#ffea00', top: '#ff9e00' }
        ];
        const col = tulipColors[colorVariant % tulipColors.length];

        const widthP = size * 0.6;
        const heightP = size * 0.9;

        ctx.fillStyle = col.top;
        ctx.beginPath();
        ctx.ellipse(0, -heightP * 0.3, widthP * 0.45, heightP * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        const gradLeft = ctx.createLinearGradient(-widthP, 0, widthP, -heightP);
        gradLeft.addColorStop(0, col.base);
        gradLeft.addColorStop(1, col.top);

        ctx.fillStyle = gradLeft;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-widthP * 0.9, -heightP * 0.5, -widthP * 0.3, -heightP);
        ctx.quadraticCurveTo(0, -heightP * 0.5, 0, 0);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(widthP * 0.9, -heightP * 0.5, widthP * 0.3, -heightP);
        ctx.quadraticCurveTo(0, -heightP * 0.5, 0, 0);
        ctx.fill();

        ctx.fillStyle = col.base;
        ctx.beginPath();
        ctx.ellipse(0, -heightP * 0.35, widthP * 0.35, heightP * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    function drawStemAndLeaves(ctx, f, sway) {
        const currentStemHeight = f.targetHeight * f.growth;
        const headY = f.baseY - currentStemHeight;

        ctx.save();
        ctx.strokeStyle = '#2d6a4f';
        ctx.lineWidth = isMobile ? 4 : 6;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(f.originX, f.baseY);
        const controlX = (f.originX + f.x) / 2 + sway * 0.5;
        const controlY = f.baseY - currentStemHeight * 0.5;
        ctx.quadraticCurveTo(controlX, controlY, f.x + sway, headY);
        ctx.stroke();

        if (f.growth > 0.4) {
            const leafProgress = Math.min(1, (f.growth - 0.4) / 0.6);
            ctx.fillStyle = '#40916c';

            ctx.save();
            ctx.translate((f.originX + f.x) / 2 + sway * 0.25, f.baseY - currentStemHeight * 0.35);
            ctx.scale(leafProgress, leafProgress);
            ctx.beginPath();
            ctx.quadraticCurveTo(-35, -15, -45, -40);
            ctx.quadraticCurveTo(-15, -30, 0, 0);
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.translate((f.originX + f.x) / 2 + sway * 0.4, f.baseY - currentStemHeight * 0.55);
            ctx.scale(leafProgress, leafProgress);
            ctx.beginPath();
            ctx.quadraticCurveTo(35, -15, 45, -40);
            ctx.quadraticCurveTo(15, -30, 0, 0);
            ctx.fill();
            ctx.restore();
        }

        ctx.restore();
        return headY;
    }

    // -------------------------------------------------------------
    // 4. BUCLE PRINCIPAL DE ANIMACIÓN
    // -------------------------------------------------------------
    generateFlowersForStage(0);

    function animate() {
        drawSunsetBackground();
        flowerCtx.clearRect(0, 0, width, height);

        const now = Date.now();
        const stageConfig = STAGE_CONFIGS[currentStage];

        if (stageConfig) {
            const elapsed = now - stageStartTime;
            stageProgress = Math.min(1, elapsed / stageConfig.duration);
            progressFill.style.width = `${(stageProgress * 100)}%`;

            const time = now * 0.002;

            flowers.forEach((f, idx) => {
                const growthDelay = (idx / flowers.length) * 0.3;
                f.growth = Math.min(1, Math.max(0, (stageProgress - growthDelay) / 0.4));
                f.bloomProgress = Math.min(1, Math.max(0, (stageProgress - growthDelay - 0.3) / 0.3));

                const sway = Math.sin(time + f.swayOffset) * 12 * (CONFIG.animation?.breezeSpeed || 1);
                const headY = drawStemAndLeaves(flowerCtx, f, sway);

                if (currentStage === 0) {
                    drawSunflower(flowerCtx, f.x, headY, f.size, f.bloomProgress, sway, f.colorVariant);
                } else if (currentStage === 1) {
                    drawRose(flowerCtx, f.x, headY, f.size, f.bloomProgress, sway, f.colorVariant);
                } else if (currentStage === 2) {
                    drawTulip(flowerCtx, f.x, headY, f.size, f.bloomProgress, sway, f.colorVariant);
                }
            });

            drawBouquetWrapper(flowerCtx);

            if (stageProgress >= 1) {
                currentStage++;
                if (currentStage < STAGE_CONFIGS.length) {
                    stageStartTime = Date.now();
                    const nextConfig = STAGE_CONFIGS[currentStage];
                    stageIcon.textContent = nextConfig.icon;
                    stageText.textContent = nextConfig.name;
                    generateFlowersForStage(currentStage);
                } else {
                    finishFlowerSequence();
                }
            }
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    function finishFlowerSequence() {
        stageText.textContent = "¡Tu Carta está Lista! ✉️";
        stageIcon.textContent = "💖";
        progressFill.style.width = "100%";
        envelopeContainer.classList.remove('hidden');
    }

    // -------------------------------------------------------------
    // 5. SOBRE Y CARTA INTERACTIVA CON ANIMACIÓN DE APERTURA Y CIERRE COMPLETO
    // -------------------------------------------------------------
    function playOpenSound() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.4);

            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        } catch(e) {}
    }

    const envelope = envelopeWrapper.querySelector('.envelope');

    // Abrir sobre y mostrar carta
    envelopeWrapper.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            playOpenSound();
            setTimeout(() => {
                letterModal.classList.remove('hidden');
                letterModal.classList.remove('closing');
            }, 500);
        } else {
            letterModal.classList.remove('hidden');
            letterModal.classList.remove('closing');
        }
    });

    // CIERRE COMPLETO Y ELEGANTE DE LA CARTA Y EL SOBRE
    function closeLetterWithAnimation() {
        if (letterModal.classList.contains('hidden')) return;

        // 1. Iniciar animación de plegado de la carta
        letterModal.classList.add('closing');

        // 2. Transición del sobre cerrando la solapa y regresando la cera
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 200);

        // 3. Ocultar completamente el modal al finalizar la transición
        setTimeout(() => {
            letterModal.classList.add('hidden');
            letterModal.classList.remove('closing');
        }, 550);
    }

    closeLetterBtn.addEventListener('click', closeLetterWithAnimation);
    modalBackdrop.addEventListener('click', closeLetterWithAnimation);

    // -------------------------------------------------------------
    // 6. CONTROL DE MÚSICA
    // -------------------------------------------------------------
    let isPlayingAudio = false;

    if (CONFIG.audio) {
        bgMusic.src = CONFIG.audio.musicUrl || "hasta_donde_te_quiero.mp3";
    }

    function toggleMusic() {
        if (isPlayingAudio) {
            bgMusic.pause();
            isPlayingAudio = false;
            musicIcon.textContent = '🎵';
            musicText.textContent = 'Música: Hasta donde te quiero';
            musicToggleBtn.style.borderColor = 'rgba(255, 215, 0, 0.4)';
        } else {
            bgMusic.play().then(() => {
                isPlayingAudio = true;
                musicIcon.textContent = '🎶';
                musicText.textContent = 'Sonando: Hasta donde te quiero';
                musicToggleBtn.style.borderColor = '#ffcc00';
            }).catch(err => {
                if (CONFIG.audio && CONFIG.audio.fallbackUrl && bgMusic.src !== CONFIG.audio.fallbackUrl) {
                    bgMusic.src = CONFIG.audio.fallbackUrl;
                    bgMusic.play().then(() => {
                        isPlayingAudio = true;
                        musicIcon.textContent = '🎶';
                        musicText.textContent = 'Sonando: Hasta donde te quiero';
                    }).catch(e => console.log("Permiso de audio requerido:", e));
                }
            });
        }
    }

    musicToggleBtn.addEventListener('click', toggleMusic);

    document.body.addEventListener('click', function autoPlayOnce() {
        if (!isPlayingAudio && CONFIG.audio && CONFIG.audio.autoplay) {
            toggleMusic();
        }
        document.body.removeEventListener('click', autoPlayOnce);
    }, { once: true });
});

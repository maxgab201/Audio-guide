// --- 1. DATOS DE LAS UBICACIONES ---
const locations = [
    {
        id: 1,
        name: "Estación Ranelagh",
        coords: [-34.7946, -58.1733],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Estaci%C3%B3n_Ranelagh_2012.jpg/640px-Estaci%C3%B3n_Ranelagh_2012.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Historic British railway station.",
        audioText: "Welcome to Estación de Ranelagh. Famous for its English architecture and beautiful park."
    },
    {
        id: 2,
        name: "Centro Ranelagh",
        coords: [-34.7935, -58.1720],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-tree",
        brief: "Charming garden-city center.",
        audioText: "You are in Ranelagh Center. A peaceful garden city with many trees."
    },
    {
        id: 3,
        name: "Museo del Golf",
        coords: [-34.7915, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Roberto_De_Vicenzo_1967.jpg/400px-Roberto_De_Vicenzo_1967.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-golf-ball",
        brief: "Dedicated to Roberto De Vicenzo.",
        audioText: "The Golf Museum honors the legacy of legend Roberto De Vicenzo."
    },
    {
        id: 4,
        name: "Museo del Vidrio",
        coords: [-34.7650, -58.2100], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Glass_blowing_at_the_Corning_Museum_of_Glass.jpg/640px-Glass_blowing_at_the_Corning_Museum_of_Glass.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-wine-glass-alt",
        brief: "Berazategui, Capital of Glass.",
        audioText: "Museum of Glass. See artistic glass and learn about our industrial history."
    },
    {
        id: 5,
        name: "Museo Histórico",
        coords: [-34.7705, -58.2055],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Municipalidad_de_Berazategui.jpg/640px-Municipalidad_de_Berazategui.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-landmark",
        brief: "Preserving local heritage.",
        audioText: "Regional Historical Museum. Protecting the memory of Berazategui."
    },
    {
        id: 6,
        name: "Estación Hudson",
        coords: [-34.7939, -58.1483],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estaci%C3%B3n_Hudson_2.jpg/640px-Estaci%C3%B3n_Hudson_2.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-subway",
        brief: "Main connection for Hudson.",
        audioText: "Hudson Station. Key transport link connected to the malt industry."
    },
    {
        id: 7,
        name: "Estación Plátanos",
        coords: [-34.7800, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Stop between Berazategui & Hudson.",
        audioText: "Plátanos Station. Connecting the residential neighborhoods."
    },
    {
        id: 8,
        name: "Fábrica Rigolleau",
        coords: [-34.7636, -58.2114],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg/640px-Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-industry",
        brief: "Iconic glass factory.",
        // NOMBRE SIMPLE PARA EL ARCHIVO MP3
        mp3File: "rigolleau.mp3", 
        audioText: ""
    },
    {
        id: 9,
        name: "Taller Bustillo",
        coords: [-34.7850, -58.1950],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alejandro_Bustillo.jpg/400px-Alejandro_Bustillo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-drafting-compass",
        brief: "Architect Bustillo's studio.",
        audioText: "Bustillo Workshop. Studio of one of Argentina's greatest architects."
    },
    {
        id: 10,
        name: "Los Privilegiados",
        coords: [-34.7750, -58.1900],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-swimmer",
        brief: "Sports and nature complex.",
        audioText: "Los Privilegiados Complex. Sports, swimming, and nature activities."
    }
];

// --- 2. INICIALIZACIÓN ---
window.onload = function() {
    
    const map = L.map('map', { zoomControl: false, tap: true }).setView([-34.7850, -58.1800], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap', maxZoom: 19, minZoom: 11
    }).addTo(map);

    const synth = window.speechSynthesis;
    const audioPlayer = new Audio();
    let progressInterval = null;

    // Manejo de errores de imagen
    window.handleImgError = function(img) { img.style.display = 'none'; };

    // --- LÓGICA DE REPRODUCCIÓN (TTS + MP3) ---
    window.togglePlayer = function(mp3File, text, btnId, sliderId, errorId) {
        const btn = document.getElementById(btnId);
        const icon = btn.querySelector('i');
        const slider = document.getElementById(sliderId);
        const errorMsg = document.getElementById(errorId);

        // Ocultar errores previos
        if(errorMsg) errorMsg.style.display = 'none';

        // Si hay algo sonando (MP3 o Voz), pausar todo
        const isMp3Playing = !audioPlayer.paused;
        const isTtsPlaying = synth.speaking;

        if (isMp3Playing || isTtsPlaying) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            synth.cancel();
            stopProgress(slider);
            
            // Si apreté el mismo botón, era solo para pausar. Terminamos.
            if (btn.classList.contains('active')) {
                resetUI();
                return;
            }
        }

        resetUI();
        btn.classList.add('active');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');

        // CASO A: REPRODUCIR MP3
        if (mp3File && mp3File !== 'undefined' && mp3File !== '') {
            audioPlayer.src = mp3File;
            
            const playPromise = audioPlayer.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Error reproduciendo audio:", error);
                    // Mostrar error visualmente
                    if(errorMsg) {
                        errorMsg.style.display = 'block';
                        errorMsg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> No se pudo cargar: <b>${mp3File}</b>`;
                    }
                    resetUI();
                });
            }

            audioPlayer.ontimeupdate = function() {
                if (audioPlayer.duration) {
                    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                    slider.value = percent;
                    updateSliderVisual(slider);
                }
            };
            audioPlayer.onended = function() { resetUI(); };
        } 
        // CASO B: REPRODUCIR VOZ ROBÓTICA (TTS)
        else {
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'en-US'; u.rate = 0.9;
            const estimatedDuration = Math.max(text.length / 14, 2); 
            u.onend = function() { resetUI(); };
            startSimulatedProgress(slider, estimatedDuration);
            synth.speak(u);
        }
    };

    function startSimulatedProgress(slider, durationSec) {
        if(progressInterval) clearInterval(progressInterval);
        let currentSec = 0;
        slider.value = 0;
        progressInterval = setInterval(() => {
            currentSec += 0.1;
            const percent = (currentSec / durationSec) * 100;
            if (percent >= 100) {
                slider.value = 100;
                clearInterval(progressInterval);
            } else {
                slider.value = percent;
            }
            updateSliderVisual(slider);
        }, 100);
    }

    function stopProgress(slider) {
        if(progressInterval) clearInterval(progressInterval);
        if(slider) {
            slider.value = 0;
            updateSliderVisual(slider);
        }
        audioPlayer.ontimeupdate = null;
        audioPlayer.onended = null;
    }

    function updateSliderVisual(slider) {
        const val = slider.value;
        slider.style.background = `linear-gradient(to right, #FF5722 ${val}%, #e0e0e0 ${val}%)`;
    }

    function resetUI() {
        if(progressInterval) clearInterval(progressInterval);
        audioPlayer.pause();
        document.querySelectorAll('.play-pause-main').forEach(b => {
            b.classList.remove('active');
            b.querySelector('i').className = 'fas fa-play';
        });
        document.querySelectorAll('.progress-bar').forEach(s => {
            s.value = 0;
            s.style.background = '#e0e0e0';
        });
    }

    map.on('popupclose', function() {
        synth.cancel();
        audioPlayer.pause();
        resetUI();
    });

    locations.forEach(loc => {
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin"></div>`,
            iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -45]
        });

        const uniqueBtnId = `play-${loc.id}`;
        const uniqueSliderId = `slider-${loc.id}`;
        const uniqueErrorId = `error-${loc.id}`;
        const mp3Arg = loc.mp3File ? loc.mp3File : '';

        const popupContent = `
            <div class="popup-card">
                <div class="media-container">
                    <div class="fallback-visual fallback-${loc.categoryType}">
                        <i class="fas ${loc.fallbackIcon} fallback-icon"></i>
                        <span class="fallback-text">${loc.categoryType}</span>
                    </div>
                    <img src="${loc.img}" class="popup-img-element" alt="${loc.name}" onerror="handleImgError(this)">
                </div>
                <div class="popup-details">
                    <h3 class="popup-title">${loc.name}</h3>
                    <p class="popup-desc">${loc.brief}</p>
                </div>
                <div class="player-ui">
                    <div class="progress-container">
                        <input type="range" id="${uniqueSliderId}" class="progress-bar" value="0" min="0" max="100" disabled>
                    </div>
                    <div id="${uniqueErrorId}" class="audio-error-msg"></div>
                    <div class="controls-row">
                        <button class="ctrl-btn"><i class="fas fa-step-backward"></i></button>
                        <button id="${uniqueBtnId}" class="ctrl-btn play-pause-main" 
                            onclick="togglePlayer('${mp3Arg}', \`${loc.audioText.replace(/'/g, "\\'")}\`, '${uniqueBtnId}', '${uniqueSliderId}', '${uniqueErrorId}')">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="ctrl-btn"><i class="fas fa-step-forward"></i></button>
                    </div>
                </div>
            </div>
        `;

        L.marker(loc.coords, {icon: customIcon})
         .addTo(map)
         .bindPopup(popupContent);
    });
};


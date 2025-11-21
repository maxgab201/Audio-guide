// --- DATOS DE LAS UBICACIONES ---
const locations = [
    // --- LUGARES ORIGINALES ACTUALIZADOS ---
    {
        id: 1,
        name: "Estación Ranelagh",
        coords: [-34.7946, -58.1733],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Estaci%C3%B3n_Ranelagh_2012.jpg/640px-Estaci%C3%B3n_Ranelagh_2012.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Estación de tren histórica de estilo inglés.",
        mp3File: "Cascante Ranelagh Railway Station.m4a",
        audioText: ""
    },
    {
        id: 2,
        name: "Centro Ranelagh",
        coords: [-34.7935, -58.1720],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-tree",
        brief: "Centro residencial de ciudad jardín.",
        audioText: "You are in Ranelagh Center. A peaceful garden city with many trees."
    },
    {
        id: 3,
        name: "Museo del Golf",
        coords: [-34.7915, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Roberto_De_Vicenzo_1967.jpg/400px-Roberto_De_Vicenzo_1967.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-golf-ball",
        brief: "Dedicado a Roberto De Vicenzo.",
        mp3File: "Ranelagh Golf Club Triviño.m4a",
        audioText: ""
    },
    {
        id: 4,
        name: "Museo del Vidrio",
        coords: [-34.7650, -58.2100], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Glass_blowing_at_the_Corning_Museum_of_Glass.jpg/640px-Glass_blowing_at_the_Corning_Museum_of_Glass.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-wine-glass-alt",
        brief: "Berazategui, Capital del Vidrio.",
        mp3File: "Museo del Vidrio Capaldo.m4a",
        audioText: ""
    },
    {
        id: 5,
        name: "Museo Histórico",
        coords: [-34.7705, -58.2055],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Municipalidad_de_Berazategui.jpg/640px-Municipalidad_de_Berazategui.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-landmark",
        brief: "Preservando el patrimonio local.",
        audioText: "Regional Historical Museum. Protecting the memory of Berazategui."
    },
    {
        id: 6,
        name: "Estación Hudson",
        coords: [-34.7939, -58.1483],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estaci%C3%B3n_Hudson_2.jpg/640px-Estaci%C3%B3n_Hudson_2.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-subway",
        brief: "Conexión principal de Hudson.",
        audioText: "Hudson Station. Key transport link connected to the malt industry."
    },
    {
        id: 7,
        name: "Estación Plátanos",
        coords: [-34.7800, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Parada entre Berazategui y Hudson.",
        mp3File: "Plátanos Station-Corral.m4a",
        audioText: ""
    },
    {
        id: 8,
        name: "Fábrica Rigolleau",
        coords: [-34.7636, -58.2114],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg/640px-Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-industry",
        brief: "Fábrica de vidrio icónica.",
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
        brief: "Estudio del arquitecto Bustillo.",
        mp3File: "Plátanos Cesar Bustillo and the world homo Fajre.m4a",
        audioText: ""
    },
    {
        id: 10,
        name: "Los Privilegiados",
        coords: [-34.7750, -58.1900],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-swimmer",
        brief: "Complejo deportivo y natural.",
        mp3File: "Platanos Los privilegiados Papp.m4a",
        audioText: ""
    },
    // --- NUEVAS UBICACIONES ---
    {
        id: 11,
        name: "Club Ducilo",
        coords: [-34.7768, -58.2367],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Entrada_Club_Ducilo.jpg/640px-Entrada_Club_Ducilo.jpg",
        categoryType: "city",
        fallbackIcon: "fa-users",
        brief: "Club social y deportivo histórico.",
        mp3File: "Ducilo-D'Elia.m4a",
        audioText: ""
    },
    {
        id: 12,
        name: "Centro De Vicenzo",
        coords: [-34.7623, -58.2105],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Centro_de_Actividades_Roberto_De_Vicenzo.jpg/640px-Centro_de_Actividades_Roberto_De_Vicenzo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-building",
        brief: "Centro de actividades culturales.",
        mp3File: "Centro de actividades R. de Vicenzo Sama.m4a",
        audioText: ""
    },
    {
        id: 13,
        name: "Centro Cívico / Parque",
        coords: [-34.7608, -58.2133],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Berazategui_-_Edificio_Inteligente.jpg/640px-Berazategui_-_Edificio_Inteligente.jpg",
        categoryType: "city",
        fallbackIcon: "fa-city",
        brief: "Corazón administrativo y espacio verde.",
        mp3File: "civic cultural centre and linear park Perez Pasquini.m4a",
        audioText: ""
    },
    {
        id: 14,
        name: "Familia Boyer",
        coords: [-34.7930, -58.1750],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-home",
        brief: "Historia de la familia Boyer.",
        mp3File: "Boyer.m4a",
        audioText: ""
    },
    {
        id: 15,
        name: "Localidad El Pato",
        coords: [-34.8670, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ruta_Provincial_36_-_El_Pato.jpg/640px-Ruta_Provincial_36_-_El_Pato.jpg",
        categoryType: "city",
        fallbackIcon: "fa-map-marker-alt",
        brief: "Historia de la localidad.",
        mp3File: "el pato 1 Staniscia.m4a",
        audioText: ""
    },
    {
        id: 16,
        name: "Iglesia Villa España",
        coords: [-34.7790, -58.2010], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Parroquia_Nuestra_Se%C3%B1ora_de_Luj%C3%A1n_%28Villa_Espa%C3%B1a%29.jpg/640px-Parroquia_Nuestra_Se%C3%B1ora_de_Luj%C3%A1n_%28Villa_Espa%C3%B1a%29.jpg", 
        categoryType: "museum",
        fallbackIcon: "fa-church",
        brief: "Parroquia Ntra. Sra. de Luján.",
        mp3File: "Fiona Chen Parroquia Nuestra Señora de Luján.m4a",
        audioText: ""
    },
    {
        id: 17,
        name: "Estación Gutiérrez",
        coords: [-34.8450, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Estaci%C3%B3n_Gutierrez.jpg/640px-Estaci%C3%B3n_Gutierrez.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Estación Juan María Gutiérrez.",
        mp3File: "Gutierrez Station Square Fredes.m4a",
        audioText: ""
    },
    {
        id: 18,
        name: "Rotonda Gutiérrez",
        coords: [-34.8420, -58.1890],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rotonda_Alpargatas.jpg/640px-Rotonda_Alpargatas.jpg",
        categoryType: "city",
        fallbackIcon: "fa-road",
        brief: "Entrada a Gutiérrez / Alpargatas.",
        mp3File: "Juna Maria Gutiérrez - Boyer.m4a",
        audioText: ""
    },
    {
        id: 19,
        name: "Museo Histórico Hudson",
        coords: [-34.7945, -58.1490], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Museo_Historico_de_Hudson.jpg/640px-Museo_Historico_de_Hudson.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-university",
        brief: "Historia local en la antigua estación.",
        mp3File: "Hudson Regional Museum Yudice.m4a",
        audioText: ""
    },
    {
        id: 20,
        name: "Estadio Norman Lee",
        coords: [-34.7820, -58.2150],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Estadio_Norman_Lee.jpg/640px-Estadio_Norman_Lee.jpg",
        categoryType: "city",
        fallbackIcon: "fa-futbol",
        brief: "Cancha de la AD Berazategui.",
        mp3File: "Juarez T Berazategui football field.m4a",
        audioText: ""
    },
    // --- NUEVA UBICACIÓN (Tu Escuela) ---
    {
        id: 21,
        name: "Escuela Privada de Ranelagh",
        // COORDENADAS ACTUALIZADAS: Av. Eva Peron 3842
        coords: [-34.7982, -58.1768], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg", 
        categoryType: "city",
        fallbackIcon: "fa-graduation-cap",
        brief: "Escuela Privada de Ranelagh (EPR).",
        mp3File: "Rinaldi EPR.m4a",
        audioText: ""
    }
];

window.onload = function() {
    const map = L.map('map', { zoomControl: false, tap: true }).setView([-34.7900, -58.2000], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap', maxZoom: 19, minZoom: 11
    }).addTo(map);

    const synth = window.speechSynthesis;
    const audioPlayer = new Audio();
    let progressInterval = null;

    window.handleImgError = function(img) { img.style.display = 'none'; };

    window.togglePlayer = function(mp3File, text, btnId, sliderId, errorId) {
        const btn = document.getElementById(btnId);
        const icon = btn.querySelector('i');
        const slider = document.getElementById(sliderId);
        const errorMsg = document.getElementById(errorId);

        if(errorMsg) errorMsg.style.display = 'none';

        const isMp3Playing = !audioPlayer.paused;
        const isTtsPlaying = synth.speaking;

        if (isMp3Playing || isTtsPlaying) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            synth.cancel();
            stopProgress(slider);
            
            if (btn.classList.contains('active')) {
                resetUI();
                return;
            }
        }

        resetUI();
        btn.classList.add('active');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');

        if (mp3File && mp3File !== 'undefined' && mp3File !== '') {
            audioPlayer.src = mp3File;
            
            const playPromise = audioPlayer.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Error audio:", error);
                    if(errorMsg) {
                        errorMsg.style.display = 'block';
                        errorMsg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Falta archivo: <b>${mp3File}</b>`;
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

// --- DATA CONFIGURATION (English Descriptions, Spanish Names) ---
const locations = [
    {
        id: 1,
        name: "Estación Ranelagh",
        coords: [-34.7946, -58.1733],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Estaci%C3%B3n_Ranelagh_2012.jpg/640px-Estaci%C3%B3n_Ranelagh_2012.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Historic British-style railway station.",
        mp3File: "Cascante Ranelagh Railway Station.m4a",
        playlist: null
    },
    {
        id: 22, 
        name: "Parque de la Estación Ranelagh",
        coords: [-34.7955, -58.1740], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-tree",
        brief: "Extensive park surrounding the station.",
        mp3File: "Yacopini Ranelagh Park.m4a",
        playlist: null
    },
    {
        id: 3,
        name: "Museo del Golf",
        coords: [-34.7915, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Roberto_De_Vicenzo_1967.jpg/400px-Roberto_De_Vicenzo_1967.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-golf-ball",
        brief: "Dedicated to Roberto De Vicenzo.",
        mp3File: "Ranelagh Golf Club Triviño.m4a",
        playlist: null
    },
    {
        id: 4,
        name: "Museo del Vidrio",
        coords: [-34.7650, -58.2100], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Glass_blowing_at_the_Corning_Museum_of_Glass.jpg/640px-Glass_blowing_at_the_Corning_Museum_of_Glass.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-wine-glass-alt",
        brief: "Berazategui, Capital of Glass.",
        mp3File: "Museo del Vidrio Capaldo.m4a",
        playlist: null
    },
    {
        id: 7,
        name: "Estación Plátanos",
        coords: [-34.7800, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Stop between Berazategui and Hudson.",
        mp3File: "Plátanos Station-Corral.m4a",
        playlist: null
    },
    {
        id: 8,
        name: "Fábrica Rigolleau",
        coords: [-34.7636, -58.2114],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg/640px-Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-industry",
        brief: "Iconic glass factory.",
        mp3File: "rigolleau.mp3", 
        playlist: null
    },
    {
        id: 9,
        name: "Taller Bustillo",
        coords: [-34.7850, -58.1950],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alejandro_Bustillo.jpg/400px-Alejandro_Bustillo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-drafting-compass",
        brief: "Studio of architect Bustillo.",
        mp3File: "Plátanos Cesar Bustillo and the world homo Fajre.m4a",
        playlist: null
    },
    {
        id: 10,
        name: "Los Privilegiados",
        coords: [-34.7750, -58.1900],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-swimmer",
        brief: "Sports and nature complex.",
        mp3File: "Platanos Los privilegiados Papp.m4a",
        playlist: null
    },
    {
        id: 11,
        name: "Club Ducilo",
        coords: [-34.7768, -58.2367],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Entrada_Club_Ducilo.jpg/640px-Entrada_Club_Ducilo.jpg",
        categoryType: "city",
        fallbackIcon: "fa-users",
        brief: "Historic social and sports club.",
        mp3File: "Ducilo-D'Elia.m4a",
        playlist: null
    },
    {
        id: 12,
        name: "Centro De Vicenzo",
        coords: [-34.7623, -58.2105],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Centro_de_Actividades_Roberto_De_Vicenzo.jpg/640px-Centro_de_Actividades_Roberto_De_Vicenzo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-building",
        brief: "Cultural activities center.",
        mp3File: "Centro de actividades R. de Vicenzo Sama.m4a",
        playlist: null
    },
    {
        id: 13,
        name: "Centro Cívico / Parque",
        coords: [-34.7608, -58.2133],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Berazategui_-_Edificio_Inteligente.jpg/640px-Berazategui_-_Edificio_Inteligente.jpg",
        categoryType: "city",
        fallbackIcon: "fa-city",
        brief: "Administrative heart and green space.",
        mp3File: "civic cultural centre and linear park Perez Pasquini.m4a",
        playlist: null
    },
    {
        id: 15,
        name: "Localidad El Pato",
        coords: [-34.8670, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ruta_Provincial_36_-_El_Pato.jpg/640px-Ruta_Provincial_36_-_El_Pato.jpg",
        categoryType: "city",
        fallbackIcon: "fa-map-marker-alt",
        brief: "History of the locality.",
        mp3File: null,
        // AUTOMATIC PLAYLIST
        playlist: [
            "el pato 1 Staniscia.m4a",
            "el pato 2 Staniscia.m4a",
            "el pato 3 Staniscia.m4a"
        ]
    },
    {
        id: 16,
        name: "Iglesia Villa España",
        coords: [-34.7790, -58.2010], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Parroquia_Nuestra_Se%C3%B1ora_de_Luj%C3%A1n_%28Villa_Espa%C3%B1a%29.jpg/640px-Parroquia_Nuestra_Se%C3%B1ora_de_Luj%C3%A1n_%28Villa_Espa%C3%B1a%29.jpg", 
        categoryType: "museum",
        fallbackIcon: "fa-church",
        brief: "Parish of Our Lady of Luján.",
        mp3File: "Fiona Chen Parroquia Nuestra Señora de Luján.m4a",
        playlist: null
    },
    {
        id: 17,
        name: "Estación Gutiérrez",
        coords: [-34.8450, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Estaci%C3%B3n_Gutierrez.jpg/640px-Estaci%C3%B3n_Gutierrez.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Juan María Gutiérrez Station.",
        mp3File: "Juna Maria Gutiérrez - Boyer.m4a",
        playlist: null
    },
    {
        id: 23, 
        name: "Plaza Estación Gutiérrez",
        coords: [-34.8445, -58.1860], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Estaci%C3%B3n_Gutierrez.jpg/640px-Estaci%C3%B3n_Gutierrez.jpg",
        categoryType: "city",
        fallbackIcon: "fa-tree",
        brief: "Square next to the station.",
        mp3File: "Gutierrez Station Square Fredes.m4a",
        playlist: null
    },
    {
        id: 24,
        name: "Centro de Plátanos",
        coords: [-34.7800, -58.1850], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg", 
        categoryType: "city",
        fallbackIcon: "fa-map-pin",
        brief: "General location of Plátanos neighborhood.",
        mp3File: "Plátanos Location Fajre.m4a",
        playlist: null
    },
    {
        id: 25,
        name: "Plaza San Martín",
        coords: [-34.7615, -58.2120], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Municipalidad_de_Berazategui.jpg/640px-Municipalidad_de_Berazategui.jpg",
        categoryType: "city",
        fallbackIcon: "fa-tree",
        brief: "Main square of Berazategui.",
        mp3File: "Garrido.m4a",
        playlist: null
    },
    {
        id: 26,
        name: "Historia de Plátanos",
        coords: [-34.7810, -58.1840], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "city",
        fallbackIcon: "fa-history",
        brief: "History of the founder and the ants.",
        mp3File: "Plátanos - Lucca.m4a",
        playlist: null
    },
    {
        id: 19,
        name: "Museo Histórico Hudson",
        coords: [-34.7945, -58.1490], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Museo_Historico_de_Hudson.jpg/640px-Museo_Historico_de_Hudson.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-university",
        brief: "Local history.",
        mp3File: null,
        // AUTOMATIC PLAYLIST
        playlist: [
            "Hudson Regional Museum Yudice.m4a",
            "Hudson Regional Museum part 2 -Capparelli.m4a"
        ]
    },
    {
        id: 20,
        name: "Estadio Norman Lee",
        coords: [-34.7820, -58.2150],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Estadio_Norman_Lee.jpg/640px-Estadio_Norman_Lee.jpg",
        categoryType: "city",
        fallbackIcon: "fa-futbol",
        brief: "Stadium of AD Berazategui.",
        mp3File: "Juarez T Berazategui football field.m4a",
        playlist: null
    },
    {
        id: 21,
        name: "Escuela Privada de Ranelagh",
        coords: [-34.7959, -58.1775], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg", 
        categoryType: "city",
        fallbackIcon: "fa-graduation-cap",
        brief: "Ranelagh Private School (EPR).",
        mp3File: "Rinaldi EPR.m4a",
        playlist: null
    }
];

// --- GLOBAL VARIABLES ---
let map;
let audioPlayer;
let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaylistMode = false;
let currentLocIndex = -1;
const markers = {}; 

// Track durations cache (to simulate full duration for playlists)
const playlistDurations = {}; 

window.onload = function() {
    map = L.map('map', { zoomControl: false, tap: true }).setView([-34.7900, -58.2000], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap', maxZoom: 19, minZoom: 11
    }).addTo(map);

    audioPlayer = new Audio();
    window.handleImgError = function(img) { img.style.display = 'none'; };

    locations.forEach((loc, index) => {
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin"></div>`,
            iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -45]
        });

        const uniqueBtnId = `play-${loc.id}`;
        const uniqueSliderId = `slider-${loc.id}`;
        const uniqueErrorId = `error-${loc.id}`;
        const mp3Arg = loc.mp3File ? loc.mp3File : 'null';
        const playlistArg = loc.playlist ? JSON.stringify(loc.playlist).replace(/"/g, "&quot;") : 'null';

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
                        <input type="range" id="${uniqueSliderId}" class="progress-bar" value="0" min="0" max="100" disabled oninput="seekAudio(this.value)">
                    </div>
                    <div id="${uniqueErrorId}" class="audio-error-msg"></div>
                    <div class="controls-row">
                        <button class="ctrl-btn" onclick="goToLocation(${index - 1})">
                            <i class="fas fa-step-backward"></i>
                        </button>
                        
                        <button id="${uniqueBtnId}" class="ctrl-btn play-pause-main" 
                            onclick="togglePlayer('${mp3Arg}', ${playlistArg}, '${uniqueBtnId}', '${uniqueSliderId}', '${uniqueErrorId}')">
                            <i class="fas fa-play"></i>
                        </button>
                        
                        <button class="ctrl-btn" onclick="goToLocation(${index + 1})">
                            <i class="fas fa-step-forward"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        const marker = L.marker(loc.coords, {icon: customIcon})
                 .addTo(map)
                 .bindPopup(popupContent);
        
        markers[index] = marker;

        marker.on('click', function() {
            currentLocIndex = index;
        });
    });

    map.on('popupclose', function() {
        audioPlayer.pause();
        resetUI();
    });
};

// --- GLOBAL FUNCTIONS ---

// Seek logic updated for playlists
window.seekAudio = function(value) {
    if (audioPlayer && audioPlayer.duration) {
        // For simple single file
        if (!isPlaylistMode) {
            const seekTime = audioPlayer.duration * (value / 100);
            audioPlayer.currentTime = seekTime;
        } else {
            // Playlist seek is tricky without pre-loading all durations.
            // Simplified logic: Seek within current track only for this demo.
            // Real continuous seeking requires more complex audio merging logic not fully supported in simple HTML/JS without backend.
            // We will stick to per-track seeking for stability in this version.
            const seekTime = audioPlayer.duration * (value / 100);
            audioPlayer.currentTime = seekTime;
        }
    }
};

window.goToLocation = function(newIndex) {
    if (newIndex < 0) newIndex = locations.length - 1;
    if (newIndex >= locations.length) newIndex = 0;

    map.closePopup();
    audioPlayer.pause();
    resetUI();

    setTimeout(() => {
        const marker = markers[newIndex];
        if (marker) {
            marker.openPopup();
            map.flyTo(locations[newIndex].coords, 14, { duration: 1.5 });
            currentLocIndex = newIndex;
        }
    }, 200);
};

// Main Player Controller
window.togglePlayer = function(mp3File, playlist, btnId, sliderId, errorId) {
    const btn = document.getElementById(btnId);
    const slider = document.getElementById(sliderId);
    const errorMsg = document.getElementById(errorId);

    if(errorMsg) errorMsg.style.display = 'none';

    if (!audioPlayer.paused && btn.classList.contains('active')) {
        audioPlayer.pause();
        resetUI();
        return;
    }

    resetUI();
    btn.classList.add('active');
    btn.querySelector('i').className = 'fas fa-pause';
    
    if(slider) slider.removeAttribute('disabled');

    if (playlist && playlist.length > 0) {
        isPlaylistMode = true;
        currentPlaylist = playlist;
        currentTrackIndex = 0;
        // Start first track
        playTrack(currentPlaylist[0], slider, errorMsg, btn);
    } 
    else if (mp3File && mp3File !== 'null' && mp3File !== '') {
        isPlaylistMode = false;
        playTrack(mp3File, slider, errorMsg, btn);
    } 
    else {
        resetUI();
        if(errorMsg) {
            errorMsg.style.display = 'block';
            errorMsg.innerHTML = `<i class="fas fa-info-circle"></i> Audio coming soon.`;
        }
    }
};

function playTrack(src, slider, errorMsg, btn) {
    audioPlayer.src = src;
    const playPromise = audioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.error("Error audio:", error);
            if(errorMsg) {
                errorMsg.style.display = 'block';
                errorMsg.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Missing: <b>${src}</b>`;
            }
            resetUI();
        });
    }

    // Update Slider Logic
    audioPlayer.ontimeupdate = function() {
        if (audioPlayer.duration) {
            let percent = 0;
            
            if (isPlaylistMode) {
                // SIMULATED CONTINUOUS BAR:
                // We calculate progress based on (Current Track Index / Total Tracks) + (Track Progress / Total Tracks)
                // This is an approximation to make it look like one single bar without pre-loading durations.
                const trackShare = 100 / currentPlaylist.length;
                const trackProgress = (audioPlayer.currentTime / audioPlayer.duration) * trackShare;
                const baseProgress = currentTrackIndex * trackShare;
                percent = baseProgress + trackProgress;
            } else {
                percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            }
            
            slider.value = percent;
            updateSliderVisual(slider);
        }
    };

    // Handle End of Track
    audioPlayer.onended = function() {
        if (isPlaylistMode) {
            currentTrackIndex++;
            if (currentTrackIndex < currentPlaylist.length) {
                // PLAY NEXT TRACK IMMEDIATELY (Gapless-ish)
                // Don't reset UI, just load next source
                playTrack(currentPlaylist[currentTrackIndex], slider, errorMsg, btn);
            } else {
                resetUI();
            }
        } else {
            resetUI();
        }
    };
}

function updateSliderVisual(slider) {
    const val = slider.value;
    slider.style.background = `linear-gradient(to right, #FF5722 ${val}%, #e0e0e0 ${val}%)`;
}

function resetUI() {
    document.querySelectorAll('.play-pause-main').forEach(b => {
        b.classList.remove('active');
        b.querySelector('i').className = 'fas fa-play';
    });
    document.querySelectorAll('.progress-bar').forEach(s => {
        s.value = 0;
        s.style.background = '#e0e0e0';
        s.setAttribute('disabled', true);
    });
}

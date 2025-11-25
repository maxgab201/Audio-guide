// --- DATA CONFIGURATION ---
const locations = [
    {
        id: 1,
        name: "Estación Ranelagh",
        coords: [-34.7946, -58.1733],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Estaci%C3%B3n_Ranelagh_2012.jpg/640px-Estaci%C3%B3n_Ranelagh_2012.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Historic British-style railway station.",
        // Single Audio (Standard)
        versions: [
            { name: "Main Guide (Cascante)", file: "Cascante Ranelagh Railway Station.m4a" }
        ]
    },
    {
        id: 22, 
        name: "Parque de la Estación Ranelagh",
        coords: [-34.7955, -58.1740], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-tree",
        brief: "Extensive park surrounding the station.",
        versions: [
            { name: "Main Guide (Yacopini)", file: "Yacopini Ranelagh Park.m4a" }
        ]
    },
    {
        id: 2,
        name: "Centro Ranelagh",
        coords: [-34.7935, -58.1720],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-tree",
        brief: "Garden city residential center.",
        // Versiones Alternativas
        versions: [
            { name: "General Tour (Larsen)", file: "Ranelagh and golf club Perez Larsen.m4a" }
        ]
    },
    {
        id: 3,
        name: "Museo del Golf",
        coords: [-34.7915, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Roberto_De_Vicenzo_1967.jpg/400px-Roberto_De_Vicenzo_1967.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-golf-ball",
        brief: "Dedicated to Roberto De Vicenzo.",
        versions: [
            { name: "Museum Guide (Triviño)", file: "Ranelagh Golf Club Triviño.m4a" }
        ]
    },
    {
        id: 4,
        name: "Museo del Vidrio",
        coords: [-34.7650, -58.2100], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Glass_blowing_at_the_Corning_Museum_of_Glass.jpg/640px-Glass_blowing_at_the_Corning_Museum_of_Glass.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-wine-glass-alt",
        brief: "Berazategui, Capital of Glass.",
        versions: [
            { name: "Main Guide (Capaldo)", file: "Museo del Vidrio Capaldo.m4a" }
        ]
    },
    {
        id: 7,
        name: "Estación Plátanos",
        coords: [-34.7800, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Stop between Berazategui and Hudson.",
        versions: [
            { name: "Main Guide (Corral)", file: "Plátanos Station-Corral.m4a" }
        ]
    },
    {
        id: 8,
        name: "Fábrica Rigolleau",
        coords: [-34.7636, -58.2114],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg/640px-Antigua_Administraci%C3%B3n_de_la_Cristaler%C3%ADa_Rigolleau_SA.jpg",
        categoryType: "industry",
        fallbackIcon: "fa-industry",
        brief: "Iconic glass factory.",
        versions: [
            { name: "Main Guide (Maggiore)", file: "rigolleau.mp3" }
        ]
    },
    {
        id: 9,
        name: "Taller Bustillo",
        coords: [-34.7850, -58.1950],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alejandro_Bustillo.jpg/400px-Alejandro_Bustillo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-drafting-compass",
        brief: "Studio of architect Bustillo.",
        versions: [
            { name: "Main Guide (Fajre)", file: "Plátanos Cesar Bustillo and the world homo Fajre.m4a" }
        ]
    },
    {
        id: 10,
        name: "Los Privilegiados",
        coords: [-34.7750, -58.1900],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Parque_Pereyra_Iraola_-_Arboleda.jpg/640px-Parque_Pereyra_Iraola_-_Arboleda.jpg",
        categoryType: "nature",
        fallbackIcon: "fa-swimmer",
        brief: "Sports and nature complex.",
        versions: [
            { name: "Main Guide (Papp)", file: "Platanos Los privilegiados Papp.m4a" }
        ]
    },
    {
        id: 11,
        name: "Club Ducilo",
        coords: [-34.7768, -58.2367],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Entrada_Club_Ducilo.jpg/640px-Entrada_Club_Ducilo.jpg",
        categoryType: "city",
        fallbackIcon: "fa-users",
        brief: "Historic social and sports club.",
        versions: [
            { name: "Main Guide (D'Elia)", file: "Ducilo-D'Elia.m4a" }
        ]
    },
    {
        id: 12,
        name: "Centro De Vicenzo",
        coords: [-34.7623, -58.2105],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Centro_de_Actividades_Roberto_De_Vicenzo.jpg/640px-Centro_de_Actividades_Roberto_De_Vicenzo.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-building",
        brief: "Cultural activities center.",
        // SELECTOR: Sama vs Maurizi
        versions: [
            { name: "Activity Center (Sama)", file: "Centro de actividades R. de Vicenzo Sama.m4a" },
            { name: "Bio De Vicenzo (Maurizi)", file: "Roberto De Vicenzo- Maurizi.m4a" }
        ]
    },
    {
        id: 13,
        name: "Centro Cívico / Parque",
        coords: [-34.7608, -58.2133],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Berazategui_-_Edificio_Inteligente.jpg/640px-Berazategui_-_Edificio_Inteligente.jpg",
        categoryType: "city",
        fallbackIcon: "fa-city",
        brief: "Administrative heart and green space.",
        versions: [
            { name: "Main Guide (Perez Pasquini)", file: "civic cultural centre and linear park Perez Pasquini.m4a" }
        ]
    },
    {
        id: 15,
        name: "Localidad El Pato",
        coords: [-34.8670, -58.1780],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ruta_Provincial_36_-_El_Pato.jpg/640px-Ruta_Provincial_36_-_El_Pato.jpg",
        categoryType: "city",
        fallbackIcon: "fa-map-marker-alt",
        brief: "History of the locality.",
        // PLAYLIST (No versions, just one 3-part track)
        isPlaylist: true,
        playlist: [
            { src: "el pato 1 Staniscia.m4a", estimatedDuration: 90 },
            { src: "el pato 2 Staniscia.m4a", estimatedDuration: 120 },
            { src: "el pato 3 Staniscia.m4a", estimatedDuration: 120 }
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
        versions: [
            { name: "Main Guide (Chen)", file: "Fiona Chen Parroquia Nuestra Señora de Luján.m4a" }
        ]
    },
    {
        id: 17,
        name: "Estación Gutiérrez",
        coords: [-34.8450, -58.1850],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Estaci%C3%B3n_Gutierrez.jpg/640px-Estaci%C3%B3n_Gutierrez.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Juan María Gutiérrez Station.",
        versions: [
            { name: "Main Guide (Boyer)", file: "Juna Maria Gutiérrez - Boyer.m4a" }
        ]
    },
    {
        id: 23, 
        name: "Plaza Estación Gutiérrez",
        coords: [-34.8445, -58.1860], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Estaci%C3%B3n_Gutierrez.jpg/640px-Estaci%C3%B3n_Gutierrez.jpg",
        categoryType: "city",
        fallbackIcon: "fa-tree",
        brief: "Square next to the station.",
        versions: [
            { name: "Main Guide (Fredes)", file: "Gutierrez Station Square Fredes.m4a" }
        ]
    },
    {
        id: 24,
        name: "Centro de Plátanos",
        coords: [-34.7800, -58.1850], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg", 
        categoryType: "city",
        fallbackIcon: "fa-map-pin",
        brief: "General location of Plátanos neighborhood.",
        versions: [
            { name: "Main Guide (Fajre)", file: "Plátanos Location Fajre.m4a" }
        ]
    },
    {
        id: 25,
        name: "Plaza San Martín",
        coords: [-34.7615, -58.2120], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Municipalidad_de_Berazategui.jpg/640px-Municipalidad_de_Berazategui.jpg",
        categoryType: "city",
        fallbackIcon: "fa-tree",
        brief: "Main square of Berazategui.",
        versions: [
            { name: "Main Guide (Garrido)", file: "Garrido.m4a" }
        ]
    },
    {
        id: 26,
        name: "Historia de Plátanos",
        coords: [-34.7810, -58.1840], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "city",
        fallbackIcon: "fa-history",
        brief: "History of the founder and the ants.",
        versions: [
            { name: "Main Guide (Lucca)", file: "Plátanos - Lucca.m4a" }
        ]
    },
    {
        id: 6,
        name: "Estación Hudson",
        coords: [-34.7939, -58.1483],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estaci%C3%B3n_Hudson_2.jpg/640px-Estaci%C3%B3n_Hudson_2.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-subway",
        brief: "Key transport link.",
        // SELECTOR: Audisio vs Sanchez Moodie
        versions: [
            { name: "Station Info (Audisio)", file: "HUDSON Audisio.m4a" },
            { name: "General History (Sanchez Moodie)", file: "Hudson Sanchez Moodie.m4a" }
        ]
    },
    {
        id: 19,
        name: "Museo Histórico Hudson",
        coords: [-34.7945, -58.1490], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Museo_Historico_de_Hudson.jpg/640px-Museo_Historico_de_Hudson.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-university",
        brief: "Local history.",
        isPlaylist: true,
        playlist: [
            { src: "Hudson Regional Museum Yudice.m4a", estimatedDuration: 120 },
            { src: "Hudson Regional Museum part 2 -Capparelli.m4a", estimatedDuration: 120 }
        ]
    },
    {
        id: 5,
        name: "Museo Histórico Regional",
        coords: [-34.7705, -58.2055],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Municipalidad_de_Berazategui.jpg/640px-Municipalidad_de_Berazategui.jpg",
        categoryType: "museum",
        fallbackIcon: "fa-landmark",
        brief: "Preserving local heritage.",
        // SANCHEZ MOVED HERE (Optional/Alternative, if you want)
        // Based on your last instruction: "Sanches: museo regional"
        // I will add Sanchez here as the main audio for now, since this ID 5 was empty.
        versions: [
           // Actually, user said "Sanches: museo regional", but file is "Hudson Sanchez".
           // I already put Sanchez in Hudson Station as alternative.
           // Let's leave ID 5 empty or put Sanchez here if you prefer?
           // Sticking to your "Audisio: Hudson, Sanchez: Hudson" logic in previous prompt.
           // Leaving ID 5 empty for now as it's Berazategui Center Museum, not Hudson.
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
        versions: [
            { name: "Main Guide (Juarez)", file: "Juarez T Berazategui football field.m4a" }
        ]
    },
    {
        id: 21,
        name: "Escuela Privada de Ranelagh",
        coords: [-34.7959, -58.1775], 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ranelagh_-_Calle_362.jpg/640px-Ranelagh_-_Calle_362.jpg", 
        categoryType: "city",
        fallbackIcon: "fa-graduation-cap",
        brief: "Ranelagh Private School (EPR).",
        versions: [
            { name: "Main Guide (Rinaldi)", file: "Rinaldi EPR.m4a" }
        ]
    }
];

// --- VARIABLES GLOBALES ---
let map;
let audioPlayer;
let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaylistMode = false;
let currentLocIndex = -1;
const markers = {}; 

window.onload = function() {
    map = L.map('map', { zoomControl: false, tap: true }).setView([-34.7900, -58.2000], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    audioPlayer = new Audio();
    window.handleImgError = function(img) { img.style.display = 'none'; };

    locations.forEach((loc, index) => {
        // Ensure we have something to play (Playlist or Versions)
        if (!loc.isPlaylist && (!loc.versions || loc.versions.length === 0)) return;

        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="marker-pin"></div>`,
            iconSize: [40, 40], iconAnchor: [20, 40], popupAnchor: [0, -45]
        });

        // Prepare Logic for Versions or Playlist
        let selectorHTML = '';
        let defaultFile = '';
        let defaultPlaylist = 'null';
        
        if (loc.isPlaylist) {
            defaultPlaylist = JSON.stringify(loc.playlist).replace(/"/g, "&quot;");
        } else if (loc.versions && loc.versions.length > 0) {
            defaultFile = loc.versions[0].file;
            // Create Dropdown if > 1 version
            if (loc.versions.length > 1) {
                selectorHTML = `<div class="version-selector">
                    <select class="version-select" onchange="changeVersion(this.value, '${`btn-${loc.id}`}', '${`slider-${loc.id}`}', '${`error-${loc.id}`}')">
                        ${loc.versions.map(v => `<option value="${v.file}">${v.name}</option>`).join('')}
                    </select>
                </div>`;
            }
        }

        const uniqueBtnId = `play-${loc.id}`;
        const uniqueSliderId = `slider-${loc.id}`;
        const uniqueErrorId = `error-${loc.id}`;

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
                    
                    <!-- Version Selector (Optional) -->
                    ${selectorHTML}
                </div>
                <div class="player-ui">
                    <div class="progress-container">
                        <input type="range" id="${uniqueSliderId}" class="progress-bar" value="0" min="0" max="100" disabled oninput="seekAudio(this.value)">
                    </div>
                    <div id="${uniqueErrorId}" class="audio-error-msg"></div>
                    <div class="controls-row">
                        <button class="ctrl-btn" onclick="goToLocation(${index - 1})"><i class="fas fa-step-backward"></i></button>
                        <button id="${uniqueBtnId}" class="ctrl-btn play-pause-main" 
                            onclick="togglePlayer('${defaultFile}', ${defaultPlaylist}, '${uniqueBtnId}', '${uniqueSliderId}', '${uniqueErrorId}')">
                            <i class="fas fa-play"></i>
                        </button>
                        <button class="ctrl-btn" onclick="goToLocation(${index + 1})"><i class="fas fa-step-forward"></i></button>
                    </div>
                </div>
            </div>
        `;

        const marker = L.marker(loc.coords, {icon: customIcon})
                 .addTo(map)
                 .bindPopup(popupContent);
        
        markers[index] = marker;
        marker.on('click', function() { currentLocIndex = index; });
    });

    map.on('popupclose', function() { audioPlayer.pause(); resetUI(); });
    setTimeout(function(){ map.invalidateSize();}, 500);
};

// --- FUNCIONES ---

// Switcher for Versions
window.changeVersion = function(newFile, btnId, sliderId, errorId) {
    // Stop current
    audioPlayer.pause();
    resetUI();
    
    // Update button onclick to use new file
    const btn = document.getElementById(btnId);
    if (btn) {
        // Re-assign onclick with new file
        btn.onclick = function() {
            togglePlayer(newFile, null, btnId, sliderId, errorId);
        };
        // Auto-play new version
        togglePlayer(newFile, null, btnId, sliderId, errorId);
    }
};

function getPlaylistTotalDuration() {
    return currentPlaylist.reduce((total, track) => total + track.estimatedDuration, 0);
}

function getCurrentTrackStartTime() {
    let startTime = 0;
    for (let i = 0; i < currentTrackIndex; i++) {
        startTime += currentPlaylist[i].estimatedDuration;
    }
    return startTime;
}

window.seekAudio = function(value) {
    if (!audioPlayer || !audioPlayer.duration) return;

    if (isPlaylistMode) {
        const totalDuration = getPlaylistTotalDuration();
        const targetGlobalTime = totalDuration * (value / 100);
        let accumulatedTime = 0;
        let targetIndex = 0;
        let seekTimeWithinTrack = 0;

        for (let i = 0; i < currentPlaylist.length; i++) {
            if (targetGlobalTime < accumulatedTime + currentPlaylist[i].estimatedDuration) {
                targetIndex = i;
                seekTimeWithinTrack = targetGlobalTime - accumulatedTime;
                break;
            }
            accumulatedTime += currentPlaylist[i].estimatedDuration;
            if (i === currentPlaylist.length - 1) {
                targetIndex = i;
                seekTimeWithinTrack = currentPlaylist[i].estimatedDuration;
            }
        }

        if (targetIndex !== currentTrackIndex) {
            currentTrackIndex = targetIndex;
            audioPlayer.src = currentPlaylist[currentTrackIndex].src;
            audioPlayer.play().then(() => {
                setTimeout(() => {
                    if(audioPlayer.duration) audioPlayer.currentTime = seekTimeWithinTrack;
                }, 100);
            });
        } else {
            audioPlayer.currentTime = seekTimeWithinTrack;
        }
    } else {
        const seekTime = audioPlayer.duration * (value / 100);
        audioPlayer.currentTime = seekTime;
    }
};

window.goToLocation = function(newIndex) {
    if (newIndex < 0) newIndex = Object.keys(markers).length - 1; 
    if (newIndex < 0) newIndex = locations.length - 1;
    if (newIndex >= locations.length) newIndex = 0;

    let attempts = 0;
    while (!markers[newIndex] && attempts < locations.length) {
        newIndex++;
        if (newIndex >= locations.length) newIndex = 0;
        attempts++;
    }

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
        playTrack(currentPlaylist[0].src, slider, errorMsg, btn);
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

    audioPlayer.ontimeupdate = function() {
        if (audioPlayer.duration) {
            let percent = 0;
            if (isPlaylistMode) {
                const totalDuration = getPlaylistTotalDuration();
                const startTime = getCurrentTrackStartTime();
                const currentGlobalTime = startTime + audioPlayer.currentTime;
                percent = (currentGlobalTime / totalDuration) * 100;
            } else {
                percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            }
            if(percent > 100) percent = 100;
            slider.value = percent;
            updateSliderVisual(slider);
        }
    };

    audioPlayer.onended = function() {
        if (isPlaylistMode) {
            currentTrackIndex++;
            if (currentTrackIndex < currentPlaylist.length) {
                playTrack(currentPlaylist[currentTrackIndex].src, slider, errorMsg, btn);
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



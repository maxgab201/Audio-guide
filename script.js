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
    // --- ESTACIÓN PLÁTANOS (CON VERSIONES) ---
    {
        id: 7,
        name: "Estación Plátanos",
        coords: [-34.78233, -58.1708], // Coordenadas aseguradas
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Estaci%C3%B3n_Pl%C3%A1tanos.jpg/640px-Estaci%C3%B3n_Pl%C3%A1tanos.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Stop between Berazategui and Hudson.",
        versions: [
            { name: "Main Guide (Corral)", file: "Plátanos Station-Corral.m4a" },
            { name: "Station History (General)", file: "plátanos.m4a" }
        ],
        mp3File: "Plátanos Station-Corral.m4a"
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
        img: "https://uplo

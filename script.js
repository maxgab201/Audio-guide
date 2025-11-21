// --- DATOS DE LAS UBICACIONES (Solo las que tienen audio confirmado) ---
const locations = [
    {
        id: 1,
        name: "Estación Ranelagh",
        coords: [-34.7946, -58.1733],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Estaci%C3%B3n_Ranelagh_2012.jpg/640px-Estaci%C3%B3n_Ranelagh_2012.jpg",
        categoryType: "transport",
        fallbackIcon: "fa-train",
        brief: "Estación de tren histórica de estilo inglés.",
        mp3File: "Cascante Ranelagh Railway Station.m4a",
        playlist: null
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
        playlist: null
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
        playlist: null
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
        playlist: null
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
        playlist: null
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
        playlist: null
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
        playlist: null
    },
    {
        id: 11,
        name: "Club Ducilo",
        coords: [-34.7768, -58.2367],
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Entrada_Club_Ducilo.jpg/640px-Entrada_Club_Ducilo.jpg",
        categoryType: "city",
        fallbackIcon: "fa-users",
        brief: "Club social y deportivo histórico.",
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
        brief: "Centro de actividades culturales.",

const linksNaarFotos = [
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Rembrandt_Self-portrait_%28Kenwood%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/81/Rembrandt_van_Rijn_199.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rembrandt_van_Rijn%2C_The_spectacle-pedlar%2C_circa_1624%E2%80%931625%2C_Museum_De_Lakenhal%2C_Leiden.jpg/871px-Rembrandt_van_Rijn%2C_The_spectacle-pedlar%2C_circa_1624%E2%80%931625%2C_Museum_De_Lakenhal%2C_Leiden.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/Rembrandt%2C_De_roerdompjager%2C_1639%2C_Gem%C3%A4ldegalerie_Alte_Meister%2C_Dresden.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Rembrandt_%281606-1669%29_Zelfportret_in_ori%C3%ABntaalse_kledij_%281631%29_Petit_Palais_Parijs_23-8-2017_17-13-35.jpg/843px-Rembrandt_%281606-1669%29_Zelfportret_in_ori%C3%ABntaalse_kledij_%281631%29_Petit_Palais_Parijs_23-8-2017_17-13-35.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rembrandt_Harmensz._van_Rijn_048.jpg/872px-Rembrandt_Harmensz._van_Rijn_048.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rembrandt_Harmensz._van_Rijn_048.jpg/872px-Rembrandt_Harmensz._van_Rijn_048.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rembrandt_Harmensz._van_Rijn_097.jpg/931px-Rembrandt_Harmensz._van_Rijn_097.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rembrandt_Harmensz._van_Rijn_157.jpg/828px-Rembrandt_Harmensz._van_Rijn_157.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Rembrandt_Harmensz._van_Rijn_046.jpg/1657px-Rembrandt_Harmensz._van_Rijn_046.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1259px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Rembrandt_Harmensz._van_Rijn_004.jpg/821px-Rembrandt_Harmensz._van_Rijn_004.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Rembrandt_Harmensz._van_Rijn_003.jpg/801px-Rembrandt_Harmensz._van_Rijn_003.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Rembrandt_Harmensz._van_Rijn_013.jpg/972px-Rembrandt_Harmensz._van_Rijn_013.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rembrandt_Man_in_Armour.jpg/776px-Rembrandt_Man_in_Armour.jpg',
];

const houder = document.getElementById('container');

function plaatsEenFoto(url) {
    let item = document.createElement('div');
    item.className = 'item';
    let deFoto = document.createElement('img');
    deFoto.src = url;
    deFoto.alt = 'Rembrandt';
    item.append(deFoto);
    houder.append(item);
}

for(let i=linksNaarFotos.length; i>0; i--) {
    let getal = Math.floor(Math.random()*linksNaarFotos.length);
    plaatsEenFoto(linksNaarFotos[getal]);
    linksNaarFotos.splice(getal,1);
}
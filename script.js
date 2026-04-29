
document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
    {name: 'Enrique & Juliano', image: 'https://i.ibb.co/B3b0N7H/album-caju.jpg'},
    {name: 'Jorge $ Mateus', image: 'https://i.ibb.co/2WfJ8tD/artista-jorge-mateus.jpg'},
    {name: 'Luan Santana', image: 'https://i.ibb.co/MSbmBzH/artista-luan-santana.jpg'},
    {name: 'Mateus Kauan', image: 'https://i.ibb.co/3CmctgD/artista-mateus-kauan.jpg'},
    {name: 'Zé Neto', image: 'https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg'},
    {name: 'Gustavo Limma', image: 'https://i.ibb.co/XJP8Djh/artista-gustavo-limma.jpg'}
];

const albumData = [
    {name: 'white Noise(Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'https://i.ibb.co/wCpHtfQ/artista-henrique-juliano.jpg'},
    {name:'O Céu Explica Tudo (Ao Vivo) ', artist: 'Zé Neto', image: 'https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg'},
    {name:'Escândalo', artist: 'Luan Santana', image: 'https://i.ibb.co/VMnCmTX/album-escandalo.jpg'},
    {name:'Hit Me', artist: 'Gustavo Limma', image: 'https://i.ibb.co/G3kXhXc/album-hit-me.jpg'},
    {name:'Racionais', artist: 'Jorge $ Mateus', image: 'https://i.ibb.co/WBgGp5q/album-white-noise.jpg'},
    {name:'Vida Loka', artist: 'Mateus Kauan', image: 'https://i.ibb.co/T8QJJ1W/album-vida-loka.jpg'}
]

const artistsGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')


artistsData.forEach( artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML =`
        <img src="${artist.image}" alt="Imagem do ${artist.name}">
        <div>
          <h3>${artist.name}</h3>
          <p>Artista Popular</p>
        </div>
    `;
    artistsGrid.appendChild(artistCard);
    
})

albumData.forEach( album =>{
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML =`
        <img src="${album.image}" alt="Imagem do ${album.name}">
        <div>
          <h3>${album.name}</h3>
          <p>${album.artist}</p>
        </div>
 `;
    albumsGrid.appendChild(albumCard);  
})
});




















/*
<a href="https://imgbb.com/"><img src="https://i.ibb.co/B3b0N7H/album-caju.jpg" alt="album-caju" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/BfbL8VL/album-ceu-explica.jpg" alt="album-ceu-explica" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/VMnCmTX/album-escandalo.jpg" alt="album-escandalo" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/G3kXhXc/album-hit-me.jpg" alt="album-hit-me" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/MDZt76D/album-racionais.jpg" alt="album-racionais" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/T8QJJ1W/album-vida-loka.jpg" alt="album-vida-loka" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/WBgGp5q/album-white-noise.jpg" alt="album-white-noise" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/XJP8Djh/artista-gustavo-limma.jpg" alt="artista-gustavo-limma" border="0"></a>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/wCpHtfQ/artista-henrique-juliano.jpg" alt="artista-henrique-juliano" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/2WfJ8tD/artista-jorge-mateus.jpg" alt="artista-jorge-mateus" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/MSbmBzH/artista-luan-santana.jpg" alt="artista-luan-santana" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/3CmctgD/artista-mateus-kauan.jpg" alt="artista-mateus-kauan" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg" alt="artista-ze-neto" border="0"></a>*/
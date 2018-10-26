function fetchAlb() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json));
}

fetchAlb();

async function fetchAlbTwo() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchAlbTwo();

const fetchAlbToo = async () => {
    let res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    let json = await res.json();

    console.log(json);
};
fetchAlbToo();
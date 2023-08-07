const root = document.getElementById('wp_test');
const images = document.querySelectorAll('.image')
const sounds = Array.from(document.querySelectorAll('audio'));
const pictures = document.querySelectorAll('img');
const bg = document.getElementById('wp_test');
let volume = 0.2;
bg.style.backgroundImage = 'url(./src/assets/summer-bg.jpg)';

const data = [
    {img: './src/assets/summer-bg.jpg', audio: './src/assets/sounds/summer.mp3', icon: './src/assets/icons/sun.svg'},
    {
        img: './src/assets/rainy-bg.jpg',
        audio: './src/assets/sounds/rain.mp3',
        icon: './src/assets/icons/cloud-rain.svg'
    },
    {
        img: './src/assets/winter-bg.jpg',
        audio: './src/assets/sounds/winter.mp3',
        icon: './src/assets/icons/cloud-snow.svg'
    },
]

function setVolume(e) {
    volume = e.value;
    sounds.find(a => {
        if (!a.paused)
            a.volume = volume;
    })
}

function setBGandPlay() {
    pictures.forEach(pict => {
            pict.addEventListener('click', getEvent);
        }
    )

}
// function setBGandPlay() {
//     pictures.forEach(pict => {
//             pict.addEventListener('click', getEvent);
//         }
//     )
// }

function getEvent(e) {

    images.forEach((image) => {
            if (e.target.alt === image.id) {
                bg.style.backgroundImage = `url(${data[+image.id].img})`;
                sounds[+image.id].volume = volume;
                sounds[+image.id].paused
                    ? sounds[+image.id].play()
                    : sounds[+image.id].pause();
            } else {
                sounds[+image.id].load();
                sounds[+image.id].volume = volume;
            }
        }
    )
}

// function renderImages(item) {
// function renderImages(item) {
//     // const bg = document.createElement('img');
//     // const img = document.createElement('img');
//     const sound = document.createElement('audio');
//     const icon = document.createElement('img');
//
//     // bg.src = item.src;
//     image.src = item.img;
//     block.src = item.img;
//     sound.src = item.audio;
//     icon.src = item.icon;
//     image.append(sound,icon);
//     block.append(image);
//     root.append(block);
// }
//
// data.forEach(renderImages);
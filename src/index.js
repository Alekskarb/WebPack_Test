const root = document.getElementById('wp_test');

// function plugJS() {
const images = document.querySelectorAll('.image')
const sounds = Array.from(document.querySelectorAll('audio'));
const pictures = document.querySelectorAll('img');
const bg = document.getElementById('wp_test');
let volume = 0.2;
bg.style.backgroundImage = 'url(./summer-bg.jpg)';

const data = [
    {
        img: './public/assets/summer-bg.jpg',
        audio: './public/assets/sounds/summer.mp3',
        icon: './src/assets/icons/sun.svg'
    },
    {
        img: './public/assets/rainy-bg.jpg',
        audio: './public/assets/sounds/rain.mp3',
        icon: './public/assets/icons/cloud-rain.svg'
    },
    {
        img: './public/assets/winter-bg.jpg',
        audio: './public/assets/sounds/winter.mp3',
        icon: './public/assets/icons/cloud-snow.svg'
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

// }
// root.append(plugJS())
// window.onload = plugJS;
const images = [
    "https://picsum.photos/600/400?1",
    "https://picsum.photos/600/400?2",
    "https://picsum.photos/600/400?3",
    "https://picsum.photos/600/400?4"
];

let index = 0;
const img = document.getElementById("slider-img");

function next() {
    index = (index + 1) % images.length;
    img.src = images[index];
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
}

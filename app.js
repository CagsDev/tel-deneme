const player = document.getElementById("player");
const playlist = document.getElementById("playlist").getElementsByTagName("li");

let currentIndex = 0;

function playSong(index) {
    const selected = playlist[index];
    if (!selected) return;
    player.src = selected.dataset.src;
    player.play();
    document.title = selected.textContent;
    currentIndex = index;
}

Array.from(playlist).forEach((item, index) => {
    item.addEventListener("click", () => playSong(index));
});

player.addEventListener("ended", () => {
    playSong((currentIndex + 1) % playlist.length);
});
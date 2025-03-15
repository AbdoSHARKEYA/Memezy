function showImageAndPlay(num, type) {
    let image = document.getElementById("puzzle-image");
    let audio = document.getElementById("puzzle-audio");

    image.src = `images/${type}-${num}.jpg`;
    audio.src = `audio/${type}-${num}.mp3`;

    image.style.display = "block";
    audio.play();
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("holiAudio");
    const playButton = document.getElementById("playMusic");

    // Try autoplay
    audio.play().catch(() => {
        playButton.style.display = "block"; // Show play button if autoplay fails
    });

    // Play on button click
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide button after playing
    });
});

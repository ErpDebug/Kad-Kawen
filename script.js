function openInvite() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('main-card').classList.remove('hidden');
    document.getElementById('bgMusic').play();
}

// Countdown logic
const weddingDate = new Date("May 2, 2026 11:30:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}, 1000);

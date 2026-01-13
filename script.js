let autoScrollInterval;

/* OPEN INVITE */
function openInvite() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('content').classList.remove('hidden');

  // Music (iOS safe after user interaction)
  const music = document.getElementById('bgMusic');
  if (music) music.play().catch(() => {});

  startAutoScroll();
}

/* AUTO SCROLL */
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    window.scrollBy({
      top: 0.5,   // slow & elegant
      behavior: 'smooth'
    });
  }, 30);
}

/* STOP AUTO SCROLL ON USER INTERACTION */
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

['touchstart', 'wheel', 'mousedown', 'keydown'].forEach(event => {
  window.addEventListener(event, stopAutoScroll, { passive: true });
});

document.querySelectorAll('.bottom-nav a').forEach(btn => {
  btn.addEventListener('touchstart', stopAutoScroll);
  btn.addEventListener('mousedown', stopAutoScroll);
});

/* COUNTDOWN TIMER */
const weddingDate = new Date("May 2, 2026 11:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

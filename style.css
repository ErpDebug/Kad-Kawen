// script.js - silver sparkling butterflies in front of the content + countdown (no auto-scroll)

let _butterflyState = {
  items: [],
  rafId: null,
  lastT: 0
};

/* OPEN INVITE */
function openInvite() {
  document.getElementById('cover').style.display = 'none';
  document.getElementById('content').classList.remove('hidden');

  // play background music (iOS restriction safe after user click)
  const music = document.getElementById('bgMusic');
  if (music) music.play().catch(() => {});

  // spawn a few shiny silver butterflies (4 recommended)
  spawnSparklingButterflies(4);
}

/* SPARKLING BUTTERFLIES (shiny silver)
   - each is an SVG with metallic gradient
   - they orbit and weave in front of the content and leave sparkles
*/
function spawnSparklingButterflies(count = 4) {
  const container = document.getElementById('butterflies');
  if (!container) return;
  container.innerHTML = '';

  const card = document.querySelector('.invitation-inner') || document.querySelector('.invitation-wrapper') || document.body;
  const rect = card.getBoundingClientRect();
  const center = {
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + rect.height / 2 + window.scrollY
  };
  const baseRadius = Math.max(rect.width, rect.height) * 0.42;

  if (_butterflyState.rafId) {
    cancelAnimationFrame(_butterflyState.rafId);
    _butterflyState.rafId = null;
  }
  _butterflyState.items = [];
  _butterflyState.lastT = performance.now();

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'spark-butterfly';
    const gid = 'g' + Date.now().toString(36) + '_' + i;
    el.innerHTML = `
      <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="${gid}" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
            <stop offset="45%" stop-color="#e6e6e6" stop-opacity="1" />
            <stop offset="100%" stop-color="#bfbfbf" stop-opacity="1" />
          </linearGradient>
        </defs>
        <g transform="translate(32,32)">
          <path d="M-4 -2 C -18 -28 -44 -8 -20 6 C -8 14 -2 8 -4 -2 Z" fill="url(#${gid})" opacity="0.99"></path>
          <path d="M4 -2 C 18 -28 44 -8 20 6 C 8 14 2 8 4 -2 Z" fill="url(#${gid})" opacity="0.99"></path>
          <circle r="2.2" fill="#6b4f36" opacity="0.95"></circle>
        </g>
      </svg>
    `;
    container.appendChild(el);

    const startAngle = Math.random() * Math.PI * 2;
    const radius = baseRadius * (0.4 + Math.random() * 0.5);
    const speed = (0.16 + Math.random() * 0.34) * (Math.random() < 0.5 ? -1 : 1);
    const wobble = 8 + Math.random() * 20;
    const size = 26 + Math.random() * 24;
    el.style.width = `${Math.round(size)}px`;
    el.style.height = `${Math.round(size)}px`;
    el.style.opacity = (0.88 + Math.random() * 0.12).toFixed(2);

    _butterflyState.items.push({
      el,
      angle: startAngle,
      radius,
      speed,
      wobble,
      centerX: center.x,
      centerY: center.y,
      sparkleTimer: 0.15 + Math.random() * 0.6
    });
  }

  _butterflyState.rafId = requestAnimationFrame(_butterflyLoop);
}

function _butterflyLoop(ts) {
  const state = _butterflyState;
  const dt = (ts - state.lastT) / 1000 || 0;
  state.lastT = ts;

  const card = document.querySelector('.invitation-inner') || document.querySelector('.invitation-wrapper') || document.body;
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2 + window.scrollX;
  const centerY = rect.top + rect.height / 2 + window.scrollY;

  for (const item of state.items) {
    item.centerX = centerX;
    item.centerY = centerY;

    item.angle += item.speed * dt;

    const x = item.centerX + Math.cos(item.angle) * item.radius + Math.sin(item.angle * 2.0) * (item.wobble * 0.5);
    const y = item.centerY + Math.sin(item.angle) * item.radius * 0.7 + Math.cos(item.angle * 1.5) * (item.wobble * 0.42);

    const el = item.el;
    const w = el.offsetWidth || 36, h = el.offsetHeight || 36;
    const flap = 0.92 + Math.abs(Math.sin(item.angle * 3)) * 0.16;
    el.style.transform = `translate(${x - w/2}px, ${y - h/2}px) rotate(${Math.sin(item.angle) * 34}deg) scale(${flap})`;

    // sparkles
    item.sparkleTimer -= dt;
    if (item.sparkleTimer <= 0) {
      _emitSparkle(x, y);
      item.sparkleTimer = 0.12 + Math.random() * 0.6;
    }
  }

  state.rafId = requestAnimationFrame(_butterflyLoop);
}

function _emitSparkle(x, y) {
  const s = document.createElement('span');
  s.className = 'butterfly-sparkle';
  s.style.left = `${Math.round(x)}px`;
  s.style.top = `${Math.round(y)}px`;
  const offsetX = Math.round((Math.random() - 0.5) * 18);
  const offsetY = Math.round((Math.random() - 0.5) * 14);
  s.style.transform = `translate(${offsetX}px, ${offsetY}px) translate(-50%,-50%) scale(0.2)`;
  document.getElementById('butterflies').appendChild(s);
  s.addEventListener('animationend', () => s.remove(), { once: true });
}

function clearButterflies() {
  if (_butterflyState.rafId) {
    cancelAnimationFrame(_butterflyState.rafId);
    _butterflyState.rafId = null;
  }
  _butterflyState.items.forEach(it => it.el.remove());
  _butterflyState.items = [];
  const container = document.getElementById('butterflies');
  if (container) container.querySelectorAll('.butterfly-sparkle').forEach(e => e.remove());
}

/* COUNTDOWN TIMER */
const weddingDate = new Date("May 2, 2026 11:30:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2,'0');
  document.getElementById("hours").innerText = String(hours).padStart(2,'0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2,'0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

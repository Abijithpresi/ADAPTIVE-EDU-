// ========== XP Bar Animation ========== //
function updateXP(currentXP, maxXP) {
  const xpProgress = document.getElementById('xpProgress');
  const xpLabel = document.getElementById('xpLabel');

  const percentage = Math.min((currentXP / maxXP) * 100, 100);
  xpProgress.style.width = percentage + '%';
  xpLabel.textContent = `XP: ${currentXP}/${maxXP}`;

  if (percentage === 100) {
    unlockAchievement("XP Master! 🚀");
  }
}

// ========== Surprise XP Popup ========== //
function showSurpriseXP(points = 10) {
  const popup = document.getElementById('surpriseXP');
  popup.textContent = `🎉 +${points} XP! Great Question!`;
  popup.classList.add('active');

  setTimeout(() => {
    popup.classList.remove('active');
  }, 3000);
}

// ========== Achievement Unlock Popup ========== //
function unlockAchievement(text) {
  const popup = document.getElementById('achievementPopup');
  const achievementText = document.getElementById('achievementText');

  achievementText.textContent = text;
  popup.classList.add('active');

  setTimeout(() => {
    popup.classList.remove('active');
  }, 4000);
}

// ========== Modal Management (Optional) ========== //
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// ========== Confetti Canvas (Super Bonus 🎉) ========== //
function throwConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = Array.from({length: 150}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();

      c.y += c.speed;
      if (c.y > canvas.height) c.y = 0;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

const enterScreen = document.getElementById('enter-screen');
const logoScreen = document.getElementById('logo-screen');
const siteHeader = document.getElementById('site-header');
const gallery = document.getElementById('gallery');
const bgMusic = document.getElementById('bg-music');

function showEl(el) {
  el.classList.remove('hidden');
  el.classList.add('visible');
}
function hideEl(el) {
  el.classList.remove('visible');
  el.classList.add('hidden');
}

document.getElementById('enter-btn').addEventListener('click', () => {
  hideEl(enterScreen);
  bgMusic.play();

  logoScreen.style.opacity = 1;
  setTimeout(() => {
    logoScreen.style.opacity = 0;
  }, 2000);

  setTimeout(() => {
    showEl(siteHeader);
    showEl(gallery);
  }, 3500);
});

// gallery item -> open its matching detail view
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const target = document.getElementById(item.dataset.detail);
    const photos = target.querySelector('.detail-photos');
    const dots = target.querySelectorAll('.dot');

    hideEl(gallery);
    photos.scrollLeft = 0;
    dots.forEach((d, i) => d.classList.toggle('active', i === 0));
    showEl(target);
  });
});

// back button in any detail view -> return to gallery
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    hideEl(btn.closest('.detail-view'));
    showEl(gallery);
  });
});

// update dots as user swipes, per detail view
document.querySelectorAll('.detail-view').forEach(view => {
  const photos = view.querySelector('.detail-photos');
  const dots = view.querySelectorAll('.dot');

  photos.addEventListener('scroll', () => {
    const index = Math.round(photos.scrollLeft / photos.clientWidth);
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  });
});

// stop audio when user leaves/tabs out, resume if they come back
let wasPlaying = false;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    wasPlaying = !bgMusic.paused;
    bgMusic.pause();
  } else if (wasPlaying) {
    bgMusic.play();
  }
});

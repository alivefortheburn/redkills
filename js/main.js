const enterScreen = document.getElementById('enter-screen');
const logoScreen = document.getElementById('logo-screen');
const siteHeader = document.getElementById('site-header');
const gallery = document.getElementById('gallery');
const bgMusic = document.getElementById('bg-music');
const detailView = document.getElementById('detail-view');
const backBtn = document.getElementById('back-btn');
const detailPhotos = document.getElementById('detail-photos');
const dots = document.querySelectorAll('#detail-dots .dot');

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

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    hideEl(gallery);
    detailPhotos.scrollLeft = 0;
    dots.forEach(d => d.classList.remove('active'));
    dots[0].classList.add('active');
    showEl(detailView);
  });
});

backBtn.addEventListener('click', () => {
  hideEl(detailView);
  showEl(gallery);
});

// update dots as user swipes
detailPhotos.addEventListener('scroll', () => {
  const index = Math.round(detailPhotos.scrollLeft / detailPhotos.clientWidth);
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
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

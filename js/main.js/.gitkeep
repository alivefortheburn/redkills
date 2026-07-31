const enterScreen = document.getElementById('enter-screen');
const logoScreen = document.getElementById('logo-screen');
const siteHeader = document.getElementById('site-header');
const gallery = document.getElementById('gallery');
const bgMusic = document.getElementById('bg-music');
const detailView = document.getElementById('detail-view');
const backBtn = document.getElementById('back-btn');

document.getElementById('enter-btn').addEventListener('click', () => {
  enterScreen.classList.add('hidden');
  enterScreen.style.opacity = 0;

  bgMusic.play();

  logoScreen.style.opacity = 1;
  setTimeout(() => {
    logoScreen.style.opacity = 0;
  }, 2000);

  setTimeout(() => {
    siteHeader.classList.add('visible');
    gallery.classList.add('visible');
  }, 3500);
});

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    gallery.classList.remove('visible');
    gallery.classList.add('hidden');
    detailView.classList.add('visible');
  });
});

backBtn.addEventListener('click', () => {
  detailView.classList.remove('visible');
  detailView.classList.add('hidden');
  gallery.classList.remove('hidden');
  gallery.classList.add('visible');
});

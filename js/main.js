const enterScreen = document.getElementById('enter-screen');
const logoScreen = document.getElementById('logo-screen');
const siteHeader = document.getElementById('site-header');
const gallery = document.getElementById('gallery');
const bgMusic = document.getElementById('bg-music');
const detailView = document.getElementById('detail-view');
const backBtn = document.getElementById('back-btn');
const detailPhotos = document.getElementById('detail-photos');
const dots = document.querySelectorAll('#detail-dots .dot');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

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

// tap a shirt photo to zoom fullscreen
document.querySelectorAll('.detail-photo').forEach(photo => {
  photo.addEventListener('click', () => {
    lightboxImg.src = photo.src;
    showEl(lightbox);
  });
});

// tap anywhere on the zoomed view to close it
lightbox.addEventListener('click', () => {
  hideEl(lightbox);
});

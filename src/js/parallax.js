
window.addEventListener('scroll', function () {
  parallax();
});

function parallax() {

  let wScroll = window.scrollY || document.documentElement.scrollTop;

  let bg = document.querySelectorAll('.parallax--bg');
  bg[0].style.backgroundPosition = 'center ' + (wScroll * 0.75) + 'px';

  let box = document.querySelectorAll('.parallax--box');
  box[0].style.top = -5 + (wScroll * .005) + 'em';

}

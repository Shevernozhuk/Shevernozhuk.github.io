document.addEventListener('DOMContentLoaded', () => {
  function initializeBackgroundChanger(selector, images) {
      const header = document.querySelector(selector);
      let currentIndex = 0;

      function changeBackground() {
          if (header) {
              header.style.backgroundImage = images[currentIndex];
              currentIndex = (currentIndex + 1) % images.length;
          }
      }

      setInterval(changeBackground, 3000);
      changeBackground();
  }

  initializeBackgroundChanger('.header-f1', [
      'url(../images/f1-1.jpg)',
      'url(../images/f1-2.jpg)',
      'url(../images/f1-3.jpg)'
  ]);

  initializeBackgroundChanger('.header-ms', [
      'url(../images/ms-1.jpg)',
      'url(../images/ms-2.jpg)',
      'url(../images/ms-3.jpg)'
  ]);

  initializeBackgroundChanger('.header-fr', [
      'url(../images/fr-1.jpg)',
      'url(../images/fr-2.jpg)',
      'url(../images/fr-3.jpg)'
  ]);

  initializeBackgroundChanger('.header-rb', [
      'url(../images/rb-1.jpg)',
      'url(../images/rb-2.jpg)',
      'url(../images/rb-3.jpg)'
  ]);
});


document.querySelector('#burger-btn').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
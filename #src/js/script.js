// @@include('_vendors.js');

// const mobileMenu = document.querySelector('.main-header__burger');
// const mapStatic = document.querySelector('.form__map-img');

/*burger & navigation*/
// mobileMenu.addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.main-header__burger').classList.toggle('active');
//   document.querySelector('.main-header').classList.toggle('active');
//   document.querySelector('.main-header__navigation').classList.toggle('active');
//   document.querySelector('body').classList.toggle('lock');
// });

/*no-js map */
// if (mapStatic) {
//   mapStatic.classList.remove('form__map--no-js');
// }

/*zoom gallery/baguetteBox */
const baguetteBoxGallery = document.querySelectorAll('.gallery');
if (baguetteBoxGallery.length > 0) {
  baguetteBox.run('.gallery', {});
}

/*filter */
let filterItems = document.querySelectorAll('.filter__item');
let filterContent = document.querySelectorAll('.filter-content__col');
filterItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault;
    let dataAttr = item.getAttribute('data-filter');
    filterContent.forEach(function (i) {
      if (dataAttr == 1) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
        if (i.classList.contains('filter-' + dataAttr)) {
          i.style.display = 'block';
        }
      }
    });
    filterItems.forEach(function (i) {
      i.classList.remove('active');
    });
    this.classList.add('active');
  });
});



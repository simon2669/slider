let items = Array.from(document.querySelectorAll('.item'));
let rightSlide = document.querySelector('.right-slide');
let leftSlide = document.querySelector('.left-slide');
let actualPicture = document.querySelector('.actual-picture');
let slider = document.querySelector('.slider');

let radioGomb = Array.from(document.querySelectorAll('.radio-gomb'));
let aktív = 0;
radioGomb.forEach((item, index) => item.addEventListener('click', function () {
  items[aktív].classList.remove('active');
  aktív = radioGomb[index].value;
  items[aktív].classList.add('active');
  console.log(aktív)
}))

rightSlide.addEventListener('click', function () {
  slide('right');

});
(function () {
  actualPicture.textContent = `${aktív + 1} / ${items.length}`
})();
leftSlide.addEventListener('click', function () {
  slide('left');

});
function slide(param) {

  if (param == 'right') {
    if (aktív + 1 >= 5) {
      items[aktív].classList.remove('active');
      aktív = 0;
      items[aktív].classList.add('active');
    }
    else {
      items[aktív].classList.remove('active');
      items[aktív + 1].classList.add('active');
      aktív++;
    }


  }
  else if (param == 'left') {
    if (aktív == 0) {
      items[aktív].classList.remove('active');
      aktív = items.length - 1;
      items[aktív].classList.add('active');
    }
    else {

      items[aktív].classList.remove('active');
      items[aktív - 1].classList.add('active');
      aktív--;
    }
  }
  actualPicture.textContent = `${aktív + 1} / ${items.length}`;
  radioGomb[aktív].checked = true;
  console.log(aktív)
}

setInterval(function () {
  slide('right')
}, 8000)











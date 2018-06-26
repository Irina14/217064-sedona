var search = document.querySelector('.search-button');
var form = document.querySelector('.search-form');
var arrival = form.querySelector('[name=date-arrival]');
var exit = form.querySelector('[name=date-exit]');
var adults = form.querySelector('[name=number-adults]');
var children = form.querySelector('[name=number-children]');

var isStorageSupport = true;
var storage = '';

  try {
    storage = localStorage.getItem('adults');
    storage = localStorage.getItem('children');
  } catch (err) {
    isStorageSupport = false;
  }

search.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('search-form-open');
});

form.addEventListener('submit', function(evt) {
  if (!arrival.value || !exit.value || !adults.value || !children.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
});
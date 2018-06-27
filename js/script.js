var search = document.querySelector('.search-button');
var form = document.querySelector('.search-form');
var arrival = form.querySelector('[name=date-arrival]');
var exit = form.querySelector('[name=date-exit]');
var adults = form.querySelector('[name=number-adults]');
var children = form.querySelector('[name=number-children]');

form.classList.remove('search-form-open');

var isStorageSupport = true;
var storage_adults = '';
var storage_children = '';

  try {
    storage_adults = localStorage.getItem('adults');
    storage_children = localStorage.getItem('children');
  } catch (err) {
    isStorageSupport = false;
  }

search.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('search-form-open');
  form.classList.remove('search-form-error');

  if (storage_adults || storage_children) {
    adults.value = storage_adults;
    children.value = storage_children;
  }
});

form.addEventListener('submit', function(evt) {
  if (!arrival.value || !exit.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove('search-form-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('search-form-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
});
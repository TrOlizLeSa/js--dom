import 'whatwg-fetch';

export default () => {
  const inputElements = Array.from(document.querySelectorAll('input[data-autocomplete]'));
  inputElements.forEach((input) => {

    const autocompleteUrl = input.dataset.autocomplete;
    const listName = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${listName}"]`);

    input.addEventListener('input', (event) => {

      const searchQuery = event.target.value;

      fetch(`${autocompleteUrl}?search=${encodeURIComponent(searchQuery)}`)
        .then((response) => response.json())
        .then((countries) => {
          if (countries.length > 0) {
            const countryListItems = countries.map((country) => `<li>${country}</li>`).join('');
            list.innerHTML = countryListItems;
          } else {
            list.innerHTML = '<li>Nothing</li>';
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    });
  });
};

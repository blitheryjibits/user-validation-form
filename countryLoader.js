const xhr = new XMLHttpRequest();
xhr.open('GET', 'countryList.html', true);
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    const list = document.createElement('select');
    list.innerHTML = this.responseText;
    list.classList.add("form-select");
    list.id = "country";
    list.setAttribute('name', "country");
    document.getElementById('country-label').insertAdjacentElement('afterend',list);
  }
};
xhr.send();
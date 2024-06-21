let form = document.querySelector('.catchForm');

let emptydiv = document.querySelector('.emptydiv');

let submitbtn = document.querySelector('.submit');

let clearButton = document.querySelector('.clear');

let formList = [];

if (typeof localStorage.formList !== 'undefined') {
  formList = JSON.parse(localStorage.formList);
  renderList();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  formList.push(formObj);
  form.reset();
  save();
  renderList();

}

function save() {
  localStorage.formList = JSON.stringify(formList);
}

form.addEventListener('submit', handleFormSubmit);

function renderList() {
  let emptydiv = document.querySelector('.emptydiv');
  emptydiv.innerHTML = '';

  formList.forEach(formObj => {
    let formEntryHTML = `
      <ul class="form-entry">
        <li>Ad: ${formObj.name} </li>
        <li>Soyad: ${formObj.lastName} </li>
        <li>Adres: ${formObj.address} </li>
        <li>Telefon Numarası: ${formObj.phoneNumber} </li>
      </ul>
    `;
    emptydiv.innerHTML += formEntryHTML;
  });
}


function clearList() {
  localStorage.clear();
  formList = [];
  renderList();
}


clearButton.addEventListener('click', clearList);



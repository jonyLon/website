
document.getElementById('saveChanges').addEventListener('click', function () {
  var fullName = document.getElementById('InputFullName').value;
  var notifyElement = document.querySelector('.notify');
  notifyElement.textContent = 'Дякую ' + fullName + ', ваша заявка прийнята.';

  // Закриття модального вікна
  var modalElement = document.getElementById('exampleModal');
  var modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
});


const btn = document.getElementById('modal-button');

btn.addEventListener('click', event => {
  openModal()
});

// Get the modal element
var modal = document.getElementById('modal');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Open the modal
function openModal() {
  modal.style.display = 'block';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const notify = document.getElementsByClassName("notify")[0];
const subbtn = document.getElementById("seve_ch");
const fullname = document.getElementById("full-name");
subbtn.addEventListener('click', event => {
  // event.preventDefault();
  notify.textContent = `Дякую ${fullname.value} ваша заявка прийнята.`
})

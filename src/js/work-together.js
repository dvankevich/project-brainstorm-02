document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  function openModal() {
    modal.style.display = 'flex';
  }
  function closeModal() {
    modal.style.display = 'none';
  }
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    openModal();
    form.reset();
  });
});

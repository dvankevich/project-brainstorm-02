document
  .getElementById('form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const modal = document.getElementById('modal');
    const iconOk = document.querySelector('.icon-ok');
    const sendButton = document.querySelector('.send-btn');
    const formData = {
      email: emailInput.value,
      comment: messageInput.value,
    };
    sendButton.disabled = true;

    try {
      const response = await fetch(
        'https://portfolio-js.b.goit.study/api/requests',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
        return;
      }
      modal.style.display = 'block';
      emailInput.value = '';
      messageInput.value = '';
      iconOk.style.display = 'none';
    } catch (error) {
      console.error('Error:', error);
      alert('Your request failed. Please try again later');
    } finally {
      sendButton.disabled = false;
    }
  });
document
  .querySelector('.modal-close-btn')
  .addEventListener('click', function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  });
const emailInput = document.getElementById('email');

const iconOk = document.querySelector('.icon-ok');
const emailError = document.getElementById('email-error');
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

emailInput.addEventListener('input', function () {
  if (emailPattern.test(emailInput.value)) {
    emailInput.classList.remove('invalid');
    emailError.style.display = 'none';
    iconOk.style.display = 'block';
  } else {
    emailInput.classList.add('invalid');
    emailError.style.display = 'block';
    iconOk.style.display = 'none';
  }
});

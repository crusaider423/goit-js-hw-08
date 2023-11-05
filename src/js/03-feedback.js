import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onSubmit);

function onFormInput(e) {
  if (e.currentTarget === null) {
    return;
  }
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

function foo() {
  const locStorGet = localStorage.getItem('feedback-form-state');
  if (locStorGet === null) {
    return;
  }
  const locStorPars = JSON.parse(locStorGet);

  formRef.elements.email.value = locStorPars.email;
  formRef.elements.message.value = locStorPars.message;
  return locStorPars;
}

function onSubmit(e) {
  e.preventDefault();

  if (!(e.target.elements.email.value && e.target.elements.message.value)) {
    return;
  }

  console.log(foo());
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
foo();

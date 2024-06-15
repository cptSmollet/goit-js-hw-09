document.addEventListener('DOMContentLoaded', () => {
  const formData = {
    email: '',
    message: ''
  };

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  
  
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

 
  const saveFormDataToLocalStorage = () => {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  
  const validateForm = () => {
    if (formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Fill please all fields');
      return false;
    }
    return true;
  };

  
  form.addEventListener('input', (event) => {
    if (event.target.matches('input[name="email"]')) {
      formData.email = event.target.value;
    } else if (event.target.matches('textarea[name="message"]')) {
      formData.message = event.target.value;
    }
    saveFormDataToLocalStorage();
  });

 
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
     
      localStorage.removeItem('feedback-form-state');
      formData.email = '';
      formData.message = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  });
});
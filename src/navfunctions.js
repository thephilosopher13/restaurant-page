function makeButtonActive(button) {
    const buttons = document.querySelectorAll('.button')
  
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

export default makeButtonActive
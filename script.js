// Get the input elements
const inputs = document.querySelectorAll('.code');

// Listen for keyup events on the inputs
inputs.forEach(input => {
  input.addEventListener('keyup', () => {
    // If the key pressed is the backspace key
    // if (event.keyCode === isNaN(input.value)) {
      // Remove the last character from the input
      // input.value = input.value.slice(0, -1);

      // If the input is empty
      if (input.value === '') {
        // Focus the previous input
        const previousInput = input.previousElementSibling;
        if (previousInput) {
          previousInput.focus();
        }
      // }
    } else {
      // Otherwise, add the character to the input
      input.value += event.keyCode;

      // If the input is full
      if (input.value.length === 1) {
        // Focus the verify button
        document.getElementById('verify-button').focus();
      } else {
        // Focus the next input
        const nextInput = input.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  });
});

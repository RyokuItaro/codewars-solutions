 function validate(password) {
  return /(?=^[a-zA-Z0-9]*$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/.test(password);
}
// update to arrow function
const validate = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);

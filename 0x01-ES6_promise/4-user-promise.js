export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    if (firstName === true && lastName === true) {
      resolve(`{firstName: ${firstName}, lastName: ${lastName}}`);
    }
  });
}

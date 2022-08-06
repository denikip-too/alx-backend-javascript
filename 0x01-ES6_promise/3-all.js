// import uploadPhoto and createUser from utils.js
// and log body firstName lastName to the console

import uploadPhoto, createUser from utils.js

export default function handleProfileSignup((resolve, reject) => {
  if (resolve === true) {
    resolve(${body} ${firstName} ${lastName});
    console.log(resolve);
  } else {
    reject(new Error('Signup system offline'));
  }
});

// import uploadPhoto and createUser from utils.js
// and log body firstName lastName to the console

import uploadPhoto from "./utils";
import createUser from "./utils";

export default function handleProfileSignup() {
  promise.all(`${body} ${firstName} ${lastName}`).then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("Signup system offline");
  });
}

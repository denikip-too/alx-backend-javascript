//  return a promise

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve('Success', 200);
    }
    else {
      resolve('The fake API is not working currently');
    }
  });
}

//  return a promise

export function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve('Success', 200);
    }
    else if (success === false) {
      reject('The fake API is not working currently');
    }
  });
}

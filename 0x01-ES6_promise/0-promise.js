// Return a Promise using this prototype function getResponseFromAPI()

export function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    [resolve, reject]
  });
  return promise;
}

// Appending three handlers to the function

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'success' });
  }).catch(() => {
    reject(new Error());
  }).finally(() => {
    console.log('Got a response from the API');
  });
}

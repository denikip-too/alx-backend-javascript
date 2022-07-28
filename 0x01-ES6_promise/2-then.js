// Appending three handlers to the function

export default function handleResponseFromAPI(promise) {
  const promise1 = { status: 200, body: 'success' };
  return promise
    .then(() => promise1)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}

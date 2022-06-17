// modifying variables inside the function so that then are not overwritten

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;
  
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}

// modifying variables inside the function so that then are not overwritten

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}

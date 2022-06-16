// modifying variables inside the function so that then are not overwritten

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  return [task, task2];
}

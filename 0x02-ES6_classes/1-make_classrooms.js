// return an array of 3 ClassRoom objects with the sizes 19, 20, and 34

import ClassRoom from "./0-classroom";

export default function initializeRooms () {
  const array = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return array;
}

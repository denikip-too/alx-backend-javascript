// return an array of 3 ClassRoom objects with the sizes 19, 20, and 34

import ClassRoom from "./0-classroom.js";

export default function initializeRooms () {
  classroom1 = new ClassRoom(19);
  clasroom2 = new ClassRoom(20);
  classromm3 = new ClassRoom(34);
  return [{ classroom1, classroom2, classroom1 }];
}

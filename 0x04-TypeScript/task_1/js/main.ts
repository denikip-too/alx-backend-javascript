interface Teacher {
  firstName: string = "default",
  lastName: string = "default",
  fullTimeEmployee: boolean = "default",
  yearsOfExperience: number,
  location: string = "default",
  contract: boolean
}
interface Directors extends Teacher {
  numberOfReports: number
}
interface printTeacherFunction {
  firstName: string,
  lastName: string
}
function printTeacher(firstName: string, lastName: string) : printTeacherFunction {
  console.log(`Array.from(${firstName})[0]"."${lastName}`);
}

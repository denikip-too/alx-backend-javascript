// Writing function named createEmployeesObject that receives two arguments

export default function createEmployeesObject(departmentName, employees) {
  let obj = {
    departmentName: {...employees}
  };
  return obj;
}

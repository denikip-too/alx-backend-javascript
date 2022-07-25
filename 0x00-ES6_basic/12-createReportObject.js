// return value of the previous function createEmployeesObject

export default function createReportObject(employeesList) {
  return {
    allEmployees: {employeesList.department},
    getNumberOfDepartments: function(employeesList) {
      return employeesList.length;
    }
  }
};
const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

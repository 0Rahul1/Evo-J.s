// Employee Grouping and Sorting
function groupByDepartment(employees) {
  return employees.reduce((result, emp) => {
      const { department } = emp;
      if (!result[department]) result[department] = [];
      result[department].push(emp);
      result[department].sort((a, b) => a.age - b.age);
      return result;
  }, {});
}

const employees = [
  { name: "Alice", age: 30, salary: 50000, department: "HR" },
  { name: "Bob", age: 35, salary: 60000, department: "Finance" },
  { name: "Charlie", age: 28, salary: 55000, department: "HR" },
  { name: "David", age: 40, salary: 70000, department: "IT" },
  { name: "Eve", age: 32, salary: 65000, department: "Finance" },
 ];
 

console.log(groupByDepartment(employees));

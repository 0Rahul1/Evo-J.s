// 6.1 Multilevel Destructuring Challenge
const company = {
  name: "Tech Solutions Inc.",
  departments: {
    engineering: {
      manager: {
        name: "John Doe",
        age: 35,
        position: "Engineering Manager",
        salary: 100000,
      },
      employees: [
        { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
        { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
      ],
    },
    sales: {
      manager: {
        name: "Jane Smith",
        age: 40,
        position: "Sales Manager",
        salary: 95000,
      },
      employees: [
        { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
        { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
      ],
    },
    marketing: {
      manager: {
        name: "Emily Johnson",
        age: 37,
        position: "Marketing Manager",
        salary: 90000,
      },
      employees: [
        { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
        { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
      ],
    },
  },
};

// Extract Manager Details
function extractManagerDetails({ departments }) {
  return Object.values(departments).map(({ manager }) => ({
    name: manager.name,
    age: manager.age,
    position: manager.position,
    salary: manager.salary,
  }));
}

//. Calculate Average Salary
function calculateAverageSalary({ departments }) {
  const allSalaries = [];
  Object.values(departments).forEach(({ manager, employees }) => {
    allSalaries.push(manager.salary);
    allSalaries.push(...employees.map(({ salary }) => salary));
  });
  const totalSalary = allSalaries.reduce((sum, salary) => sum + salary, 0);
  return (totalSalary / allSalaries.length).toFixed(2);
}

//  Find Highest-Paid Employee
function findHighestPaidEmployee({ departments }) {
  let highestPaid = { name: "", salary: 0 };
  Object.values(departments).forEach(({ manager, employees }) => {
    const candidates = [manager, ...employees];
    candidates.forEach(({ name, salary }) => {
      if (salary > highestPaid.salary) {
        highestPaid = { name, salary };
      }
    });
  });
  return highestPaid;
}

// Example Usage
console.log(extractManagerDetails(company));
console.log(calculateAverageSalary(company));
console.log(findHighestPaidEmployee(company));

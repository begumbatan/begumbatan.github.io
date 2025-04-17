
// Question 1
const employees = [
  {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
  }
];

console.log("Question 1");
console.log(workers);

// Question 2
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees
};

console.log("Question 2");
console.log(company);


// Question 3
const newEmployee = {
  firstName: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raiseEligible: false
};

company.employees.push(newEmployee);

console.log("Question 3:");
console.log(company);


// Question 4
let total = 0;
for (x in company.employees.employees)
  {
    total += company.employees.employees[x].salary;
  }
console.log("Question 4")
console.log("Total salary:", total);

// Question 5

function raise() {
  for (let i = 0; i < company.employees.length; i++) {
    const employee = company.employees[i];
    if (employee.raiseEligible) {
      employee.salary = employee.salary * 1.1;
      employee.raiseEligible = false;
    }
  }
}

raise(company);

console.log("Question 5:");
console.log(company);


// Question 6

const home = ['Anna', 'Sam'];

function wfh(company, wfhList) {
  company.employees.forEach(employee => {
    employee.wfh = (employee.firstName === 'Anna' || employee.firstName === 'Sam');
  });
}

wfh(company, home);

console.log("Problem 6:");
console.log(company);

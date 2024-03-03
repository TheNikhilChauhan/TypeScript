// Intersection types in TS allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.

//define two types

type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
  id: 12344,
  name: "Chandler Bing",
  department: "Data Processing",
  role: "Team Lead",
};

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);

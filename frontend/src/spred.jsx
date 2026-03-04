import React from "react";

const Spred = () => {



  // Original object
  const form = {
    name: "Akhil",
    email: "akhil@gmail.com",
  };

  // Using spread operator
  const updatedForm = {
    ...form,
    name: "Arjun",
  };

  // Example of arrow function and normal function

  const add = (a, b) => {
    return a + b;
    console.log(add(2, 3)); // Output: 5
  }; //old way of writing a function

  const addArrow = (a, b) => a + b; //new way of writing a function using arrow function
  console.log(addArrow(2, 3)); // Output: 5

  return (
    <div>
      <h2>Spread Operator Example</h2>
      <p>Original Name: {form.name}</p>
      <p>Updated Name: {updatedForm.name}</p>
      <p>Email: {updatedForm.email}</p>
    </div>
  );

  //spread example
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy); // Output: { a: 1, b: 2 }

};

export default Spred;

"use strict";

// Number Array Manipulation
let numbers = [100, 456, 98, 45, 43, 73];


let allNumbers = document.getElementById("allNumbers");
let evenNumbers = document.getElementById("evenNumbers");
let oddNumbers = document.getElementById("oddNumbers");

for (let i = 0; i < numbers.length; i++) {
  allNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  }
}

// Object Array and Bootstrap Rendering
let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
];

console.log(blogPosts.length);
for (let i = 0; i < blogPosts.length; i++) {
  let bootstrapCard = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
}

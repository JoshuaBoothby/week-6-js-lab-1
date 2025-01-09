"use strict";

// Number Array Manipulation
let numbers = [100, 456, 98, 45, 43, 73];

let allNumbers = document.getElementById("allNumbers");
let evenNumbers = document.getElementById("evenNumbers");
let oddNumbers = document.getElementById("oddNumbers");

// All numbers
for (let i = 0; i < numbers.length; i++) {
  allNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  console.log(numbers[i]);
}

// Even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  }
}

// Odd numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.innerHTML += `<li>${numbers[i]}</li>`;
  }
}

// Object Array and Bootstrap Rendering
let blogPosts = [
  {
    id: 1,
    title: "Blog Post 1",
    author: "Author A",
    date: "2023-11-15",
    src: "https://via.placehold.com/100x100",
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author B",
    date: "2023-12-01",
    src: "https://via.placehold.com/100x100",
  },
];

let blogPostsContainer = document.getElementById("blogPostsContainer");

// Both blog posts as a Bootstrap card
for (let i = 0; i < blogPosts.length; i++) {
  let bootstrapCard = `<div class="card" style="width: 18rem;">
  <img src="${blogPosts[i].src}" class="card-img-top" alt="${blogPosts[i].title}">
  <div class="card-body">
    <h5 class="card-title">${blogPosts[i].title}</h5>
    <p class="card-text">${blogPosts[i].author}</p>
    <p class="card-text">${blogPosts[i].date}</p>
  </div>
</div>`;
  blogPostsContainer.innerHTML += bootstrapCard;
}

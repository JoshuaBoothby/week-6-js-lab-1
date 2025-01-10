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
    src: "https://placehold.co/100x100",
  },
  {
    id: 2,
    title: "Blog Post 2",
    author: "Author B",
    date: "2023-12-01",
    src: "https://placehold.co/100x100",
  },
];

let blogPostsContainer1 = document.getElementById("blogPostsContainer1");

// Both blog posts as a Bootstrap card
for (let i = 0; i < blogPosts.length; i++) {
  let bootstrapCard = `<div class="card" style="width: 18rem;">
  <img src="${blogPosts[i].src}" class="card-img-top" alt="${blogPosts[i].title}">
  <div class="card-body">
    <h2 class="card-title">${blogPosts[i].title}</h2>
    <p class="card-text">${blogPosts[i].author}</p>
    <p class="card-text">${blogPosts[i].date}</p>
  </div>
</div>`;
  blogPostsContainer1.innerHTML += bootstrapCard;
}

let blogPostsContainer2 = document.getElementById("blogPostsContainer2");

for (let i = 0; i < 1; i++) {
  let bootstrapCard = `<div class="card" style="width: 18rem;">
  <img src="${blogPosts[i].src}" class="card-img-top" alt="${blogPosts[i].title}">
  <div class="card-body">
    <h2 class="card-title">${blogPosts[i].title}</h2>
    <p class="card-text">${blogPosts[i].author}</p>
    <p class="card-text">${blogPosts[i].date}</p>
  </div>
</div>`;
  blogPostsContainer2.innerHTML += bootstrapCard;
}

// Adding five more posts
blogPosts.push(
  {
    id: 3,
    title: "Blog Post 3",
    author: "Author C",
    date: "2023-12-05",
    src: "https://via.placeholder.com/100x100",
  },
  {
    id: 4,
    title: "Blog Post 4",
    author: "Author D",
    date: "2023-12-10",
    src: "https://via.placeholder.com/100x100",
  },
  {
    id: 5,
    title: "Blog Post 5",
    author: "Author E",
    date: "2023-12-15",
    src: "https://via.placeholder.com/100x100",
  },
  {
    id: 6,
    title: "Blog Post 6",
    author: "Author F",
    date: "2023-12-20",
    src: "https://via.placeholder.com/100x100",
  },
  {
    id: 7,
    title: "Blog Post 7",
    author: "Author G",
    date: "2023-12-25",
    src: "https://via.placeholder.com/100x100",
  }
);

let blogPostsContainer3 = document.getElementById("blogPostsContainer3");

for (let i = 2; i < blogPosts.length; i++) {
  let bootstrapCard = `<div class="card" style="width: 18rem;">
    <img src="${blogPosts[i].src}" class="card-img-top" alt="${blogPosts[i].title}">
    <div class="card-body">
      <h2 class="card-title">${blogPosts[i].title}</h2>
      <p class="card-text">${blogPosts[i].author}</p>
      <p class="card-text">${blogPosts[i].date}</p>
    </div>
  </div>`;
  blogPostsContainer3.innerHTML += bootstrapCard;
}



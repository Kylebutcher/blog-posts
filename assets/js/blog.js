const info = document.querySelector('main');

const element = document.querySelector('body');
const checkBox = document.getElementById("toggle");


checkBox.addEventListener("click", function () {
  element.classList.toggle("dark-mode");
  console.log("hello");
}
)

function createBlogPost() {
  let string = localStorage.getItem("submit");
  let submit = JSON.parse(string) || [];
  for (let i = 0; i< submit.length; i++){

    const div = document.createElement("div")
    div.classList.add("blog-post")
    let html = `
    <h1>${submit[i].title}</h1>
    <p>Content: ${submit[i].content}</p>
    <p>Username: ${submit[i].name}</p>
    `
    
    div.innerHTML = html
    info.appendChild(div);
    
    
  }
}
createBlogPost();






// let mode = dark;

// // Access toggle switch HTML element
// const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

// // Set default mode to dark
// let mode = 'dark';

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener('click', function () {
//   // If mode is dark, apply light background
//   if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
let link = document.querySelector(".form");
let string = localStorage.getItem("submit");
let submit = JSON.parse(string) || [];

console.log(submit);
const usernameInput = document.getElementById('username');
let title = document.getElementById('blogtitle');
let blogContent = document.getElementById('blogcontent');

function missingValue(event) {
  event.preventDefault();
  if(usernameInput.value == "" || title.value == "" || blogContent == ""){
alert("Required input in fields");}
  else {
    formSubmit();
  }}

function formSubmit() {

  let blogPost = {
    name: document.getElementById('username').value,
    title: document.getElementById('blogtitle').value,
    content: document.getElementById('blogcontent').value,
  };
  submit.push(blogPost);
  console.log(username);
  localStorage.setItem("submit", JSON.stringify(submit));
  document.location.href="./blog.html";
}

const element = document.querySelector('body');
const checkBox = document.getElementById("toggle");

checkBox.addEventListener("click", function () {
  element.classList.toggle("dark-mode");
  console.log("hello");
})

link.addEventListener("submit", missingValue);
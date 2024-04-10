let link = document.querySelector(".submit");
let string = localStorage.getItem("submit");
let submit = JSON.parse(string) || [];

console.log(submit);
function onSubmit() {
  let blogPost = {
    name: document.getElementById('username').value,
    title: document.getElementById('blogtitle').value,
    content: document.getElementById('blogcontent').value,
  };
  submit.push(blogPost);
  console.log(username);
  localStorage.setItem("submit", JSON.stringify(submit));
}

const element = document.querySelector('body');
const checkBox = document.getElementById("toggle");

checkBox.addEventListener("click", function () {
  element.classList.toggle("dark-mode");
  console.log("hello");
})

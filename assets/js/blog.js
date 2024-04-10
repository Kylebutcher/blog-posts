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

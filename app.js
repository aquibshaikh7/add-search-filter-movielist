let search = document.querySelector("#button2");
let addmovie = document.querySelector("#mybtn");

let search1;
let footer = document.querySelector("footer");
let fun = (event) => {
  let favourite = document.querySelector("#movies").value;
  let favouritemovie = favourite.toUpperCase();
  let einfoname = document.querySelector("#name").value;
  let einfovalue = document.querySelector("#name").value;
  let word = `${favouritemovie} -${einfoname} : ${einfovalue}`;
  let ul = document.querySelector("#ul");
  let li = document.createElement("li");
  li.append(word);
  ul.append(li);
  footer = ul.textContent;
  search1 = footer;
  event.preventDefault();
};
let fun2 = () => {
  let searchinbox = document.querySelector("#fbts").value;
};
addmovie.addEventListener("click", fun);
search.addEventListener("click", fun2);

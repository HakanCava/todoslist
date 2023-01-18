const btn = document.querySelector("#btn1");
const input = document.querySelector("#input");
const square = document.querySelector("#square");
const liCheck = document.querySelector(".li-check");
const ulTask = document.querySelector(".ul-task");
const dlt = document.querySelector(".delete");
let myLi;
let bttonI;
let btton;
eventlisteners();

function eventlisteners() {
  btn.addEventListener("click", addNewItem);
  ulTask.addEventListener("click", (e) => {
    squareFunc(e);
    deleteFunc(e);
  });

}

function addNewItem(e) {
  if (input.value.trim() === "") {
    alert("Please add something");
  } else {
    myLi = document.createElement("li");
    myLi.setAttribute("class", "li-check");

    const spn = document.createElement("span");
    const spnI = document.createElement("i");
    spnI.setAttribute("id", "square");
    spnI.setAttribute("class", "fa-regular fa-square");
    spn.appendChild(spnI);
    const p = document.createElement("p");
    p.innerText = input.value;
    btton = document.createElement("button");
    btton.setAttribute("class", "delete");
    bttonI = document.createElement("i");
    bttonI.setAttribute("class", "fa-solid fa-xmark");
    btton.appendChild(bttonI);
    myLi.appendChild(spn);
    myLi.appendChild(p);
    myLi.appendChild(btton);
    ulTask.appendChild(myLi);
    input.value = "";
  }
  e.preventDefault();
}

function squareFunc(e) {
  if (e.target.className === "fa-regular fa-square") {
    e.target.style.backgroundColor = "blue";
    e.target.parentElement.parentElement.style.backgroundColor = "blue";
    e.target.parentElement.parentElement.style.color = "white";
    e.target.parentElement.parentElement.style.textDecoration = "line-through";
    e.target.parentElement.innerText = "✓";
  } e.preventDefault();
}

function deleteFunc(e) {
  if (e.target.className === "fa-solid fa-xmark") {
    console.log(e.target);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

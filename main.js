let input = document.querySelector(".input");
let listContainer = document.querySelector(".list-container");
let addBtn = document.querySelector(".add");
let ul = document.querySelector(".lists");
const inputsContainer = document.querySelector(".create-input");
let tasks = document.querySelectorAll("ul li")

console.log(tasks)




function addTask() {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("li");

    let deletebtn = document.createElement("span");
    deletebtn.innerHTML = "Delete";
    deletebtn.classList.add("span");

    ul.appendChild(li);
    li.appendChild(deletebtn);

    input.value = "";
  } else {
    alert("you must write some thing");
  }
  saveData();
}

// Delete And Check Function
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("span")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("li")) {
    e.target.classList.toggle("checked");
  }
  saveData();
});

// Save In LocalStorage
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showdata() {
  ul.innerHTML = localStorage.getItem("data");
}

showdata();

// Delete All


function deleteAll() {
  if (localStorage != '') {
    let deleteAllBtn = document.createElement("button");
    deleteAllBtn.innerHTML = "Delete All";
    inputsContainer.appendChild(deleteAllBtn);
    deleteAllBtn.onclick = function(){
      localStorage.clear()
     ul.innerHTML = ''
    }
  }
 saveData()

}

deleteAll()
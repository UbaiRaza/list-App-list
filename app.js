function adTodo() {
  var input = document.getElementById("inputfield");
  var liElement = document.createElement("li");
  var litext = document.createTextNode(input.value);

  liElement.appendChild(litext);

  var list = document.getElementById("list");
  list.appendChild(liElement);
  var delbtu = document.createElement("button");
  var delbtuText = document.createTextNode("Delet");
  delbtu.appendChild(delbtuText);
  delbtu.setAttribute("onclick", "deletItems(this)");
  liElement.appendChild(delbtu);
  // ***************Edewfg******************
  var editbtn = document.createElement("button");
  var editbtnText = document.createTextNode("edit");
  editbtn.setAttribute("onclick", "editItems(this)");
  editbtn.appendChild(editbtnText);
  liElement.appendChild(editbtn);

  input.value = "";
}

function deleteAll() {
  var list = document.getElementById("list");
  list.innerHTML = "";
}

function deletItems(button) {
  button.parentNode.remove();
}

function editItems(e) {
  var input = prompt("Enter update Value");
  e.parentNode.firstChild.nodeValue = input;
}

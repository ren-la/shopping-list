// var buttonEnter = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.getElementsByClassName("shopping-list")[0];

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create div
	var item = document.createElement("div");
	item.classList.add("item");
	// create paragraph
	var para = document.createElement("p");
	para.appendChild(document.createTextNode(input.value));
	para.addEventListener("click", toggleDoneAfterClick);
	// create button
	var button = document.createElement("button");
	button.innerHTML = "x";
	button.addEventListener("click", deleteItem);
	// append children
	item.appendChild(para);
	item.appendChild(button);
	list.appendChild(item);
	// clear input field
	input.value = "";
}

function toggleDoneAfterClick(event) {
	event.target.classList.toggle("done");
}

function deleteItem(event) {
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

listLength = list.children.length
for (var i=0; i < listLength; i++) {
	var item = list.children[i];
	var text = item.children[0];
	var button = item.children[1];
	text.addEventListener("click", toggleDoneAfterClick);
	button.addEventListener("click", deleteItem);
}

// buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

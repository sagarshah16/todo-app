


var newtask=document.getElementById("TextInput");
var addbutton=document.getElementsByTagName("button")[0];
var incompletetasks=document.getElementById("incomplete-tasks");
var completedtasks=document.getElementById("completed-task");

var createnewtaskelement = function (taskstring){
 

 var listItem=document.createElement("li");
 var checkbox=document.createElement("input");
 var label=document.createElement("label");
 var editInput=document.createElement("input");
 var editButton=document.createElement("button");
 var deleteButton=document.createElement("button");

 checkbox.type="checkbox";
 editInput.type="text";

 editButton.innerText="Edit";
 editButton.className="edit";
 deleteButton.innerText="Delete";
 deleteButton.className="delete";

  label.innerText=taskstring;

 listItem.appendChild(checkbox);
 listItem.appendChild(label);
 listItem.appendChild(editInput);
 listItem.appendChild(editButton);
 listItem.appendChild(deleteButton);

     return listItem;
}
function Addtask()  {
var listItem= createnewtaskelement(newtask.value);
incompletetasks.appendChild(listItem);
BindTask(listItem,CompletedTask);
newtask.value="";
}
var IncompleteTask=function(){
var listItem=this.parentNode;
completedtasks.appendChild(listItem);
BindTask(listItem,CompletedTask);
}
function CompletedTask(){
var listItem=this.parentNode;
incompletetasks.appendChild(listItem);
BindTask(listItem,IncompleteTask);

}
var EditButton=function(){
	var listItem = this.parentNode;

	var editbox=listItem.querySelector("input[type=text]");
	var label=listItem.querySelector("label");

	var containclass=listItem.classList.contains("editTask");

	if(containclass){

		label.innerText=editbox.value;
	}
	else{
		editbox.value=label.innerText;
	}
listItem.classList.toggle("editTask");

}
var DeleteButton= function() {
	var listItem=this.parentNode;
	var ui=listItem.parentNode;
	ui.removeChild(listItem);

}


addbutton.addEventListener("click",Addtask);

var BindTask = function(itemlist,checkboxeventhandler) {
	var checkbox = itemlist.querySelector("input[type=checkbox]");
	var editbutton = itemlist.querySelector("button.edit");
	var deletebuton = itemlist.querySelector("button.delete");

	editbutton.onclick=EditButton;
	deletebuton.onclick=DeleteButton;

	checkbox.onchange=checkboxeventhandler;

}

for(var i=0; i<incompletetasks.children.length ; i++){
	BindTask(incompletetasks.children[i],IncompleteTask);
}
for(var i=0; i<completedtasks.children.length ; i++){
	BindTask(completedtasks.children[i],CompletedTask);
}
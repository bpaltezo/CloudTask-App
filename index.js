var listtask =[];

retrievitem();

//function to show options-button * when menubutton clicked

function showoptions(){
	
	var container = document.getElementById('optionsbtn');
	container.setAttribute('style','display:block;');

	var menubtn = document.getElementById('menubtn');
	menubtn.setAttribute('style','display:none;');
}

//function to close options-button

function closeoptions(){

	var container = document.getElementById('optionsbtn');
	container.setAttribute('style','display:none;');	

	var menubtn = document.getElementById('menubtn');
	menubtn.setAttribute('style','display:block;');
}

//function to show the modal field

function showmodal(){

	var modal = document.getElementById('modal-container');
	modal.setAttribute('style','display:block;');

}

// function to close modal field

function closemodal(){
	var modal = document.getElementById('modal-container');
	modal.setAttribute('style','display:none;');

	var task = document.getElementById('task');
	var time = document.getElementById('time');
	var subject = document.getElementById('subject');

	task.value = " ";
	time.value = " ";
	subject.value = " ";
}

//function to add the fields user inputs in the modal field and then will display in the task-list
function init_addTask(){
	flag = true;
	var task = document.getElementById('task').value;
	var time = document.getElementById('time').value;
	var subject = document.getElementById('subject').value;

	addnewtask(task,time,subject);

}

function addnewtask(task,time,subject){

	var mylist = document.createElement('li');

	var tasklist = document.createElement('p');
	tasklist.innerText = task;
	
	var timelist = document.createElement('p');
	timelist.innerText = time;

	var subjectlist = document.createElement('p');
	subjectlist.innerText = subject;

	tasklist.setAttribute('class','task');
	timelist.setAttribute('class','time');
	subjectlist.setAttribute('class','subject');

	mylist.appendChild(tasklist);
	mylist.appendChild(timelist);
	mylist.appendChild(subjectlist);
	
	var parent = document.getElementById('mytask');
	parent.appendChild(mylist);

	closemodal();
	
	if( flag === true){
		saveItem(task,time,subject);
	}
}
var flag = false;

function saveItem(tsk,tm,sbj) {
	init_Storage(tsk,tm,sbj);
}
function deleteItem(){
	localStorage.removeItem('task');
}
function retrievitem(){
	flag = false;
	let testCountNum = localStorage.getItem('Count');
	console.log(testCountNum);
	for (var i =1; i<=testCountNum;i++){
		var task = localStorage.getItem("task "+i);
		var time = localStorage.getItem("time "+i);
		var subject = localStorage.getItem("Subject "+i);
		addnewtask(task,time,subject);
	}
}

function init_Storage(tsk,tm,sbj){
	let inputTask = tsk;
	let inputTime = tm;
	let inputSbj = sbj;

	if(inputTask != "" & inputTime != "" & inputSbj != ""){
		
		testCount = 0;
		if(localStorage.getItem('Count') == null){
			localStorage.setItem("Count",0);
			testCount = 0;
		}else{
			testCount = localStorage.getItem("Count");
		}
		localStorage.setItem("task "+((testCount*1)+1),inputTask);
		localStorage.setItem("time "+((testCount*1)+1),inputTime);
		localStorage.setItem("Subject "+((testCount*1)+1),inputSbj);		
		localStorage.setItem("Count",((testCount*1)+1));
		
	}else{
		alert("Please Fill out the fields and Try Again");
	}
}

var testCount;
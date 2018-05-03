


var inputs = document.querySelectorAll("input");
var errMsg = document.getElementById("msg");
var log = document.getElementById("log");

var spaceCoutner = 0;
var hasNumber = /\d/;


inputs[0].addEventListener("keyup",function (event) {
	var regex = /^[a-zA-Z \.\-']*?$/;
	var userInput = inputs[0].value;	
	console.log(userInput);

	var ar = userInput.split(" ");
	spaceCoutner = ar.length-1;
	errMsg.textContent = userInput;

	//console.log(`contains: ${!(regex.test(userInput))}`);

	//check for spaces
	if(spaceCoutner >=2){
		errMsg.style.color = "red";
		errMsg.textContent = `* Name cannot contian more than one space. you have entered: ${spaceCoutner} spaces!`;
		inputs[1].disabled = true;
		setTimeout(() => {
			log.textContent = "";
			errMsg.textContent = "";
		},3000);
	}
	else if(hasNumber.test(ar)){
		errMsg.style.color = "red";
		errMsg.textContent = "Name cannot contain digits";
		inputs[1].disabled = true;
	}
	else if(!regex.test(userInput)){
		errMsg.style.color = "red";
		errMsg.textContent = `Name cannot contain special SYMBOLS ${userInput}`;
		inputs[1].disabled = true;
	}else{
		errMsg.style.color = "green";
		errMsg.textContent = `Name ok! : ${userInput}`;
		inputs[1].disabled = false;
	}
	log.textContent = `length of the array: ${ar.length} number of spaces: ${spaceCoutner}`;
});	
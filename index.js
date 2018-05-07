
var inputs = document.querySelectorAll("input");
var errMsg = document.getElementById("msg");

var log = document.getElementById("log");

var spaceCoutner = 0;
var hasNumber = /\d/;
var allowedCharcounter =0;

inputs[0].addEventListener("keyup",(event)=> {
	var regex = /^[a-zA-Z \.\-']*?$/;
	var userInput = inputs[0].value;	
	console.log('user input: ',userInput);

	var splittedBySpace = userInput.split(/\s/);
	spaceCoutner = splittedBySpace.length-1;

	errMsg.textContent = userInput;
	errMsg.style.color="red";

	var byAllowedChars = /[\-\.\']/;

	console.log('split by space, ',splittedBySpace);


	var splittedByChars = userInput.split(byAllowedChars);

	// for(i=0; i<splittedByChars.length; i++)
	// {
	// 	if(splittedByChars[i] === "")
	//     {
	//     	f++;
	//     } 
	// }
	console.log('split by char :',splittedByChars);
	console.log('allowed-Char-counter:',splittedByChars.length-1);
	
	//allowedCharcounter=allowedCharcounter-2;

	//check for spaces
	if(spaceCoutner >=2){
		//errMsg.style.color = "red";
		errMsg.textContent = `* Name cannot contian more than one space. you have entered: ${spaceCoutner} spaces!`;
		inputs[1].disabled = true;
		setTimeout(() => {
			log.textContent = "";
			errMsg.textContent = "";
		},5000);
	}
	else if(hasNumber.test(splittedBySpace)){
		//errMsg.style.color = "red";
		errMsg.textContent = "Name cannot contain digits";
		inputs[1].disabled = true;
	}
	else if(!regex.test(userInput)){
		//errMsg.style.color = "red";
		errMsg.textContent = `Name cannot contain special SYMBOLS ${userInput}`;
		inputs[1].disabled = true;
	}
	else if(splittedByChars.length-1 > 2){
		//console.log("allowed special char", allowedCharcounter);
		errMsg.textContent = "Name cannot contain consecutive special symbols!"
	}
	else{
		errMsg.style.color = "green";
		errMsg.textContent = `Name ok! : ${userInput}`;
		inputs[1].disabled = false;
	}

	log.textContent = `length of the array: ${splittedBySpace.length} number of spaces: ${spaceCoutner}`;

	console.log('lengh of the form field: ', userInput.length);
	
	// if(userInput.length === 0 || splittedByChars.length-1 === 0){
	// 	errMsg.textContent = "";
	// }


});	

inputs[1].addEventListener("click", function(){
	console.log('Button cliked..');
	alert("not implemented yet..booya :/")
});

//getElementById("restBtn")

inputs[2].addEventListener("click",function(){

	console.log('restting...');
	var myForm = document.getElementById("prefNameForm");
	console.log(myForm);
	myForm.reset();
	errMsg.textContent="";
	console.log('restting...done');
});
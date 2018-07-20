let allUsers = [{
	email : "abc@gmail.com",
	password:"abc123"
},
{
	email : "xyz@gmail.com",
	password:"xyz123"
},
{
	email : "mno@gmail.com",
	password:"mno123"
}
];
let checkLogin = (email,password,allUsers) => {
	let isUserFound = false
	let passwordCorrect = false

	for(currentUser of allUsers){

		console.log(currentUser)

		if(currentUser.email == email){ //To Verify Email ID

			if(currentUser.password == password){ //To verify Password

				isUserFound = true
				passwordCorrect  = true
				break; //// get out of loop to display login message - next step

			}else{

				isUserFound = true
				passwordCorrect = false
				break;//// get out of loop to display login message - next step
			}

		}else{
			isUserFound = false //If there is invalid Email Id 
		}

	}



	if (isUserFound == true && passwordCorrect == true){ //If email is correct and password is correct

		console.log("You have logged Inn")

	}else if(isUserFound == true && passwordCorrect == false){ //if Email id is correct and password is wrong 

		console.log("Please enter valid Password")

	}else{                       //for invalid inputs

		console.log("Please Enter valid Login Details")
	}
}



checkLogin("abc@gmail.com", "abc123", allUsers)
//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  return false;
}

isTyler("Jeff")

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

function getName () {
  var name = prompt("What is your name?")
  return name;
}

getName();

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

function welcome () {
  var name = getName();
  alert("Welcome " + name)
}

welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

// Parameters are apart of the function definition. Arguments are used when invoking the function and assign a value to the parameter.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

// null, false, 0, NaN, "", undefined

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here



//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.

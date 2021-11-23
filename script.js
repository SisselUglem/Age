// 1. First we need a variable to store the persons age
// 2. We need a value that we store in a avariable that will represente the required age 


const age = 16;
//persons age 19


//const requiredage = 18;
//required age 18

const isOfAge = age >= 18;

if (isOfAge) {
    console.log ("You are old enough to take your drivings license");
} else {
    console.log ("Sorry! You are to young to take your driving license");
}

if (age >= 18) {
    console.log ("You are old enough to take your drivings license")
    console.log (test)
} else {
    const yearsLeft = 18 - age;
    console.log (`Sorry, you are to young, wait another ${yearsLeft} years`);
}

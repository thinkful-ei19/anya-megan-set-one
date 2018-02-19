function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
};

function yearOfBirth(age){
    let yob = 2018 - age;
    console.log(yob);
};

whoAmI('Anya', 101);
yearOfBirth(101);
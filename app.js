function whoAmI(name, age) {
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    if(!name || !age){
        console.error("Arguments not valid");
    }
    if (typeof name !== String){
        console.error("Name not valid");
    }
    if (typeof age !== Number){
        console.error("Number not valid");
    }

};

function yearOfBirth(age){
    let yob = 2018 - age;
    if (age<0) {
        throw new Error ("Age can not be negative");
    }
    else{
        console.log(yob);
    }
}

try{
    console.log(yearOfBirth(100));
    console.log(yearOfBirth(-1));
    console.log(yearOfBirth());
} catch(e){
    console.log(e.message);
};

whoAmI('Anya', 101);
yearOfBirth(80);
whoAmI("Megan");
whoAmI(92,90);
whoAmI("Ted", "red");
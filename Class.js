class Human {
    gender = "Male";
    
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Mostafa";

    printNameWithGender = () => {
        console.log(this.name);
        console.log(this.gender);
    }

    // gender = "Female";
}

const person = new Person();
person.printGender();
person.printNameWithGender();
// person.printGender();
// create an object literal for the pet salon 
    // name, address, hours, 
    var salon ={
        salonName: 'The Fashion Pet',
        address: {
            street: 'Av. University',
            number: "215-B"
        },
        hours: { //Objects within objects
            open: '8 am',
            close: '5 pm'
        },
        pets:[]
    }

    /************  Object Constructors ********************/
    class Pet{
        constructor(name, age, type, breed, gender, serviceType, ownerName, contactPhone, price){
            this.name = name;
            this.age = age;
            this.type = type;
            this.breed = breed;
            this.gender = gender;
            this.service = serviceType;
            this.ownerName = ownerName;
            this.contactPhone = contactPhone;
            this.price = price;
        }
    }


    // Object instantiation protocol 
    var scooby = new Pet("Scooby", 50, "Dog", "Dane", "Male", "Full Service", "Shaggy", "734-567-9000", "50.00");
    console.log(scooby);

    var prissy = new Pet("Prissy", 1000, "Cat", "Calico", "Female", "Hair Cut", "Joy", "907-357-9000", "50.00");
    console.log(prissy);

    var panther = new Pet("Panther", 80, "Cat", "Siamese", "Male", "Toenail Trim", "Butch", "907-357-6000", "50.00");
    console.log(panther);


    // Get inputs and store them in variables
    var txtName = document.getElementById("petName");
    var txtAge = document.getElementById('petAge');
    var txtType = document.getElementById('petType');
    var txtBreed = document.getElementById('petBreed');
    var txtGender = document.getElementById('petGender');
    var txtService = document.getElementById('petService');
    var txtOwnerName = document.getElementById('ownersName');
    var txtContactPhone = document.getElementById('contactPhone');
    var txtPrice = document.getElementById('price');
   
    // Function to register the pet
    function register(){


        // Create the Pet & print to console
        var thePet = new Pet(txtName.value,txtAge.value, txtType.value, txtBreed.value, txtGender.value, txtService.value, txtOwnerName.value,txtContactPhone.value, txtPrice.value);

        console.log(thePet);

        // Push the pet to array 
        salon.pets.push(thePet);

        // Display pet to the screen, clear form, & update total
        display();
        clear();
        // Confirmation on screen for user?

    }

    // Function to clear register form after user completes form
    function clear(){
        txtName.value = "";
        txtAge.value ="";
        txtType.value = "";
        txtBreed.value = "";
        txtGender.value = "";
        txtOwnerName.value = "";
        txtContactPhone.value = "";
        txtPrice.value = "";
    }




// function to display on the console the names of the pets (traverse the array)
    console.log("The Fashion Pet's Roster (By Name):")
    for(var i = 0; i < salon.pets.length; i++){
        console.log(salon.pets[i].name);
    }

// fucntion to display on the console the number of registered pets.
    console.log("Total number of registered pets in the salon: " + salon.pets.length);
       
//Professors profit function
// function profitCalculation(){
//     var total = 0;
//     for(var i = 0; i < salon.pets.length; i++){
//         total = total + salon.pets[i].price;
//     }
//     console.log(total);
//     doceumnts.getElementById("price").innerHTML = `$ ${total}`;
// }


//run this function when the page loads. Almost everythig goes inside this
function init(){
    //default
    console.log('Script');

    //Push created objects into array
    salon.pets.push(scooby);
    salon.pets.push(prissy);
    salon.pets.push(panther);


    display();
    // profitCalculation(); //Professors profit function

    //correct way to register pet on click
    $('#register-btn').on('click', register);
}
window.onload=init; //run function when website loads
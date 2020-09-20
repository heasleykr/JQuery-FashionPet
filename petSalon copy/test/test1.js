var links = document.getElementsByTagName('a');

// Changes the DOM elements and attributes for 'a' links!
// First 'target' is the element's attribute you want to update
// Second 'blank' is what you're updating that attribute to
links[0].setAttribute('target', 'blank');
links[0].setAttribute('class', 'bordered');


//Used on console to use command .hasAttribute();
var input = document.getElementById('petType');

//returns true is element has a class attribute & then grabs it
input.hasAttribute('class');
input.getAttribute('class');

//Create HTML elements
var h1 = document.createElement('h1');
    //displays empty element on console
    console.log(h1);

//create text
var text = document.createTextNode("Hello World");
console.log(text);

//put text INSIDE our h1 element
h1.appendChild(text);

//append means at the end. So we added 'Hello World' at the END of main
var main = document.getElementById('register-main');
main.appendChild(h1);

//hide an element
input.style.display = "none";

//remove an element
    //grab element to remove
    var txtpetname = document.getElementById("petName");
    //grab its parent
    var pPetName = document.getElementById("pPetName");
        //removes the paragrapth's CHILD from the DOM
        pPetName.removeChild(txtpetname);

    //Create list w/ three elements challenge
    var oList = document.getElementById('petSection');
    oList.innerHTML =`
                <ul>
                    <ol>One</ol>
                    <ol>Two</ol>
                    <ol>Three</ol>
                <ul>
                `;

    
    //Professor's solution for creating list using JavaScript
    var ul = document.createElement("ul");

    for(var i =1; i<3;i++){
        var li = document.createElement("li");
        var textli = document.createTextNode("Element " + i);
        li.appendChild(textLi);
        ul.appendChild(li);
    }

    document.getElementById('petSection').appendChild(ul);
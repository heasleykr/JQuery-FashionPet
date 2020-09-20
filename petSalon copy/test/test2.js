// Callback function
$(function(){
    'use strict'; //look up this meaning
    console.log('ready');

    $('nav a:last').hide(); //hides register button on nav bar
    $('main').hide(); //hide all the code!
    $('main').show(); //show all the code!

    // var copy = $('main').clone(); //clone all the code!
    // $('main').append(copy); //add all the main code to the bottom!!
    // $('header').prepend(copy); //place the copy before the header!!


    $('h1').html('Hello'); //change the text of h1 element

    // delete. Very useful to reload code
    // $('main').html("");


    //replace a section!
    // var text = `<ul> <li> hello </li></ul>`;
    // $('#petSection').append(text);

    //Click Event
    // create an annonymous function on click of h1, sense them!
    // how you might display or hide a drop down navigation bar
    $('h1').on('click', function(){
        console.log('click');
        $('nav').addClass('bordered'); //add class to nav on click!
        //So you can change anything!
        $(this).addClass('bordered'); //VERY IMPOARTANT CHANGES THE h1 YOU ARE EDITING
    });

    //Mouse Hover Event
    $('h1').on('mouseenter', function(){
        console.log('mouse over h1');
        $('nav').hide(); //hide nav on click!
    });

    // Mouse LEAVES after a hover
    $('h1').on('mouseleave', function(){
        console.log('mouse leave');
        $('nav').hide(); //hide nav on click!
    });

    // //create an ul with 3 li
    var text = `<ol> 
    <li> hello </li>
    <li> hello </li>
    <li> hello </li>
    </ol>
    `;

    $('#petSection').html(text);

    $("#petSection").html("<ol></ol>");
    for(var i=0;i<3;i++){
        var li = $("<li><;li>").text("Element1" + i);
        $('ol').append(li);
    };
    

});
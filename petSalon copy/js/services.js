// Callback Function
$(function(){
    'use strict';
    console.log('ready');
    //Hide photos and service description until hover
    $('#cat5').hide();
    $('#cat7').hide();
    $('#dog1').hide();
    $('#dogDress').hide();


    /****************Shower*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $('#shower').on('mouseenter', function(){
    
        // Expand and display photo & text
        $('#cat5').show();
        // $('#shower').appendChild(sText);
    });
    // Mouse LEAVES after a hover
    $('#shower').on('mouseleave', function(){
       
        $('#cat5').hide();
    });

    /****************Hair Cut*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $('#hairCut').on('mouseenter', function(){

        // Expand and display photo
        $('#cat7').show();
    });
    // Mouse LEAVES after a hover
    $('#hairCut').on('mouseleave', function(){
        
        $('#cat7').hide();
    });

    /****************Toe Nail*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $('#toeNail').on('mouseenter', function(){

        // Expand and display photo
        $('#dog1').show();
    });
    // Mouse LEAVES after a hover
    $('#toeNail').on('mouseleave', function(){
      
        $('#dog1').hide();
    });

    /****************Full Service*******************/
    //Hide other serivices on hover & display photo
    //Mouse Hover Event
    $('#fullService').on('mouseenter', function(){
    
        // Expand and display photo
        $('#dogDress').show();
    });
    // Mouse LEAVES after a hover
    $('#fullService').on('mouseleave', function(){
        
        $('#dogDress').hide(); //hide nav on click!
    });

});
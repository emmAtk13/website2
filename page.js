//$('.carousel').carousel()

function navToggle() { // creates a new function named navToggle
  var x = document.getElementById("main-nav"); // creates a variable set to #main-nav
    if (x.className === "topnav") { // if #main-nav has a class of .topnav,
    x.className += " responsive";   // then add a new class
  } else {                          // if it doesn't,
    x.className = "topnav";         // set class to .topnav
  } //closes if-else
} //




// Get the container element
//$( '.aside .mysidenav a' ).on( 'click', function () {
//	$( '.aside .mysidenav' ).find( 'nav-active' ).removeClass( 'nav-active' );
//	$( this ).parent( 'li' ).addClass( 'nav-active' );
//});

//$(".thumb").on("click", function() { // when item with class of button is clicked, fire function
//  var modal = $(this).data("modal"); // sets modal var equal to data attribute
//  $(modal).show(); // opens up modal (much code hidden here by jQuery)
//});
//$(".modal").on("click", function(e) { // sets up click function
//  var className = e.target.className; // var className set to event target
//  if(className === "modal" || className === "close"){ // if conditions are met...
//    $(this).closest(".modal").hide(); // then hide the modal
//  } // closes if-statement
//}); // closes function

// jQuery("button").click(()=>{
//     console.log("Butotn clicked");
// });

//online cdn link used and then button element 
//tag name directly write

//Id selector use # and class .

//document ready use that after document load jquery run
// $.noConfict();//it means it can't undersatnd $ in Jquery 
//for $ there are various meaning 
$(document).ready(() => {
    $("button").click(() => {
        console.log("Butotn clicked");
    });
    $("#btnid").click(() => {
        console.log("Butotn With Id is clicked!");
        alert("you have selected the btn with Id ");
    });
    $(".btnclass").click(() => {
        console.log("Butotn With class is clicked!");
        alert("you have selected the btn with class ");
    });
    //Set Text Content
    var myElement = $("#id01");
    myElement.text("Hello Sweden!");

    //Get Text Content
    myText = $("#id02").text();
    console.log(myText);
    // Set the HTML content of an element:
    myElement.html("<p>Hello World</p>");

    //Get html content 
    let content=myElement.html();
    console.log(content);
    
    //hide html elements 
    myElement.hide();

    //show html elements
    myElement.show();

    $("#demo").css("color","red");
    $("#demo").css("font-size","35px");

    //remove Html elements 
    $('#id02').remove();
    //Get Parent eleements ---> here a paragraph parent is the body tag
    myparent = $("#id01").parent().prop("nodeName");
    console.log(myparent);

})



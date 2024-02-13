// Nick Brink
// CS 341 HW #3
function changeMonth(parameter) {
    document.getElementById("monthValue").innerHTML = parameter;

    // Homework 4 Modifications
    // issue a POST to get orders for a particular month
    $.post("http://localhost:3000/orders", {month: parameter},
    function(data, status) {
        if(status == "success") {
            document.getElementById("cherryList").innerHTML = data[0].quantity + " Cherry";
            document.getElementById("chocolateList").innerHTML = data[1].quantity + " Chocolate";
            document.getElementById("plainList").innerHTML = data[2].quantity + " Plain";
        } else {
            alert("Error in retrieval");
        }
    });
}
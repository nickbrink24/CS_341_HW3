// Nick Brink
// CS 341 HW #3
// variables
var quantity;
var notes;
var topping;

// function called when order button is clicked
function saveOrder() {
    // get the data
    quantity = document.getElementById("quantity").value;
    notes = document.getElementById("notes").value;
    topping = document.querySelector('input[name="topping"]:checked').value;

    // send alert if the notes contain 'vegan'
    // else, go through with the order
    if (notes.toLowerCase().includes("vegan")) {
        alert("WARNING: cheesecake contains dairy");
    } else {
        // Homework 5 Modifications
        // issue a POST to submit an order
        $.post("http://localhost:3000/newOrder", {q: quantity, n: notes, t: topping},
        function(data, status) {
            if(status == "success") {
                $(document).ready(function () { $("form").hide(); });
                document.getElementById("thanks").hidden = false;
                document.getElementById("thanks").innerHTML+= "Quantity: " + quantity +", Topping: " + topping + ", Notes: " + notes;
            } else {
                alert("Error in retrieval");
            }
        });
    }
}
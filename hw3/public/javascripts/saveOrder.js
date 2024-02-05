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
    // else, display order information
    if (notes.toLowerCase().includes("vegan")) {
        alert("WARNING: cheesecake contains dairy");
    } else {
        $(document).ready(function () { $("form").hide(); });
        document.getElementById("thanks").hidden = false;
        document.getElementById("thanks").innerHTML+= "Quantity: " + quantity + ", Topping: " + topping + ", Notes: " + notes;
    }
}
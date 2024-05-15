document.getElementById("calculatebtn").addEventListener("click", calculateTip);

function calculateTip() {
    // Get input values
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const serviceRating = parseFloat(document.getElementById("serviceRating").value);
    const splitCount = parseInt(document.getElementById("splitCount").value);
    const mealType = document.getElementById("mealType").value;

    // Calculate tip amount based on service rating
    let tipPercentage;
    switch (serviceRating) {
        case 1:
            tipPercentage = 0.1;
            break;
        case 2:
            tipPercentage = 0.15;
            break;
        case 3:
            tipPercentage = 0.2;
            break;
        case 4:
            tipPercentage = 0.25;
            break;
        default:
            tipPercentage = 0.15; // Default to average service if no rating is provided
    }

    let tipAmount = billAmount * tipPercentage;

    // Calculate total amount
    let totalAmount = billAmount + tipAmount;

    // Calculate amount per person if splitCount is provided
    let amountPerPerson = splitCount ? totalAmount / splitCount : totalAmount;

    // Display results
    document.getElementById("tipAmount").innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
    if (splitCount) {
        document.getElementById("amountPerPerson").innerText = `Amount per Person: $${amountPerPerson.toFixed(2)}`;
    }
}

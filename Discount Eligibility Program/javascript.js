function checkEligibility() {
    const age = parseInt(document.getElementById("age").value);
    const isMember = document.getElementById("membership").checked;
    let resultMessage = "";

    if (age >= 65) {
        resultMessage = "You are eligible for a senior discount!";
    } else if (age >= 18 && isMember) {
        resultMessage = "You are eligible for a member discount!";
    } else {
        resultMessage = "Sorry, you are not eligible for a discount.";
    }

    document.getElementById("result").textContent = resultMessage;
}

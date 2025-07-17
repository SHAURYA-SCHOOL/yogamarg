function validateForm() {
    var age = document.getElementById("age").value;
    var breathingInput = document.querySelector('input[name="breathing"]:checked');
    var muscleInputs = document.querySelectorAll('input[name="muscle"]:checked');

    if (!age) {
        alert("Please select your age group.");
        return false;
    }
    if (!breathingInput) {
        alert("Please indicate if you have any breathing problems.");
        return false;
    }
    if (muscleInputs.length === 0) {
        alert("Please select at least one muscle group to exercise.");
        return false;
    }

    var breathing = breathingInput.value;
    var muscles = Array.from(muscleInputs).map(el => el.value);

    localStorage.setItem("age", age);
    localStorage.setItem("breathing", breathing);
    localStorage.setItem("muscles", JSON.stringify(muscles));

    return true;
}

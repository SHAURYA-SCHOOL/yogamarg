function validateForm() {
    var age = document.getElementById("age").value;
    var breathingInput = document.querySelector('input[name="breathing"]:checked');
    var muscleInputs = document.querySelectorAll('input[name="muscle"]:checked');
    var name = document.getElementById("uname").value;
    var password = document.getElementById("pword").value;

    if(localStorage.getItem("pword") != 0, localStorage.getItem("name") != 0) {
        document.getElementById("uname").value = localStorage.getItem("name");
        document.getElementById("pword").value = localStorage.getItem("pword");
    }
    if (!age || !breathingInput || !muscleInputs || !name || !password ) {
        alert("Please fill the registration form.");
        return false;
    }

    var breathing = breathingInput.value;
    var muscles = Array.from(muscleInputs).map(el => el.value);

    localStorage.setItem("age", age);
    localStorage.setItem("breathing", breathing);
    localStorage.setItem("muscles", JSON.stringify(muscles));
    localStorage.setItem("name", name);
    localStorage.setItem("pword", password);
    return true;
}

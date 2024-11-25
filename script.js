let Btn = document.getElementById("btnLogin");
let Pass = document.getElementById("password");
let Uname = document.getElementById("username");

// Login validation
Btn.addEventListener("click", () => {
    if (Uname.value === "Maecy" && Pass.value === "ganda") {
        alert("Login Successfully");
        window.location.href = "../mainpage/mainpage.html";
    } else if (Uname.value === "" && Pass.value === "") {
        alert("Please fill up!");
    } else if (Uname.value === "") {
        alert("Please Enter Username!");
    } else if (Pass.value === "") {
        alert("Please Enter Password!");
    } else {
        alert("Username or Password is invalid!");
    }
});

// Toggle password visibility
function walalng() {
    if (Pass.type === "password") {
        Pass.type = "text";
    } else {
        Pass.type = "password";
    }
}

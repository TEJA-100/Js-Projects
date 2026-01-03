// let userGmail = "teja7003@gmail.com";
let passkey = 100;

let userGmailInput = prompt("Enter Your Gmail").toLowerCase();
let userPassKey = Number(prompt("Enter Your Password"));

function getAuth() {
    if (userGmail === userGmailInput && passkey === userPassKey) {
        alert("✅ Login Successful");
        console.log("Login Successful");
    } else {
        alert("❌ Invalid User Credentials");
        console.log("Invalid User Credentials");
    }
}

getAuth();

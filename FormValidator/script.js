

function validateForm()
{
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const result = document.getElementById("result");
   
    result.innerHTML = "";
   
    if (name.length < 2) {
        result.innerHTML="❌ Name must be at least 2 characters long";
        result.className="text-danger";
        return;
    }
    // regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        result.innerHTML="❌ Please enter a valid email address.";
        result.className="text-danger";
        return;
    }   

    if (password.length < 6) {
        result.innerHTML="❌ Password must be at least 6 characters.";
        result.className="text-danger";
        return;
    }   

    result.innerHTML="✅ Form validated successfully!";
    result.className="text-success";


}
function Convert(){
    const input=document.getElementById("timeinput").value;
    const output=document.getElementById("result");

    if (input === "" || isNaN(input) || input < 0) 
        {
        output.innerText = "❌ Please enter a valid number to convert";
        output.className = "mt-3 text-center text-danger fw-semibold";
        return;
    }

let hours = Math.floor(input/3600);
let min =Math.floor((input%3600)/60);
let sec = input % 60;
output.innerText = `Result: ${hours}h ${min}m ${sec}s`;
output.className = "mt-3 text-center text-success fw-semibold";
}

document.addEventListener("keydown", function(e){
    if(e.key === "Enter") Convert()
});
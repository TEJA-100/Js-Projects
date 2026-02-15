const { createElement } = require("react");

function generateQRCode()
{
    const Inputvalue = document.getElementById("Input").value;
    const errmsg = document.getElementById("error");
    const qr = document.getElementById("qrCodeContainer");

    if(Inputvalue.trim() === "")
    {
        errmsg.innerHTML= "❌ Please enter a valid input to generate QR Code";
        errmsg.className = "mt-2 text-center text-danger fw-semibold";
        qr.innerHTML = "";
    }
    else
    {
        errmsg.innerHTML = "";
        qr.innerHTML=`<img src=https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(Inputvalue)}" alt="QR Code" class="m-3 text-center border border-2 border-dark p-1">`;
        
    }
   

}

document.addEventListener("keydown", function(e){
    if(e.key === "Enter") generateQRCode()
});

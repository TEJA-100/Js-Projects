
function generateCard() {
  const photoInput = document.getElementById("photo");
  const nameInput = document.getElementById("name");
  const roleInput = document.getElementById("role");
  const bioInput = document.getElementById("bio");
  const skillsInput = document.getElementById("skills");
  const locationInput = document.getElementById("location");
  const linkedinInput = document.getElementById("linkedin");
  const githubInput = document.getElementById("github");
  const gmailInput = document.getElementById("gmail");
  const othersInput = document.getElementById("others");


  // validation
  if (photoInput.files.length === 0) {
    alert("Please select a profile image");
    return;
  }
  if(nameInput.value === "") {
    alert("Please enter your name");
    return;
  }
  if(roleInput.value === "") {
    alert("Please enter your role");
    return;
  }
  if(bioInput.value === "") {
    alert("Please enter your bio");
    return;
  }
  if(skillsInput.value === "") {
    alert("Please enter your skills");
    return;
  }
  if(locationInput.value === "") {
    alert("Please enter your location");
    return;
  }
  if(linkedinInput.value === "") {
    alert("Please enter your LinkedIn profile URL");
    return;
  }
  if(gmailInput.value === "") {
    alert("Please enter your Gmail URL");
    return;}    

const gmail= /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
if (!gmail.test(gmailInput.value)) {
  alert("Please enter a valid Gmail address");
  return;
}
  const reader = new FileReader(); //  FileReader used to read the upload image and convert base64 format that can be stored in localStorage.
  reader.onload = function () {  //  this function calls  after reads the image (base64)

    const userData = {
      photo: reader.result, // Base64 image
      name: document.getElementById("name").value,
      role: document.getElementById("role").value,
      bio: document.getElementById("bio").value,
      skills: document.getElementById("skills").value,
      location: document.getElementById("location").value,
      linkedin: document.getElementById("linkedin").value,
      github: document.getElementById("github").value,
      gmail: document.getElementById("gmail").value,
      others: document.getElementById("others").value
    };

   // localStorage.setItem("profileData", JSON.stringify(userData));
   // window.location.href = "card.html";



     // Save to Firebase Firestore
    addDoc(collection(db, "profiles"), userData)
     .then(() => {
      console.log("Data stored in Firebase");

      localStorage.setItem("profileData", JSON.stringify(userData));
      window.location.href = "card.html";
    })
    .catch((error) => {
      console.error("Firebase Error:", error);
      alert("Failed to store data!");
    });

   
  };
  reader.readAsDataURL(photoInput.files[0]);
}

function clearData(){
  document.getElementById("userForm").reset();
}

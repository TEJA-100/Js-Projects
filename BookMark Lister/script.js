document.addEventListener("DOMContentLoaded", displayBookmark);
function Add() {
    let Name = document.getElementById("bookmarknameInput");
    let Url = document.getElementById("bookmarkurlInput");
    if(Name.value.trim() === ""|| Url.value.trim() === ""){
        alert("Please fill in both fields.");
        return;
    }
    let urlvalue = Url.value.trim();
    if (!urlvalue.startsWith("http://") && !urlvalue.startsWith("https://")) {
        urlvalue = "http://" + urlvalue;
    }
    if (!isValidUrl(urlvalue)) {
        alert("Please enter a valid URL.");
        return;
    }
    let bookmarks= JSON.parse(localStorage.getItem("bookmarks")) || [];
    let bookmark ={
        id : Date.now(),
        name: Name.value.trim(),
        url: urlvalue
    };
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    Name.value = "";
    Url.value = "";
    displayBookmark();
}
function displayBookmark() {
    const bookmarkList = document.getElementById("bookmarkList");
    bookmarkList.innerHTML = "";
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.forEach(bookmark => {
        const bookmarkItem = document.createElement("div");
       
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.innerHTML = `
           <hr>
            <h4 class="mt-0 text-secondary">Your Bookmarks</h4>
            <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h5 class="mb-0">${bookmark.name}</h5>
            </div>
            <div>
               <a href="${bookmark.url}" target="_blank" class="btn btn-primary btn-sm me-2">
                        Visit
                </a>

                <button class="btn btn-danger btn-sm" onclick="deleteBookmark(${bookmark.id})">
                        Delete
                </button>
            </div>
            

        `;
        bookmarkList.appendChild(bookmarkItem);
        
    });
}
function deleteBookmark(id) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayBookmark();
}
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

    
   


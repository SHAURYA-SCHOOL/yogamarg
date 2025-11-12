window.onload = function() {
      if (localStorage.getItem("visited") === null) {
    // This is the first visit
    alert("Warning! This is the first time you are visting YogaMarg. Please register.");
    window.location.assign("pers.html")
    localStorage.setItem("visited", "true");
      }
}
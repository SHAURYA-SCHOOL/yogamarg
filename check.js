window.onload = function() {
      if (localStorage.getItem("visited") === null) {
    // This is the first visit
    alert("Warning! This is the first time you are visting YogaMarg. Please do a quick personalization survey.");
    window.location.assign("pers.html")
    localStorage.setItem("visited", "true");
      }
}
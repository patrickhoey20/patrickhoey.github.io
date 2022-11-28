window.onload = function () {
    var coll = document.getElementsByClassName("collapsible"); // get array of collapsible buttons
    var i;
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() { // on click of any of the cololapsible buttons
        var content = this.nextElementSibling; // the content to be shown
        if (content.style.maxHeight){ // if currently showing, hide content
            content.style.maxHeight = null;
            this.textContent = 'Read More'; // change text of button
        } else { // else (not currently showing), show content
            content.style.maxHeight = content.scrollHeight + "px";
            this.textContent = 'Read Less'; // change text of button
        }
    });
    }
}

// Used HTML/CSS for active tab of navbar, no JS
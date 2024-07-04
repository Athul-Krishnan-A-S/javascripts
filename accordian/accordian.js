document.addEventListener('DOMContentLoaded', function() {
    var accordians = document.getElementsByClassName('accordian');
    
    for (var i = 0; i < accordians.length; i++) {
        accordians[i].addEventListener('click', function() {
            console.log("clicked");
            var content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    }
});
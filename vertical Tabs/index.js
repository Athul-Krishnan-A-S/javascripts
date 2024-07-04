document.addEventListener('DOMContentLoaded', function() {
    var contents = document.getElementsByClassName('content');
    var tabs = document.getElementsByClassName('tab');
    Array.from(contents).forEach(element => {
        element.classList.add('hidden');
    });
    Array.from(tabs).forEach(element => {
        element.classList.remove('active');
    });
    tabs[0].click();
});
function toggleTabs(event,cityName){
    console.log("clicked");
    var contents = document.getElementsByClassName('content');
    var tabs = document.getElementsByClassName('tab');
    Array.from(contents).forEach(element => {
        element.classList.add('hidden');
    });
    Array.from(tabs).forEach(element => {
        element.classList.remove('active');
    });
    var cityDiv = document.getElementById(cityName);
    cityDiv.classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

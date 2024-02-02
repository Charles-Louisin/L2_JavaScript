var hotels = ['Serena', 'Falaise', 'Hilton', 'Git']


var hideshow = false;

function addremove(event) {

    var text = event.textContent || event.innerText;

    if(!hideshow) {
        hideshow = true;
        document.querySelector('.box').style.opacity="100%";
        event.innerHTML = 'REMOVE';
        return;
    }

    if(hideshow) {
        hideshow = false;
        document.querySelector('.box').style.opacity="0%";
        event.innerHTML = 'ADD';
        return;
    }   
}

function image1() {
    var img = document.querySelector(".change");
    var text1 = document.querySelector("h1");
    var text2 = document.querySelector("h4");
    var boxShadow = document.querySelector('div.box1');
    img.src = './images/jumpman-mvp/Jordan-MVP-Olive-removebg-preview.png';
    text1.innerHTML = "New nike <br> Jordan MVP Olive";
    text2.innerHTML = "This new Nike Air JORDAN MVP OLIVE is the most confortable of all. <br> Suitable for sports and outings.";
    boxShadow.classList.toggle("boxshadow");
}

function image2() {
    var img = document.querySelector(".change");
    var text1 = document.querySelector("h1");
    var text2 = document.querySelector("h4");
    var boxShadow = document.querySelector('div.box2');
    img.src = './images/Luka 2/luka1-removebg-preview.png';
    text1.innerHTML = "New nike <br> Luka 1 Bred";
    text2.innerHTML = "Over seven years in the making, the Nike Air <br> LUKA 1 BRED places your foot directly <br> on Nike Air technology."
    boxShadow.classList.toggle("boxshadow");
}

function image3() {
    var img = document.querySelector(".change");
    var text1 = document.querySelector("h1");
    var text2 = document.querySelector("h4");
    var boxShadow = document.querySelector('div.box3');
    img.src = './images/jordan-6-rings/Jordan-Six-Rings-Motorsport-removebg-preview.png';
    text1.innerHTML = "New nike <br> Jordan 6 Rings";
    text2.innerHTML = "JORDAN 6 RINGS is the best basketball shoe. <br> Protect your feet and add the trigger. <br> And has a beautiful design";
    boxShadow.classList.toggle("boxshadow");
}

function image4() {
    var img = document.querySelector(".change");
    var text1 = document.querySelector("h1");
    var text2 = document.querySelector("h4");
    var boxShadow = document.querySelector('div.box4');
    img.src = './images/jordan 4 retro/j_4_retro-removebg-preview.png';
    text1.innerHTML = "New nike <br> Jordan 4 Retro";
    text2.innerHTML = "The JORDAN 4 RETRO is one of the best shoes made by Nike. With its perfect design, it is embedded in your sport as in your walks. It's a pass everywhere.";
    boxShadow.classList.toggle("boxshadow");
}

// change shoes
// function changeshoes(src,title,desc,price) {
//     document.querySelector('').src = src;
//     document.querySelector('').innerHTML = title;
//     document.querySelector('').innerHTML = desc;
//     document.querySelector('').innerHTML = price;
// }
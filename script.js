//Contact Button -> Handle Event -> onClick -> Open Mail Client
let contactBtn = document.getElementById("contact-Btn");
contactBtn.onclick = function() {
    window.location.href = "mailto:navdeepsinghpersonal01@gmail.com?body=Dear%20Navdeep%20Singh%2C%0D%0A";
};

//display heading
window.onload = function() {
    const infoHeading = document.getElementById("informationHeading");
    const text = "<Hello,  I'm  Navdeep/>";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            infoHeading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed by changing the timeout value
        }
    }

    typeText();
};


let cyanShade = '#a5f3fc';
let frontendBtn = document.getElementById("frontendButton");
let backendBtn = document.getElementById("backendButton");
//toggle frontend backend

frontendBtn.onclick = function() {
    frontendBtn.style.backgroundColor = cyanShade;
    backendBtn.style.backgroundColor = '#84cc16';
}


backendBtn.onclick = function() {
    backendBtn.style.backgroundColor = cyanShade;
    frontendBtn.style.backgroundColor = '#84cc16';
}

//Linked In Logo Error

let linkedinBtn = document.getElementById('linkedInLogo');
let errorMsg = document.getElementsByClassName('linkedInError')[0]
let clicked = false;
linkedinBtn.onclick = function (){
    if(clicked === false){
    errorMsg.style.display = "inline"
    clicked = true
    }else{
        clicked = false
        errorMsg.style.display = "none"
    }
}
// Contact Button -> Handle Event -> onClick -> Open Mail Client
let contactBtn = document.getElementById("contact-Btn");
contactBtn.onclick = function () {
    window.location.href = "mailto:navdeepsinghpersonal01@gmail.com?body=Dear%20Navdeep%20Singh%2C%0D%0A";
};

// Display heading with typing effect
window.onload = function () {
    const infoHeading = document.getElementById("informationHeading");
    const text = "<Hello,  I'm  Navdeep/>";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            infoHeading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // Show frontend projects by default
    frontendProjects.style.display = "block";
    fullstackProjects.style.display = "none";
    frontendBtn.style.backgroundColor = cyanShade;
    backendBtn.style.backgroundColor = greenShade;
};

// Button color shades
let cyanShade = '#a5f3fc';
let greenShade = '#84cc16';

// Toggle frontend/backend projects
let frontendBtn = document.getElementById("frontendButton");
let backendBtn = document.getElementById("backendButton");

let frontendProjects = document.querySelector(".frontendProjects");
let fullstackProjects = document.querySelector(".fullstackProjects");

frontendBtn.onclick = function () {
    frontendProjects.style.display = "block";
    fullstackProjects.style.display = "none";

    frontendBtn.style.backgroundColor = cyanShade;
    backendBtn.style.backgroundColor = greenShade;
};

backendBtn.onclick = function () {
    frontendProjects.style.display = "none";
    fullstackProjects.style.display = "block";

    backendBtn.style.backgroundColor = cyanShade;
    frontendBtn.style.backgroundColor = greenShade;
};

// LinkedIn Logo Error Toggle
let linkedinBtn = document.getElementById('linkedInLogo');
let errorMsg = document.getElementsByClassName('linkedInError')[0];
let clicked = false;

linkedinBtn.onclick = function () {
    clicked = !clicked;
    errorMsg.style.display = clicked ? "inline" : "none";
};

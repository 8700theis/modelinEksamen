//Importing Javascript Components and Templates
import navigationTemplate from './templates/navigation.js';
import FetchMyData from './components/FetchMyData.js';

//Getting elements for templating
const navElement = document.querySelector('.nav');

//Inserting templates
navElement.insertAdjacentHTML('beforeend', navigationTemplate());

const footerBottomText = document.querySelector('.footer_bottom_textCon_text');
const formSubmitBtn = document.querySelector('.contact_bottom_formCon_button');

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];
});

const validateForm = () => {
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    let emailImg = document.querySelector('.emailImg');
    let messageImg = document.querySelector('.messageImg');
    let result = true;
    let emailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegex.test(email.value)) {
        if (email.classList.contains("valid")) {
            email.classList.remove("valid");
        }
        email.classList.add("unvalid");
        emailImg.src = '../images/icons/crossed.png';
        result = false;
    } else {
        if (email.classList.contains("unvalid")) {
            email.classList.remove("unvalid");
        }
        email.classList.add("valid");
        emailImg.src = '../images/icons/check.png'
    }

    if (!message.value.length > 0) {
        if (message.classList.contains("valid")) {
            message.classList.remove("valid");
        }
        message.classList.add("unvalid");
        messageImg.src = '../images/icons/crossed.png';
        result = false;
    } else {
        if (message.classList.contains("unvalid")) {
            message.classList.remove("unvalid");
        }
        message.classList.add("valid");
        messageImg.src = '../images/icons/check.png'
    }

    if (result) {
        const emailInputValue = email.value;
        const messageInputValue = message.value;

        var formdata = new FormData();
        formdata.append("email", emailInputValue);
        formdata.append("message", messageInputValue);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://modelin.webexam-mcdm.dk/api/contacts", requestOptions)
            .then(response => response.text())
            .then(theResult => {
                alert(theResult)
            })
            .catch(error => console.log('error', error));
    }
}

formSubmitBtn.addEventListener('click', () => validateForm());

const resetFormOnLoad = () => {
    document.querySelector("#email").value = '';
    document.querySelector("#message").value = '';
};

window.onload = resetFormOnLoad;
//Importing Javascript Components and Templates
import navigationTemplate from './templates/navigation.js';
import footerTemplate from './templates/footer.js';
import FetchMyData from './components/FetchMyData.js';

//Getting elements for templating
const navElement = document.querySelector('.nav');
const footerElement = document.querySelector('#footer');

//Inserting templates
navElement.insertAdjacentHTML('beforeend', navigationTemplate);
footerElement.insertAdjacentHTML('beforeend', footerTemplate);
const footerMail = document.querySelector('.footer_middle_mail');
const footerMiddleText = document.querySelector('.footer_middle_text');
const footerBottomText = document.querySelector('.footer_bottom_textCon_text');

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    footerMail.innerText = texts[2].description;
    footerMail.setAttribute('href', `mailto:${texts[2].description}`);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerMiddleText.innerText = footerTextArray[0];
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];
});
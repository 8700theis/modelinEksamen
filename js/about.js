//Importing Javascript Components and Templates
import navigationTemplate from './templates/navigation.js';
import footerTemplate from './templates/footer.js';
import FetchMyData from './components/FetchMyData.js';

//Getting elements for templating
const navElement = document.querySelector('.nav');
const footerElement = document.querySelector('#footer');

//Inserting templates
navElement.insertAdjacentHTML('beforeend', navigationTemplate());
footerElement.insertAdjacentHTML('beforeend', footerTemplate);

const footerBottomText = document.querySelector('.footer_bottom_textCon_text');
const aboutHeading = document.querySelector('.about_heading');
const aboutTexts = document.querySelectorAll('.about_text');
const aboutImage = document.querySelector('.about_wrapper_imgCon_img');

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];
    aboutHeading.innerHTML = texts[11].description;
    aboutTexts[0].innerHTML = texts[12].description;
    const texts13splitArray = texts[13].description.split(/(\r\n)/);
    aboutTexts[1].innerHTML = `${texts13splitArray[0]}`;
    aboutTexts[2].innerHTML = `${texts13splitArray[2]} ${texts13splitArray[4]}`;
});

//Fetching all images
const imagesFetch = FetchMyData({ Endpoint: "images" });
imagesFetch.then((images) => {
    console.log(images);
    aboutImage.src = images[0].url;
});
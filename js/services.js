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

//getting all alements for later use
const servicesHeading = document.querySelector('.services_headingCon_heading');
const servicesHeadingText = document.querySelector('.services_headingCon_text');
const servicesImageElements = document.querySelectorAll('.services_contentCon_imgCon_img');
const accordionPlusImages = document.querySelectorAll('.services_accordianCon_singleCon_topCon_imgCon');

//Animating Accordions
accordionPlusImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        if (e.target.classList.contains('rotateImg')) {
            e.target.classList.remove('rotateImg');
            e.target.style.transform = 'rotate(0deg)';
            e.target.parentElement.parentElement.nextElementSibling.style.height = '0%';
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.remove('show');
        } else {
            e.target.classList.add('rotateImg');
            e.target.style.transform = 'rotate(45deg)';
            e.target.parentElement.parentElement.nextElementSibling.style.height = '100%';
            e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add('show');
        }
    });
});

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);

    servicesHeading.innerHTML = texts[9].description;
    servicesHeadingText.innerHTML = texts[10].description;
});

//Fetching all images
const imagesFetch = FetchMyData({ Endpoint: "images" });
imagesFetch.then((images) => {
    console.log(images);
    servicesImageElements[0].src = images[8].url;
    servicesImageElements[1].src = images[9].url;
});
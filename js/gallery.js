import navigationTemplate from './templates/navigation.js';
import footerTemplate from './templates/footer.js';
import { galleryLanding, galleryTop, } from './templates/gallery.js';
import FetchMyData from './components/FetchMyData.js';

//Getting elements for templating
const navElement = document.querySelector('.nav');
const galleryHeaderElement = document.querySelector('#galleryLanding');
const galleryTopElement = document.querySelector('.gallery_top');
const footerElement = document.querySelector('#footer');

//Inserting templates
navElement.insertAdjacentHTML('beforeend', navigationTemplate());
footerElement.insertAdjacentHTML('beforeend', footerTemplate);
const footerMail = document.querySelector('.footer_middle_mail');
const footerMiddleText = document.querySelector('.footer_middle_text');
const footerBottomText = document.querySelector('.footer_bottom_textCon_text');

const galleryImagesImgElements = document.querySelectorAll('.gallery_imageCon_singleCon_img');

//Getting the portfolio parameter
var url_string = window.location.href;
var url = new URL(url_string);
var portfolioParam = url.searchParams.get("portfolio");

let portfolioObjectsArray = [{
        searchParam: 'hotellounge',
        title: 'Hotel lounge with Veranda',
        img: '../images/PortfolioIMG_01.jpg',
        year: '2020',
        area: '110 m',
        address: '33 Owl Road,\nFinehead, TA24 6AF',
    },
    {
        searchParam: 'bedroom',
        title: 'Bedroom in a classic style',
        img: '../images/PortfolioIMG_02.jpg',
        year: '2019',
        area: '80 m',
        address: '3 The Miller, Brunswick Street,\nHolden Bridge, HX3 9AF',
    },
    {
        searchParam: 'webdesign',
        title: 'Web Design Studio Lounge',
        img: '../images/PortfolioIMG_03.jpg',
        year: '2019',
        area: '130 m',
        address: '83 Elderberry Gardens,\nWestham, CM5 9PY',
    },
    {
        searchParam: 'livingroom',
        title: 'Living Room Design in Bright Colors',
        img: '../images/PortfolioIMG_04.jpg',
        year: '2019',
        area: '86 m',
        address: '103 Todder Road,\nSouth Baylish, CR6 9AQ',
    }
];

const insertGalleryData = (galleryHeading, galleryText) => {
    portfolioObjectsArray.forEach((portfolio) => {
        if (portfolio.searchParam == portfolioParam) {
            galleryHeaderElement.insertAdjacentHTML('beforeend', galleryLanding(portfolio.img, portfolio.title));
            galleryTopElement.insertAdjacentHTML('beforeend', galleryTop(portfolio.year, portfolio.area, portfolio.address, galleryHeading, galleryText));
        }
    });
}

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    footerMail.innerText = texts[2].description;
    footerMail.setAttribute('href', `mailto:${texts[2].description}`);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerMiddleText.innerText = footerTextArray[0];
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];

    //Hotel values
    const hotelHeading = texts[5].description;
    const hotelTextArray = texts[8].description.split(/\r\n/);
    const hotelTextNoSpace = hotelTextArray.slice(1);
    const hotelText = hotelTextNoSpace.join(' ');

    //bedroom values
    const bedroomTextArray = texts[6].description.split(/\r\n/);
    const bedroomHeading = bedroomTextArray.slice(0, 1);
    const bedroomTextNoSpace = bedroomTextArray.slice(1);
    const bedroomText = bedroomTextNoSpace.join(' ');

    //webdesign values
    const webdesignTextArray = texts[7].description.split(/\r\n/);
    const webdesignHeading = webdesignTextArray.slice(0, 1);
    const webdesignTextNoSpace = webdesignTextArray.slice(1);
    const webdesignText = webdesignTextNoSpace.join(' ');

    //livingroom values
    const livingroomTextArray = texts[8].description.split(/\r\n/);
    const livingroomHeading = livingroomTextArray.slice(0, 1);
    const livingroomTextNoSpace = livingroomTextArray.slice(1);
    const livingroomText = livingroomTextNoSpace.join(' ');

    switch (portfolioParam) {
        case 'hotellounge':
            insertGalleryData(hotelHeading, hotelText);
            break;
        case 'bedroom':
            insertGalleryData(bedroomHeading, bedroomText);
            break;
        case 'webdesign':
            insertGalleryData(webdesignHeading, webdesignText);
            break;
        case 'livingroom':
            insertGalleryData(livingroomHeading, livingroomText);
            break;
        default:
            return 'Something went wrong...';
    }
});


let galleryImagesArray = [];

//Fetching all images
const imagesFetch = FetchMyData({ Endpoint: "images" });
imagesFetch.then((images) => {
    for (let i = 1; i < 8; i++) {
        galleryImagesArray.push(images[i].url);
    }
    galleryImagesArray.forEach((image, index) => {
        galleryImagesImgElements[index].src = image;
    });
});
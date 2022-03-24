//Importing Javascript Components and Templates
import navigationTemplate from './templates/navigation.js';
import footerTemplate from './templates/footer.js';
import portfolioTemplate from './templates/portfolio.js';
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

const portfolioText = document.querySelector('.portfolio_text');
const protfolioImgContainer = document.querySelector('.portfolioCon');

let portfolioObjectsArray = [{
        title: 'Hotel lounge with Veranda',
        img: '../images/PortfolioIMG_01.jpg',
        linkPath: '../HTML/projects/projectHotelLounge.html'
    },
    {
        title: 'Bedroom in a classic style',
        img: '../images/PortfolioIMG_02.jpg',
        linkPath: '../HTML/projects/projectBedroomClassic.html'
    },
    {
        title: 'Web Design Studio Lounge',
        img: '../images/PortfolioIMG_03.jpg',
        linkPath: '../HTML/projects/projectWebStudio.html'
    },
    {
        title: 'Living Room Design in Bright Colors',
        img: '../images/PortfolioIMG_04.jpg',
        linkPath: '../HTML/projects/projectLivingRoom.html'
    },
    {
        title: 'Hotel lounge with Veranda',
        img: '../images/PortfolioIMG_01.jpg',
        linkPath: '../HTML/projects/projectHotelLounge.html'
    },
    {
        title: 'Bedroom in a classic style',
        img: '../images/PortfolioIMG_02.jpg',
        linkPath: '../HTML/projects/projectBedroomClassic.html'
    },
];

portfolioObjectsArray.forEach((portfolio) => {
    protfolioImgContainer.insertAdjacentHTML('beforeend', portfolioTemplate(portfolio.img, portfolio.title, portfolio.linkPath));
});

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    footerMail.innerText = texts[2].description;
    footerMail.setAttribute('href', `mailto:${texts[2].description}`);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerMiddleText.innerText = footerTextArray[0];
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];
    let portfolioTextArray = texts[4].description.split('\r\n');
    console.log(portfolioTextArray);
    portfolioText.innerText = `${portfolioTextArray[0]}\n${portfolioTextArray[1]}${portfolioTextArray[2]}`;
});
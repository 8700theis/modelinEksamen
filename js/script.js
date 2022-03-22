//Importing Javascript Components
import FetchMyData from './components/FetchMyData.js';

const landingHeader = document.querySelector('.landing_textWrapper_heading');
const recentProjectsContainer = document.querySelector('.projects_container');

let portfolioObjectsArray = [{
        title: 'Hotel lounge with Veranda',
        img: '../images/PortfolioIMG_01.jpg',
        likes: 1029
    },
    {
        title: 'Bedroom in a classic style',
        img: '../images/PortfolioIMG_02.jpg',
        likes: 253
    },
    {
        title: 'Web Design Studio Lounge',
        img: '../images/PortfolioIMG_03.jpg',
        likes: 178
    },
    {
        title: 'Living Room Design in Bright Colors',
        img: '../images/PortfolioIMG_04.jpg',
        likes: 2312
    },
]


//Inserting all recent projects
for (let i = 0; i < portfolioImagesArray.length; i++) {

}

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    console.log(texts);
    landingHeader.innerText = texts[0].description;
});

//Fetching all images
const imagesFetch = FetchMyData({ Endpoint: "images" });
imagesFetch.then((images) => {
    console.log(images);
});
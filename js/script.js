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

//Getting elements for later use
const landingHeader = document.querySelector('.landing_textWrapper_heading');
const recentProjectsContainer = document.querySelector('.projects_container');
const accordionPlusImages = document.querySelectorAll('.services_accordianCon_singleCon_topCon_imgCon');
const footerMail = document.querySelector('.footer_middle_mail');
const footerMiddleText = document.querySelector('.footer_middle_text');
const footerBottomText = document.querySelector('.footer_bottom_textCon_text');


let portfolioObjectsArray = [{
        title: 'Hotel lounge with Veranda',
        img: '../images/PortfolioIMG_01.jpg',
        likes: 1029,
        linkPath: '../HTML/projects/projectHotelLounge.html'
    },
    {
        title: 'Bedroom in a classic style',
        img: '../images/PortfolioIMG_02.jpg',
        likes: 253,
        linkPath: '../HTML/projects/projectBedroomClassic.html'
    },
    {
        title: 'Web Design Studio Lounge',
        img: '../images/PortfolioIMG_03.jpg',
        likes: 178,
        linkPath: '../HTML/projects/projectWebStudio.html'
    },
    {
        title: 'Living Room Design in Bright Colors',
        img: '../images/PortfolioIMG_04.jpg',
        likes: 2312,
        linkPath: '../HTML/projects/projectLivingRoom.html'
    },
]

//Inserting all recent projects
portfolioObjectsArray.forEach((project) => {
    let wrapper = document.createElement('DIV');
    wrapper.classList.add('projects_container_wrapper');
    recentProjectsContainer.appendChild(wrapper);

    let imageContainer = document.createElement('A');
    imageContainer.classList.add('projects_container_wrapper_imageCon');
    imageContainer.setAttribute('href', project.linkPath);
    wrapper.appendChild(imageContainer);

    let image = document.createElement('IMG');
    image.setAttribute('src', project.img);
    image.setAttribute('alt', 'Project image');
    imageContainer.appendChild(image);

    let overlayOuter = document.createElement('DIV');
    overlayOuter.classList.add('projects_container_wrapper_imageCon_overlayOuter');
    imageContainer.appendChild(overlayOuter);

    let overlayInner = document.createElement('DIV');
    overlayInner.classList.add('projects_container_wrapper_imageCon_overlayOuter_overlayInner');
    overlayOuter.appendChild(overlayInner);

    let overlayTitle = document.createElement('H3');
    overlayTitle.classList.add('projects_container_wrapper_imageCon_overlayOuter_overlayInner_title');
    overlayTitle.innerText = project.title;
    overlayInner.appendChild(overlayTitle);

    let likesContainer = document.createElement('DIV');
    likesContainer.classList.add('projects_container_wrapper_likesCon');
    wrapper.appendChild(likesContainer);

    let likesText = document.createElement('P');
    likesText.classList.add('projects_container_wrapper_likesCon_text');
    likesText.innerText = 'Likes - ';
    likesContainer.appendChild(likesText);

    let likesTextNumber = document.createElement('SPAN');
    likesTextNumber.innerText = project.likes;
    likesText.appendChild(likesTextNumber);

    let imageLike = document.createElement('IMG');
    imageLike.setAttribute('src', '../images/icons/like.png');
    image.setAttribute('alt', 'Like Icond');
    likesContainer.appendChild(imageLike);

    imageLike.addEventListener('click', (e) => {
        let counter = parseInt(likesTextNumber.innerText);
        counter++;
        likesTextNumber.innerText = counter;
    });
});

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
    landingHeader.innerText = texts[0].description;
    footerMail.innerText = texts[2].description;
    footerMail.setAttribute('href', `mailto:${texts[2].description}`);
    let footerTextArray = texts[3].description.split(/(©)/);
    footerMiddleText.innerText = footerTextArray[0];
    footerBottomText.innerText = footerTextArray[1] + footerTextArray[2];
});

//Fetching all images
const imagesFetch = FetchMyData({ Endpoint: "images" });
imagesFetch.then((images) => {
    console.log(images);
});
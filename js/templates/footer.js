import FetchMyData from '../components/FetchMyData.js';

let footerMail = '';
let footerMiddleText = '';
let footerBottomText = '';

//Fetching all texts
const textsFetch = FetchMyData({ Endpoint: "texts" });
textsFetch.then((texts) => {
    footerMail = texts[2].description;
    let footerTextArray = texts[3].description.split(/(©)/);
    footerMiddleText = footerTextArray[0];
    footerBottomText = footerTextArray[1] + footerTextArray[2];

});


const notOnAboutTemplate =
    `
<div class="col-md-5">
    <a class="footer_middle_mail" href="mailto:${footerMail}">${footerMail}</a>
</div>
<div class="col-md-4">
    <p class="footer_middle_text">${footerMiddleText}</p>
</div>
`;

const onAboutTemplate =
    `
<div class="col-md-9">
    <h3 class="footer_middle_heading"></h3>
    <p class="footer_middle_text"></p>
    <a class="footer_middle_button button" href="portfolio.html">
        <div class="button front"><span>Portfolio</span></div>
        <div class="button back"><span>Portfolio</span></div>
    </a>
</div>
`;

const checkIfOnAboutPage = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var about = url.searchParams.get("about");
    if (about) {
        return onAboutTemplate;
    } else {
        return notOnAboutTemplate;
    }
}


const footerTemplate = `
<div class="footer_top">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="footer_top_heading">Need more details?</h2>
            </div>
        </div>
    </div>
</div>
<div class="footer_middle">
    <div class="container">
        <div class="row">
            ${checkIfOnAboutPage()}
        </div>
    </div>
</div>
<div class="footer_bottom">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="footer_bottom_textCon">
                    <p class="footer_bottom_textCon_text">${footerBottomText}</p>
                </div>
            </div>
            <div class="col-md-5">
                <div class="footer_bottom_textCon">
                    <ul class="footer_bottom_textCon_list">
                        <li class="footer_bottom_textCon_list_item">
                            <a href="#" class="footer_bottom_textCon_list_item_link">
                                Home
                            </a>
                        </li>
                        <li class="footer_bottom_textCon_list_item">
                            <a href="#" class="footer_bottom_textCon_list_item_link">
                                Portfolio
                            </a>
                        </li>
                        <li class="footer_bottom_textCon_list_item">
                            <a href="#" class="footer_bottom_textCon_list_item_link">
                                Services & Prices
                            </a>
                        </li>
                        <li class="footer_bottom_textCon_list_item">
                            <a href="#" class="footer_bottom_textCon_list_item_link">
                                About Me
                            </a>
                        </li>
                        <li class="footer_bottom_textCon_list_item">
                            <a href="#" class="footer_bottom_textCon_list_item_link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div class="footer_bottom_textCon">
                    <a class="footer_bottom_textCon_social" href="#">Instagram</a>
                    <a class="footer_bottom_textCon_social" href="#">Houzz</a>
                </div>
            </div>
        </div>
    </div>
</div>`;

export default footerTemplate;
const iconArray = [];

const checkIfGallery = () => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var gallery = url.searchParams.get("gallery");
    if (gallery) {
        iconArray.push('images/icons/instagram_white.png');
        iconArray.push('images/icons/home_white.png');
    } else {
        iconArray.push('images/icons/instagram.png');
        iconArray.push('images/icons/home.png');
    }
}

checkIfGallery();

const navigationTemplate = () =>
    `<a class="nav_logoContainer" href="/">
            <img src="images/logo/logo-modelin.svg" alt="modelin logo">
        </a>
        <ul class="nav_list">
            <li class="nav_list_item">
                <a href="/" class="nav_list_item_link">Home</a>
            </li>
            <li class="nav_list_item">
                <a href="portfolio.html" class="nav_list_item_link">Portfolio</a>
            </li>
            <li class="nav_list_item">
                <a href="services.html" class="nav_list_item_link">Services & Prices</a>
            </li>
            <li class="nav_list_item">
                <a href="about.html?about=true" class="nav_list_item_link">About Me</a>
            </li>
            <li class="nav_list_item">
                <a href="#" class="nav_list_item_link">Contact</a>
            </li>
            <li class="nav_list_item">
                <a href="#" class="nav_list_item_link">
                    <img src="${iconArray[0]}" alt="Instagram icon" class="nav_list_item_link_img">
                </a href="#" class="nav_list_item_link">
            </li>
            <li class="nav_list_item">
                <a href="#" class="nav_list_item_link">
                    <img src="${iconArray[1]}" alt="Home icon" class="nav_list_item_link_img">
                </a href="#" class="nav_list_item_link">
            </li>
</ul>`;

export default navigationTemplate;
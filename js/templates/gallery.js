export const galleryLanding = (bgImage, heading) =>
    `
<img class="galleryLanding_img" src="${bgImage}" alt="Landing page image">
<div class="galleryLanding_textCon">
    <h1 class="galleryLanding_textCon_heading">${heading}</h1>
    <a class="galleryLanding_textCon_link" href="#gallery">
        <img class="galleryLanding_textCon_link_arrow" src="images/icons/down-arrow.png" alt="Arrow Down image">
    </a>
</div>
`;



export const galleryTop = (year, area, address, heading, text) =>
    `
<div class="gallery_top_factCon">
    <div class="gallery_top_factCon_wrapper">
        <p class="gallery_top_factCon_wrapper_title">Year</p>
        <p class="gallery_top_factCon_wrapper_text">${year}</p>
    </div>
    <div class="gallery_top_factCon_wrapper">
        <p class="gallery_top_factCon_wrapper_title">Area</p>
        <p class="gallery_top_factCon_wrapper_text">${area}<span>3</span></p>
    </div>
    <div class="gallery_top_factCon_wrapper">
        <p class="gallery_top_factCon_wrapper_title">Address</p>
        <p class="gallery_top_factCon_wrapper_text">${address}</p>
    </div>
</div>

<div class="gallery_top_contentCon">
    <h2 class="gallery_top_contentCon_heading">${heading}</h2>
    <p class="gallery_top_contentCon_text">${text}</p>
</div>
`;
const portfolioTemplate = (img, text, linkPath) =>
    `<div class="portfolioCon_singleCon">
        <a href="${linkPath}" class="portfolioCon_singleCon_imgCon">
            <img src="${img}" alt="projects image">
            <div class="portfolioCon_singleCon_imgCon_textCon">
                <h3 class="portfolioCon_singleCon_imgCon_textCon_text">${text}</h3>
            </div>
        </a>
    </div>`;

export default portfolioTemplate;
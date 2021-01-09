var project_button = document.querySelector(".js-project-button");
var company_button = document.querySelector(".js-company-button");
var contact_button = document.querySelector(".js-contact-button");
//var price_button = document.querySelector(".js-price-button");

company_button.addEventListener("click", function() { section_jump(".company-box") }, false);
project_button.addEventListener("click", function() { section_jump(".project-box") }, false);
contact_button.addEventListener("click", function() { section_jump(".contact-box") }, false);
//price_button.addEventListener("click", function() { section_jump(".price-box") }, false);

function section_jump(section) {
	var el = document.querySelector(section);
	el.scrollIntoView();
}

const images = document.querySelectorAll('.project-card, .form-card')
document.querySelectorAll('.form-card');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fade-in-bottom');
    } 
  });
});

images.forEach(image => {
  observer.observe(image);
});
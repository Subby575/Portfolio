/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navToggle.classList.add("show-toggle");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.classList.remove("show-toggle");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("show-toggle");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID- templateID - #form - publickey
  emailjs
    .sendForm(
      "service_wxplg3w",
      "template_ikh9epa",
      "#contact-form",
      "3Np3vR6tlRrOkhf5w"
    )
    .then(() => {
      contactMessage.textContent = "Message sent Successfully ✅";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
      contactForm.reset();
    },()=>{
        contactMessage.textContent='Message not sent ( service error) ❌'
    });
};
contactForm.addEventListener("submit", sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp=()=>{
  const ScrollUp=document.getElementById('scroll-up');
  this.scrollY >=350 ? ScrollUp.classList.add('show-scroll')
                      : ScrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]');
function scrollActive(){
  const scrollY=window.pageYOffset;

  sections.forEach(current=>{
    const sectionHeight=current.offsetHeight;
    const sectionTop=current.offsetTop-50;
    const sectionId=current.getAttribute('id');

    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight)
    {
      document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link');
    }else{
      document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll',scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme';
const iconTheme='ri-sun-line';

// Previously Selected Topic
const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon=localStorage.getItem('selected-icon');

// Current Theme
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line';

if(selectedTheme){
  document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
  themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme);
}

themeButton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme',getCurrentTheme());
  localStorage.setItem('selected-icon',getCurrentIcon());
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})
sr.reveal(`.home_perfil,.about_image,.contact_mail`,{origin:'right'})
sr.reveal(`.home_name,.home_info,
            .about_container .section__title-1, .about_info,.contact_data,.contact_social`,{origin:'left'})
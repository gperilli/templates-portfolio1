
// local
// import { nameSvgPath } from '/assets/js/svg-name.js'
// import { garethSvgPath } from '/assets/js/svg-gareth.js'

// deployed
import { nameSvgPath } from 'https://gperilli.github.io/templates-portfolio1/assets/js/svg-name.js'
import { garethSvgPath } from 'https://gperilli.github.io/templates-portfolio1/assets/js/svg-gareth.js'

window.addEventListener( 'load', function() {
  // Deal with translations
  let params = (new URL(document.location)).searchParams;
  console.log((new URL(document.location).pathname));
  let lang = params.get("lang");
  lang == null ? lang = "eng" : lang;

  // translatable text
  document.querySelectorAll('.translatable').forEach((translatableItem) => {
    translatableItem.innerHTML = translatableItem.dataset[lang];
  })

  // nav links
  let suffixToReplace;
  this.document.querySelectorAll('.nav--link').forEach((navLink) => {
    suffixToReplace = navLink.href.substring(navLink.href.length - 3, navLink.href.length);
    if (navLink.href != "https://nsurname.github.io/nsurnameblog") {
      navLink.href = navLink.href.replace(suffixToReplace, lang)
    }
  })

  // projects link on index page
  let myProjectsLink = document.querySelector('#myProjectsLink')
  if (myProjectsLink != null) {
    suffixToReplace = myProjectsLink.href.substring(myProjectsLink.href.length - 3, myProjectsLink.href.length);
    myProjectsLink.href = myProjectsLink.href.replace(suffixToReplace, lang)
  }

  // language select buttons
  this.document.querySelector(`#LSel${lang}`).className = "langbtns langbtns--hlghtd";

  let silhoutteImageToUse;
  if ((new URL(document.location).pathname) == '/index.html' || (new URL(document.location).pathname) == '/' ) {
    console.log("template");
    silhoutteImageToUse = nameSvgPath;
  } else {
    console.log("mockup");
    silhoutteImageToUse = garethSvgPath;
  }
  // svg loads
  const nameSvgPathElement = this.document.querySelector('#aboutme__svgpath');
  if (nameSvgPathElement) {
    nameSvgPathElement.setAttribute('d', silhoutteImageToUse);
  }
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav--menu');
const navLink = document.querySelectorAll('.nav--link');
var MobNavStat = 0;

hamburger.addEventListener('click', mobileMenu);
navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
  if (MobNavStat == 0) {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.getElementById('body').style.position = 'fixed';
    MobNavStat = 1;
  } else {
    document.getElementById('body').style.position = 'relative';
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    MobNavStat = 0;
  }
}

function closeMenu() {
  document.getElementById('body').style.position = 'relative';
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  MobNavStat = 0;
}

document.getElementsByTagName('BODY')[0].onresize = function() {
  if ((window.innerWidth > 500) && (MobNavStat == 1)) {
    document.getElementById('body').style.position = 'relative';
  }
  if ((window.innerWidth < 500) && (MobNavStat == 1)) {
    document.getElementById('body').style.position = 'fixed';
  }
};


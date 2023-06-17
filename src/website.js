import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact"

function buttonClickHandlerCreator(button, handleClick) { 
    button.addEventListener('click', handleClick)
};

function getButtonClickHandler(buttonName) {
    // Define the click handler for each button
    switch (buttonName) {
      case 'Home':
        return loadHome;
      case 'Menu':
        return loadMenu;
      case 'Contact':
        return loadContact;
      default:
        return null;
    }
  }
  
function createButton(buttonName) {
    const button = document.createElement('button');
    button.classList.add(buttonName.toLowerCase());
    button.classList.add('button');
    button.textContent = buttonName;
    return button;
}
  

function createNav() {
    const nav = document.createElement("nav");
    const buttonNames = ['Home', 'Menu', 'Contact'];

    buttonNames.forEach(buttonName => {
        const button = createButton(buttonName);
        buttonClickHandlerCreator(button, getButtonClickHandler(buttonName));
        nav.appendChild(button);
      });

    return nav
}



function createHeader() {
    const header = document.createElement("header");
    const restoName = document.createElement("h1");
    const nav = createNav()

    header.classList.add("header");
    restoName.classList.add("restaurantname");

    restoName.textContent = "Regent Steakhouse";

    header.appendChild(restoName);
    header.appendChild(nav);

    return header
}

function createFooter() {
    const footer = document.createElement("footer");
    const credits = document.createElement("p");

    footer.classList.add("footer");

    credits.textContent = "Copyright © 2023 thephilosopher13";
    
    footer.appendChild(credits);

    return footer
}

function createMainDiv() {
    const mainContent = document.createElement("main");
    mainContent.classList.add("main");

    return mainContent
}

function createContentDiv() {
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute('id', 'content')
    
    return contentDiv
}


function loadWebsite() {
    const header = createHeader();
    const footer = createFooter();
    const mainContent = createMainDiv();
    const contentDiv = createContentDiv();
    const body = document.querySelector("body");

    contentDiv.appendChild(header);
    contentDiv.appendChild(mainContent);
    contentDiv.appendChild(footer);
    
    body.appendChild(contentDiv);
}

function init() {
    loadWebsite();
    loadHome();
}

export default init

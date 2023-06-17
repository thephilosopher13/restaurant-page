const elementFactory = (() => {
    const headerFactory = document.createElement("header");
    const divCreator = document.createElement("div");
    const paragraphFactory = document.createElement("p");
    const footerFactory = document.createElement("footer");
    const h1Factory = document.createElement("h1");
    const mainContentDivFactory = document.createElement("main");
    const navFactory = document.createElement("nav");
    const buttonFactory = document.createElement("button");


    return {
        headerFactory,
        divCreator,
        paragraphFactory,
        footerFactory,
        h1Factory,
        mainContentDivFactory,
        navFactory,
        buttonFactory
    }
})();

const backgroundCreator = (() => {

    const _buttonClickHandlerCreator = (button, handleClick) => { 
        button.addEventListener('click', handleClick)
    };

    const pageLayoutCreator = () => {
        const header = elementFactory.headerFactory.cloneNode();
        const restoName = elementFactory.h1Factory.cloneNode();
        const footer = elementFactory.footerFactory.cloneNode();
        const mainContent = elementFactory.mainContentDivFactory.cloneNode();
        const nav = elementFactory.navFactory.cloneNode();
        const contentDiv = document.getElementById('content');
        const credits = elementFactory.paragraphFactory.cloneNode();
        const homeButton = elementFactory.buttonFactory.cloneNode();
        const menuButton = elementFactory.buttonFactory.cloneNode();
        const contactButton = elementFactory.buttonFactory.cloneNode();

        header.classList.add("header");
        restoName.classList.add("restaurantname");
        footer.classList.add("footer");
        mainContent.classList.add("main");
        homeButton.classList.add("home");
        homeButton.classList.add("button");
        menuButton.classList.add("menu");
        menuButton.classList.add("button");
        contactButton.classList.add("contact");
        contactButton.classList.add("button");
        

        restoName.textContent = "Regent Steakhouse";
        credits.textContent = "Copyright © 2023 thephilosopher13";
        homeButton.textContent = "Home";
        menuButton.textContent = "Menu";
        contactButton.textContent = "contact"

        _buttonClickHandlerCreator(homeButton, homeTab.homeTabContentGenerator());
        _buttonClickHandlerCreator(menuButton, menuTab.menuTabContentGenerator());
        _buttonClickHandlerCreator()



        footer.appendChild(credits);
        header.appendChild(restoName);
        header.appendChild(nav);
        nav.appendChild(homeButton);
        nav.appendChild(menuButton);
        nav.appendChild(contactButton);
        contentDiv.appendChild(header);
        contentDiv.appendChild(mainContent);
        contentDiv.appendChild(footer);
    }

    return {
        pageLayoutCreator
    }

})();

const homeTab = (() => {

    const homeTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const homeDiv = elementFactory.divCreator.cloneNode();

        mainContent.innerHTML = ''
        homeDiv.classList.add("home")

        mainContent.appendChild(homeDiv)

    }

    return {
        homeTabContentGenerator
    }

})();

const menuTab = (() => {

    const menuTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const menuDiv = elementFactory.divCreator.cloneNode();

        mainContent.innerHTML = ''
        menuDiv.classList.add("menu")

        mainContent.appendChild(menuDiv)
    }

    return {
        menuTabContentGenerator
    }

})();

const contactTab = (() => {

    const menuTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const contactDiv = elementFactory.divCreator.cloneNode();

        mainContent.innerHTML = ''
        contactDiv.classList.add("menu")

        mainContent.appendChild(contactDiv)
    }

    return {
        menuTabContentGenerator
    }

})();
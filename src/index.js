const elementFactory = (() => {
    const headerFactory = document.createElement("header");
    const divCreator = document.createElement("div");
    const paragraphFactory = document.createElement("p");
    const footerFactory = document.createElement("footer");
    const h1Factory = document.createElement("h1");
    const h2Factory = document.createElement("h2");
    const mainContentDivFactory = document.createElement("main");
    const navFactory = document.createElement("nav");
    const buttonFactory = document.createElement("button");
    const unorderedListFactory = document.createElement("ul");
    const listItemFactory = document.createElement("li");


    return {
        headerFactory,
        divCreator,
        paragraphFactory,
        footerFactory,
        h1Factory,
        h2Factory,
        mainContentDivFactory,
        navFactory,
        buttonFactory,
        unorderedListFactory,
        listItemFactory
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
        _buttonClickHandlerCreator(contactButton, contactTab.contactTabContentGenerator());

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

    //have a factory function here that has 2 properties which are "day" and "time of opening"
    //have a list creating function here that converts the above objects to an item in a ul

    const homeTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const homeDiv = elementFactory.divCreator.cloneNode();
        const welcomeDiv = elementFactory.divCreator.cloneNode();
        const openingHoursDiv = elementFactory.divCreator.cloneNode();
        const welcomeh2 = elementFactory.h2Factory.cloneNode()

        mainContent.innerHTML = ''
        homeDiv.classList.add("home")
        welcomeDiv.classList.add("welcome")
        openingHoursDiv.classList.add("openinghours")


        //create first div here called welcomeDiv
        //put h2 here that has textContent "welcome to Regent Steakhouse"
        //put p here with description and history of restaurant
        //put some picture of a steak here

        //have a second div called 


        mainContent.appendChild(homeDiv);
        homeDiv.appendChild(welcomeDiv);
        openingHoursDiv.appendChild(openingHoursDiv);



    }

    return {
        homeTabContentGenerator
    }

})();

const menuTab = (() => {

    // have an factory function here that creates menu items with properties img, item name, description and price
    // have another function "menuItemDivFactory" here that creates a div with class "item$", "gets" object by index number and returns a div with said items turned into a card with picture, name and description

    const menuTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const menuDiv = elementFactory.divCreator.cloneNode();

        mainContent.innerHTML = ''
        menuDiv.classList.add("menu")

        //have a loop here that goes for 6 iteriations of "menuItemDivFactory then appends them to menuDiv

        mainContent.appendChild(menuDiv)
    }

    return {
        menuTabContentGenerator
    }

})();

const contactTab = (() => {

    //have a factory function there that has property "method of contact (e.g. email, phone, etc)" and contact detail


    const contactTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const contactDiv = elementFactory.divCreator.cloneNode();

        mainContent.innerHTML = ''
        contactDiv.classList.add("contact")

        // 

        mainContent.appendChild(contactDiv)
    }

    return {
        contactTabContentGenerator
    }

})();
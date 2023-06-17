import './style.css';

document.addEventListener('DOMContentLoaded', initLoader.init)

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

    const imageFactory = (src, alt) => {
        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        return image;
    }


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
        listItemFactory,
        imageFactory
    }
})();

const initLoader = (() => {

    const _buttonClickHandlerCreator = (button, handleClick) => { 
        button.addEventListener('click', handleClick)
    };

    const _pageLayoutCreator = () => {
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

    const init =  () => {
        _pageLayoutCreator();
    }

    return {
        init
    }

})();

const homeTab = (() => {

    const _openingHoursFactory = (day, hours) => {
        return { day, hours }
    };

    const _openingHoursObjectArrayGenerator = () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const openingHours = ['11am-8pm', '11am-8pm', '11am-8pm', '11am-8pm', '10am-11pm', '10am-11pm', '11am-9pm'];
        const openingHoursList = []


        for (let i = 0; i < daysOfWeek.length; i++) {
            const day = daysOfWeek[i];
            const hours = openingHours[i];

            const openingHoursItem = _openingHoursFactory(day, hours);
            openingHoursList.push(openingHoursItem);
        }

        return openingHoursList
    };

    const _openingHoursListGenerator = (array) => {
        const openingHoursListElement = elementFactory.unorderedListFactory.cloneNode();

        for (let i = 0; i < array.length; i++) {
            const listItem = elementFactory.listItemFactory.cloneNode();
            const arrayObject = array[i]

            listItem.textContent = `${arrayObject.day}: ${arrayObject.hours}`
            openingHoursListElement.appendChild(item);
        }

        return openingHoursListElement
    }

    

    const homeTabContentGenerator = () => {
        const mainContent = document.querySelector("main")
        const homeDiv = elementFactory.divCreator.cloneNode();
        const welcomeDiv = elementFactory.divCreator.cloneNode();
        const openingHoursDiv = elementFactory.divCreator.cloneNode();
        const welcomeh2 = elementFactory.h2Factory.cloneNode();
        const openingHoursh2 = elementFactory.h2Factory.cloneNode();
        const description = elementFactory.paragraphFactory.cloneNode();
        const openingHoursList = _openingHoursListGenerator(_openingHoursObjectArrayGenerator)
        const welcomeImage = imageFactory('images/welcomesteak.jpg', 'Welcome Steak')

        mainContent.innerHTML = ''

        homeDiv.classList.add("home");
        welcomeDiv.classList.add("welcome");
        welcomeh2.classlist.add("welcomeheader");
        description.classList.add("description");
        welcomeImage.classList.add("welcomeimage");
        openingHoursDiv.classList.add("openinghours");
        openingHoursh2.classList.add("openinghoursh2");

        welcomeh2.textContent = "Welcome to Regent Steakhouse!"
        description.textContent = "Regent Steakhouse is a top of the line steakhouse where we prepare steaks with only the finest cuts and the freshest ingredients. Aside from the food, our steakhouse is a great place to have some celebrations with your loved ones or have a business meeting."

        mainContent.appendChild(homeDiv);
        welcomeDiv.appendChild(welcomeh2);
        welcomeDiv.appendChild(description);
        welcomeDiv.appendChild(welcomeImage);
        homeDiv.appendChild(welcomeDiv);
        homeDiv.appendChild(openingHoursDiv);
        openingHoursDiv.appendChild(openingHoursList)        
    }

    return {
        homeTabContentGenerator
    }

})();

const menuTab = (() => {

    const _menuItemFactory = (img, itemname, description, price) => {
        return { img, itemname, description, price }
    }

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
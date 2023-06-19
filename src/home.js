import makeButtonActive from "./navfunctions";

function openingHoursFactory(day, hours) {
    return { day, hours }
};

function openingHoursObjectArrayGenerator() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const openingHours = ['11am-8pm', '11am-8pm', '11am-8pm', '11am-8pm', '10am-11pm', '10am-11pm', '11am-9pm'];
    const openingHoursList = []


    for (let i = 0; i < daysOfWeek.length; i++) {
        const day = daysOfWeek[i];
        const hours = openingHours[i];

        const openingHoursItem = openingHoursFactory(day, hours);
        openingHoursList.push(openingHoursItem);
    }

    return openingHoursList
};

function _openingHoursListGenerator(array) {
    const openingHoursListElement = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement("li");
        const arrayObject = array[i]

        listItem.textContent = `${arrayObject.day}: ${arrayObject.hours}`
        openingHoursListElement.appendChild(listItem);
    }

    return openingHoursListElement
}

function imageFactory(src, alt) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    return image;
}

function createWelcomeDiv() {
    const welcomeDiv = document.createElement("div");
    const welcomeh2 = document.createElement("h2");
    const description = document.createElement("p");
    const welcomeImage = imageFactory('../src/images/welcomesteak.jpg', 'Welcome Steak');

    welcomeDiv.classList.add("welcome");
    welcomeh2.classList.add("welcomeheader");
    welcomeImage.classList.add("welcomeimage");
    description.classList.add("description");

    welcomeh2.textContent = "Welcome to Regent Steakhouse!"
    description.textContent = "Regent Steakhouse is a top of the line steakhouse where we prepare steaks with only the finest cuts and the freshest ingredients. Aside from the food, our steakhouse is a great place to have some celebrations with your loved ones or have a business meeting. A unique selling point compared to other steakhouses is that we don't actually exist!"

    welcomeDiv.appendChild(welcomeh2);
    welcomeDiv.appendChild(description);
    welcomeDiv.appendChild(welcomeImage);

    return welcomeDiv
}

function createOpeningHoursDiv() {
    const openingHoursDiv = document.createElement("div");
    const openingHoursh2 = document.createElement("h2");
    const openingHoursList = _openingHoursListGenerator(openingHoursObjectArrayGenerator());

    openingHoursDiv.classList.add("openinghours");
    openingHoursh2.classList.add("openinghoursh2");

    openingHoursh2.textContent = 'Opening Hours'

    openingHoursDiv.appendChild(openingHoursh2)
    openingHoursDiv.appendChild(openingHoursList)

    return openingHoursDiv
}

function createHomeDiv() {
    const homeDiv = document.createElement("div");
    const welcomeDiv = createWelcomeDiv();
    const openingHoursDiv = createOpeningHoursDiv();

    homeDiv.classList.add("home");

    homeDiv.appendChild(welcomeDiv);
    homeDiv.appendChild(openingHoursDiv); 

    return homeDiv
}

function loadHome() {
    const mainContent = document.querySelector(".main")
    const homeDiv = createHomeDiv();
    const homeButton = document.querySelector(".home");
    
    makeButtonActive(homeButton);

    mainContent.innerHTML = ''
    
    mainContent.appendChild(homeDiv);
}

export default loadHome;


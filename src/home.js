

function _openingHoursFactory(day, hours) {
    return { day, hours }
};

function _openingHoursObjectArrayGenerator() {
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

function _openingHoursListGenerator(array) {
    const openingHoursListElement = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement("li");
        const arrayObject = array[i]

        listItem.textContent = `${arrayObject.day}: ${arrayObject.hours}`
        openingHoursListElement.appendChild(item);
    }

    return openingHoursListElement
}

function imageFactory(src, alt) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    return image;
}

    

function loadHome() {
    const mainContent = document.querySelector("main")
    const homeDiv = document.createElement("div");
    const welcomeDiv = document.createElement("div");
    const openingHoursDiv = document.createElement("div");
    const welcomeh2 = document.createElement("h2");
    const openingHoursh2 = document.createElement("h2");
    const description = document.createElement("p");
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

export default loadHome;


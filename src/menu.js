
const menuItemFactory = (img, itemname, description, price) => {
    return { img, itemname, description, price }
}

    // have another function "menuItemDivFactory" here that creates a div with class "item$", "gets" object by index number and returns a div with said items turned into a card with picture, name and description

function loadMenu() {
    const mainContent = document.querySelector("main")
    const menuDiv = elementFactory.divCreator.cloneNode();

    mainContent.innerHTML = ''
    menuDiv.classList.add("menu")

    //have a loop here that goes for 6 iteriations of "menuItemDivFactory then appends them to menuDiv

    mainContent.appendChild(menuDiv)
}

export default loadMenu
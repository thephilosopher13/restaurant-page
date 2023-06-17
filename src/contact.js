

    //have a factory function there that has property "method of contact (e.g. email, phone, etc)" and contact detail


function loadContact() {
    const mainContent = document.querySelector("main")
    const contactDiv = document.createElement("div");

    mainContent.innerHTML = ''
    contactDiv.classList.add("contact")

    // 

    mainContent.appendChild(contactDiv)
}

export default loadContact;
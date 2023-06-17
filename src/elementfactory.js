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

function imageFactory(src, alt) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    return image;
}



import makeButtonActive from "./navfunctions";

const menuItemFactory = (img, altdescription, itemname, price) => {
    return { img, altdescription, itemname, price }
}

function menuItemArrayGenerator() {
    const menuItemArray = []
    const altDescriptionArray = ["ribeye", "filetmignon", "beeftenderloin", "tbonesteak", "porterhouse", "primerib"]
    const itemNameArray = ["Ribeye", "Filet Mignon", "Beef Tenderloin", "T-Bone Steak", "Porterhouse", "Prime Rib"]
    const priceArray = ["Php 5000", "Php 3820", "Php 2200", "Php 2100", "Php 2350", "Php 1900"]

    for (let i = 0; i < altDescriptionArray.length; i++) {
        const menuItem = menuItemFactory(
          `../src/images/${altDescriptionArray[i]}.jpg`,
          altDescriptionArray[i],
          itemNameArray[i],
          priceArray[i]
        );
        menuItemArray.push(menuItem);
      }

      return menuItemArray
}

function imageFactory(src, alt) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    return image;
}

function generateMenuItemDiv(menuItem) {
    const image = imageFactory(menuItem.img, menuItem.altdescription)
    image.classList.add("menuimage")
  
    const itemName = document.createElement("p");
    itemName.classList.add("itemName");
    itemName.textContent = menuItem.itemname;
  
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = menuItem.price;
  
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menuitem");
    menuItemDiv.appendChild(image);
    menuItemDiv.appendChild(itemName);
    menuItemDiv.appendChild(price);
  
    return menuItemDiv;
  }

function generateMenuDiv(menuItemArray) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menugrid");

  for (let i = 0; i < menuItemArray.length; i++) {
    const menuItem = menuItemArray[i];
    const menuItemDiv = generateMenuItemDiv(menuItem);
    menuDiv.appendChild(menuItemDiv);
  }

  return menuDiv;
}

function loadMenu() {
    const mainContent = document.querySelector(".main");
    const menuItemArray = menuItemArrayGenerator();
    const menuDiv = generateMenuDiv(menuItemArray);
    const menuButton = document.querySelector(".menu");
    
    makeButtonActive(Button);

    mainContent.innerHTML = ''
    generateMenuDiv(menuItemArray);
    
    mainContent.appendChild(menuDiv)
}

export default loadMenu
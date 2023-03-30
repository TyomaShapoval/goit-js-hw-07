import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery")

const imagesLi = galleryItems.map(({preview, original, description}) => {
   const list = document.createElement("li");
   list.classList.add("gallery__item");
   const refer = document.createElement("a");
   refer.classList.add("gallery__link");
   list.append(refer);
   const image = document.createElement("img");
   image.classList.add("gallery__image")
   image.setAttribute("src", preview)
   image.setAttribute("alt", description)
   image.onclick

   image.onclick = (() => {
   const modal = basicLightbox.create(`
		<img width="1400" height="900" src="${original}">
	`).show();
   
})
   

   refer.append(image)
   
   return list
})
galleryUl.append(...imagesLi)


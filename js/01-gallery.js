import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryUl = document.querySelector(".gallery")

const imagesLi = galleryItems.map(({preview, original, description}) => {
   const list = document.createElement("li");
   list.classList.add("gallery__item");
   const refer = document.createElement("a");
   refer.classList.add("gallery__link");
   refer.href = original;
   refer.addEventListener(`click`, event => event.preventDefault())
   list.append(refer);
   const image = document.createElement("img");
   image.classList.add("gallery__image")
   image.setAttribute("src", preview)
   image.setAttribute("alt", description)
   image.setAttribute("data-source", original)

   image.onclick = (() => {
   const modal = basicLightbox.create(`
		<img width="1400" height="900" src="${original}">
	`);
   modal.show()
   const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        modal.close();
        galleryUl.removeEventListener('keydown', handleKeyPress);
      }
    };
  
    galleryUl.addEventListener('keydown', handleKeyPress);
   
})
   

   refer.append(image)
   
   return list
})
galleryUl.append(...imagesLi)


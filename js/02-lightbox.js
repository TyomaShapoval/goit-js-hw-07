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
   image.classList.add("gallery__image");
   image.classList.add("lightbox");
   image.setAttribute("src", preview)
   image.setAttribute("alt", description)

   refer.append(image)
   
   return list
})
galleryUl.append(...imagesLi);
const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: "alt",
    captionDelay: 250,
});

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации

console.log(galleryItems);
console.dir(SimpleLightbox);

const ulEl = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems)
ulEl.insertAdjacentHTML('beforeend', imageMarkup)

function createImageMarkup(images){
    return images.map(({preview,original,description})=>{
        return ` 
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}"
                alt="${description}" 
                />
            </a>
        </li>`
    }).join("");
}

let gallery = new SimpleLightbox('.gallery .gallery__link',{captionsData: "alt", captionDelay: 250});

gallery.on('show.simplelightbox', function () {});
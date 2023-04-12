import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkup(array) {
    const markup = array
        .map(
            ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`
        )
        .join("");

    return markup;
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

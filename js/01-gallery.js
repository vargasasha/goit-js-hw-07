import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkup(array) {
    const markup = array
        .map(
            ({
                preview,
                original,
                description,
            }) => `<li class="gallery__item"><a class="gallery__link" href=${original}><img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
        )
        .join("");

    return markup;
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

gallery.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();

    if (event.target.classList.value !== "gallery__image") {
        return;
    }

    const { source } = event.target.dataset;

    const instance = basicLightbox.create(`
    <img src=${source} width="800" height="600">`);

    instance.show();
}

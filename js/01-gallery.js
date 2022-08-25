import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImg = document.querySelector('.gallery');
const cardImg = createGallery(galleryItems);

galleryImg.insertAdjacentHTML('beforeend', cardImg);

galleryImg.addEventListener('click', onCardImgClick);

console.log(createGallery(galleryItems));

function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
                <div class="gallery__item">
                    <a class="gallery__link" href="large-image.jpg">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>
        `
    })
    .join('');
}

function onCardImgClick(event){
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
      }
      console.log(event.target.dataset);
};
console.log(galleryItems);



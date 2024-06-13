const galleryRef = document.querySelector(".gallery");

const imagesMarkup = images.reduce(
  (markup, { url, alt }) =>
    markup +
    `<li><img src="${url}" alt="${alt}" width="400"></li>`,
  ""
);

galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);

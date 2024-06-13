const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRefs = categoriesListRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemsRefs.length}`);

categoriesItemsRefs.forEach((categoriesItemRef) => {
  const categoryTitleRef = categoriesItemRef.querySelector("h2");
  const categoryItemsRefs = categoriesItemRef.querySelectorAll("li");

  console.log(`Category: ${categoryTitleRef.textContent}`);
  console.log(`Elements: ${categoryItemsRefs.length}`);
});

const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRefs = categoriesListRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemsRefs.length}`);

categoriesItemsRefs.forEach((categoriesItemRef) => {
  const categoryTitleRef = categoriesItemRef.querySelector("h2");
  const categoryItemsRefs = categoriesItemRef.querySelectorAll("li");

  console.log(
    `Category: ${categoryTitleRef.textContent}, Number of items: ${categoryItemsRefs.length}`
  );
});


// Output: 


Number of categories: 3
Category: Animals, Number of items: 4
Category: Products, Number of items: 3
Category: Technologies, Number of items: 5
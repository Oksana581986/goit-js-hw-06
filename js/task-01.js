const categories = document.querySelector("#categories");
const categoryItems = categories.children;
console.log(`Number of categories: ${categoryItems.length}`);

  [...categoryItems].forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
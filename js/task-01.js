const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const subCategories = item.querySelectorAll("ul li");
  console.log(`Category:${categoryTitle.textContent}`);
  console.log(`Elements:${subCategories.length}`);
});
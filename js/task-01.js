const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${title}\nElements: ${elements}`);
});

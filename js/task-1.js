const categories = document.querySelector("#categories");
const items = categories.querySelectorAll('.item');
console.log("Number og categories:", items.length)

items.forEach(item=> {
const Categories = item.querySelector('h2');
console.log("Category:", Categories.textContent)
const Elements = item.querySelectorAll('ul li');
console.log("Elements:", Elements.length)
})
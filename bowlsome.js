const reviews = [
    {
        img:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text:
          "Most authentic Mangalore curry I've tasted outside of Mangalore.",
      },
      
      {
        img:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text:
          "Wow taste, I must recommend this place to all. Nice packed food, hygiene maintained.",
      }

]

const img = document.getElementById('profilePic')
const info = document.getElementById('cardText')
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
currentItem++;
if (currentItem > reviews.length - 1) {
    currentItem = 0;
}
showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
currentItem--;
if (currentItem < 0) {
    currentItem = reviews.length - 1;
}
showPerson(currentItem);
});
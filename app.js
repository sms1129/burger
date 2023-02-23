let wrapper = document.querySelector(".wrapper");
let images = [
  "./burger-layers/bottom-bread.png",
  "./burger-layers/bottom-bread.png",
];

const cheese = document.getElementById("cheese");
const meat = document.getElementById("meat");
const onion = document.getElementById("onion");
const salad = document.getElementById("salad");
const tomato = document.getElementById("tomato");
const pickle = document.getElementById("pickle");
const bread = document.getElementById("bread");
const total = document.getElementById("total");
const clear = document.getElementById("clear");
const buy = document.getElementById("buy");

let products = [];

const mainSide = document.querySelector(".burger");

function render() {
  mainSide.innerHTML = ''
  products.forEach((el, index) => {
    const mainItem = document.createElement("div");
    mainItem.setAttribute("class", "main-item");
    // mainItem.setAttribute("style", "z-index: " + index + "top: " + index * 10);
    mainItem.innerHTML = `
      <img src=${el?.img}  width="150"/>
    `;
    mainSide.appendChild(mainItem);
  });
}

render();


clear.addEventListener("click", (e) => {
  total.textContent = 2;
  products = [];
  render()
});


cheese.addEventListener("click", (e) => {
  total.textContent = +total.textContent + 2;
  products = [...products, {
    img: "../images/cheese.png",
  }];
  render()
});


meat.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 5;
  products = [
    {
      img: "../images/meat.png",
    },
    ...products,
  ];
  render();
});


onion.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 1;
  let img1 = document.createElement("div");
  img1.classList.add("img1");
  products = [
    {
      img: "../images/onion.png",
    },
    ...products,
  ];
  render();
});


salad.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 1;
  products = [
    {
      img: "../images/salad.png",
    },
    ...products,
  ];
  render();
});


tomato.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 2;
  products = [
    {
      img: "../images/tomato.png",
    },
    ...products,
  ];
  render();
});


pickle.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 3;
  products = [
    {
      img: "../images/pickle.png",
    },
    ...products,
  ];
  render();
});


bread.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 2;
  img = document.createElement("img");

  img.setAttribute("src", "");

  document.getElementById("surprise").appendChild(img);
});


buy.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `Xaridingiz uchun raxmat.Buyutrtmangiz qabul qilindi.Sizni navbatingiz ${Math.floor(
      Math.random() * (35 - 10 + 1) + 10
    )}`
  );
});







